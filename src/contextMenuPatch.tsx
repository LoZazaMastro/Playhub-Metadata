/*
 * Playhub Metadata - library context-menu integration.
 *
 * Adds a single "Playhub metadata..." entry to the per-game context menu in
 * the Steam library, for non-Steam shortcuts.
 *
 * The technique used here to resolve and patch Steam's internal
 * LibraryContextMenu class is derived from the decky-steamgriddb plugin by the
 * SteamGridDB project (https://github.com/SteamGridDB/decky-steamgriddb),
 * which is licensed under the GNU General Public License v3. Because this file
 * is a derivative of that work, Playhub Metadata is distributed under the
 * GPL-3.0-or-later license. Full credit to the original authors.
 *
 * Copyright (C) 2026 ZazaMastro
 * Portions copyright (C) the SteamGridDB / decky-steamgriddb contributors.
 *
 * This program is free software: you can redistribute it and/or modify it
 * under the terms of the GNU General Public License as published by the Free
 * Software Foundation, either version 3 of the License, or (at your option)
 * any later version. This program is distributed WITHOUT ANY WARRANTY; see the
 * GNU General Public License for more details.
 */

import React from "react";
import { fakeRenderComponent, findInReactTree, findModuleByExport, MenuItem, Navigation } from "@decky/ui";
import { functionSource, moduleEntries, patchMethod } from "./compat";
import { getOverview, isNonSteamApp } from "./steam";
import { t } from "./i18n";

const ENTRY_KEY = "playhub-metadata-edit";

const isLibraryMenuClass = (candidate: any): boolean =>
  typeof candidate?.prototype?.render === "function" &&
  (typeof candidate.prototype.GetTargetApps === "function" ||
   typeof candidate.prototype.BuildManageSubmenu === "function");

/** Resolve lazily: a missing/late Steam chunk must never abort module evaluation. */
export const resolveLibraryContextMenu = (): any => {
  try {
    const owner = findModuleByExport((member: any) =>
      /\.LibraryContextMenu\b/.test(functionSource(member)) || isLibraryMenuClass(member)
    );
    const entries = moduleEntries(owner);
    for (const [, member] of entries) {
      if (isLibraryMenuClass(member)) return member;
    }
    for (const [, member] of entries) {
      if (!/navigator\s*:/.test(functionSource(member))) continue;
      try {
        // Steam may export a function, React.forwardRef, or React.memo wrapper.
        const render = typeof member === "function" ? member : member?.render ?? member?.type;
        if (typeof render !== "function") continue;
        const element = fakeRenderComponent(render);
        let type = element?.type;
        for (let depth = 0; type && depth < 4; depth += 1) {
          if (isLibraryMenuClass(type)) return type;
          type = type.type;
        }
      } catch (_error) { /* Try the next matching export, not an unrelated component. */ }
    }
  } catch (_error) { /* The chunk or fake-render context may not be ready yet. */ }
  return undefined;
};

/** Clone only the library menu output, never the shared Steam menu component. */
export const injectMetadataMenuItem = (menu: any, appId: number): any => {
  if (!React.isValidElement(menu) || !appId || !isNonSteamApp(getOverview(appId))) return menu;
  const children: any = (menu.props as any)?.children;
  const items: any[] = (Array.isArray(children) ? children : [children])
    .filter((node: any) => node?.key !== ENTRY_KEY);
  const propertiesIndex = items.findIndex((node: any) =>
    !!findInReactTree(node, (item: any) =>
      functionSource(item?.props?.onSelected ?? item?.onSelected).includes("AppProperties")
    )
  );
  items.splice(propertiesIndex >= 0 ? propertiesIndex : items.length, 0,
    <MenuItem key={ENTRY_KEY} onSelected={() => Navigation.Navigate(`/playhub-metadata/${appId}`)}>
      {t("editMetadata")}
    </MenuItem>
  );
  return React.cloneElement(menu as React.ReactElement<any>, { children: items });
};

const contextMenuPatch = (initialClass?: any) => {
  let disposed = false;
  let unpatch: (() => void) | undefined;
  let timer: number | undefined;
  let attempts = 0;
  const install = () => {
    if (disposed || unpatch) return;
    const MenuClass = initialClass ?? resolveLibraryContextMenu();
    if (isLibraryMenuClass(MenuClass)) {
      unpatch = patchMethod(MenuClass.prototype, "render", (instance, original, args) => {
        const menu = original(...args);
        try {
          const targets = instance?.GetTargetApps?.();
          if (Array.isArray(targets) && targets.length !== 1) return menu;
          // Resolve for every render; Steam reuses instances when changing games.
          const appId = Number(targets?.[0]?.appid ?? instance?.props?.overview?.appid ?? 0);
          return injectMetadataMenuItem(menu, appId);
        } catch (error) {
          console.warn("[Playhub Metadata] library menu injection skipped", error);
          return menu;
        }
      });
      return;
    }
    attempts += 1;
    if (attempts === 20) {
      console.warn("[Playhub Metadata] waiting for Steam library context menu; plugin settings remain available");
    }
    timer = window.setTimeout(install, attempts < 20 ? 500 : 5000);
  };
  install();
  return { unpatch: () => {
    disposed = true;
    if (timer !== undefined) window.clearTimeout(timer);
    unpatch?.();
    unpatch = undefined;
  } };
};

export default contextMenuPatch;
