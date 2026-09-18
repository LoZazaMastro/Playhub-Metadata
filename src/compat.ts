/** Small, shape-based Steam adapters. No webpack IDs or minified export names. */
export type Unpatch = () => void;

export const getSteamGlobal = (name: string): any => {
  try {
    const root = globalThis as any;
    return root[name] ?? root.window?.[name];
  } catch (_error) {
    return undefined;
  }
};

export const moduleEntries = (module: any): [string, any][] => {
  if (!module || (typeof module !== "object" && typeof module !== "function")) return [];
  const entries: [string, any][] = [];
  for (const key of Object.keys(module)) {
    try { entries.push([key, module[key]]); } catch (_error) { /* Lazy export not ready. */ }
  }
  return entries;
};

export const functionSource = (value: any): string => {
  try {
    const fn = typeof value === "function" ? value : value?.render ?? value?.type;
    return typeof fn === "function" ? Function.prototype.toString.call(fn) : "";
  } catch (_error) {
    return "";
  }
};

/** Read globals at use time: Steam may populate them after the plugin is imported. */
export const getOverviewPrototype = (): any => {
  const store = getSteamGlobal("appStore");
  let overview: any;
  try {
    overview = store?.allApps?.find?.((app: any) => typeof app?.BIsShortcut === "function");
    if (!overview) {
      for (const candidate of store?.m_mapAppOverview?.values?.() ?? []) {
        if (typeof candidate?.BIsShortcut === "function") { overview = candidate; break; }
      }
    }
    const proto = overview && Object.getPrototypeOf(overview);
    return proto && proto !== Object.prototype ? proto : undefined;
  } catch (_error) {
    return undefined;
  }
};

/** Keep another plugin's later wrapper intact when this plugin is unloaded. */
export const patchMethod = (
  target: any,
  methodName: string,
  replacement: (thisValue: any, original: (...args: any[]) => any, args: any[]) => any
): Unpatch => {
  if (!target || typeof target[methodName] !== "function") return () => undefined;
  const descriptor = Object.getOwnPropertyDescriptor(target, methodName);
  const original = target[methodName];
  let active = true;
  const patched = function (this: any, ...args: any[]) {
    return active ? replacement(this, original.bind(this), args) : original.apply(this, args);
  };
  try {
    if (descriptor && !descriptor.configurable) {
      if (!descriptor.writable) return () => undefined;
      target[methodName] = patched;
    } else {
      Object.defineProperty(target, methodName, {
        configurable: true, enumerable: descriptor?.enumerable ?? false,
        writable: true, value: patched,
      });
    }
  } catch (error) {
    console.warn(`[Playhub Metadata] cannot patch ${methodName}`, error);
    return () => undefined;
  }
  return () => {
    active = false;
    if (target[methodName] !== patched) return;
    if (descriptor) Object.defineProperty(target, methodName, descriptor);
    else delete target[methodName];
  };
};
