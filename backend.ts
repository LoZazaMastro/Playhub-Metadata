const manifest = {"name":"Playhub Metadata"};
const API_VERSION = 2;
const internalAPIConnection = window.__DECKY_SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED_deckyLoaderAPIInit;
if (!internalAPIConnection) {
    throw new Error('[@decky/api]: Failed to connect to the loader as as the loader API was not initialized. This is likely a bug in Decky Loader.');
}
let api;
try {
    api = internalAPIConnection.connect(API_VERSION, manifest.name);
}
catch {
    api = internalAPIConnection.connect(1, manifest.name);
    console.warn(`[@decky/api] Requested API version ${API_VERSION} but the running loader only supports version 1. Some features may not work.`);
}
if (api._version != API_VERSION) {
    console.warn(`[@decky/api] Requested API version ${API_VERSION} but the running loader only supports version ${api._version}. Some features may not work.`);
}
const callable = api.callable;
const routerHook = api.routerHook;
const toaster = api.toaster;

var DefaultContext = {
  color: undefined,
  size: undefined,
  className: undefined,
  style: undefined,
  attr: undefined
};
var IconContext = SP_REACT.createContext && /*#__PURE__*/SP_REACT.createContext(DefaultContext);

var _excluded = ["attr", "size", "title"];
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), true).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: true, configurable: true, writable: true }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function Tree2Element(tree) {
  return tree && tree.map((node, i) => /*#__PURE__*/SP_REACT.createElement(node.tag, _objectSpread({
    key: i
  }, node.attr), Tree2Element(node.child)));
}
function GenIcon(data) {
  return props => /*#__PURE__*/SP_REACT.createElement(IconBase, _extends({
    attr: _objectSpread({}, data.attr)
  }, props), Tree2Element(data.child));
}
function IconBase(props) {
  var elem = conf => {
    var {
        attr,
        size,
        title
      } = props,
      svgProps = _objectWithoutProperties(props, _excluded);
    var computedSize = size || conf.size || "1em";
    var className;
    if (conf.className) className = conf.className;
    if (props.className) className = (className ? className + " " : "") + props.className;
    return /*#__PURE__*/SP_REACT.createElement("svg", _extends({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, conf.attr, attr, svgProps, {
      className: className,
      style: _objectSpread(_objectSpread({
        color: props.color || conf.color
      }, conf.style), props.style),
      height: computedSize,
      width: computedSize,
      xmlns: "http://www.w3.org/2000/svg"
    }), title && /*#__PURE__*/SP_REACT.createElement("title", null, title), props.children);
  };
  return IconContext !== undefined ? /*#__PURE__*/SP_REACT.createElement(IconContext.Consumer, null, conf => elem(conf)) : elem(DefaultContext);
}

// THIS FILE IS AUTO GENERATED
function FaDatabase (props) {
  return GenIcon({"attr":{"viewBox":"0 0 448 512"},"child":[{"tag":"path","attr":{"d":"M448 73.143v45.714C448 159.143 347.667 192 224 192S0 159.143 0 118.857V73.143C0 32.857 100.333 0 224 0s224 32.857 224 73.143zM448 176v102.857C448 319.143 347.667 352 224 352S0 319.143 0 278.857V176c48.125 33.143 136.208 48.572 224 48.572S399.874 209.143 448 176zm0 160v102.857C448 479.143 347.667 512 224 512S0 479.143 0 438.857V336c48.125 33.143 136.208 48.572 224 48.572S399.874 369.143 448 336z"},"child":[]}]})(props);
}

const getAllMetadata = callable("get_all_metadata");
const getMetadata = callable("get_metadata");
const saveMetadata = callable("save_metadata");
const removeMetadata = callable("remove_metadata");
const searchMetadata = callable("search_metadata");
const fetchMetadata = callable("fetch_metadata");
const autoFetchMetadata = callable("auto_fetch_metadata");
const enrichCommunityMedia = callable("enrich_community_media");
const startScanMissing = callable("start_scan_missing");
const getScanProgress = callable("get_scan_progress");
const getLocalShortcuts = callable("get_local_shortcuts");
const getRetroAchievementsSettings = callable("get_retroachievements_settings");
const setRetroAchievementsSettings = callable("set_retroachievements_settings");
const testRetroAchievementsCredentials = callable("test_retroachievements_credentials");
const setRetroAchievementsGameId = callable("set_retroachievements_game_id");
const fetchAchievements = callable("fetch_achievements");
const resolveRetroAchievementsFromPath = callable("resolve_retroachievements_from_path");
const searchRetroAchievementsGames = callable("search_retroachievements_games");

var backend = /*#__PURE__*/Object.freeze({
    __proto__: null,
    autoFetchMetadata: autoFetchMetadata,
    enrichCommunityMedia: enrichCommunityMedia,
    fetchAchievements: fetchAchievements,
    fetchMetadata: fetchMetadata,
    getAllMetadata: getAllMetadata,
    getLocalShortcuts: getLocalShortcuts,
    getMetadata: getMetadata,
    getRetroAchievementsSettings: getRetroAchievementsSettings,
    getScanProgress: getScanProgress,
    removeMetadata: removeMetadata,
    resolveRetroAchievementsFromPath: resolveRetroAchievementsFromPath,
    saveMetadata: saveMetadata,
    searchMetadata: searchMetadata,
    searchRetroAchievementsGames: searchRetroAchievementsGames,
    setRetroAchievementsGameId: setRetroAchievementsGameId,
    setRetroAchievementsSettings: setRetroAchievementsSettings,
    startScanMissing: startScanMissing,
    testRetroAchievementsCredentials: testRetroAchievementsCredentials
});

const STRINGS = {
    en: {
        pluginName: "Playhub Metadata",
        scanMissing: "Scan missing metadata",
        scanning: "Scanning...",
        detected: "Detected non-Steam games",
        saved: "Metadata saved",
        missing: "Missing metadata",
        openSelected: "Open selected game",
        editMetadata: "Playhub metadata...",
        searchTitle: "Search IGN metadata",
        search: "Search",
        searching: "Searching...",
        apply: "Apply",
        save: "Save",
        remove: "Remove metadata",
        done: "Done",
        title: "Title",
        description: "Description",
        developers: "Developers",
        publishers: "Publishers",
        releaseDate: "Release date",
        rating: "Rating",
        categories: "Steam info fields",
        community: "Community",
        communitySource: "Playhub Metadata",
        retroTitle: "Achievements",
        retroEnabled: "Enable achievements",
        retroUser: "RetroAchievements username",
        retroKey: "RetroAchievements API key",
        retroLogin: "Test login",
        retroLoginHint: "Use your RetroAchievements web API key. You can find it in your RetroAchievements control panel.",
        retroLoginOk: "RetroAchievements login OK",
        retroLoginFailed: "RetroAchievements login failed",
        retroGameId: "RetroAchievements game ID",
        retroGameTest: "Test achievements",
        retroGameDetect: "Auto-detect achievements",
        retroGameSearch: "Search RetroAchievements",
        retroGameUse: "Use this game",
        retroGameSearchHint: "If auto-detect misses the game, search by title and pick the closest RetroAchievements entry.",
        retroGameNoMatches: "No RetroAchievements results yet.",
        retroGameOk: "Achievements loaded",
        retroGameFailed: "No achievements loaded. Check the RetroAchievements game ID.",
        retroDetectFailed: "No RetroAchievements match found from this game's shortcut path.",
        retroHint: "Paste the numeric RetroAchievements game ID from the game page URL. Leave empty to hide achievements for this game.",
        noResults: "No results yet.",
        source: "Source",
        fetchCurrent: "Fetch from IGN",
        removeToast: "Metadata removed",
        scanComplete: "Scan complete",
        notNonSteam: "This plugin only changes non-Steam games.",
    },
    it: {
        pluginName: "Playhub Metadata",
        scanMissing: "Scansiona metadata mancanti",
        scanning: "Scansione...",
        detected: "Giochi non Steam rilevati",
        saved: "Metadata salvati",
        missing: "Metadata mancanti",
        openSelected: "Apri gioco selezionato",
        editMetadata: "Playhub metadata...",
        searchTitle: "Cerca metadata IGN",
        search: "Cerca",
        searching: "Ricerca...",
        apply: "Applica",
        save: "Salva",
        remove: "Rimuovi metadata",
        done: "Fine",
        title: "Titolo",
        description: "Descrizione",
        developers: "Sviluppatori",
        publishers: "Publisher",
        releaseDate: "Data di uscita",
        rating: "Valutazione",
        categories: "Campi informazioni Steam",
        community: "Comunità",
        communitySource: "Playhub Metadata",
        retroTitle: "Obiettivi",
        retroEnabled: "Abilita obiettivi",
        retroUser: "Username RetroAchievements",
        retroKey: "API key RetroAchievements",
        retroLogin: "Test login",
        retroLoginHint: "Usa la tua web API key di RetroAchievements. La trovi nel pannello di controllo di RetroAchievements.",
        retroLoginOk: "Login RetroAchievements riuscito",
        retroLoginFailed: "Login RetroAchievements non riuscito",
        retroGameId: "ID gioco RetroAchievements",
        retroGameTest: "Testa obiettivi",
        retroGameDetect: "Rileva automaticamente",
        retroGameSearch: "Cerca su RetroAchievements",
        retroGameUse: "Usa questo gioco",
        retroGameSearchHint: "Se il rilevamento automatico sbaglia, cerca per titolo e scegli la voce RetroAchievements più vicina.",
        retroGameNoMatches: "Nessun risultato RetroAchievements per ora.",
        retroGameOk: "Obiettivi caricati",
        retroGameFailed: "Nessun obiettivo caricato. Controlla l'ID gioco RetroAchievements.",
        retroDetectFailed: "Nessun match RetroAchievements trovato dal percorso del collegamento.",
        retroHint: "Incolla l'ID numerico RetroAchievements dall'URL della pagina del gioco. Lascialo vuoto per nascondere gli obiettivi di questo gioco.",
        noResults: "Nessun risultato per ora.",
        source: "Fonte",
        fetchCurrent: "Scarica da IGN",
        removeToast: "Metadata rimossi",
        scanComplete: "Scansione completata",
        notNonSteam: "Questo plugin modifica solo i giochi non Steam.",
    },
};
const currentLang = () => {
    const raw = window?.SteamClient?.System?.GetCurrentLanguage?.() ||
        navigator.language ||
        "en";
    const code = String(raw).toLowerCase();
    if (code.startsWith("it"))
        return "it";
    return "en";
};
const t = (key) => STRINGS[currentLang()][key] ?? STRINGS.en[key];

var StoreCategory;
(function (StoreCategory) {
    StoreCategory[StoreCategory["MultiPlayer"] = 1] = "MultiPlayer";
    StoreCategory[StoreCategory["SinglePlayer"] = 2] = "SinglePlayer";
    StoreCategory[StoreCategory["CoOp"] = 9] = "CoOp";
    StoreCategory[StoreCategory["MMO"] = 20] = "MMO";
    StoreCategory[StoreCategory["Achievements"] = 22] = "Achievements";
    StoreCategory[StoreCategory["SplitScreen"] = 24] = "SplitScreen";
    StoreCategory[StoreCategory["FullController"] = 28] = "FullController";
    StoreCategory[StoreCategory["OnlineMultiPlayer"] = 36] = "OnlineMultiPlayer";
    StoreCategory[StoreCategory["LocalMultiPlayer"] = 37] = "LocalMultiPlayer";
    StoreCategory[StoreCategory["OnlineCoOp"] = 38] = "OnlineCoOp";
    StoreCategory[StoreCategory["LocalCoOp"] = 392] = "LocalCoOp";
})(StoreCategory || (StoreCategory = {}));
const CATEGORY_LABELS = {
    [StoreCategory.SinglePlayer]: "Single-player",
    [StoreCategory.MultiPlayer]: "Multiplayer",
    [StoreCategory.CoOp]: "Co-op",
    [StoreCategory.OnlineMultiPlayer]: "Online multiplayer",
    [StoreCategory.OnlineCoOp]: "Online co-op",
    [StoreCategory.LocalMultiPlayer]: "Local multiplayer",
    [StoreCategory.LocalCoOp]: "Local co-op",
    [StoreCategory.SplitScreen]: "Split screen",
    [StoreCategory.FullController]: "Full controller support",
    [StoreCategory.MMO]: "MMO",
    [StoreCategory.Achievements]: "Achievements",
};

const metadataCache = {};
const achievementsCache = {};
const NON_STEAM_APP_TYPE = 1073741824;
const GAME_DETAIL_ROUTES = [
    "/library/app/:appid",
    "/library/details/:appid",
    "/library/:collection/app/:appid",
];
let raSettingsCache = null;
let bypassCounter = 0;
let bypassBypass = 0;
let metadataLoaded = false;
let metadataLoadPromise = null;
const loadingMetadata = new Set();
const loadingAchievements = new Set();
const loadingScreenshots = new Set();
const loadingCommunityMedia = new Set();
const shouldShowAchievements = (appId) => !!achievementsCache[String(appId)]?.steam?.nTotal ||
    !!raSettingsCache?.game_ids?.[String(appId)];
const cleanTitle = (value) => String(value || "")
    .replace(/[\u2122\u00ae\u00a9]/g, "")
    .replace(/\s+/g, " ")
    .trim();
const isNonSteamAppWithoutPatchedMethod = (overview) => {
    if (!overview)
        return false;
    if (Number(overview?.app_type) === NON_STEAM_APP_TYPE)
        return true;
    try {
        if (overview?.BIsShortcut?.())
            return true;
    }
    catch (_error) {
        return false;
    }
    const appId = Number(overview?.appid);
    return Number.isFinite(appId) && !!metadataCache[String(appId)];
};
const currentRoutePath = () => {
    const steamRouter = globalThis.Router ?? globalThis.window?.Router;
    return (steamRouter?.WindowStore?.GamepadUIMainWindowInstance?.m_history?.location
        ?.pathname ||
        globalThis.window?.location?.pathname ||
        "");
};
const isNonSteamApp = (overview) => {
    if (isNonSteamAppWithoutPatchedMethod(overview))
        return true;
    try {
        if (overview?.BIsModOrShortcut?.())
            return true;
    }
    catch (_error) {
        return false;
    }
    return false;
};
const getOverview = (appId) => {
    try {
        return appStore?.GetAppOverviewByAppID?.(appId) ?? null;
    }
    catch (_error) {
        return null;
    }
};
const appName = (appId) => {
    const overview = getOverview(appId);
    return cleanTitle(overview?.display_name ||
        overview?.localized_name ||
        overview?.name ||
        `App ${appId}`);
};
const refreshMetadataCache = async () => {
    const all = await getAllMetadata();
    Object.keys(metadataCache).forEach((key) => delete metadataCache[key]);
    Object.assign(metadataCache, all || {});
    metadataLoaded = true;
    Object.keys(metadataCache).forEach((key) => applyMetadata(Number(key)));
};
const ensureMetadataCache = async () => {
    if (metadataLoaded)
        return;
    if (!metadataLoadPromise) {
        metadataLoadPromise = refreshMetadataCache().finally(() => {
            metadataLoadPromise = null;
        });
    }
    await metadataLoadPromise;
};
const startMetadataBootstrap = () => {
    let cancelled = false;
    let attempts = 0;
    const tick = async () => {
        if (cancelled)
            return;
        try {
            await ensureMetadataCache();
            Object.keys(metadataCache).forEach((key) => applyMetadata(Number(key)));
        }
        catch (error) {
            console.warn("[Playhub Metadata] metadata bootstrap failed", error);
        }
        attempts += 1;
        if (!cancelled && attempts < 24) {
            window.setTimeout(tick, 500);
        }
    };
    void tick();
    return () => {
        cancelled = true;
    };
};
const refreshRaSettings = async () => {
    raSettingsCache = await getRetroAchievementsSettings();
    return raSettingsCache;
};
const applyMetadata = (appId) => {
    const overview = getOverview(appId);
    if (!isNonSteamApp(overview))
        return;
    const metadata = metadataCache[String(appId)];
    if (!metadata)
        return;
    try {
        if (typeof metadata.rating === "number") {
            overview.metacritic_score = metadata.rating;
        }
        if (!overview.m_setStoreCategories) {
            overview.m_setStoreCategories = new Set();
        }
        metadata.store_categories?.forEach((category) => {
            overview.m_setStoreCategories.add(Number(category));
        });
    }
    catch (_error) {
        // Steam objects are not always writable during early bootstrap.
    }
    const appData = appDetailsStore?.GetAppData?.(appId);
    if (!appData)
        return;
    const description = metadata.description || metadata.short_description || "";
    appData.descriptionsData = {
        strFullDescription: description,
        strSnippet: description,
    };
    appData.associationData = {
        rgDevelopers: (metadata.developers || []).map((developer) => ({
            strName: developer.name,
            strURL: developer.url || "",
        })),
        rgPublishers: (metadata.publishers || []).map((publisher) => ({
            strName: publisher.name,
            strURL: publisher.url || "",
        })),
        rgFranchises: [],
    };
    const screenshots = steamScreenshotsFromMetadata(appId, metadata);
    if (screenshots.length) {
        const screenshotData = {
            rgScreenshots: screenshots,
            screenshots,
            vecScreenshots: screenshots,
            vecScreenShots: screenshots,
        };
        appData.screenshots = screenshotData;
        if (appData.details) {
            appData.details.nScreenshots = screenshots.length;
            appData.details.vecScreenShots = screenshots;
            appData.details.bCommunityMarketPresence = true;
        }
    }
    try {
        appDetailsCache?.SetCachedDataForApp?.(appId, "descriptions", 1, appData.descriptionsData);
        appDetailsCache?.SetCachedDataForApp?.(appId, "associations", 1, appData.associationData);
        if (screenshots.length) {
            appDetailsCache?.SetCachedDataForApp?.(appId, "screenshots", 1, appData.screenshots);
        }
    }
    catch (_error) {
        // Cache writes can fail if the page has not finished creating app data.
    }
};
const steamScreenshotsFromMetadata = (appId, metadata) => (metadata.screenshots || [])
    .filter((image) => image?.url)
    .slice(0, 10)
    .map((image, index) => ({
    appid: appId,
    id: image.id || `${appId}-${index}`,
    nScreenshotID: index + 1,
    strCaption: image.caption || metadata.title || "",
    strImageURL: image.url,
    strThumbnailURL: image.url,
    strURL: image.url,
    url: image.url,
    nWidth: image.width || 1280,
    nHeight: image.height || 720,
    width: image.width || 1280,
    height: image.height || 720,
    bSpoiler: false,
}));
const playhubCommunityId = (appId, index) => `90909${String(appId).padStart(10, "0")}${String(index).padStart(2, "0")}`;
const isPlayhubCommunityId = (value) => typeof value === "string" && value.startsWith("90909");
const interleavedCommunityMedia = (metadata) => {
    const ign = (metadata.screenshots || [])
        .filter((image) => image?.url)
        .map((image) => ({ kind: "image", source: "IGN", image }));
    const videos = (metadata.community_videos || [])
        .filter((video) => video?.id)
        .slice(0, 10)
        .map((video) => ({ kind: "video", source: "YouTube", video }));
    const webImages = (metadata.community_images || [])
        .filter((image) => image?.url)
        .slice(0, 10)
        .map((image) => ({ kind: "image", source: "RAWG", image }));
    const buckets = [ign, videos, webImages];
    const mixed = [];
    let index = 0;
    while (buckets.some((bucket) => index < bucket.length)) {
        for (const bucket of buckets) {
            const item = bucket[index];
            if (item)
                mixed.push(item);
        }
        index += 1;
    }
    return mixed;
};
const steamCommunityItemsFromMetadata = (appId, metadata) => interleavedCommunityMedia(metadata).map((item, index) => {
    if (item.kind === "video") {
        const video = item.video;
        return {
            appid: appId,
            consumer_appid: appId,
            published_file_id: playhubCommunityId(appId, index),
            publishedfileid: playhubCommunityId(appId, index),
            type: 4,
            title: video.title || `${metadata.title} video`,
            description: video.title || metadata.title || "",
            preview_image_url: video.thumbnail || `https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`,
            full_image_url: video.url || `https://www.youtube.com/watch?v=${video.id}`,
            youtube_video_id: video.id,
            image_width: 1280,
            image_height: 720,
            spoiler_tag: false,
            content_descriptorids: [],
            reactions: [],
            creator: {
                steamid: "76561197960287930",
                name: "YouTube",
                avatar: "",
            },
            time_created: Math.floor(Date.now() / 1000) - index * 60,
            votes_up: 0,
            votes_down: 0,
            num_comments_public: 0,
        };
    }
    const image = item.image;
    return {
        appid: appId,
        consumer_appid: appId,
        published_file_id: playhubCommunityId(appId, index),
        publishedfileid: playhubCommunityId(appId, index),
        type: 5,
        title: image.caption ||
            `${metadata.title || "Screenshot"}${item.source ? ` (${item.source})` : ""}`,
        description: image.caption || metadata.title || "",
        preview_image_url: image.url,
        full_image_url: image.url,
        image_width: image.width || 1280,
        image_height: image.height || 720,
        spoiler_tag: false,
        content_descriptorids: [],
        reactions: [],
        creator: {
            steamid: "76561197960287930",
            name: "Playhub Metadata",
            avatar: "",
        },
        time_created: Math.floor(Date.now() / 1000) - index * 60,
        votes_up: 0,
        votes_down: 0,
        num_comments_public: 0,
    };
});
const communityPayloadForApp = async (appId) => {
    const overview = getOverview(appId);
    if (!appId || !isNonSteamApp(overview))
        return null;
    await ensureMetadataCache();
    let metadata = metadataCache[String(appId)];
    if (!metadata)
        return null;
    if (!metadata.screenshots?.length) {
        await tryEnrichScreenshotsForApp(appId);
        metadata = metadataCache[String(appId)];
    }
    if (!metadata?.community_enriched_at) {
        await tryEnrichCommunityMediaForApp(appId);
        metadata = metadataCache[String(appId)];
    }
    const hub = metadata ? steamCommunityItemsFromMetadata(appId, metadata) : [];
    return hub.length ? { hub } : null;
};
const applyAchievementPayload = (appId, payload) => {
    if (!payload?.steam?.nTotal)
        return;
    achievementsCache[String(appId)] = payload;
    const appData = appDetailsStore?.GetAppData?.(appId);
    if (appData?.details) {
        appData.details.achievements = payload.steam;
        appData.bLoadingAchievments = false;
    }
    try {
        appDetailsCache?.SetCachedDataForApp?.(appId, "achievements", 2, payload.steam);
    }
    catch (_error) {
        // Best effort, same cache route used by Steam.
    }
    try {
        if (appAchievementProgressCache?.m_achievementProgress) {
            appAchievementProgressCache.m_achievementProgress.mapCache.set(appId, {
                all_unlocked: payload.progress.achieved === payload.progress.total,
                appid: appId,
                cache_time: Date.now(),
                percentage: payload.progress.percentage,
                total: payload.progress.total,
                unlocked: payload.progress.achieved,
            });
            appAchievementProgressCache.SaveCacheFile?.();
        }
    }
    catch (_error) {
        // Progress cache is optional across Steam client versions.
    }
    try {
        appDetailsStore?.GetAchievements?.(appId);
    }
    catch (_error) {
        // Touching the getter nudges Steam into re-reading the cached achievement data.
    }
    window.dispatchEvent(new Event("playhub-metadata:achievements-updated"));
};
const tryFetchMetadataForApp = async (appId) => {
    await ensureMetadataCache();
    if (metadataCache[String(appId)] || loadingMetadata.has(appId))
        return;
    const overview = getOverview(appId);
    if (!isNonSteamApp(overview))
        return;
    loadingMetadata.add(appId);
    try {
        const metadata = await autoFetchMetadata(appId, appName(appId));
        if (metadata) {
            metadataCache[String(appId)] = metadata;
            applyMetadata(appId);
            window.dispatchEvent(new Event("playhub-metadata:updated"));
        }
    }
    finally {
        loadingMetadata.delete(appId);
    }
};
const tryEnrichScreenshotsForApp = async (appId) => {
    await ensureMetadataCache();
    const metadata = metadataCache[String(appId)];
    if (!metadata ||
        metadata.screenshots?.length ||
        loadingScreenshots.has(appId) ||
        String(metadata.source || "").toUpperCase() !== "IGN") {
        return;
    }
    const source = metadata.source_url || String(metadata.id || "");
    if (!source)
        return;
    loadingScreenshots.add(appId);
    try {
        const refreshed = await fetchMetadata(source);
        if (refreshed?.screenshots?.length) {
            const saved = await saveMetadata(appId, {
                ...metadata,
                screenshots: refreshed.screenshots,
            });
            metadataCache[String(appId)] = saved;
            applyMetadata(appId);
            window.dispatchEvent(new Event("playhub-metadata:updated"));
        }
    }
    catch (error) {
        console.warn("[Playhub Metadata] screenshot enrichment failed", error);
    }
    finally {
        loadingScreenshots.delete(appId);
    }
};
const tryEnrichCommunityMediaForApp = async (appId) => {
    await ensureMetadataCache();
    const metadata = metadataCache[String(appId)];
    const enrichedRecently = metadata?.community_enriched_at &&
        Date.now() / 1000 - Number(metadata.community_enriched_at) < 7 * 24 * 60 * 60;
    if (!metadata || enrichedRecently || loadingCommunityMedia.has(appId)) {
        return;
    }
    loadingCommunityMedia.add(appId);
    try {
        const enriched = await enrichCommunityMedia(appId, metadata.title || appName(appId), metadata.source_url || "");
        if (enriched) {
            metadataCache[String(appId)] = enriched;
            applyMetadata(appId);
            window.dispatchEvent(new Event("playhub-metadata:updated"));
        }
    }
    catch (error) {
        console.warn("[Playhub Metadata] community media enrichment failed", error);
    }
    finally {
        loadingCommunityMedia.delete(appId);
    }
};
const getAppDetails = async (appId) => new Promise((resolve) => {
    let timeoutId;
    try {
        const { unregister } = SteamClient.Apps.RegisterForAppDetails(appId, (details) => {
            window.clearTimeout(timeoutId);
            unregister();
            resolve(details);
        });
        timeoutId = window.setTimeout(() => {
            unregister();
            resolve(null);
        }, 1000);
    }
    catch (_error) {
        window.clearTimeout(timeoutId);
        resolve(null);
    }
});
const loadAchievementsForApp = async (appId) => {
    if (achievementsCache[String(appId)] || loadingAchievements.has(appId)) {
        return achievementsCache[String(appId)];
    }
    const overview = getOverview(appId);
    if (!isNonSteamApp(overview))
        return null;
    const settings = raSettingsCache ?? (await refreshRaSettings());
    if (!settings.enabled)
        return null;
    loadingAchievements.add(appId);
    try {
        let payload = await fetchAchievements(appId);
        if (!payload) {
            const details = await getAppDetails(appId);
            const launchPath = `${details?.strShortcutExe || ""} ${details?.strShortcutLaunchOptions || ""}`;
            if (launchPath.trim()) {
                payload = await resolveRetroAchievementsFromPath(appId, launchPath, appName(appId));
            }
        }
        applyAchievementPayload(appId, payload);
        return payload;
    }
    catch (error) {
        console.error("[Playhub Metadata] achievements fetch failed", error);
        return null;
    }
    finally {
        loadingAchievements.delete(appId);
    }
};
const patchMethod = (target, methodName, replacement) => {
    if (!target?.[methodName])
        return () => undefined;
    const original = target[methodName];
    target[methodName] = function patchedMethod(...args) {
        return replacement(this, original.bind(this), args);
    };
    return () => {
        target[methodName] = original;
    };
};
const installSteamPatches = () => {
    const unpatchers = [];
    const overviewProto = appStore?.allApps?.[0]?.__proto__;
    const detailsProto = appDetailsStore?.__proto__;
    if (!overviewProto || !detailsProto) {
        let cancelled = false;
        let delayedUnpatch = null;
        let retryId;
        const retry = () => {
            if (cancelled)
                return;
            const ready = appStore?.allApps?.[0]?.__proto__ && appDetailsStore?.__proto__;
            if (ready) {
                delayedUnpatch = installSteamPatches();
                return;
            }
            retryId = window.setTimeout(retry, 500);
        };
        retry();
        return () => {
            cancelled = true;
            if (retryId)
                window.clearTimeout(retryId);
            delayedUnpatch?.();
        };
    }
    unpatchers.push(patchMethod(detailsProto, "GetDescriptions", (_thisValue, original, args) => {
        const appId = Number(args[0]);
        const overview = getOverview(appId);
        if (isNonSteamApp(overview)) {
            const metadata = metadataCache[String(appId)];
            if (metadata) {
                applyMetadata(appId);
                return appDetailsStore?.GetAppData?.(appId)?.descriptionsData;
            }
            void ensureMetadataCache().then(() => {
                if (metadataCache[String(appId)]) {
                    applyMetadata(appId);
                    void tryEnrichScreenshotsForApp(appId);
                }
                else {
                    void tryFetchMetadataForApp(appId);
                }
            });
        }
        return original(...args);
    }));
    unpatchers.push(patchMethod(detailsProto, "GetAssociations", (_thisValue, original, args) => {
        const appId = Number(args[0]);
        const overview = getOverview(appId);
        if (isNonSteamApp(overview) && metadataCache[String(appId)]) {
            applyMetadata(appId);
        }
        return original(...args);
    }));
    unpatchers.push(patchMethod(detailsProto, "GetAchievements", (_thisValue, original, args) => {
        const appId = Number(args[0]);
        if (isNonSteamApp(getOverview(appId))) {
            const payload = achievementsCache[String(appId)];
            if (payload?.steam)
                return payload.steam;
            void loadAchievementsForApp(appId);
        }
        return original(...args);
    }));
    unpatchers.push(patchMethod(overviewProto, "BHasStoreCategory", (thisValue, original, args) => {
        if (isNonSteamApp(thisValue)) {
            const category = Number(args[0]);
            const metadata = metadataCache[String(thisValue.appid)];
            if (metadata?.store_categories?.includes(category))
                return true;
            if (category === StoreCategory.Achievements &&
                shouldShowAchievements(Number(thisValue.appid))) {
                return true;
            }
        }
        return original(...args);
    }));
    if (overviewProto?.BIsModOrShortcut) {
        unpatchers.push(DFL.afterPatch(overviewProto, "BIsModOrShortcut", function (_args, ret) {
            if (!isNonSteamAppWithoutPatchedMethod(this) || ret !== true)
                return ret;
            if (bypassBypass > 0) {
                bypassBypass -= 1;
                return false;
            }
            const path = currentRoutePath();
            if (path === "/library/home")
                return false;
            if (bypassCounter > 0)
                bypassCounter -= 1;
            return bypassCounter === -1 || bypassCounter > 0;
        }).unpatch);
    }
    if (detailsProto?.BHasRecentlyLaunched) {
        unpatchers.push(DFL.afterPatch(detailsProto, "BHasRecentlyLaunched", (_args, ret) => {
            bypassCounter = 4;
            return ret;
        }).unpatch);
    }
    ["GetGameID", "GetPrimaryAppID"].forEach((methodName) => {
        if (!overviewProto?.[methodName])
            return;
        unpatchers.push(patchMethod(overviewProto, methodName, (_thisValue, original, args) => {
            bypassCounter = -1;
            const ret = original(...args);
            bypassCounter = 0;
            return ret;
        }));
    });
    if (overviewProto?.GetCanonicalReleaseDate) {
        unpatchers.push(patchMethod(overviewProto, "GetCanonicalReleaseDate", (thisValue, original, args) => {
            const metadata = metadataCache[String(thisValue?.appid)];
            if (isNonSteamApp(thisValue) && metadata?.release_date) {
                return metadata.release_date;
            }
            return original(...args);
        }));
    }
    if (overviewProto?.GetPerClientData) {
        unpatchers.push(DFL.afterPatch(overviewProto, "GetPerClientData", (_args, ret) => {
            bypassCounter = 4;
            return ret;
        }).unpatch);
    }
    try {
        const appDetailsSections = DFL.findModuleChild((module) => {
            if (typeof module !== "object")
                return undefined;
            for (const prop in module) {
                try {
                    if (typeof module[prop]?.prototype?.GetSections === "function") {
                        return module[prop];
                    }
                }
                catch (_error) {
                    continue;
                }
            }
            return undefined;
        });
        if (appDetailsSections?.prototype?.GetSections) {
            unpatchers.push(DFL.afterPatch(appDetailsSections.prototype, "GetSections", function (_args, ret) {
                const overview = this?.props?.overview;
                const appId = Number(overview?.appid);
                if (appId && isNonSteamApp(overview) && shouldShowAchievements(appId)) {
                    ret.add("achievements");
                    void loadAchievementsForApp(appId);
                }
                if (appId && isNonSteamApp(overview) && metadataCache[String(appId)]) {
                    if (metadataCache[String(appId)]?.screenshots?.length) {
                        ret.add("screenshots");
                    }
                    else {
                        void tryEnrichScreenshotsForApp(appId);
                    }
                    ret.add("community");
                }
                return ret;
            }).unpatch);
        }
    }
    catch (error) {
        console.warn("[Playhub Metadata] app details sections patch skipped", error);
    }
    try {
        const httpClient = DFL.findModuleChild((module) => {
            if (!module || typeof module !== "object")
                return undefined;
            if (typeof module.g?.get === "function" && typeof module.g?.post === "function") {
                return module.g;
            }
            return undefined;
        });
        if (httpClient?.get) {
            unpatchers.push(patchMethod(httpClient, "get", (_thisValue, original, args) => {
                const url = String(args[0] || "");
                const match = url.match(/library\/appcommunityfeed\/(\d+)/);
                if (match) {
                    const appId = Number(match[1]);
                    return communityPayloadForApp(appId).then((payload) => {
                        if (payload)
                            return payload;
                        return original(...args);
                    });
                }
                return original(...args);
            }));
        }
    }
    catch (error) {
        console.warn("[Playhub Metadata] community feed patch skipped", error);
    }
    try {
        const communityVoteModule = DFL.findModuleChild((module) => {
            if (!module || typeof module !== "object")
                return undefined;
            if (module.bJ && typeof module.dK === "function")
                return module;
            return undefined;
        });
        if (communityVoteModule?.dK) {
            unpatchers.push(patchMethod(communityVoteModule, "dK", (_thisValue, original, args) => {
                const ids = Array.isArray(args[0]) ? args[0] : [];
                if (ids.length && ids.every(isPlayhubCommunityId)) {
                    const voteNone = communityVoteModule.bJ?.None ?? 0;
                    return Promise.resolve(new Map(ids.map((id) => [
                        id,
                        { vote: voteNone, bReported: false },
                    ])));
                }
                return original(...args);
            }));
        }
    }
    catch (error) {
        console.warn("[Playhub Metadata] community vote patch skipped", error);
    }
    try {
        const achievementsStore = DFL.findModuleChild((module) => {
            for (const prop in module) {
                if (module[prop]?.m_mapMyAchievements)
                    return module[prop];
            }
            return undefined;
        });
        if (achievementsStore?.LoadMyAchievements) {
            unpatchers.push(patchMethod(achievementsStore.__proto__, "LoadMyAchievements", (thisValue, original, args) => {
                const appId = Number(args[0]);
                if (isNonSteamApp(getOverview(appId)) &&
                    !thisValue.m_mapGlobalAchievements?.has?.(appId)) {
                    void loadAchievementsForApp(appId).then((payload) => {
                        if (!payload)
                            return;
                        if (payload.global) {
                            thisValue.m_mapGlobalAchievements?.set?.(appId, payload.global);
                        }
                        if (payload.user) {
                            thisValue.m_mapMyAchievements?.set?.(appId, payload.user);
                        }
                    });
                }
                return original(...args);
            }));
        }
    }
    catch (error) {
        console.warn("[Playhub Metadata] achievement store patch skipped", error);
    }
    GAME_DETAIL_ROUTES.forEach((route) => {
        const patch = routerHook.addPatch(route, (tree) => {
            const routeProps = DFL.findInReactTree(tree, (x) => x?.renderFunc);
            if (routeProps?.renderFunc) {
                const renderPatch = DFL.afterPatch(routeProps, "renderFunc", (_args, ret) => {
                    const overview = ret?.props?.children?.props?.overview;
                    const appId = Number(overview?.appid);
                    if (appId && isNonSteamApp(overview)) {
                        bypassBypass = 11;
                        void ensureMetadataCache().then(() => {
                            applyMetadata(appId);
                            void tryEnrichScreenshotsForApp(appId);
                            void tryFetchMetadataForApp(appId);
                        });
                        void loadAchievementsForApp(appId);
                    }
                    return ret;
                });
                unpatchers.push(renderPatch.unpatch);
            }
            return tree;
        });
        unpatchers.push(() => routerHook.removePatch(route, patch));
    });
    return () => {
        unpatchers.splice(0).reverse().forEach((unpatch) => {
            try {
                unpatch();
            }
            catch (error) {
                console.error("[Playhub Metadata] unpatch failed", error);
            }
        });
    };
};
const allNonSteamGames = async () => {
    const byId = new Map();
    const addEntry = (entry) => {
        const appid = Number(entry?.appid ?? entry?.app_id ?? entry?.unAppID ?? entry?.nAppID ?? entry);
        if (!Number.isFinite(appid) || appid <= 0)
            return;
        const overview = getOverview(appid);
        const nonSteam = entry?.isNonSteam === true || isNonSteamApp(overview);
        if (!nonSteam)
            return;
        byId.set(appid, {
            appid,
            name: cleanTitle(overview?.display_name ||
                overview?.localized_name ||
                entry?.name ||
                entry?.title ||
                `App ${appid}`),
        });
    };
    try {
        appStore?.allApps?.forEach?.(addEntry);
        appStore?.m_mapAppOverview?.forEach?.(addEntry);
    }
    catch (_error) {
        // Continue with backend fallback.
    }
    try {
        const localShortcuts = await Promise.resolve().then(function () { return backend; }).then((m) => m.getLocalShortcuts());
        localShortcuts.forEach(addEntry);
    }
    catch (_error) {
        // Optional fallback.
    }
    return Array.from(byId.values()).sort((a, b) => a.name.localeCompare(b.name));
};

const FocusableButton = (props) => (window.SP_REACT.createElement(DFL.DialogButton, { focusable: true, ...props }));
const pageStyle = {
    padding: 24,
    paddingTop: 48,
    paddingBottom: 120,
    minHeight: "100vh",
    boxSizing: "border-box",
};
const rowStackStyle = {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    maxWidth: "100%",
    minWidth: 0,
    boxSizing: "border-box",
    gap: "0.45rem",
};
const buttonRowStyle = {
    display: "flex",
    width: "100%",
    maxWidth: "100%",
    minWidth: 0,
    boxSizing: "border-box",
    gap: "0.5rem",
    alignItems: "center",
    flexWrap: "wrap",
};
const fieldStyle = {
    width: "100%",
    maxWidth: "100%",
    minWidth: 0,
    boxSizing: "border-box",
};
const flexFieldStyle = {
    ...fieldStyle,
    flex: "1 1 14rem",
};
const compactTextStyle = {
    opacity: 0.72,
    fontSize: "0.82rem",
    lineHeight: 1.35,
};
const sectionHeadingStyle = {
    width: "100%",
    paddingTop: "0.75rem",
    fontWeight: 700,
    fontSize: "0.95rem",
};
const metadataTemplate = (title) => ({
    title,
    id: title,
    source: "Manual",
    source_url: "",
    description: "",
    short_description: "",
    developers: [],
    publishers: [],
    release_date: null,
    rating: null,
    store_categories: [StoreCategory.SinglePlayer],
    genres: [],
    features: [],
    screenshots: [],
    community_images: [],
    community_videos: [],
    community_enriched_at: 0,
});
const personsToText = (people) => (people || []).map((person) => person.name).join(", ");
const textToPersons = (value) => value
    .split(",")
    .map((name) => name.trim())
    .filter(Boolean)
    .map((name) => ({ name, url: "" }));
const epochToDate = (value) => {
    if (!value)
        return "";
    const date = new Date(value * 1000);
    if (Number.isNaN(date.getTime()))
        return "";
    return date.toISOString().slice(0, 10);
};
const dateToEpoch = (value) => {
    if (!value.trim())
        return null;
    const timestamp = Date.parse(`${value.trim()}T00:00:00Z`);
    if (Number.isNaN(timestamp))
        return null;
    return Math.floor(timestamp / 1000);
};
const parseRating = (value) => {
    if (!value.trim())
        return null;
    const number = Number(value);
    if (!Number.isFinite(number))
        return null;
    return Math.max(0, Math.min(100, Math.round(number)));
};
const useNonSteamGames = () => {
    const [games, setGames] = SP_REACT.useState([]);
    const loadGames = SP_REACT.useCallback(async () => {
        setGames(await allNonSteamGames());
    }, []);
    SP_REACT.useEffect(() => {
        void loadGames();
    }, [loadGames]);
    return { games, loadGames };
};
const Content = () => {
    const { games, loadGames } = useNonSteamGames();
    const [metadataCount, setMetadataCount] = SP_REACT.useState(0);
    const [busy, setBusy] = SP_REACT.useState(false);
    const [scanMessage, setScanMessage] = SP_REACT.useState("");
    const [ra, setRa] = SP_REACT.useState({
        enabled: false,
        username: "",
        api_key: "",
        game_ids: {},
    });
    const missing = Math.max(games.length - metadataCount, 0);
    const refresh = SP_REACT.useCallback(async () => {
        await refreshMetadataCache();
        await loadGames();
        setMetadataCount(Object.keys(metadataCache).length);
        setRa(await getRetroAchievementsSettings());
    }, [loadGames]);
    SP_REACT.useEffect(() => {
        void refresh();
    }, [refresh]);
    const scanMissing = async () => {
        if (busy)
            return;
        setBusy(true);
        setScanMessage("");
        try {
            await startScanMissing(games);
            const interval = window.setInterval(async () => {
                const progress = await getScanProgress();
                setScanMessage(progress.current ||
                    progress.message ||
                    `${progress.completed}/${progress.total}`);
                if (!progress.running) {
                    window.clearInterval(interval);
                    await refresh();
                    setBusy(false);
                    toaster.toast({ title: t("pluginName"), body: t("scanComplete") });
                }
            }, 800);
        }
        catch (error) {
            setBusy(false);
            toaster.toast({ title: t("pluginName"), body: String(error) });
        }
    };
    const saveRaSettings = async (next) => {
        const merged = { ...ra, ...next };
        setRa(merged);
        const saved = await setRetroAchievementsSettings(merged.enabled, merged.username, merged.api_key);
        setRa(saved);
        await refreshRaSettings();
    };
    const testRaLogin = async () => {
        const saved = await setRetroAchievementsSettings(true, ra.username, ra.api_key);
        setRa(saved);
        await refreshRaSettings();
        const result = await testRetroAchievementsCredentials(saved.username, saved.api_key);
        toaster.toast({
            title: t("pluginName"),
            body: result.ok ? t("retroLoginOk") : result.message || t("retroLoginFailed"),
        });
    };
    return (window.SP_REACT.createElement(DFL.PanelSection, null,
        window.SP_REACT.createElement(DFL.PanelSectionRow, null,
            window.SP_REACT.createElement("div", { style: rowStackStyle },
                window.SP_REACT.createElement("div", null,
                    window.SP_REACT.createElement("b", null,
                        t("detected"),
                        ":"),
                    " ",
                    games.length),
                window.SP_REACT.createElement("div", null,
                    window.SP_REACT.createElement("b", null,
                        t("saved"),
                        ":"),
                    " ",
                    metadataCount),
                window.SP_REACT.createElement("div", null,
                    window.SP_REACT.createElement("b", null,
                        t("missing"),
                        ":"),
                    " ",
                    missing),
                scanMessage ? window.SP_REACT.createElement("div", { style: compactTextStyle }, scanMessage) : null)),
        window.SP_REACT.createElement(DFL.PanelSectionRow, null,
            window.SP_REACT.createElement(FocusableButton, { className: "DialogButton", disabled: busy || !games.length, onClick: scanMissing }, busy ? t("scanning") : t("scanMissing"))),
        window.SP_REACT.createElement(DFL.PanelSectionRow, null,
            window.SP_REACT.createElement("div", { style: sectionHeadingStyle }, t("retroTitle"))),
        window.SP_REACT.createElement(DFL.PanelSectionRow, null,
            window.SP_REACT.createElement(DFL.ToggleField, { label: t("retroEnabled"), checked: ra.enabled, onChange: (checked) => void saveRaSettings({ enabled: checked }) })),
        window.SP_REACT.createElement(DFL.PanelSectionRow, null,
            window.SP_REACT.createElement("div", { style: compactTextStyle }, t("retroLoginHint"))),
        window.SP_REACT.createElement(DFL.PanelSectionRow, null,
            window.SP_REACT.createElement("div", { style: rowStackStyle },
                window.SP_REACT.createElement("label", null, t("retroUser")),
                window.SP_REACT.createElement(DFL.TextField, { value: ra.username, onChange: (e) => setRa((prev) => ({ ...prev, username: e.target.value })), onBlur: () => void saveRaSettings({ username: ra.username }), style: fieldStyle }))),
        window.SP_REACT.createElement(DFL.PanelSectionRow, null,
            window.SP_REACT.createElement("div", { style: rowStackStyle },
                window.SP_REACT.createElement("label", null, t("retroKey")),
                window.SP_REACT.createElement(DFL.TextField, { value: ra.api_key, onChange: (e) => setRa((prev) => ({ ...prev, api_key: e.target.value })), onBlur: () => void saveRaSettings({ api_key: ra.api_key }), style: fieldStyle }))),
        window.SP_REACT.createElement(DFL.PanelSectionRow, null,
            window.SP_REACT.createElement(FocusableButton, { className: "DialogButton", onClick: testRaLogin }, t("retroLogin")))));
};
const MetadataPage = () => {
    const { appid } = DFL.useParams();
    const appId = Number(appid);
    const overview = getOverview(appId);
    const nonSteam = isNonSteamApp(overview);
    const [metadata, setMetadata] = SP_REACT.useState(metadataTemplate(appName(appId)));
    const [developerText, setDeveloperText] = SP_REACT.useState("");
    const [publisherText, setPublisherText] = SP_REACT.useState("");
    const [releaseText, setReleaseText] = SP_REACT.useState("");
    const [ratingText, setRatingText] = SP_REACT.useState("");
    const [query, setQuery] = SP_REACT.useState(appName(appId));
    const [results, setResults] = SP_REACT.useState([]);
    const [busy, setBusy] = SP_REACT.useState(false);
    const [raSettings, setRaSettings] = SP_REACT.useState(null);
    const [raGameId, setRaGameId] = SP_REACT.useState("");
    const [raQuery, setRaQuery] = SP_REACT.useState(appName(appId));
    const [raResults, setRaResults] = SP_REACT.useState([]);
    const [raSearching, setRaSearching] = SP_REACT.useState(false);
    const setFormMetadata = SP_REACT.useCallback((next) => {
        setMetadata(next);
        setDeveloperText(personsToText(next.developers));
        setPublisherText(personsToText(next.publishers));
        setReleaseText(epochToDate(next.release_date));
        setRatingText(next.rating == null ? "" : String(next.rating));
    }, []);
    const load = SP_REACT.useCallback(async () => {
        const saved = await getMetadata(appId);
        setFormMetadata(saved || metadataTemplate(appName(appId)));
        const settings = await getRetroAchievementsSettings();
        setRaSettings(settings);
        setRaGameId(settings.game_ids[String(appId)]?.toString() || "");
    }, [appId, setFormMetadata]);
    SP_REACT.useEffect(() => {
        void load();
    }, [load]);
    const normalizedMetadata = SP_REACT.useMemo(() => ({
        ...metadata,
        title: cleanTitle(metadata.title),
        developers: textToPersons(developerText),
        publishers: textToPersons(publisherText),
        release_date: dateToEpoch(releaseText),
        rating: parseRating(ratingText),
        store_categories: metadata.store_categories || [],
    }), [developerText, metadata, publisherText, ratingText, releaseText]);
    const saveCurrent = async () => {
        if (!nonSteam) {
            toaster.toast({ title: t("pluginName"), body: t("notNonSteam") });
            return;
        }
        const saved = await saveMetadata(appId, normalizedMetadata);
        metadataCache[String(appId)] = saved;
        applyMetadata(appId);
        toaster.toast({ title: t("pluginName"), body: t("saved") });
    };
    const search = async () => {
        setBusy(true);
        try {
            setResults(await searchMetadata(query, 8));
        }
        catch (error) {
            toaster.toast({ title: t("pluginName"), body: String(error) });
        }
        finally {
            setBusy(false);
        }
    };
    const applyResult = async (result) => {
        setBusy(true);
        try {
            const fetched = await fetchMetadata(result.slug || result.url);
            if (!fetched)
                return;
            const saved = await saveMetadata(appId, fetched);
            metadataCache[String(appId)] = saved;
            applyMetadata(appId);
            setFormMetadata(saved);
            toaster.toast({ title: t("pluginName"), body: t("saved") });
        }
        finally {
            setBusy(false);
        }
    };
    const removeCurrent = async () => {
        await removeMetadata(appId);
        delete metadataCache[String(appId)];
        setFormMetadata(metadataTemplate(appName(appId)));
        toaster.toast({ title: t("pluginName"), body: t("removeToast") });
    };
    const saveRaGameId = async () => {
        const parsed = Number.parseInt(raGameId, 10);
        const ids = await setRetroAchievementsGameId(appId, Number.isFinite(parsed) && parsed > 0 ? parsed : null);
        setRaSettings((prev) => (prev ? { ...prev, game_ids: ids } : prev));
        toaster.toast({ title: t("pluginName"), body: t("saved") });
    };
    const testAchievements = async () => {
        const parsed = Number.parseInt(raGameId, 10);
        if (!Number.isFinite(parsed) || parsed <= 0) {
            toaster.toast({ title: t("pluginName"), body: t("retroGameFailed") });
            return;
        }
        await setRetroAchievementsGameId(appId, parsed);
        await refreshRaSettings();
        const payload = await fetchAchievements(appId);
        applyAchievementPayload(appId, payload);
        toaster.toast({
            title: t("pluginName"),
            body: payload?.steam?.nTotal
                ? `${t("retroGameOk")}: ${payload.steam.nAchieved}/${payload.steam.nTotal}`
                : t("retroGameFailed"),
        });
    };
    const autoDetectAchievements = async () => {
        const details = await getAppDetails(appId);
        const launchPath = `${details?.strShortcutExe || ""} ${details?.strShortcutLaunchOptions || ""}`;
        if (!launchPath.trim()) {
            toaster.toast({ title: t("pluginName"), body: t("retroDetectFailed") });
            return;
        }
        const payload = await resolveRetroAchievementsFromPath(appId, launchPath, appName(appId));
        applyAchievementPayload(appId, payload);
        if (payload?.steam?.nTotal) {
            setRaGameId(String(payload.game_id));
            await refreshRaSettings();
        }
        toaster.toast({
            title: t("pluginName"),
            body: payload?.steam?.nTotal
                ? `${t("retroGameOk")}: ${payload.steam.nAchieved}/${payload.steam.nTotal}`
                : t("retroDetectFailed"),
        });
    };
    const searchAchievements = async () => {
        setRaSearching(true);
        try {
            setRaResults(await searchRetroAchievementsGames(raQuery || appName(appId), 8, appId));
        }
        catch (error) {
            toaster.toast({ title: t("pluginName"), body: String(error) });
        }
        finally {
            setRaSearching(false);
        }
    };
    const useAchievementResult = async (result) => {
        setRaGameId(String(result.id));
        const ids = await setRetroAchievementsGameId(appId, result.id);
        setRaSettings((prev) => (prev ? { ...prev, game_ids: ids } : prev));
        await refreshRaSettings();
        const payload = await fetchAchievements(appId);
        applyAchievementPayload(appId, payload);
        toaster.toast({
            title: t("pluginName"),
            body: payload?.steam?.nTotal
                ? `${t("retroGameOk")}: ${payload.steam.nAchieved}/${payload.steam.nTotal}`
                : t("saved"),
        });
    };
    const toggleCategory = (category, checked) => {
        setMetadata((prev) => {
            const next = new Set(prev.store_categories || []);
            if (checked)
                next.add(category);
            else
                next.delete(category);
            return { ...prev, store_categories: Array.from(next) };
        });
    };
    return (window.SP_REACT.createElement(DFL.ScrollPanel, null,
        window.SP_REACT.createElement("div", { style: pageStyle },
            window.SP_REACT.createElement(DFL.PanelSection, { title: `${t("pluginName")} - ${appName(appId)}` },
                !nonSteam ? (window.SP_REACT.createElement(DFL.PanelSectionRow, null,
                    window.SP_REACT.createElement("div", { style: compactTextStyle }, t("notNonSteam")))) : null,
                window.SP_REACT.createElement(DFL.PanelSectionRow, null,
                    window.SP_REACT.createElement("div", { style: buttonRowStyle },
                        window.SP_REACT.createElement(FocusableButton, { className: "DialogButton", onClick: saveCurrent }, t("save")),
                        window.SP_REACT.createElement(FocusableButton, { className: "DialogButton", onClick: removeCurrent }, t("remove")),
                        window.SP_REACT.createElement(FocusableButton, { className: "DialogButton", onClick: () => DFL.Navigation.NavigateBack() }, t("done"))))),
            window.SP_REACT.createElement(DFL.PanelSection, { title: t("searchTitle") },
                window.SP_REACT.createElement(DFL.PanelSectionRow, null,
                    window.SP_REACT.createElement("div", { style: buttonRowStyle },
                        window.SP_REACT.createElement(DFL.TextField, { value: query, onChange: (e) => setQuery(e.target.value), style: { ...flexFieldStyle, minWidth: "10rem" } }),
                        window.SP_REACT.createElement(FocusableButton, { className: "DialogButton", disabled: busy, onClick: search }, busy ? t("searching") : t("search")))),
                window.SP_REACT.createElement(DFL.PanelSectionRow, null,
                    window.SP_REACT.createElement("div", { style: rowStackStyle },
                        busy ? window.SP_REACT.createElement(DFL.Spinner, null) : null,
                        !busy && !results.length ? (window.SP_REACT.createElement("div", { style: compactTextStyle }, t("noResults"))) : null,
                        results.map((result) => (window.SP_REACT.createElement(FocusableButton, { key: result.slug || result.url, className: "DialogButton", onClick: () => void applyResult(result), style: { justifyContent: "flex-start", textAlign: "left" } },
                            window.SP_REACT.createElement("div", { style: rowStackStyle },
                                window.SP_REACT.createElement("b", null, result.title),
                                window.SP_REACT.createElement("span", { style: compactTextStyle }, result.description)))))))),
            window.SP_REACT.createElement(DFL.PanelSection, { title: t("source") },
                window.SP_REACT.createElement(DFL.PanelSectionRow, null,
                    window.SP_REACT.createElement("div", { style: rowStackStyle },
                        window.SP_REACT.createElement("label", null, t("title")),
                        window.SP_REACT.createElement(DFL.TextField, { value: metadata.title, onChange: (e) => setMetadata((prev) => ({ ...prev, title: e.target.value })), style: fieldStyle }))),
                window.SP_REACT.createElement(DFL.PanelSectionRow, null,
                    window.SP_REACT.createElement("div", { style: rowStackStyle },
                        window.SP_REACT.createElement("label", null, t("description")),
                        window.SP_REACT.createElement(DFL.Focusable, { style: { width: "100%" } },
                            window.SP_REACT.createElement("textarea", { value: metadata.description, onChange: (e) => setMetadata((prev) => ({
                                    ...prev,
                                    description: e.target.value,
                                    short_description: e.target.value,
                                })), style: {
                                    width: "100%",
                                    minHeight: "9rem",
                                    boxSizing: "border-box",
                                    resize: "vertical",
                                    borderRadius: 4,
                                    padding: 10,
                                    color: "white",
                                    background: "rgba(0,0,0,0.28)",
                                    border: "1px solid rgba(255,255,255,0.18)",
                                } })))),
                window.SP_REACT.createElement(DFL.PanelSectionRow, null,
                    window.SP_REACT.createElement("div", { style: rowStackStyle },
                        window.SP_REACT.createElement("label", null, t("developers")),
                        window.SP_REACT.createElement(DFL.TextField, { value: developerText, onChange: (e) => setDeveloperText(e.target.value), style: fieldStyle }))),
                window.SP_REACT.createElement(DFL.PanelSectionRow, null,
                    window.SP_REACT.createElement("div", { style: rowStackStyle },
                        window.SP_REACT.createElement("label", null, t("publishers")),
                        window.SP_REACT.createElement(DFL.TextField, { value: publisherText, onChange: (e) => setPublisherText(e.target.value), style: fieldStyle }))),
                window.SP_REACT.createElement(DFL.PanelSectionRow, null,
                    window.SP_REACT.createElement("div", { style: buttonRowStyle },
                        window.SP_REACT.createElement("div", { style: { ...flexFieldStyle, minWidth: "8rem" } },
                            window.SP_REACT.createElement("label", null, t("releaseDate")),
                            window.SP_REACT.createElement(DFL.TextField, { value: releaseText, onChange: (e) => setReleaseText(e.target.value), style: fieldStyle })),
                        window.SP_REACT.createElement("div", { style: { ...flexFieldStyle, minWidth: "7rem" } },
                            window.SP_REACT.createElement("label", null, t("rating")),
                            window.SP_REACT.createElement(DFL.TextField, { value: ratingText, onChange: (e) => setRatingText(e.target.value), style: fieldStyle }))))),
            window.SP_REACT.createElement(DFL.PanelSection, { title: t("categories") }, Object.entries(CATEGORY_LABELS).map(([category, label]) => (window.SP_REACT.createElement(DFL.PanelSectionRow, { key: category },
                window.SP_REACT.createElement(DFL.ToggleField, { label: label, checked: (metadata.store_categories || []).includes(Number(category)), onChange: (checked) => toggleCategory(Number(category), checked) }))))),
            window.SP_REACT.createElement(DFL.PanelSection, { title: t("retroTitle") },
                window.SP_REACT.createElement(DFL.PanelSectionRow, null,
                    window.SP_REACT.createElement("div", { style: compactTextStyle }, t("retroHint"))),
                window.SP_REACT.createElement(DFL.PanelSectionRow, null,
                    window.SP_REACT.createElement("div", { style: buttonRowStyle },
                        window.SP_REACT.createElement(DFL.TextField, { value: raGameId, onChange: (e) => setRaGameId(e.target.value), style: { ...flexFieldStyle, minWidth: "8rem" } }),
                        window.SP_REACT.createElement(FocusableButton, { className: "DialogButton", onClick: saveRaGameId }, t("save")),
                        window.SP_REACT.createElement(FocusableButton, { className: "DialogButton", onClick: autoDetectAchievements }, t("retroGameDetect")),
                        window.SP_REACT.createElement(FocusableButton, { className: "DialogButton", onClick: testAchievements }, t("retroGameTest")))),
                raSettings && !raSettings.enabled ? (window.SP_REACT.createElement(DFL.PanelSectionRow, null,
                    window.SP_REACT.createElement("div", { style: compactTextStyle },
                        t("retroEnabled"),
                        ": Off"))) : null,
                window.SP_REACT.createElement(DFL.PanelSectionRow, null,
                    window.SP_REACT.createElement("div", { style: rowStackStyle },
                        window.SP_REACT.createElement("div", { style: compactTextStyle }, t("retroGameSearchHint")),
                        window.SP_REACT.createElement("div", { style: buttonRowStyle },
                            window.SP_REACT.createElement(DFL.TextField, { value: raQuery, onChange: (e) => setRaQuery(e.target.value), style: { ...flexFieldStyle, minWidth: "10rem" } }),
                            window.SP_REACT.createElement(FocusableButton, { className: "DialogButton", disabled: raSearching, onClick: searchAchievements }, raSearching ? t("searching") : t("retroGameSearch"))))),
                window.SP_REACT.createElement(DFL.PanelSectionRow, null,
                    window.SP_REACT.createElement("div", { style: rowStackStyle },
                        raSearching ? window.SP_REACT.createElement(DFL.Spinner, null) : null,
                        !raSearching && !raResults.length ? (window.SP_REACT.createElement("div", { style: compactTextStyle }, t("retroGameNoMatches"))) : null,
                        raResults.map((result) => (window.SP_REACT.createElement(FocusableButton, { key: result.id, className: "DialogButton", onClick: () => void useAchievementResult(result), style: { justifyContent: "flex-start", textAlign: "left" } },
                            window.SP_REACT.createElement("div", { style: rowStackStyle },
                                window.SP_REACT.createElement("b", null, result.title),
                                window.SP_REACT.createElement("span", { style: compactTextStyle },
                                    result.console ? `${result.console} - ` : "",
                                    Math.round(result.score * 100),
                                    "% match")))))))))));
};

const MENU_KEY = "playhub-metadata-edit";
const isOpeningAppContextMenu = (items) => {
    if (!items?.length)
        return false;
    return !!DFL.findInReactTree(items, (x) => x?.props?.onSelected &&
        x.props.onSelected.toString().includes("launchSource"));
};
const handleItemDupes = (items) => {
    const existing = items.findIndex((x) => x?.key === MENU_KEY);
    if (existing !== -1)
        items.splice(existing, 1);
};
const findBestAppId = (items, fallbackAppId) => {
    let appid = fallbackAppId;
    const parentOverview = items.find((x) => x?._owner?.pendingProps?.overview?.appid &&
        x._owner.pendingProps.overview.appid !== fallbackAppId);
    if (parentOverview) {
        appid = parentOverview._owner.pendingProps.overview.appid;
    }
    if (appid === fallbackAppId) {
        const foundApp = DFL.findInTree(items, (x) => x?.app?.appid, {
            walkable: ["props", "children"],
        });
        if (foundApp)
            appid = foundApp.app.appid;
    }
    return Number(appid);
};
const spliceMetadataItem = (children, appid) => {
    const overview = getOverview(appid);
    if (!isNonSteamApp(overview))
        return;
    const propertiesMenuItemIdx = children.findIndex((item) => DFL.findInReactTree(item, (x) => x?.onSelected && x.onSelected.toString().includes("AppProperties")));
    const insertAt = propertiesMenuItemIdx >= 0 ? propertiesMenuItemIdx : children.length;
    children.splice(insertAt, 0, window.SP_REACT.createElement(DFL.MenuItem, { key: MENU_KEY, onSelected: () => DFL.Navigation.Navigate(`/playhub-metadata/${appid}`) }, t("editMetadata")));
};
const patchMenuItems = (menuItems, appid) => {
    const updatedAppId = findBestAppId(menuItems, appid);
    spliceMetadataItem(menuItems, updatedAppId);
};
const contextMenuPatch = (LibraryContextMenu) => {
    const patches = { unpatch: () => undefined };
    patches.outer = DFL.afterPatch(LibraryContextMenu.prototype, "render", (_args, component) => {
        let appid = 0;
        if (component._owner?.pendingProps?.overview?.appid) {
            appid = component._owner.pendingProps.overview.appid;
        }
        else {
            const foundApp = DFL.findInTree(component.props.children, (x) => x?.app?.appid, { walkable: ["props", "children"] });
            if (foundApp)
                appid = foundApp.app.appid;
        }
        if (!patches.inner) {
            patches.inner = DFL.afterPatch(component, "type", (_, ret) => {
                DFL.afterPatch(ret.type.prototype, "render", (_args2, ret2) => {
                    const menuItems = ret2?.props?.children?.[0];
                    if (!isOpeningAppContextMenu(menuItems))
                        return ret2;
                    try {
                        handleItemDupes(menuItems);
                        patchMenuItems(menuItems, appid);
                    }
                    catch (_error) {
                        return ret2;
                    }
                    return ret2;
                });
                DFL.afterPatch(ret.type.prototype, "shouldComponentUpdate", ([nextProps], shouldUpdate) => {
                    try {
                        handleItemDupes(nextProps.children);
                        if (shouldUpdate === true) {
                            patchMenuItems(nextProps.children, appid);
                        }
                    }
                    catch (_error) {
                        return shouldUpdate;
                    }
                    return shouldUpdate;
                });
                return ret;
            });
        }
        else if (Array.isArray(component.props.children)) {
            handleItemDupes(component.props.children);
            spliceMetadataItem(component.props.children, appid);
        }
        return component;
    });
    patches.unpatch = () => {
        patches.outer?.unpatch();
        patches.inner?.unpatch();
    };
    return patches;
};
const LibraryContextMenu = DFL.fakeRenderComponent(Object.values(DFL.findModuleByExport((e) => e?.toString?.().includes("().LibraryContextMenu"))).find((sibling) => sibling?.toString?.().includes("navigator:"))).type;

const METADATA_ROUTE = "/playhub-metadata/:appid";
var index = DFL.definePlugin(() => {
    void refreshMetadataCache();
    void refreshRaSettings();
    const unpatchSteam = installSteamPatches();
    const stopMetadataBootstrap = startMetadataBootstrap();
    const menuPatch = contextMenuPatch(LibraryContextMenu);
    routerHook.addRoute(METADATA_ROUTE, () => window.SP_REACT.createElement(MetadataPage, null), { exact: true });
    return {
        name: t("pluginName"),
        titleView: window.SP_REACT.createElement("div", { className: DFL.staticClasses.Title }, t("pluginName")),
        content: window.SP_REACT.createElement(Content, null),
        icon: window.SP_REACT.createElement(FaDatabase, null),
        onDismount() {
            try {
                menuPatch?.unpatch?.();
            }
            catch (error) {
                console.error("[Playhub Metadata] context menu unpatch failed", error);
            }
            try {
                stopMetadataBootstrap?.();
            }
            catch (error) {
                console.error("[Playhub Metadata] metadata bootstrap stop failed", error);
            }
            try {
                unpatchSteam?.();
            }
            catch (error) {
                console.error("[Playhub Metadata] Steam unpatch failed", error);
            }
            try {
                routerHook.removeRoute(METADATA_ROUTE);
            }
            catch (error) {
                console.error("[Playhub Metadata] route remove failed", error);
            }
        },
    };
});

export { index as default };
//# sourceMappingURL=index.js.map
