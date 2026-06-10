import {
  afterPatch,
  fakeRenderComponent,
  findInReactTree,
  findModuleByExport,
  findInTree,
  MenuItem,
  Navigation,
  Patch,
  Export,
} from "@decky/ui";
import { FC } from "react";
import { getOverview, isNonSteamApp } from "./steam";
import { t } from "./i18n";

const MENU_KEY = "playhub-metadata-edit";

const isOpeningAppContextMenu = (items: any[]) => {
  if (!items?.length) return false;
  return !!findInReactTree(
    items,
    (x) =>
      x?.props?.onSelected &&
      x.props.onSelected.toString().includes("launchSource")
  );
};

const handleItemDupes = (items: any[]) => {
  const existing = items.findIndex((x: any) => x?.key === MENU_KEY);
  if (existing !== -1) items.splice(existing, 1);
};

const findBestAppId = (items: any[], fallbackAppId: number) => {
  let appid = fallbackAppId;
  const parentOverview = items.find(
    (x: any) =>
      x?._owner?.pendingProps?.overview?.appid &&
      x._owner.pendingProps.overview.appid !== fallbackAppId
  );
  if (parentOverview) {
    appid = parentOverview._owner.pendingProps.overview.appid;
  }
  if (appid === fallbackAppId) {
    const foundApp = findInTree(items, (x) => x?.app?.appid, {
      walkable: ["props", "children"],
    });
    if (foundApp) appid = foundApp.app.appid;
  }
  return Number(appid);
};

const spliceMetadataItem = (children: any[], appid: number) => {
  const overview = getOverview(appid);
  if (!isNonSteamApp(overview)) return;
  const propertiesMenuItemIdx = children.findIndex((item) =>
    findInReactTree(
      item,
      (x) => x?.onSelected && x.onSelected.toString().includes("AppProperties")
    )
  );
  const insertAt = propertiesMenuItemIdx >= 0 ? propertiesMenuItemIdx : children.length;
  children.splice(
    insertAt,
    0,
    <MenuItem
      key={MENU_KEY}
      onSelected={() => Navigation.Navigate(`/playhub-metadata/${appid}`)}
    >
      {t("editMetadata")}
    </MenuItem>
  );
};

const patchMenuItems = (menuItems: any[], appid: number) => {
  const updatedAppId = findBestAppId(menuItems, appid);
  spliceMetadataItem(menuItems, updatedAppId);
};

const contextMenuPatch = (LibraryContextMenu: any) => {
  const patches: {
    outer?: Patch;
    inner?: Patch;
    unpatch: () => void;
  } = { unpatch: () => undefined };

  patches.outer = afterPatch(
    LibraryContextMenu.prototype,
    "render",
    (_args: any[], component: any) => {
      let appid = 0;
      if (component._owner?.pendingProps?.overview?.appid) {
        appid = component._owner.pendingProps.overview.appid;
      } else {
        const foundApp = findInTree(
          component.props.children,
          (x) => x?.app?.appid,
          { walkable: ["props", "children"] }
        );
        if (foundApp) appid = foundApp.app.appid;
      }

      if (!patches.inner) {
        patches.inner = afterPatch(component, "type", (_: any[], ret: any) => {
          afterPatch(ret.type.prototype, "render", (_args2: any[], ret2: any) => {
            const menuItems = ret2?.props?.children?.[0];
            if (!isOpeningAppContextMenu(menuItems)) return ret2;
            try {
              handleItemDupes(menuItems);
              patchMenuItems(menuItems, appid);
            } catch (_error) {
              return ret2;
            }
            return ret2;
          });

          afterPatch(
            ret.type.prototype,
            "shouldComponentUpdate",
            ([nextProps]: any[], shouldUpdate: boolean) => {
              try {
                handleItemDupes(nextProps.children);
                if (shouldUpdate === true) {
                  patchMenuItems(nextProps.children, appid);
                }
              } catch (_error) {
                return shouldUpdate;
              }
              return shouldUpdate;
            }
          );
          return ret;
        });
      } else if (Array.isArray(component.props.children)) {
        handleItemDupes(component.props.children);
        spliceMetadataItem(component.props.children, appid);
      }
      return component;
    }
  );

  patches.unpatch = () => {
    patches.outer?.unpatch();
    patches.inner?.unpatch();
  };
  return patches;
};

export const LibraryContextMenu = fakeRenderComponent(
  Object.values(
    findModuleByExport((e: Export) =>
      e?.toString?.().includes("().LibraryContextMenu")
    )
  ).find((sibling) => sibling?.toString?.().includes("navigator:")) as FC
).type;

export default contextMenuPatch;
