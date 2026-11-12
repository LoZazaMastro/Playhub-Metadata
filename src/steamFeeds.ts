/** Playhub Metadata — GPL-3.0-or-later. See LICENSE and NOTICE. */
import { getSteamGlobal, moduleEntries, patchMethod, Unpatch } from "./compat";

// Steam's wrapper unwraps AxiosResponse.data before library feed consumers read
// it. Patching Axios itself with a direct {hub} body breaks AxiosWrapper.
const isSteamBodyClient = (value: any): boolean => {
  try {
    return typeof value?.get === "function" && typeof value?.post === "function" &&
      typeof value?.AxiosWrapper === "function";
  } catch (_error) {
    return false;
  }
};

export const installSteamLibraryFeedPatches = (
  findModuleChild: (predicate: (module: any) => any) => any,
  unpatchers: Unpatch[],
  payloadForUrl: (url: string) => Promise<any> | null
): boolean => {
  const globalClient = getSteamGlobal("steamAjaxRequest");
  const client = isSteamBodyClient(globalClient) ? globalClient : findModuleChild((module: any) => {
    if (isSteamBodyClient(module)) return module;
    return moduleEntries(module).map(([, value]) => value).find(isSteamBodyClient);
  });
  // An unknown transport is safer left untouched than treating Axios envelopes
  // as feed bodies. Native Steam requests continue through their own methods.
  if (!client) return false;
  for (const method of ["get", "post"]) {
    unpatchers.push(patchMethod(client, method, (_receiver, original, args) => {
      let pending: Promise<any> | null;
      try { pending = payloadForUrl(String(args[0] || "")); }
      catch (_error) { return original(...args); }
      if (!pending) return original(...args);
      // Handle only provider failure here: an original Steam request rejection
      // must propagate unchanged, without issuing the native request twice.
      return Promise.resolve(pending).then(
        (payload) => payload || original(...args),
        () => original(...args)
      );
    }));
  }
  return true;
};
