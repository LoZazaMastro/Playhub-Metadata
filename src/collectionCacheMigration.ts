/** Invalidate only caches left by the retired global Steam-ID alias on a hot upgrade. */
export function repairLegacyCollectionCaches(collectionStore: any, appStore: any): number {
  const collections = collectionStore?.collectionsFromStorage;
  if (typeof collections?.values !== "function" || typeof appStore?.GetAppOverviewByAppID !== "function") return 0;
  let repaired = 0;
  for (const collection of collections.values()) {
    try {
      if (typeof collection?.SetApps !== "function" || typeof collection?.ClearAppCounts !== "function"
          || typeof collection?.apps?.values !== "function") continue;
      const cached = collection.allApps;
      if (!Array.isArray(cached) || cached.length < 2) continue;
      const cachedIds = cached.map(app => app?.appid);
      if (cachedIds.some(id => !Number.isInteger(id) || id <= 0)) continue;
      if (new Set(cachedIds).size === cachedIds.length) continue;
      const membership = Array.from(collection.apps.values()) as number[];
      if (membership.some(id => !Number.isInteger(id) || id <= 0) || new Set(membership).size !== membership.length) continue;
      const fresh = membership.map(id => appStore.GetAppOverviewByAppID(id));
      // If the old alias is still active, touching the cache would just compute
      // another aliased list. Wait for the original lookup to be restored.
      if (fresh.some((app, index) => app && app.appid !== membership[index])) continue;
      const freshIds = fresh.filter(Boolean).map(app => app.appid);
      if (new Set(freshIds).size !== freshIds.length) continue;
      // Native setters notify MobX. Keep every stored membership, including IDs
      // whose app is temporarily absent; never save or remove collection IDs.
      collection.SetApps(membership);
      collection.ClearAppCounts();
      repaired++;
    } catch {
      // Steam builds with a different collection shape need no speculative fix.
    }
  }
  return repaired;
}
