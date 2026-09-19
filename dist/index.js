// Playhub Metadata 1.8.2: rebuilt from src with TypeScript 5.9.3.
const index = (() => {
const factories = Object.create(null);
factories["backend"] = function(module, exports, require) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clearRpcs3Associations = exports.syncRpcs3Progress = exports.searchRpcs3TrophySets = exports.resolveRpcs3FromShortcut = exports.setRpcs3TrophyId = exports.setRpcs3DataPath = exports.getRpcs3Settings = exports.setScraperSettings = exports.setScraperLanguageOverride = exports.getScraperSettings = exports.searchRetroAchievementsGames = exports.resolveRetroAchievementsFromPath = exports.syncRetroAchievementsProgress = exports.syncTrueAchievementsProgress = exports.fetchAchievements = exports.setRetroAchievementsGameId = exports.testRetroAchievementsCredentials = exports.setRetroAchievementsSettings = exports.getRetroAchievementsSettings = exports.searchXboxTitles = exports.resolveXboxFromShortcut = exports.setAchievementCachePolicy = exports.setAchievementSource = exports.setXboxTitleId = exports.clearRetroAchievementsAssociations = exports.clearXboxAssociations = exports.testOpenXblCredentials = exports.loginTrueAchievements = exports.setXboxSettings = exports.getXboxSettings = exports.getAchievementSettings = exports.getLocalShortcuts = exports.setSteamActivityEnabled = exports.clearSteamActivityAssociation = exports.refetchSteamActivityAssociation = exports.getActivityRefreshProgress = exports.startRefreshSteamActivities = exports.getScanProgress = exports.startScanMissing = exports.enrichCommunityMedia = exports.autoFetchMetadata = exports.fetchMetadata = exports.searchMetadata = exports.clearAllMetadata = exports.removeMetadata = exports.saveMetadata = exports.getMetadata = exports.getAllMetadata = void 0;
const api_1 = require("@decky/api");
exports.getAllMetadata = (0, api_1.callable)("get_all_metadata");
exports.getMetadata = (0, api_1.callable)("get_metadata");
exports.saveMetadata = (0, api_1.callable)("save_metadata");
exports.removeMetadata = (0, api_1.callable)("remove_metadata");
exports.clearAllMetadata = (0, api_1.callable)("clear_all_metadata");
exports.searchMetadata = (0, api_1.callable)("search_metadata");
exports.fetchMetadata = (0, api_1.callable)("fetch_metadata");
exports.autoFetchMetadata = (0, api_1.callable)("auto_fetch_metadata");
exports.enrichCommunityMedia = (0, api_1.callable)("enrich_community_media");
exports.startScanMissing = (0, api_1.callable)("start_scan_missing");
exports.getScanProgress = (0, api_1.callable)("get_scan_progress");
exports.startRefreshSteamActivities = (0, api_1.callable)("start_refresh_steam_activities");
exports.getActivityRefreshProgress = (0, api_1.callable)("get_activity_refresh_progress");
exports.refetchSteamActivityAssociation = (0, api_1.callable)("refetch_steam_activity_association");
exports.clearSteamActivityAssociation = (0, api_1.callable)("clear_steam_activity_association");
exports.setSteamActivityEnabled = (0, api_1.callable)("set_steam_activity_enabled");
exports.getLocalShortcuts = (0, api_1.callable)("get_local_shortcuts");
exports.getAchievementSettings = (0, api_1.callable)("get_achievement_settings");
exports.getXboxSettings = (0, api_1.callable)("get_xbox_settings");
exports.setXboxSettings = (0, api_1.callable)("set_xbox_settings");
exports.loginTrueAchievements = (0, api_1.callable)("login_trueachievements");
exports.testOpenXblCredentials = (0, api_1.callable)("test_openxbl_credentials");
exports.clearXboxAssociations = (0, api_1.callable)("clear_xbox_associations");
exports.clearRetroAchievementsAssociations = (0, api_1.callable)("clear_retroachievements_associations");
exports.setXboxTitleId = (0, api_1.callable)("set_xbox_title_id");
exports.setAchievementSource = (0, api_1.callable)("set_achievement_source");
exports.setAchievementCachePolicy = (0, api_1.callable)("set_achievement_cache_policy");
exports.resolveXboxFromShortcut = (0, api_1.callable)("resolve_xbox_from_shortcut");
exports.searchXboxTitles = (0, api_1.callable)("search_xbox_titles");
exports.getRetroAchievementsSettings = (0, api_1.callable)("get_retroachievements_settings");
exports.setRetroAchievementsSettings = (0, api_1.callable)("set_retroachievements_settings");
exports.testRetroAchievementsCredentials = (0, api_1.callable)("test_retroachievements_credentials");
exports.setRetroAchievementsGameId = (0, api_1.callable)("set_retroachievements_game_id");
exports.fetchAchievements = (0, api_1.callable)("fetch_achievements");
exports.syncTrueAchievementsProgress = (0, api_1.callable)("sync_trueachievements_progress");
exports.syncRetroAchievementsProgress = (0, api_1.callable)("sync_retroachievements_progress");
exports.resolveRetroAchievementsFromPath = (0, api_1.callable)("resolve_retroachievements_from_path");
exports.searchRetroAchievementsGames = (0, api_1.callable)("search_retroachievements_games");
exports.getScraperSettings = (0, api_1.callable)("get_scraper_settings");
exports.setScraperLanguageOverride = (0, api_1.callable)("set_scraper_language_override");
exports.setScraperSettings = (0, api_1.callable)("set_scraper_settings");
exports.getRpcs3Settings = (0, api_1.callable)("get_rpcs3_settings");
exports.setRpcs3DataPath = (0, api_1.callable)("set_rpcs3_data_path");
exports.setRpcs3TrophyId = (0, api_1.callable)("set_rpcs3_trophy_id");
exports.resolveRpcs3FromShortcut = (0, api_1.callable)("resolve_rpcs3_from_shortcut");
exports.searchRpcs3TrophySets = (0, api_1.callable)("search_rpcs3_trophy_sets");
exports.syncRpcs3Progress = (0, api_1.callable)("sync_rpcs3_progress");
exports.clearRpcs3Associations = (0, api_1.callable)("clear_rpcs3_associations");
};
factories["compat"] = function(module, exports, require) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.patchMethod = exports.getOverviewPrototype = exports.functionSource = exports.moduleEntries = exports.getSteamGlobal = void 0;
const getSteamGlobal = (name) => {
    try {
        const root = globalThis;
        return root[name] ?? root.window?.[name];
    }
    catch (_error) {
        return undefined;
    }
};
exports.getSteamGlobal = getSteamGlobal;
const moduleEntries = (module) => {
    if (!module || (typeof module !== "object" && typeof module !== "function"))
        return [];
    const entries = [];
    for (const key of Object.keys(module)) {
        try {
            entries.push([key, module[key]]);
        }
        catch (_error) { /* Lazy export not ready. */ }
    }
    return entries;
};
exports.moduleEntries = moduleEntries;
const functionSource = (value) => {
    try {
        const fn = typeof value === "function" ? value : value?.render ?? value?.type;
        return typeof fn === "function" ? Function.prototype.toString.call(fn) : "";
    }
    catch (_error) {
        return "";
    }
};
exports.functionSource = functionSource;
/** Read globals at use time: Steam may populate them after the plugin is imported. */
const getOverviewPrototype = () => {
    const store = (0, exports.getSteamGlobal)("appStore");
    let overview;
    try {
        overview = store?.allApps?.find?.((app) => typeof app?.BIsShortcut === "function");
        if (!overview) {
            for (const candidate of store?.m_mapAppOverview?.values?.() ?? []) {
                if (typeof candidate?.BIsShortcut === "function") {
                    overview = candidate;
                    break;
                }
            }
        }
        const proto = overview && Object.getPrototypeOf(overview);
        return proto && proto !== Object.prototype ? proto : undefined;
    }
    catch (_error) {
        return undefined;
    }
};
exports.getOverviewPrototype = getOverviewPrototype;
/** Keep another plugin's later wrapper intact when this plugin is unloaded. */
const patchMethod = (target, methodName, replacement) => {
    if (!target || typeof target[methodName] !== "function")
        return () => undefined;
    const descriptor = Object.getOwnPropertyDescriptor(target, methodName);
    const original = target[methodName];
    let active = true;
    const patched = function (...args) {
        return active ? replacement(this, original.bind(this), args) : original.apply(this, args);
    };
    try {
        if (descriptor && !descriptor.configurable) {
            if (!descriptor.writable)
                return () => undefined;
            target[methodName] = patched;
        }
        else {
            Object.defineProperty(target, methodName, {
                configurable: true, enumerable: descriptor?.enumerable ?? false,
                writable: true, value: patched,
            });
        }
    }
    catch (error) {
        console.warn(`[Playhub Metadata] cannot patch ${methodName}`, error);
        return () => undefined;
    }
    return () => {
        active = false;
        if (target[methodName] !== patched)
            return;
        if (descriptor)
            Object.defineProperty(target, methodName, descriptor);
        else
            delete target[methodName];
    };
};
exports.patchMethod = patchMethod;
};
factories["components"] = function(module, exports, require) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetadataPage = exports.Content = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const ui_1 = require("@decky/ui");
const api_1 = require("@decky/api");
const react_1 = require("react");
const fa_1 = require("react-icons/fa");
const backend_1 = require("./backend");
const i18n_1 = require("./i18n");
const steam_1 = require("./steam");
const types_1 = require("./types");
const FocusableButton = (props) => ((0, jsx_runtime_1.jsx)(ui_1.DialogButton, { focusable: true, ...props }));
// ---------------------------------------------------------------------------
// Playhub design system (card look inspired by the Now Playing plugin):
// rounded glass cards, icon badges, subtle hints, option rows with checkmarks.
// ---------------------------------------------------------------------------
const PLAYHUB_ACCENTS = {
    library: "#66c0f4",
    activity: "#f2a33c",
    achievements: "#d9a337",
    ra: "#e8b923",
    xbox: "#57bb3b",
    ps3: "#2d7fe0",
    search: "#9b7ff0",
    identity: "#66c0f4",
    categories: "#4ec9b0",
};
const cardStyle = {
    width: "100%",
    minWidth: 0,
    boxSizing: "border-box",
    borderRadius: "14px",
    border: "1px solid rgba(255,255,255,.10)",
    background: "linear-gradient(145deg,rgba(255,255,255,.085),rgba(255,255,255,.035))",
    padding: "14px",
    display: "flex",
    flexDirection: "column",
    gap: "0.6rem",
    overflow: "hidden",
};
const cardHeaderStyle = {
    display: "flex",
    alignItems: "center",
    gap: "0.55rem",
    fontSize: "0.98em",
    fontWeight: 700,
    letterSpacing: ".01em",
    minWidth: 0,
};
const cardHintStyle = {
    opacity: 0.6,
    fontSize: "0.85em",
    lineHeight: 1.4,
};
const cardSubheadingStyle = {
    fontSize: "0.85em",
    fontWeight: 700,
    opacity: 0.85,
    marginTop: "0.3rem",
};
const fieldLabelStyle = {
    fontSize: "0.8em",
    opacity: 0.65,
};
const statChipRowStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "0.35rem",
    width: "100%",
    minWidth: 0,
};
const qamCardSpacingStyle = {
    marginBottom: "12px",
};
const QamDropdown = (props) => ((0, jsx_runtime_1.jsx)("div", { className: "playhub-qam-dropdown", style: { width: "100%", minWidth: 0, maxWidth: "100%", boxSizing: "border-box" }, children: (0, jsx_runtime_1.jsx)(ui_1.Dropdown, { ...props }) }));
const isLikelyRpcs3GameOption = (game) => {
    const text = `${game.exe || ""} ${game.launch_options || ""} ${game.start_dir || ""} ${game.shortcut_path || ""} ${game.name || ""}`
        .toLowerCase()
        .replace(/\\/g, "/");
    return (/(?:^|[\s/"'])rpcs3(?:\.exe)?(?:[\s/"']|$)/i.test(text) ||
        text.includes("/dev_hdd0/") ||
        text.includes("/ps3_game/") ||
        text.includes("/ps3iso/") ||
        text.includes("/roms/ps3/") ||
        text.includes("/playstation 3/") ||
        text.includes("eboot.bin"));
};
const sliderClampStyle = {
    width: "100%",
    maxWidth: "100%",
    minWidth: 0,
    overflow: "hidden",
    boxSizing: "border-box",
};
const halfButtonStyle = {
    flex: "1 1 45%",
    minWidth: 0,
};
const optionButtonStyle = {
    width: "100%",
    minWidth: 0,
};
const optionContentStyle = {
    width: "100%",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    textAlign: "left",
    minWidth: 0,
};
const PlayhubCard = (props) => {
    const accent = props.accent || PLAYHUB_ACCENTS.library;
    return ((0, jsx_runtime_1.jsxs)("div", { style: { ...cardStyle, ...(props.style || {}) }, children: [(0, jsx_runtime_1.jsxs)("div", { style: cardHeaderStyle, children: [props.icon ? ((0, jsx_runtime_1.jsx)("span", { style: {
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: "26px",
                            height: "26px",
                            borderRadius: "8px",
                            flex: "0 0 auto",
                            background: `color-mix(in srgb, ${accent} 20%, transparent)`,
                            color: accent,
                        }, children: props.icon })) : null, (0, jsx_runtime_1.jsx)("span", { style: { minWidth: 0 }, children: props.title })] }), props.hint ? (0, jsx_runtime_1.jsx)("div", { style: cardHintStyle, children: props.hint }) : null, props.children] }));
};
// Progress bar styled after Now Playing's local-music image cache progress:
// a slim rounded track with an accent fill, label on top and counts on the right.
const PlayhubProgressBar = (props) => {
    const total = Math.max(0, Number(props.total || 0));
    const completed = Math.max(0, Math.min(Number(props.completed || 0), total || Number(props.completed || 0)));
    const percent = total > 0 ? Math.max(0, Math.min(100, Math.round((completed / total) * 100))) : 0;
    const accent = props.accent || "#66c0f4";
    return ((0, jsx_runtime_1.jsxs)("div", { style: {
            marginTop: 4,
            padding: "8px 9px",
            borderRadius: 7,
            background: "rgba(255,255,255,.045)",
            overflow: "hidden",
            width: "100%",
            boxSizing: "border-box",
        }, children: [(0, jsx_runtime_1.jsxs)("div", { style: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 8,
                    fontSize: ".74em",
                    lineHeight: 1.3,
                }, children: [(0, jsx_runtime_1.jsx)("span", { style: {
                            minWidth: 0,
                            flex: "1 1 auto",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "normal",
                            display: "-webkit-box",
                            WebkitBoxOrient: "vertical",
                            WebkitLineClamp: 2,
                            lineHeight: 1.3,
                            maxHeight: "2.6em",
                            overflowWrap: "anywhere",
                            opacity: 0.76,
                        }, children: props.label }), total > 0 ? ((0, jsx_runtime_1.jsxs)("span", { style: { flex: "0 0 auto", opacity: 0.5 }, children: [completed, "/", total] })) : null] }), (0, jsx_runtime_1.jsx)("div", { style: {
                    height: 3,
                    marginTop: 6,
                    borderRadius: 999,
                    background: "rgba(255,255,255,.10)",
                    overflow: "hidden",
                }, children: (0, jsx_runtime_1.jsx)("div", { style: {
                        width: total > 0 ? `${percent}%` : "0%",
                        height: "100%",
                        borderRadius: 999,
                        background: accent,
                        transition: "width 180ms ease",
                    } }) })] }));
};
const metadataScanLabel = (progress) => {
    const title = progress.current_title || progress.current || "";
    if (progress.phase === "ign" && title)
        return `${(0, i18n_1.t)("metadataPhaseIgn")} ${title}`;
    if (progress.phase === "google" && title)
        return `${(0, i18n_1.t)("metadataPhaseGoogle")} ${title}`;
    if (progress.phase === "mymemory" && title)
        return `${(0, i18n_1.t)("metadataPhaseMyMemory")} ${title}`;
    if (progress.phase === "saved" && title)
        return `${(0, i18n_1.t)("metadataPhaseSaved")} ${title}`;
    if (progress.phase === "no_match" && title)
        return `${(0, i18n_1.t)("metadataPhaseNoMatch")} ${title}`;
    if (progress.phase === "failed" && title)
        return `${(0, i18n_1.t)("metadataPhaseFailed")} ${title}`;
    return progress.message || title || (0, i18n_1.t)("scanning");
};
const StatChip = (props) => ((0, jsx_runtime_1.jsxs)("div", { style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "10px",
        width: "100%",
        boxSizing: "border-box",
        padding: "8px 12px",
        borderRadius: "10px",
        background: "rgba(255,255,255,.06)",
        border: "1px solid rgba(255,255,255,.08)",
        minWidth: 0,
        overflow: "hidden",
    }, children: [(0, jsx_runtime_1.jsx)("span", { style: {
                fontSize: "0.85em",
                opacity: 0.7,
                minWidth: 0,
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
            }, children: props.label }), (0, jsx_runtime_1.jsx)("span", { style: {
                fontSize: "1.05em",
                fontWeight: 700,
                flex: "0 0 auto",
                color: props.accent || "#ffffff",
            }, children: props.value })] }));
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
    gap: "0.65rem",
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
const spacedButtonRowStyle = {
    ...buttonRowStyle,
    marginTop: "0.35rem",
};
const actionButtonStackStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    gap: "0.35rem",
    flex: "1 1 13rem",
    minWidth: 0,
};
const resultsStackStyle = {
    ...rowStackStyle,
    marginTop: "1.25rem",
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
const inlineStatusStyle = {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    ...compactTextStyle,
};
const scanSpinnerStyle = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: "1rem",
    height: "1rem",
    flex: "0 0 1rem",
    overflow: "hidden",
};
const scanSpinnerInnerStyle = {
    display: "inline-flex",
    transform: "scale(0.5)",
    transformOrigin: "center",
};
const activityStatusStyle = {
    ...inlineStatusStyle,
    minHeight: "3.35rem",
};
const activitySpinnerStyle = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: "3.35rem",
    height: "3.35rem",
    flex: "0 0 3.35rem",
    overflow: "hidden",
};
const activitySpinnerInnerStyle = {
    display: "inline-flex",
    transform: "scale(0.72)",
    transformOrigin: "center",
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
    store_categories: [types_1.StoreCategory.SinglePlayer],
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
const achievementCachePolicies = [
    "hourly",
    "daily",
    "weekly",
    "pc_session",
    "manual",
];
const PLAYHUB_HOME_ACTIVITY_SETTING_KEY = "playhub-metadata:show-activities-in-home";
const PLAYHUB_HOME_ACTIVITY_COUNT_SETTING_KEY = "playhub-metadata:home-activity-count";
const PLAYHUB_HOME_ACTIVITY_SHUFFLE_SETTING_KEY = "playhub-metadata:home-activity-shuffle";
const PLAYHUB_HOME_ACTIVITY_DEFAULT_LIMIT = 3;
const PLAYHUB_HOME_ACTIVITY_MAX_LIMIT = 6;
const POST_PLAY_ACHIEVEMENT_SYNC_SETTING_KEY = "playhub-metadata:post-play-achievement-sync-enabled";
const readPostPlayAchievementSyncEnabled = () => {
    try {
        return window.localStorage.getItem(POST_PLAY_ACHIEVEMENT_SYNC_SETTING_KEY) !== "0";
    }
    catch (_error) {
        return true;
    }
};
const setPostPlayAchievementSyncEnabledSetting = (enabled) => {
    try {
        window.localStorage.setItem(POST_PLAY_ACHIEVEMENT_SYNC_SETTING_KEY, enabled ? "1" : "0");
    }
    catch (_error) {
        // Steam's embedded browser may reject storage in unusual states; keep UI optimistic.
    }
    window.dispatchEvent(new CustomEvent("playhub-metadata:post-play-sync-setting-changed", {
        detail: { enabled },
    }));
};
const clampHomeActivityCount = (value) => Math.max(1, Math.min(PLAYHUB_HOME_ACTIVITY_MAX_LIMIT, Math.round(Number.isFinite(value) ? value : PLAYHUB_HOME_ACTIVITY_DEFAULT_LIMIT)));
const readHomeActivityCount = () => {
    try {
        return clampHomeActivityCount(Number(window.localStorage.getItem(PLAYHUB_HOME_ACTIVITY_COUNT_SETTING_KEY) || PLAYHUB_HOME_ACTIVITY_DEFAULT_LIMIT));
    }
    catch (_error) {
        return PLAYHUB_HOME_ACTIVITY_DEFAULT_LIMIT;
    }
};
const readShowActivitiesInHome = () => {
    try {
        return window.localStorage.getItem(PLAYHUB_HOME_ACTIVITY_SETTING_KEY) === "1";
    }
    catch (_error) {
        return false;
    }
};
const setShowActivitiesInHomeSetting = (enabled) => {
    try {
        window.localStorage.setItem(PLAYHUB_HOME_ACTIVITY_SETTING_KEY, enabled ? "1" : "0");
    }
    catch (_error) {
        // Steam's embedded browser may reject storage in unusual states; keep UI optimistic.
    }
    window.dispatchEvent(new CustomEvent("playhub-metadata:home-activity-setting-changed", {
        detail: { enabled },
    }));
    window.dispatchEvent(new Event("playhub-metadata:updated"));
};
const shuffleHomeActivitiesSetting = () => {
    const value = `${Date.now()}:${Math.random().toString(36).slice(2)}`;
    try {
        window.localStorage.setItem(PLAYHUB_HOME_ACTIVITY_SHUFFLE_SETTING_KEY, value);
    }
    catch (_error) {
        // localStorage can fail in odd embedded contexts; the event still asks Steam to resync.
    }
    window.dispatchEvent(new CustomEvent("playhub-metadata:home-activity-setting-changed", {
        detail: { shuffle: value },
    }));
    window.dispatchEvent(new Event("playhub-metadata:updated"));
};
const resetHomeActivitiesToMostRecentSetting = () => {
    try {
        window.localStorage.removeItem(PLAYHUB_HOME_ACTIVITY_SHUFFLE_SETTING_KEY);
    }
    catch (_error) {
        // localStorage can fail in odd embedded contexts; the event still asks Steam to resync.
    }
    window.dispatchEvent(new CustomEvent("playhub-metadata:home-activity-setting-changed", {
        detail: { shuffle: "" },
    }));
    window.dispatchEvent(new Event("playhub-metadata:updated"));
};
const setHomeActivityCountSetting = (count) => {
    const clamped = clampHomeActivityCount(count);
    try {
        window.localStorage.setItem(PLAYHUB_HOME_ACTIVITY_COUNT_SETTING_KEY, String(clamped));
    }
    catch (_error) {
        // Steam's embedded browser may reject storage in unusual states; keep UI optimistic.
    }
    window.dispatchEvent(new CustomEvent("playhub-metadata:home-activity-setting-changed", {
        detail: { count: clamped },
    }));
    window.dispatchEvent(new Event("playhub-metadata:updated"));
    return clamped;
};
const useNonSteamGames = () => {
    const [games, setGames] = (0, react_1.useState)([]);
    const loadGames = (0, react_1.useCallback)(async () => {
        const currentGames = await (0, steam_1.allNonSteamGames)();
        setGames(currentGames);
        return currentGames;
    }, []);
    return { games, loadGames };
};
const Content = () => {
    const { games, loadGames } = useNonSteamGames();
    const [metadataCount, setMetadataCount] = (0, react_1.useState)(0);
    const [busy, setBusy] = (0, react_1.useState)(false);
    const [scanMessage, setScanMessage] = (0, react_1.useState)("");
    const [activityBusy, setActivityBusy] = (0, react_1.useState)(false);
    const [activityMessage, setActivityMessage] = (0, react_1.useState)("");
    const [showActivitiesInHome, setShowActivitiesInHome] = (0, react_1.useState)(readShowActivitiesInHome);
    const [homeActivityCount, setHomeActivityCount] = (0, react_1.useState)(readHomeActivityCount);
    const [postPlayAchievementSyncEnabled, setPostPlayAchievementSyncEnabled] = (0, react_1.useState)(readPostPlayAchievementSyncEnabled);
    const [xboxBulkBusy, setXboxBulkBusy] = (0, react_1.useState)(false);
    const [xboxBulkMessage, setXboxBulkMessage] = (0, react_1.useState)("");
    const [raBulkBusy, setRaBulkBusy] = (0, react_1.useState)(false);
    const [raBulkMessage, setRaBulkMessage] = (0, react_1.useState)("");
    const [rpcs3BulkBusy, setRpcs3BulkBusy] = (0, react_1.useState)(false);
    const [rpcs3BulkMessage, setRpcs3BulkMessage] = (0, react_1.useState)("");
    const [rpcs3PathBusy, setRpcs3PathBusy] = (0, react_1.useState)(false);
    const [rpcs3Settings, setRpcs3SettingsState] = (0, react_1.useState)({
        enabled: true,
        trophy_ids: {},
        data_path: "",
        automatic: true,
        data_path_valid: true,
        data_path_ready: false,
        trophy_set_count: 0,
    });
    const [rpcs3PathDraft, setRpcs3PathDraft] = (0, react_1.useState)("");
    const [scraper, setScraper] = (0, react_1.useState)(null);
    const [scanProgress, setScanProgress] = (0, react_1.useState)({ completed: 0, total: 0, phase: "idle", current_title: "" });
    const [activityProgress, setActivityProgress] = (0, react_1.useState)({ completed: 0, total: 0 });
    const [bulkProgress, setBulkProgress] = (0, react_1.useState)({ completed: 0, total: 0 });
    const saveScraperSettings = async (next) => {
        try {
            const saved = await (0, backend_1.setScraperSettings)(next.language ?? scraper?.language ?? "", next.translate_ign ?? null);
            setScraper(saved);
        }
        catch (error) {
            api_1.toaster.toast({ title: (0, i18n_1.t)("pluginName"), body: String(error) });
        }
    };
    const [ra, setRa] = (0, react_1.useState)({
        enabled: false,
        username: "",
        api_key: "",
        game_ids: {},
    });
    const [xbox, setXbox] = (0, react_1.useState)({
        enabled: false,
        api_key: "",
        xuid: "",
        gamertag: "",
        ta_logged_in: false,
        title_ids: {},
    });
    const [retroAchievementCachePolicy, setRetroAchievementCachePolicyState] = (0, react_1.useState)("daily");
    const [xboxAchievementCachePolicy, setXboxAchievementCachePolicyState] = (0, react_1.useState)("daily");
    const [rpcs3AchievementCachePolicy, setRpcs3AchievementCachePolicyState] = (0, react_1.useState)("pc_session");
    const missing = Math.max(games.length - metadataCount, 0);
    const refresh = (0, react_1.useCallback)(async (forceMetadata = false) => {
        const metadataRefresh = forceMetadata
            ? (0, steam_1.refreshMetadataCache)()
            : (0, steam_1.ensureMetadataCache)();
        const [currentGames, achievementSettings, currentRpcs3Settings, currentScraper] = await Promise.all([
            loadGames(),
            (0, backend_1.getAchievementSettings)(),
            (0, backend_1.getRpcs3Settings)(),
            (0, backend_1.getScraperSettings)(),
            metadataRefresh,
        ]);
        setMetadataCount(currentGames.filter((game) => steam_1.metadataCache[String(game.appid)]).length);
        setScraper(currentScraper);
        setRa(achievementSettings.retroachievements);
        setXbox(achievementSettings.xbox);
        setRetroAchievementCachePolicyState(achievementSettings.achievement_cache?.retroachievements_policy || achievementSettings.achievement_cache?.policy || "daily");
        setXboxAchievementCachePolicyState(achievementSettings.achievement_cache?.xbox_policy || achievementSettings.achievement_cache?.policy || "daily");
        setRpcs3AchievementCachePolicyState(achievementSettings.achievement_cache?.rpcs3_policy || "pc_session");
        setRpcs3SettingsState(currentRpcs3Settings);
        setRpcs3PathDraft(currentRpcs3Settings.data_path || "");
    }, [loadGames]);
    (0, react_1.useEffect)(() => {
        void refresh();
    }, [refresh]);
    const scanMissing = async () => {
        if (busy)
            return;
        setBusy(true);
        setScanProgress({ completed: 0, total: 0, phase: "starting", current_title: "" });
        setScanMessage((0, i18n_1.t)("scanning"));
        try {
            await (0, backend_1.startScanMissing)(games);
            const interval = window.setInterval(async () => {
                const progress = await (0, backend_1.getScanProgress)();
                setScanProgress({
                    completed: progress.completed || 0,
                    total: progress.total || 0,
                    phase: progress.phase || "",
                    current_title: progress.current_title || progress.current || "",
                });
                setScanMessage(metadataScanLabel(progress));
                if (!progress.running) {
                    window.clearInterval(interval);
                    await refresh(true);
                    setBusy(false);
                    api_1.toaster.toast({ title: (0, i18n_1.t)("pluginName"), body: (0, i18n_1.t)("scanComplete") });
                }
            }, 800);
        }
        catch (error) {
            setBusy(false);
            api_1.toaster.toast({ title: (0, i18n_1.t)("pluginName"), body: String(error) });
        }
    };
    const performDeleteAllMetadata = async () => {
        if (busy)
            return;
        setBusy(true);
        try {
            const appliedEntries = Object.entries(steam_1.metadataCache);
            await (0, backend_1.clearAllMetadata)();
            appliedEntries.forEach(([appIdText, metadata]) => {
                (0, steam_1.clearAppliedMetadata)(Number(appIdText), metadata);
            });
            Object.keys(steam_1.metadataCache).forEach((key) => delete steam_1.metadataCache[key]);
            await refresh(true);
            setScanMessage((0, i18n_1.t)("deleteAllMetadataDone"));
            api_1.toaster.toast({ title: (0, i18n_1.t)("pluginName"), body: (0, i18n_1.t)("deleteAllMetadataDone") });
            window.dispatchEvent(new Event("playhub-metadata:updated"));
        }
        catch (error) {
            api_1.toaster.toast({ title: (0, i18n_1.t)("pluginName"), body: String(error) });
        }
        finally {
            setBusy(false);
        }
    };
    const deleteAllMetadata = () => {
        if (busy)
            return;
        (0, ui_1.showModal)((0, jsx_runtime_1.jsx)(ui_1.ConfirmModal, { strTitle: (0, i18n_1.t)("deleteMetadataConfirmTitle"), strDescription: (0, i18n_1.t)("deleteAllMetadataConfirm"), strOKButtonText: (0, i18n_1.t)("confirmYes"), strCancelButtonText: (0, i18n_1.t)("confirmNo"), bDestructiveWarning: true, onOK: () => void performDeleteAllMetadata() }));
    };
    const refreshActivities = async () => {
        if (activityBusy)
            return;
        setActivityBusy(true);
        setActivityMessage((0, i18n_1.t)("refreshingActivities"));
        try {
            await (0, backend_1.startRefreshSteamActivities)(games);
            const interval = window.setInterval(async () => {
                const progress = await (0, backend_1.getActivityRefreshProgress)();
                setActivityProgress({ completed: progress.completed || 0, total: progress.total || 0 });
                setActivityMessage(progress.current ||
                    progress.message ||
                    `${progress.completed}/${progress.total}`);
                if (!progress.running) {
                    window.clearInterval(interval);
                    await (0, steam_1.refreshMetadataCache)();
                    setMetadataCount(games.filter((game) => steam_1.metadataCache[String(game.appid)]).length);
                    setActivityBusy(false);
                    window.dispatchEvent(new Event("playhub-metadata:activity-refreshed"));
                    window.dispatchEvent(new Event("playhub-metadata:updated"));
                    api_1.toaster.toast({ title: (0, i18n_1.t)("pluginName"), body: (0, i18n_1.t)("activityRefreshComplete") });
                }
            }, 800);
        }
        catch (error) {
            setActivityBusy(false);
            api_1.toaster.toast({ title: (0, i18n_1.t)("pluginName"), body: String(error) });
        }
    };
    const retroAchievementLaunchText = (game) => [game.exe, game.start_dir, game.launch_options, game.shortcut_path, game.name]
        .map((value) => String(value || ""))
        .filter(Boolean)
        .join(" ");
    const isExcludedRetroAchievementsPlatform = (game) => {
        if (isLikelyRpcs3GameOption(game))
            return true;
        const text = [
            game.exe || "",
            game.launch_options || "",
            game.start_dir || "",
            game.shortcut_path || "",
        ]
            .filter(Boolean)
            .join(" ")
            .toLowerCase()
            .replace(/\\/g, "/");
        const emulatorHints = ["xemu", "xenia", "dolphin", "cemu", "rpcs3"];
        const platformPathHints = [
            "/roms/xbox/",
            "/roms/xbox360/",
            "/roms/xbox 360/",
            "/roms/gamecube/",
            "/roms/gc/",
            "/roms/wii/",
            "/roms/wiiu/",
            "/roms/wii u/",
            "/roms/ps3/",
            "/roms/playstation 3/",
            "/ps3iso/",
            "/xbox/",
            "/xbox360/",
            "/xbox 360/",
            "/gamecube/",
            "/wii/",
            "/wiiu/",
            "/wii u/",
            "/ps3/",
            "/playstation 3/",
            "/dev_hdd0/",
        ];
        const platformExtensions = [
            ".xbe",
            ".xex",
            ".xiso",
            ".rvz",
            ".wbfs",
            ".gcz",
            ".wud",
            ".wux",
            ".wua",
            ".rpx",
        ];
        return (emulatorHints.some((hint) => text.includes(hint)) ||
            platformPathHints.some((hint) => text.includes(hint)) ||
            platformExtensions.some((extension) => text.includes(extension)));
    };
    const isLikelyRetroAchievementsTarget = (game, source = "auto") => {
        if ((0, steam_1.isUwphookGameOption)(game) || isExcludedRetroAchievementsPlatform(game))
            return false;
        const text = retroAchievementLaunchText(game).toLowerCase().replace(/\\/g, "/");
        const emulatorHints = [
            "retroarch",
            "emulationstation",
            "emudeck",
            "launchbox",
            "pcsx2",
            "duckstation",
            "swanstation",
            "dolphin",
            "ppsspp",
            "mame",
            "fbneo",
            "finalburn",
            "fightcade",
            "mupen",
            "parallel",
            "melonds",
            "desmume",
            "mgba",
            "snes9x",
            "bsnes",
            "nestopia",
            "flycast",
            "redream",
        ];
        const romHints = [
            ".zip", ".7z", ".iso", ".rvz", ".wbfs", ".bin", ".chd", ".cue", ".img", ".pbp",
            ".z64", ".n64", ".v64", ".nds", ".gba", ".gbc", ".gb",
            ".sfc", ".smc", ".nes", ".fds", ".cdi", ".gdi", ".m3u",
            "/roms/", "\\roms\\",
        ];
        if (emulatorHints.some((hint) => text.includes(hint)))
            return true;
        if (romHints.some((hint) => text.includes(hint.toLowerCase())))
            return true;
        return source === "retroachievements";
    };
    const scanRetroAchievements = async () => {
        if (raBulkBusy || xboxBulkBusy || busy)
            return;
        if (!ra.enabled || !ra.api_key.trim()) {
            api_1.toaster.toast({ title: (0, i18n_1.t)("pluginName"), body: (0, i18n_1.t)("retroLoginFailed") });
            return;
        }
        const settings = await (0, backend_1.getAchievementSettings)();
        const sources = settings.achievement_sources || {};
        const existingIds = settings.retroachievements.game_ids || {};
        const targets = games.filter((game) => {
            const key = String(game.appid);
            const source = sources[key] || "auto";
            if (source === "disabled" || source === "xbox")
                return false;
            if (existingIds[key])
                return false;
            if (steam_1.achievementsCache[key]?.steam?.nTotal)
                return false;
            return isLikelyRetroAchievementsTarget(game, source);
        });
        if (!targets.length) {
            api_1.toaster.toast({ title: (0, i18n_1.t)("pluginName"), body: (0, i18n_1.t)("retroBulkNothing") });
            return;
        }
        setRaBulkBusy(true);
        setRaBulkMessage(`${(0, i18n_1.t)("retroBulkScanning")}: 0/${targets.length}`);
        let assigned = 0;
        let skipped = 0;
        try {
            for (let index = 0; index < targets.length; index += 1) {
                const game = targets[index];
                const prefix = `${index + 1}/${targets.length} - ${game.name}`;
                setBulkProgress({ completed: index, total: targets.length });
                setRaBulkMessage(`${prefix}: ${(0, i18n_1.t)("retroBulkDetecting")}`);
                try {
                    const payload = await (0, backend_1.resolveRetroAchievementsFromPath)(game.appid, retroAchievementLaunchText(game), game.name);
                    if (payload?.steam?.nTotal) {
                        (0, steam_1.applyAchievementPayload)(game.appid, payload);
                        assigned += 1;
                        setRaBulkMessage(`${prefix}: ${(0, i18n_1.t)("retroBulkAppliedOne")}`);
                    }
                    else {
                        skipped += 1;
                        setRaBulkMessage(`${prefix}: ${(0, i18n_1.t)("retroBulkSkippedOne")}`);
                    }
                }
                catch (_error) {
                    skipped += 1;
                    setRaBulkMessage(`${prefix}: ${(0, i18n_1.t)("retroBulkSkippedOne")}`);
                }
            }
            const refreshed = await (0, backend_1.getAchievementSettings)();
            setRa(refreshed.retroachievements);
            await (0, steam_1.refreshRaSettings)();
            setRaBulkMessage(`${(0, i18n_1.t)("retroBulkDone")}: ${assigned} ${(0, i18n_1.t)("retroBulkApplied")}, ${skipped} ${(0, i18n_1.t)("retroBulkSkipped")}`);
            api_1.toaster.toast({
                title: (0, i18n_1.t)("pluginName"),
                body: `${(0, i18n_1.t)("retroBulkDone")}: ${assigned} ${(0, i18n_1.t)("retroBulkApplied")}, ${skipped} ${(0, i18n_1.t)("retroBulkSkipped")}`,
            });
        }
        finally {
            setRaBulkBusy(false);
        }
    };
    const syncMatchedRetroAchievementsProgress = async () => {
        if (raBulkBusy || xboxBulkBusy || busy)
            return;
        if (!ra.enabled || !ra.api_key.trim()) {
            api_1.toaster.toast({ title: (0, i18n_1.t)("pluginName"), body: (0, i18n_1.t)("retroLoginFailed") });
            return;
        }
        const settings = await (0, backend_1.getAchievementSettings)();
        const sources = settings.achievement_sources || {};
        const existingIds = settings.retroachievements.game_ids || {};
        const targets = games.filter((game) => {
            const key = String(game.appid);
            const source = sources[key] || "auto";
            if (source === "disabled" || source === "xbox")
                return false;
            if (isExcludedRetroAchievementsPlatform(game))
                return false;
            return Boolean(existingIds[key]);
        });
        if (!targets.length) {
            api_1.toaster.toast({ title: (0, i18n_1.t)("pluginName"), body: (0, i18n_1.t)("retroSyncNothing") });
            return;
        }
        setRaBulkBusy(true);
        setRaBulkMessage(`${(0, i18n_1.t)("retroSyncProgress")}: 0/${targets.length}`);
        let synced = 0;
        let skipped = 0;
        try {
            for (let index = 0; index < targets.length; index += 1) {
                const game = targets[index];
                const prefix = `${index + 1}/${targets.length} - ${game.name}`;
                setBulkProgress({ completed: index, total: targets.length });
                setRaBulkMessage(`${prefix}: ${(0, i18n_1.t)("retroSyncingProgress")}`);
                try {
                    const payload = await (0, backend_1.syncRetroAchievementsProgress)(game.appid);
                    if (payload?.steam?.nTotal) {
                        (0, steam_1.applyAchievementPayload)(game.appid, payload);
                        synced += 1;
                        setRaBulkMessage(`${prefix}: ${(0, i18n_1.t)("retroBulkAppliedOne")}`);
                    }
                    else {
                        skipped += 1;
                        setRaBulkMessage(`${prefix}: ${(0, i18n_1.t)("retroBulkSkippedOne")}`);
                    }
                }
                catch (_error) {
                    skipped += 1;
                    setRaBulkMessage(`${prefix}: ${(0, i18n_1.t)("retroBulkSkippedOne")}`);
                }
            }
            await (0, steam_1.refreshRaSettings)();
            setRaBulkMessage(`${(0, i18n_1.t)("retroSyncDone")}: ${synced} ${(0, i18n_1.t)("retroBulkApplied")}, ${skipped} ${(0, i18n_1.t)("retroBulkSkipped")}`);
            api_1.toaster.toast({
                title: (0, i18n_1.t)("pluginName"),
                body: `${(0, i18n_1.t)("retroSyncDone")}: ${synced} ${(0, i18n_1.t)("retroBulkApplied")}, ${skipped} ${(0, i18n_1.t)("retroBulkSkipped")}`,
            });
        }
        finally {
            setRaBulkBusy(false);
        }
    };
    const saveRaSettings = async (next) => {
        const merged = { ...ra, ...next };
        setRa(merged);
        const saved = await (0, backend_1.setRetroAchievementsSettings)(merged.enabled, merged.username, merged.api_key);
        setRa(saved);
        await (0, steam_1.refreshRaSettings)();
    };
    const testRaLogin = async () => {
        const saved = await (0, backend_1.setRetroAchievementsSettings)(true, ra.username, ra.api_key);
        setRa(saved);
        await (0, steam_1.refreshRaSettings)();
        const result = await (0, backend_1.testRetroAchievementsCredentials)(saved.username, saved.api_key);
        api_1.toaster.toast({
            title: (0, i18n_1.t)("pluginName"),
            body: result.ok ? (0, i18n_1.t)("retroLoginOk") : result.message || (0, i18n_1.t)("retroLoginFailed"),
        });
    };
    const saveXboxSettings = async (next) => {
        const merged = { ...xbox, ...next };
        setXbox(merged);
        const saved = await (0, backend_1.setXboxSettings)(merged.enabled, merged.api_key || "");
        setXbox(saved);
        await (0, steam_1.refreshRaSettings)();
    };
    const saveAchievementCachePolicy = async (provider, policy) => {
        if (provider === "retroachievements")
            setRetroAchievementCachePolicyState(policy);
        else if (provider === "xbox")
            setXboxAchievementCachePolicyState(policy);
        else
            setRpcs3AchievementCachePolicyState(policy);
        const saved = await (0, backend_1.setAchievementCachePolicy)(provider, policy);
        // Reflect exactly what the backend persisted.
        setRetroAchievementCachePolicyState(saved.retroachievements_policy || policy);
        setXboxAchievementCachePolicyState(saved.xbox_policy || policy);
        setRpcs3AchievementCachePolicyState(saved.rpcs3_policy || policy);
        const settings = await (0, backend_1.getAchievementSettings)();
        const sources = settings.achievement_sources || {};
        const raIds = settings.retroachievements.game_ids || {};
        const xboxIds = settings.xbox.title_ids || {};
        const rpcs3Ids = settings.rpcs3?.trophy_ids || {};
        (0, steam_1.clearAchievementsForApps)(games
            .filter((game) => {
            const key = String(game.appid);
            const source = sources[key] || "auto";
            if (source === "disabled")
                return false;
            if (provider === "retroachievements") {
                return Boolean(raIds[key]) && source !== "xbox" && source !== "rpcs3";
            }
            if (provider === "xbox") {
                return Boolean(xboxIds[key]) && source !== "retroachievements" && source !== "rpcs3";
            }
            return Boolean(rpcs3Ids[key]) && source !== "retroachievements" && source !== "xbox";
        })
            .map((game) => game.appid));
        await (0, steam_1.refreshRaSettings)();
        window.dispatchEvent(new Event("playhub-metadata:achievement-cache-policy-changed"));
    };
    const testXboxLogin = async () => {
        if (!xbox.api_key.trim()) {
            const saved = await (0, backend_1.setXboxSettings)(true, xbox.api_key || "");
            setXbox(saved);
            await (0, steam_1.refreshRaSettings)();
            api_1.toaster.toast({ title: (0, i18n_1.t)("pluginName"), body: (0, i18n_1.t)("xboxLoginNeedsProfile") });
            return;
        }
        const result = await (0, backend_1.testOpenXblCredentials)(xbox.api_key || "");
        const refreshed = await (0, backend_1.getAchievementSettings)();
        setXbox(refreshed.xbox);
        await (0, steam_1.refreshRaSettings)();
        api_1.toaster.toast({ title: (0, i18n_1.t)("pluginName"), body: result.ok ? (0, i18n_1.t)("xboxLoginOk") : result.message || (0, i18n_1.t)("xboxLoginFailed") });
    };
    const openExternalUrl = (url) => {
        try {
            const steamClient = window?.SteamClient;
            if (steamClient?.System?.OpenInSystemBrowser) {
                steamClient.System.OpenInSystemBrowser(url);
                return;
            }
            if (steamClient?.Overlay?.OpenExternalBrowserURL) {
                steamClient.Overlay.OpenExternalBrowserURL(url);
                return;
            }
        }
        catch (_error) {
            // Fall back to the browser below.
        }
        window.open(url, "_blank", "noopener,noreferrer");
    };
    const openRetroAchievements = () => openExternalUrl("https://retroachievements.org/");
    const openOpenXbl = () => openExternalUrl("https://xbl.io/");
    const clearAllXboxMatches = async () => {
        if (xboxBulkBusy || busy)
            return;
        setXboxBulkBusy(true);
        try {
            const saved = await (0, backend_1.clearXboxAssociations)();
            setXbox(saved);
            (0, steam_1.clearAchievementsForApps)(games.map((game) => game.appid));
            await (0, steam_1.refreshRaSettings)();
            setXboxBulkMessage((0, i18n_1.t)("xboxClearAllDone"));
            api_1.toaster.toast({ title: (0, i18n_1.t)("pluginName"), body: (0, i18n_1.t)("xboxClearAllDone") });
        }
        finally {
            setXboxBulkBusy(false);
        }
    };
    const clearAllRetroAchievementsMatches = async () => {
        if (raBulkBusy || busy)
            return;
        setRaBulkBusy(true);
        try {
            const saved = await (0, backend_1.clearRetroAchievementsAssociations)();
            setRa(saved);
            (0, steam_1.clearAchievementsForApps)(games.map((game) => game.appid));
            await (0, steam_1.refreshRaSettings)();
            setRaBulkMessage((0, i18n_1.t)("retroClearAllDone"));
            api_1.toaster.toast({ title: (0, i18n_1.t)("pluginName"), body: (0, i18n_1.t)("retroClearAllDone") });
        }
        finally {
            setRaBulkBusy(false);
        }
    };
    const bulkApplyXboxAchievements = async () => {
        if (xboxBulkBusy || busy)
            return;
        if (!xbox.enabled) {
            api_1.toaster.toast({ title: (0, i18n_1.t)("pluginName"), body: (0, i18n_1.t)("xboxLoginFailed") });
            return;
        }
        const targets = games.filter((game) => (0, steam_1.isUwphookGameOption)(game) && !xbox.title_ids[String(game.appid)]);
        if (!targets.length) {
            api_1.toaster.toast({ title: (0, i18n_1.t)("pluginName"), body: (0, i18n_1.t)("xboxBulkNothing") });
            return;
        }
        setXboxBulkBusy(true);
        setXboxBulkMessage(`${(0, i18n_1.t)("xboxBulkScanning")}: 0/${targets.length}`);
        let assigned = 0;
        let skipped = 0;
        try {
            for (let index = 0; index < targets.length; index += 1) {
                const game = targets[index];
                const prefix = `${index + 1}/${targets.length} - ${game.name}`;
                setBulkProgress({ completed: index, total: targets.length });
                setXboxBulkMessage(`${prefix}: ${(0, i18n_1.t)("xboxBulkSearching")}`);
                try {
                    const results = await (0, backend_1.searchXboxTitles)(game.name, 5, game.appid, false);
                    const best = results.find((item) => item.total == null || item.total > 0) || results[0];
                    if (!best || best.score < 0.82) {
                        skipped += 1;
                        setXboxBulkMessage(`${prefix}: ${(0, i18n_1.t)("xboxBulkSkippedOne")}`);
                        continue;
                    }
                    setXboxBulkMessage(`${prefix}: ${(0, i18n_1.t)("xboxBulkApplying")}`);
                    await (0, backend_1.setXboxTitleId)(game.appid, best.id);
                    await (0, backend_1.setAchievementSource)(game.appid, "xbox");
                    (0, steam_1.clearAchievementsForApp)(game.appid);
                    const payload = await (0, backend_1.fetchAchievements)(game.appid);
                    if (payload?.steam?.nTotal) {
                        (0, steam_1.applyAchievementPayload)(game.appid, payload);
                        assigned += 1;
                        setXboxBulkMessage(`${prefix}: ${(0, i18n_1.t)("xboxBulkAppliedOne")}`);
                    }
                    else {
                        skipped += 1;
                        setXboxBulkMessage(`${prefix}: ${(0, i18n_1.t)("xboxBulkSkippedOne")}`);
                    }
                }
                catch (_error) {
                    skipped += 1;
                    setXboxBulkMessage(`${prefix}: ${(0, i18n_1.t)("xboxBulkSkippedOne")}`);
                }
            }
            const refreshed = await (0, backend_1.getAchievementSettings)();
            setXbox(refreshed.xbox);
            await (0, steam_1.refreshRaSettings)();
            setXboxBulkMessage(`${(0, i18n_1.t)("xboxBulkDone")}: ${assigned} ${(0, i18n_1.t)("xboxBulkApplied")}, ${skipped} ${(0, i18n_1.t)("xboxBulkSkipped")}`);
            api_1.toaster.toast({
                title: (0, i18n_1.t)("pluginName"),
                body: `${(0, i18n_1.t)("xboxBulkDone")}: ${assigned} ${(0, i18n_1.t)("xboxBulkApplied")}, ${skipped} ${(0, i18n_1.t)("xboxBulkSkipped")}`,
            });
        }
        finally {
            setXboxBulkBusy(false);
        }
    };
    const syncMatchedTrueAchievementsProgress = async () => {
        if (xboxBulkBusy || busy)
            return;
        if (!xbox.enabled || !xbox.api_key.trim()) {
            api_1.toaster.toast({ title: (0, i18n_1.t)("pluginName"), body: (0, i18n_1.t)("xboxSyncProgressFailed") });
            return;
        }
        const targets = games.filter((game) => (0, steam_1.isUwphookGameOption)(game) && !!xbox.title_ids[String(game.appid)]);
        if (!targets.length) {
            api_1.toaster.toast({ title: (0, i18n_1.t)("pluginName"), body: (0, i18n_1.t)("xboxBulkNothing") });
            return;
        }
        setXboxBulkBusy(true);
        let synced = 0;
        let skipped = 0;
        try {
            for (let index = 0; index < targets.length; index += 1) {
                const game = targets[index];
                const prefix = `${index + 1}/${targets.length} - ${game.name}`;
                setBulkProgress({ completed: index, total: targets.length });
                setXboxBulkMessage(`${prefix}: ${(0, i18n_1.t)("xboxSyncingProgress")}`);
                try {
                    const payload = await (0, backend_1.syncTrueAchievementsProgress)(game.appid);
                    if (payload?.steam?.nTotal) {
                        (0, steam_1.applyAchievementPayload)(game.appid, payload);
                        synced += 1;
                        setXboxBulkMessage(`${prefix}: ${(0, i18n_1.t)("xboxBulkAppliedOne")}`);
                    }
                    else {
                        skipped += 1;
                        setXboxBulkMessage(`${prefix}: ${(0, i18n_1.t)("xboxBulkSkippedOne")}`);
                    }
                }
                catch (_error) {
                    skipped += 1;
                    setXboxBulkMessage(`${prefix}: ${(0, i18n_1.t)("xboxBulkSkippedOne")}`);
                }
            }
            await (0, steam_1.refreshRaSettings)();
            setXboxBulkMessage(`${(0, i18n_1.t)("xboxSyncProgressOk")}: ${synced}, ${(0, i18n_1.t)("xboxBulkSkipped")}: ${skipped}`);
            api_1.toaster.toast({ title: (0, i18n_1.t)("pluginName"), body: `${(0, i18n_1.t)("xboxSyncProgressOk")}: ${synced}` });
        }
        finally {
            setXboxBulkBusy(false);
        }
    };
    const scanRpcs3Trophies = async () => {
        if (rpcs3BulkBusy || raBulkBusy || xboxBulkBusy || busy)
            return;
        const settings = await (0, backend_1.getAchievementSettings)();
        const sources = settings.achievement_sources || {};
        const existingIds = settings.rpcs3?.trophy_ids || {};
        const targets = games.filter((game) => {
            const key = String(game.appid);
            const source = sources[key] || "auto";
            if (source === "disabled" || source === "xbox" || source === "retroachievements") {
                return false;
            }
            if (existingIds[key])
                return false;
            return isLikelyRpcs3GameOption(game);
        });
        if (!targets.length) {
            api_1.toaster.toast({ title: (0, i18n_1.t)("pluginName"), body: (0, i18n_1.t)("rpcs3BulkNothing") });
            return;
        }
        setRpcs3BulkBusy(true);
        setRpcs3BulkMessage(`${(0, i18n_1.t)("rpcs3BulkScanning")}: 0/${targets.length}`);
        let assigned = 0;
        let skipped = 0;
        try {
            for (let index = 0; index < targets.length; index += 1) {
                const game = targets[index];
                const prefix = `${index + 1}/${targets.length} - ${game.name}`;
                setBulkProgress({ completed: index, total: targets.length });
                setRpcs3BulkMessage(`${prefix}: ${(0, i18n_1.t)("rpcs3BulkDetecting")}`);
                try {
                    const payload = await (0, backend_1.resolveRpcs3FromShortcut)(game.appid, game.name, retroAchievementLaunchText(game));
                    if (payload?.steam?.nTotal) {
                        await (0, backend_1.setAchievementSource)(game.appid, "rpcs3");
                        (0, steam_1.applyAchievementPayload)(game.appid, payload);
                        assigned += 1;
                        setRpcs3BulkMessage(`${prefix}: ${(0, i18n_1.t)("rpcs3BulkAppliedOne")}`);
                    }
                    else {
                        skipped += 1;
                        setRpcs3BulkMessage(`${prefix}: ${(0, i18n_1.t)("rpcs3BulkSkippedOne")}`);
                    }
                }
                catch (_error) {
                    skipped += 1;
                    setRpcs3BulkMessage(`${prefix}: ${(0, i18n_1.t)("rpcs3BulkSkippedOne")}`);
                }
            }
            await (0, steam_1.refreshRaSettings)();
            setRpcs3BulkMessage(`${(0, i18n_1.t)("rpcs3BulkDone")}: ${assigned} ${(0, i18n_1.t)("retroBulkApplied")}, ${skipped} ${(0, i18n_1.t)("retroBulkSkipped")}`);
            api_1.toaster.toast({
                title: (0, i18n_1.t)("pluginName"),
                body: `${(0, i18n_1.t)("rpcs3BulkDone")}: ${assigned} ${(0, i18n_1.t)("retroBulkApplied")}, ${skipped} ${(0, i18n_1.t)("retroBulkSkipped")}`,
            });
        }
        finally {
            setRpcs3BulkBusy(false);
        }
    };
    const applyRpcs3DataPath = async (path) => {
        if (rpcs3PathBusy || rpcs3BulkBusy || busy)
            return;
        setRpcs3PathBusy(true);
        try {
            const saved = await (0, backend_1.setRpcs3DataPath)(path.trim());
            setRpcs3SettingsState(saved);
            if (saved.ok === false) {
                api_1.toaster.toast({ title: (0, i18n_1.t)("pluginName"), body: (0, i18n_1.t)("rpcs3PathInvalid") });
                return;
            }
            setRpcs3PathDraft(saved.data_path || "");
            setRpcs3BulkMessage("");
            api_1.toaster.toast({
                title: (0, i18n_1.t)("pluginName"),
                body: saved.automatic
                    ? (0, i18n_1.t)("rpcs3PathAutomatic")
                    : saved.data_path_ready
                        ? `${saved.trophy_set_count || 0} ${(0, i18n_1.t)("rpcs3PathSetsFound")}`
                        : (0, i18n_1.t)("rpcs3PathSavedNoTrophies"),
            });
        }
        catch (error) {
            api_1.toaster.toast({ title: (0, i18n_1.t)("pluginName"), body: String(error) });
        }
        finally {
            setRpcs3PathBusy(false);
        }
    };
    const chooseRpcs3DataPath = async () => {
        if (rpcs3PathBusy || rpcs3BulkBusy || busy)
            return;
        try {
            const selected = await (0, api_1.openFilePicker)(1, rpcs3Settings.data_path || "C:\\", false, true);
            const path = selected?.realpath || selected?.path || "";
            if (path) {
                setRpcs3PathDraft(path);
                await applyRpcs3DataPath(path);
            }
        }
        catch (_error) {
            // Closing the picker is not an error.
        }
    };
    const syncMatchedRpcs3Progress = async () => {
        if (rpcs3BulkBusy || raBulkBusy || xboxBulkBusy || busy)
            return;
        const settings = await (0, backend_1.getAchievementSettings)();
        const sources = settings.achievement_sources || {};
        const existingIds = settings.rpcs3?.trophy_ids || {};
        const targets = games.filter((game) => {
            const key = String(game.appid);
            const source = sources[key] || "auto";
            if (source === "disabled")
                return false;
            return Boolean(existingIds[key]);
        });
        if (!targets.length) {
            api_1.toaster.toast({ title: (0, i18n_1.t)("pluginName"), body: (0, i18n_1.t)("rpcs3BulkNothing") });
            return;
        }
        setRpcs3BulkBusy(true);
        let synced = 0;
        let skipped = 0;
        try {
            for (let index = 0; index < targets.length; index += 1) {
                const game = targets[index];
                const prefix = `${index + 1}/${targets.length} - ${game.name}`;
                setBulkProgress({ completed: index, total: targets.length });
                setRpcs3BulkMessage(`${prefix}: ${(0, i18n_1.t)("rpcs3SyncingProgress")}`);
                try {
                    const payload = await (0, backend_1.syncRpcs3Progress)(game.appid);
                    if (payload?.steam?.nTotal) {
                        (0, steam_1.applyAchievementPayload)(game.appid, payload);
                        synced += 1;
                        setRpcs3BulkMessage(`${prefix}: ${(0, i18n_1.t)("rpcs3BulkAppliedOne")}`);
                    }
                    else {
                        skipped += 1;
                        setRpcs3BulkMessage(`${prefix}: ${(0, i18n_1.t)("rpcs3BulkSkippedOne")}`);
                    }
                }
                catch (_error) {
                    skipped += 1;
                    setRpcs3BulkMessage(`${prefix}: ${(0, i18n_1.t)("rpcs3BulkSkippedOne")}`);
                }
            }
            await (0, steam_1.refreshRaSettings)();
            setRpcs3BulkMessage(`${(0, i18n_1.t)("rpcs3SyncDone")}: ${synced} ${(0, i18n_1.t)("retroBulkApplied")}, ${skipped} ${(0, i18n_1.t)("retroBulkSkipped")}`);
            api_1.toaster.toast({
                title: (0, i18n_1.t)("pluginName"),
                body: `${(0, i18n_1.t)("rpcs3SyncDone")}: ${synced} ${(0, i18n_1.t)("retroBulkApplied")}, ${skipped} ${(0, i18n_1.t)("retroBulkSkipped")}`,
            });
        }
        finally {
            setRpcs3BulkBusy(false);
        }
    };
    const clearAllRpcs3Matches = async () => {
        if (rpcs3BulkBusy || busy)
            return;
        setRpcs3BulkBusy(true);
        try {
            await (0, backend_1.clearRpcs3Associations)();
            (0, steam_1.clearAchievementsForApps)(games.map((game) => game.appid));
            await (0, steam_1.refreshRaSettings)();
            setRpcs3BulkMessage((0, i18n_1.t)("rpcs3ClearAllDone"));
            api_1.toaster.toast({ title: (0, i18n_1.t)("pluginName"), body: (0, i18n_1.t)("rpcs3ClearAllDone") });
        }
        finally {
            setRpcs3BulkBusy(false);
        }
    };
    return ((0, jsx_runtime_1.jsxs)(ui_1.PanelSection, { children: [(0, jsx_runtime_1.jsx)("style", { children: `
        .playhub-qam-dropdown {
          width: 100% !important;
          min-width: 0 !important;
          max-width: 100% !important;
          box-sizing: border-box !important;
        }
        .playhub-qam-dropdown > * {
          width: 100% !important;
          min-width: 0 !important;
          max-width: 100% !important;
          box-sizing: border-box !important;
        }
        .playhub-qam-dropdown button,
        .playhub-qam-dropdown [role="button"] {
          width: 100% !important;
          min-width: 0 !important;
          max-width: 100% !important;
          box-sizing: border-box !important;
        }
      ` }), (0, jsx_runtime_1.jsx)(ui_1.PanelSectionRow, { children: (0, jsx_runtime_1.jsxs)(PlayhubCard, { icon: (0, jsx_runtime_1.jsx)(fa_1.FaDatabase, { size: 13 }), accent: PLAYHUB_ACCENTS.library, title: (0, i18n_1.t)("qamLibraryTitle"), style: qamCardSpacingStyle, children: [(0, jsx_runtime_1.jsxs)("div", { style: statChipRowStyle, children: [(0, jsx_runtime_1.jsx)(StatChip, { label: (0, i18n_1.t)("detected"), value: games.length }), (0, jsx_runtime_1.jsx)(StatChip, { label: (0, i18n_1.t)("saved"), value: metadataCount, accent: "#7cc46f" }), (0, jsx_runtime_1.jsx)(StatChip, { label: (0, i18n_1.t)("missing"), value: missing, accent: missing ? "#f2a33c" : undefined })] }), (0, jsx_runtime_1.jsx)(FocusableButton, { className: "DialogButton", disabled: busy || !games.length, onClick: scanMissing, children: busy ? (0, i18n_1.t)("scanning") : (0, i18n_1.t)("scanMissing") }), (0, jsx_runtime_1.jsx)(FocusableButton, { className: "DialogButton", disabled: busy || !metadataCount, onClick: deleteAllMetadata, children: (0, i18n_1.t)("deleteAllMetadata") }), busy ? ((0, jsx_runtime_1.jsx)(PlayhubProgressBar, { label: scanMessage || (0, i18n_1.t)("scanning"), completed: scanProgress.completed, total: scanProgress.total, busy: busy, accent: PLAYHUB_ACCENTS.library })) : scanMessage ? ((0, jsx_runtime_1.jsx)("div", { style: inlineStatusStyle, children: scanMessage })) : null] }) }), (0, jsx_runtime_1.jsx)(ui_1.PanelSectionRow, { children: (0, jsx_runtime_1.jsxs)(PlayhubCard, { icon: (0, jsx_runtime_1.jsx)(fa_1.FaSearch, { size: 13 }), accent: PLAYHUB_ACCENTS.search, title: (0, i18n_1.t)("scraperTitle"), hint: (0, i18n_1.t)("scraperHint"), style: qamCardSpacingStyle, children: [(0, jsx_runtime_1.jsx)("div", { style: cardSubheadingStyle, children: (0, i18n_1.t)("scraperSourceIgn") }), (0, jsx_runtime_1.jsx)("div", { style: fieldLabelStyle, children: (0, i18n_1.t)("scraperLanguage") }), (0, jsx_runtime_1.jsx)(QamDropdown, { rgOptions: (scraper?.languages ?? ["en"]).map((code) => ({
                                data: code,
                                label: scraper?.language_labels?.[code] || code,
                            })), selectedOption: scraper?.language ?? "en", onChange: (option) => void saveScraperSettings({ language: option.data }) }), (0, jsx_runtime_1.jsx)(ui_1.ToggleField, { bottomSeparator: "none", label: (0, i18n_1.t)("scraperTranslateIgn"), description: (0, i18n_1.t)("scraperTranslateIgnHint"), checked: scraper?.translate_ign ?? true, onChange: (checked) => void saveScraperSettings({ translate_ign: checked }) }), (0, jsx_runtime_1.jsx)("div", { style: cardHintStyle, children: (0, i18n_1.t)("scraperRescanHint") })] }) }), (0, jsx_runtime_1.jsx)(ui_1.PanelSectionRow, { children: (0, jsx_runtime_1.jsxs)(PlayhubCard, { icon: (0, jsx_runtime_1.jsx)(fa_1.FaNewspaper, { size: 13 }), accent: PLAYHUB_ACCENTS.activity, title: (0, i18n_1.t)("steamActivityTitle"), style: qamCardSpacingStyle, children: [(0, jsx_runtime_1.jsx)(FocusableButton, { className: "DialogButton", disabled: activityBusy || busy || !games.length, onClick: refreshActivities, children: activityBusy ? (0, i18n_1.t)("refreshingActivities") : (0, i18n_1.t)("refreshActivities") }), activityBusy ? ((0, jsx_runtime_1.jsx)(PlayhubProgressBar, { label: activityMessage || (0, i18n_1.t)("refreshingActivities"), completed: activityProgress.completed, total: activityProgress.total, busy: activityBusy, accent: PLAYHUB_ACCENTS.activity })) : activityMessage ? ((0, jsx_runtime_1.jsx)("div", { style: inlineStatusStyle, children: activityMessage })) : null, (0, jsx_runtime_1.jsx)(ui_1.ToggleField, { bottomSeparator: "none", label: (0, i18n_1.t)("showActivitiesInHome"), checked: showActivitiesInHome, onChange: (checked) => {
                                setShowActivitiesInHome(checked);
                                setShowActivitiesInHomeSetting(checked);
                            } }), (0, jsx_runtime_1.jsx)(ui_1.DropdownItem, { bottomSeparator: "none", label: (0, i18n_1.t)("homeActivityCount"), rgOptions: Array.from({ length: PLAYHUB_HOME_ACTIVITY_MAX_LIMIT }, (_, index) => ({ data: index + 1, label: String(index + 1) })), selectedOption: homeActivityCount, onChange: (option) => {
                                const clamped = setHomeActivityCountSetting(Number(option.data));
                                setHomeActivityCount(clamped);
                            } }), (0, jsx_runtime_1.jsx)("div", { style: cardHintStyle, children: (0, i18n_1.t)("homeActivityCountHint") }), (0, jsx_runtime_1.jsx)(FocusableButton, { className: "DialogButton", onClick: resetHomeActivitiesToMostRecentSetting, children: (0, i18n_1.t)("homeActivityMostRecent") }), (0, jsx_runtime_1.jsx)(FocusableButton, { className: "DialogButton", onClick: shuffleHomeActivitiesSetting, children: (0, i18n_1.t)("homeActivityShuffle") })] }) }), (0, jsx_runtime_1.jsx)(ui_1.PanelSectionRow, { children: (0, jsx_runtime_1.jsx)(PlayhubCard, { icon: (0, jsx_runtime_1.jsx)(fa_1.FaBolt, { size: 13 }), accent: PLAYHUB_ACCENTS.achievements, title: (0, i18n_1.t)("qamAchievementsTitle"), hint: (0, i18n_1.t)("achievementAutoSyncHint"), style: qamCardSpacingStyle, children: (0, jsx_runtime_1.jsx)(ui_1.ToggleField, { bottomSeparator: "none", label: (0, i18n_1.t)("postPlayAchievementSyncEnabled"), description: (0, i18n_1.t)("postPlayAchievementSyncHint"), checked: postPlayAchievementSyncEnabled, onChange: (checked) => {
                            setPostPlayAchievementSyncEnabled(checked);
                            setPostPlayAchievementSyncEnabledSetting(checked);
                        } }) }) }), (0, jsx_runtime_1.jsx)(ui_1.PanelSectionRow, { children: (0, jsx_runtime_1.jsxs)(PlayhubCard, { icon: (0, jsx_runtime_1.jsx)(fa_1.FaTrophy, { size: 13 }), accent: PLAYHUB_ACCENTS.ra, title: "RetroAchievements", hint: (0, i18n_1.t)("retroLoginHint"), style: qamCardSpacingStyle, children: [(0, jsx_runtime_1.jsx)(ui_1.ToggleField, { bottomSeparator: "none", label: (0, i18n_1.t)("retroEnabled"), checked: ra.enabled, onChange: (checked) => void saveRaSettings({ enabled: checked }) }), (0, jsx_runtime_1.jsx)("div", { style: fieldLabelStyle, children: (0, i18n_1.t)("retroUser") }), (0, jsx_runtime_1.jsx)(ui_1.TextField, { value: ra.username, onChange: (e) => setRa((prev) => ({ ...prev, username: e.target.value })), onBlur: () => void saveRaSettings({ username: ra.username }), style: fieldStyle }), (0, jsx_runtime_1.jsx)("div", { style: fieldLabelStyle, children: (0, i18n_1.t)("retroKey") }), (0, jsx_runtime_1.jsx)(ui_1.TextField, { value: ra.api_key, onChange: (e) => setRa((prev) => ({ ...prev, api_key: e.target.value })), onBlur: () => void saveRaSettings({ api_key: ra.api_key }), style: fieldStyle }), (0, jsx_runtime_1.jsx)(FocusableButton, { className: "DialogButton", onClick: testRaLogin, children: (0, i18n_1.t)("retroLogin") }), (0, jsx_runtime_1.jsx)(FocusableButton, { className: "DialogButton", onClick: openRetroAchievements, children: (0, i18n_1.t)("retroCreateAccount") }), (0, jsx_runtime_1.jsx)(FocusableButton, { className: "DialogButton", disabled: busy || xboxBulkBusy || raBulkBusy || rpcs3BulkBusy || !games.length || !ra.enabled || !ra.api_key.trim(), onClick: scanRetroAchievements, children: raBulkBusy ? (0, i18n_1.t)("retroBulkScanning") : (0, i18n_1.t)("retroBulkScan") }), (0, jsx_runtime_1.jsx)(FocusableButton, { className: "DialogButton", disabled: busy || xboxBulkBusy || raBulkBusy || rpcs3BulkBusy || !games.length || !ra.enabled || !ra.api_key.trim(), onClick: syncMatchedRetroAchievementsProgress, children: (0, i18n_1.t)("retroSyncProgress") }), (0, jsx_runtime_1.jsx)(FocusableButton, { className: "DialogButton", disabled: busy || xboxBulkBusy || raBulkBusy || rpcs3BulkBusy || !games.length, onClick: clearAllRetroAchievementsMatches, children: (0, i18n_1.t)("retroClearAll") }), raBulkBusy ? ((0, jsx_runtime_1.jsx)(PlayhubProgressBar, { label: raBulkMessage || (0, i18n_1.t)("retroBulkScanning"), completed: bulkProgress.completed, total: bulkProgress.total, busy: raBulkBusy, accent: PLAYHUB_ACCENTS.ra })) : raBulkMessage ? ((0, jsx_runtime_1.jsx)("div", { style: inlineStatusStyle, children: raBulkMessage })) : null, (0, jsx_runtime_1.jsx)("div", { style: fieldLabelStyle, children: (0, i18n_1.t)("achievementCacheRetroTitle") }), (0, jsx_runtime_1.jsx)(QamDropdown, { rgOptions: achievementCachePolicies.map((policy) => ({
                                data: policy,
                                label: (0, i18n_1.t)(`achievementCache_${policy}`),
                            })), selectedOption: retroAchievementCachePolicy, onChange: (option) => void saveAchievementCachePolicy("retroachievements", option.data) })] }) }), (0, jsx_runtime_1.jsx)(ui_1.PanelSectionRow, { children: (0, jsx_runtime_1.jsxs)(PlayhubCard, { icon: (0, jsx_runtime_1.jsx)(fa_1.FaXbox, { size: 13 }), accent: PLAYHUB_ACCENTS.xbox, title: (0, i18n_1.t)("xboxTitle"), style: qamCardSpacingStyle, children: [(0, jsx_runtime_1.jsx)(ui_1.ToggleField, { bottomSeparator: "none", label: (0, i18n_1.t)("xboxEnabled"), checked: xbox.enabled, onChange: (checked) => void saveXboxSettings({ enabled: checked }) }), (0, jsx_runtime_1.jsx)("div", { style: fieldLabelStyle, children: (0, i18n_1.t)("xboxProfile") }), (0, jsx_runtime_1.jsx)(ui_1.TextField, { value: xbox.api_key, onChange: (e) => setXbox((prev) => ({ ...prev, api_key: e.target.value })), onBlur: () => void saveXboxSettings({ api_key: xbox.api_key }), style: fieldStyle }), xbox.ta_logged_in ? ((0, jsx_runtime_1.jsx)("div", { style: cardHintStyle, children: xbox.gamertag ? `${(0, i18n_1.t)("xboxLoggedIn")}: ${xbox.gamertag}` : (0, i18n_1.t)("xboxLoggedIn") })) : null, (0, jsx_runtime_1.jsx)(FocusableButton, { className: "DialogButton", onClick: testXboxLogin, children: (0, i18n_1.t)("xboxLogin") }), (0, jsx_runtime_1.jsx)(FocusableButton, { className: "DialogButton", onClick: openOpenXbl, children: (0, i18n_1.t)("xboxOpenOpenXbl") }), (0, jsx_runtime_1.jsx)(FocusableButton, { className: "DialogButton", disabled: busy || xboxBulkBusy || raBulkBusy || rpcs3BulkBusy || !games.length, onClick: bulkApplyXboxAchievements, children: xboxBulkBusy ? (0, i18n_1.t)("xboxBulkScanning") : (0, i18n_1.t)("xboxBulkScan") }), (0, jsx_runtime_1.jsx)(FocusableButton, { className: "DialogButton", disabled: busy || xboxBulkBusy || raBulkBusy || rpcs3BulkBusy || !games.length || !xbox.api_key.trim(), onClick: syncMatchedTrueAchievementsProgress, children: (0, i18n_1.t)("xboxSyncAllProgress") }), (0, jsx_runtime_1.jsx)(FocusableButton, { className: "DialogButton", disabled: busy || xboxBulkBusy || raBulkBusy || rpcs3BulkBusy || !games.length, onClick: clearAllXboxMatches, children: (0, i18n_1.t)("xboxClearAll") }), xboxBulkBusy ? ((0, jsx_runtime_1.jsx)(PlayhubProgressBar, { label: xboxBulkMessage || (0, i18n_1.t)("xboxBulkScanning"), completed: bulkProgress.completed, total: bulkProgress.total, busy: xboxBulkBusy, accent: PLAYHUB_ACCENTS.xbox })) : xboxBulkMessage ? ((0, jsx_runtime_1.jsx)("div", { style: inlineStatusStyle, children: xboxBulkMessage })) : null, (0, jsx_runtime_1.jsx)("div", { style: fieldLabelStyle, children: (0, i18n_1.t)("achievementCacheXboxTitle") }), (0, jsx_runtime_1.jsx)(QamDropdown, { rgOptions: achievementCachePolicies.map((policy) => ({
                                data: policy,
                                label: (0, i18n_1.t)(`achievementCache_${policy}`),
                            })), selectedOption: xboxAchievementCachePolicy, onChange: (option) => void saveAchievementCachePolicy("xbox", option.data) })] }) }), (0, jsx_runtime_1.jsx)(ui_1.PanelSectionRow, { children: (0, jsx_runtime_1.jsxs)(PlayhubCard, { icon: (0, jsx_runtime_1.jsx)(fa_1.FaPlaystation, { size: 13 }), accent: PLAYHUB_ACCENTS.ps3, title: (0, i18n_1.t)("rpcs3Title"), hint: (0, i18n_1.t)("rpcs3SettingsHint"), style: qamCardSpacingStyle, children: [(0, jsx_runtime_1.jsx)("div", { style: fieldLabelStyle, children: (0, i18n_1.t)("rpcs3DataPath") }), (0, jsx_runtime_1.jsx)("div", { style: cardHintStyle, children: (0, i18n_1.t)("rpcs3DataPathHint") }), (0, jsx_runtime_1.jsx)(ui_1.TextField, { value: rpcs3PathDraft, disabled: rpcs3PathBusy || rpcs3BulkBusy || busy, onChange: (event) => setRpcs3PathDraft(event.target.value) }), (0, jsx_runtime_1.jsx)(FocusableButton, { className: "DialogButton", disabled: rpcs3PathBusy || rpcs3BulkBusy || busy, onClick: chooseRpcs3DataPath, children: (0, i18n_1.t)("rpcs3ChooseDataPath") }), (0, jsx_runtime_1.jsx)(FocusableButton, { className: "DialogButton", disabled: rpcs3PathBusy ||
                                rpcs3BulkBusy ||
                                busy ||
                                rpcs3PathDraft.trim() === (rpcs3Settings.data_path || ""), onClick: () => void applyRpcs3DataPath(rpcs3PathDraft), children: (0, i18n_1.t)("rpcs3SaveDataPath") }), rpcs3Settings.data_path ? ((0, jsx_runtime_1.jsx)(FocusableButton, { className: "DialogButton", disabled: rpcs3PathBusy || rpcs3BulkBusy || busy, onClick: () => void applyRpcs3DataPath(""), children: (0, i18n_1.t)("rpcs3ResetDataPath") })) : null, (0, jsx_runtime_1.jsx)("div", { style: inlineStatusStyle, children: rpcs3Settings.automatic
                                ? (0, i18n_1.t)("rpcs3PathAutomatic")
                                : !rpcs3Settings.data_path_valid
                                    ? (0, i18n_1.t)("rpcs3PathInvalid")
                                    : rpcs3Settings.data_path_ready
                                        ? `${rpcs3Settings.trophy_set_count || 0} ${(0, i18n_1.t)("rpcs3PathSetsFound")}`
                                        : (0, i18n_1.t)("rpcs3PathSavedNoTrophies") }), (0, jsx_runtime_1.jsx)(FocusableButton, { className: "DialogButton", disabled: busy || rpcs3BulkBusy || xboxBulkBusy || raBulkBusy || !games.length, onClick: scanRpcs3Trophies, children: rpcs3BulkBusy ? (0, i18n_1.t)("rpcs3BulkScanning") : (0, i18n_1.t)("rpcs3BulkScan") }), (0, jsx_runtime_1.jsx)(FocusableButton, { className: "DialogButton", disabled: busy || rpcs3BulkBusy || xboxBulkBusy || raBulkBusy || !games.length, onClick: syncMatchedRpcs3Progress, children: (0, i18n_1.t)("rpcs3SyncAllProgress") }), (0, jsx_runtime_1.jsx)(FocusableButton, { className: "DialogButton", disabled: busy || rpcs3BulkBusy || !games.length, onClick: clearAllRpcs3Matches, children: (0, i18n_1.t)("rpcs3ClearAll") }), rpcs3BulkBusy ? ((0, jsx_runtime_1.jsx)(PlayhubProgressBar, { label: rpcs3BulkMessage || (0, i18n_1.t)("rpcs3BulkScanning"), completed: bulkProgress.completed, total: bulkProgress.total, busy: rpcs3BulkBusy, accent: PLAYHUB_ACCENTS.ps3 })) : rpcs3BulkMessage ? ((0, jsx_runtime_1.jsx)("div", { style: inlineStatusStyle, children: rpcs3BulkMessage })) : null, (0, jsx_runtime_1.jsx)("div", { style: fieldLabelStyle, children: (0, i18n_1.t)("achievementCacheRpcs3Title") }), (0, jsx_runtime_1.jsx)(QamDropdown, { rgOptions: achievementCachePolicies.map((policy) => ({
                                data: policy,
                                label: (0, i18n_1.t)(`achievementCache_${policy}`),
                            })), selectedOption: rpcs3AchievementCachePolicy, onChange: (option) => void saveAchievementCachePolicy("rpcs3", option.data) })] }) })] }));
};
exports.Content = Content;
const MetadataPage = () => {
    const { appid } = (0, ui_1.useParams)();
    const appId = Number(appid);
    const overview = (0, steam_1.getOverview)(appId);
    const nonSteam = (0, steam_1.isNonSteamApp)(overview);
    const [metadata, setMetadata] = (0, react_1.useState)(metadataTemplate((0, steam_1.appName)(appId)));
    const [developerText, setDeveloperText] = (0, react_1.useState)("");
    const [publisherText, setPublisherText] = (0, react_1.useState)("");
    const [releaseText, setReleaseText] = (0, react_1.useState)("");
    const [ratingText, setRatingText] = (0, react_1.useState)("");
    const [query, setQuery] = (0, react_1.useState)((0, steam_1.appName)(appId));
    const [results, setResults] = (0, react_1.useState)([]);
    const [busy, setBusy] = (0, react_1.useState)(false);
    const [raSettings, setRaSettings] = (0, react_1.useState)(null);
    const [raGameId, setRaGameId] = (0, react_1.useState)("");
    const [raQuery, setRaQuery] = (0, react_1.useState)((0, steam_1.appName)(appId));
    const [raResults, setRaResults] = (0, react_1.useState)([]);
    const [raSearching, setRaSearching] = (0, react_1.useState)(false);
    const [achievementSource, setAchievementSourceState] = (0, react_1.useState)("auto");
    const [xboxTitleId, setXboxTitleIdState] = (0, react_1.useState)("");
    const [xboxQuery, setXboxQuery] = (0, react_1.useState)((0, steam_1.appName)(appId));
    const [xboxResults, setXboxResults] = (0, react_1.useState)([]);
    const [xboxSearching, setXboxSearching] = (0, react_1.useState)(false);
    const [rpcs3TrophyId, setRpcs3TrophyIdState] = (0, react_1.useState)("");
    const [scraperLanguageOverride, setScraperLanguageOverrideState] = (0, react_1.useState)("auto");
    const [gameScraperSettings, setGameScraperSettings] = (0, react_1.useState)(null);
    const [rpcs3Query, setRpcs3Query] = (0, react_1.useState)((0, steam_1.appName)(appId));
    const [rpcs3Results, setRpcs3Results] = (0, react_1.useState)([]);
    const [rpcs3Searching, setRpcs3Searching] = (0, react_1.useState)(false);
    const [steamActivityQuery, setSteamActivityQuery] = (0, react_1.useState)((0, steam_1.appName)(appId));
    const [steamActivityBusy, setSteamActivityBusy] = (0, react_1.useState)(false);
    const setFormMetadata = (0, react_1.useCallback)((next) => {
        setMetadata(next);
        setDeveloperText(personsToText(next.developers));
        setPublisherText(personsToText(next.publishers));
        setReleaseText(epochToDate(next.release_date));
        setRatingText(next.rating == null ? "" : String(next.rating));
        setSteamActivityQuery(next.steam_activity_title || next.title || (0, steam_1.appName)(appId));
    }, [appId]);
    const load = (0, react_1.useCallback)(async () => {
        const saved = await (0, backend_1.getMetadata)(appId);
        setFormMetadata(saved || metadataTemplate((0, steam_1.appName)(appId)));
        const settings = await (0, backend_1.getAchievementSettings)();
        setRaSettings(settings.retroachievements);
        setRaGameId(settings.retroachievements.game_ids[String(appId)]?.toString() || "");
        setAchievementSourceState(settings.achievement_sources[String(appId)] || "auto");
        setXboxTitleIdState(settings.xbox.title_ids[String(appId)] || "");
        setRpcs3TrophyIdState(settings.rpcs3?.trophy_ids?.[String(appId)] || "");
        try {
            const scraperSettings = await (0, backend_1.getScraperSettings)();
            setGameScraperSettings(scraperSettings);
            setScraperLanguageOverrideState(scraperSettings.language_overrides?.[String(appId)] || "auto");
        }
        catch (_error) {
            // Keep the defaults when settings are temporarily unavailable.
        }
    }, [appId, setFormMetadata]);
    (0, react_1.useEffect)(() => {
        void load();
    }, [load]);
    const normalizedMetadata = (0, react_1.useMemo)(() => ({
        ...metadata,
        title: (0, steam_1.cleanTitle)(metadata.title),
        developers: textToPersons(developerText),
        publishers: textToPersons(publisherText),
        release_date: dateToEpoch(releaseText),
        rating: parseRating(ratingText),
        store_categories: metadata.store_categories || [],
    }), [developerText, metadata, publisherText, ratingText, releaseText]);
    const saveCurrent = async () => {
        if (!nonSteam) {
            api_1.toaster.toast({ title: (0, i18n_1.t)("pluginName"), body: (0, i18n_1.t)("notNonSteam") });
            return;
        }
        const saved = await (0, backend_1.saveMetadata)(appId, normalizedMetadata);
        steam_1.metadataCache[String(appId)] = saved;
        (0, steam_1.applyMetadata)(appId);
        api_1.toaster.toast({ title: (0, i18n_1.t)("pluginName"), body: (0, i18n_1.t)("saved") });
    };
    const saveScraperLanguageOverride = async (value) => {
        try {
            const overrides = await (0, backend_1.setScraperLanguageOverride)(appId, value === "auto" ? "" : value);
            setScraperLanguageOverrideState(overrides[String(appId)] || "auto");
            api_1.toaster.toast({ title: (0, i18n_1.t)("pluginName"), body: (0, i18n_1.t)("saved") });
        }
        catch (error) {
            api_1.toaster.toast({ title: (0, i18n_1.t)("pluginName"), body: String(error) });
        }
    };
    const refreshMetadataForGame = async () => {
        setBusy(true);
        try {
            await (0, backend_1.setScraperLanguageOverride)(appId, scraperLanguageOverride === "auto" ? "" : scraperLanguageOverride);
            const latestScraperSettings = await (0, backend_1.getScraperSettings)();
            setGameScraperSettings(latestScraperSettings);
            const fetched = await (0, backend_1.autoFetchMetadata)(appId, query || metadata.title || (0, steam_1.appName)(appId));
            if (!fetched) {
                api_1.toaster.toast({ title: (0, i18n_1.t)("pluginName"), body: (0, i18n_1.t)("noResults") });
                return;
            }
            steam_1.metadataCache[String(appId)] = fetched;
            (0, steam_1.applyMetadata)(appId);
            setFormMetadata(fetched);
            api_1.toaster.toast({ title: (0, i18n_1.t)("pluginName"), body: (0, i18n_1.t)("scraperGameRefreshDone") });
        }
        catch (error) {
            api_1.toaster.toast({ title: (0, i18n_1.t)("pluginName"), body: String(error) });
        }
        finally {
            setBusy(false);
        }
    };
    const search = async () => {
        setBusy(true);
        try {
            setResults(await (0, backend_1.searchMetadata)(query, 8, appId));
        }
        catch (error) {
            api_1.toaster.toast({ title: (0, i18n_1.t)("pluginName"), body: String(error) });
        }
        finally {
            setBusy(false);
        }
    };
    const applyResult = async (result) => {
        setBusy(true);
        try {
            const fetched = await (0, backend_1.fetchMetadata)(result.slug || result.url, appId);
            if (!fetched)
                return;
            const saved = await (0, backend_1.saveMetadata)(appId, fetched);
            steam_1.metadataCache[String(appId)] = saved;
            (0, steam_1.applyMetadata)(appId);
            setFormMetadata(saved);
            api_1.toaster.toast({ title: (0, i18n_1.t)("pluginName"), body: (0, i18n_1.t)("saved") });
        }
        finally {
            setBusy(false);
        }
    };
    const performRemoveCurrent = async () => {
        if (busy)
            return;
        setBusy(true);
        try {
            const currentMetadata = steam_1.metadataCache[String(appId)] || metadata;
            await (0, backend_1.removeMetadata)(appId);
            (0, steam_1.clearAppliedMetadata)(appId, currentMetadata);
            delete steam_1.metadataCache[String(appId)];
            setFormMetadata(metadataTemplate((0, steam_1.appName)(appId)));
            window.dispatchEvent(new Event("playhub-metadata:updated"));
            api_1.toaster.toast({ title: (0, i18n_1.t)("pluginName"), body: (0, i18n_1.t)("removeToast") });
        }
        catch (error) {
            api_1.toaster.toast({ title: (0, i18n_1.t)("pluginName"), body: String(error) });
        }
        finally {
            setBusy(false);
        }
    };
    const removeCurrent = () => {
        (0, ui_1.showModal)((0, jsx_runtime_1.jsx)(ui_1.ConfirmModal, { strTitle: (0, i18n_1.t)("deleteMetadataConfirmTitle"), strDescription: (0, i18n_1.t)("deleteCurrentMetadataConfirm"), strOKButtonText: (0, i18n_1.t)("confirmYes"), strCancelButtonText: (0, i18n_1.t)("confirmNo"), bDestructiveWarning: true, onOK: () => void performRemoveCurrent() }));
    };
    const saveAchievementSource = async (source) => {
        await (0, backend_1.setAchievementSource)(appId, source);
        setAchievementSourceState(source);
        await (0, steam_1.refreshRaSettings)();
    };
    const saveRaGameId = async () => {
        const parsed = Number.parseInt(raGameId, 10);
        const ids = await (0, backend_1.setRetroAchievementsGameId)(appId, Number.isFinite(parsed) && parsed > 0 ? parsed : null);
        if (Number.isFinite(parsed) && parsed > 0) {
            setAchievementSourceState("retroachievements");
        }
        setRaSettings((prev) => (prev ? { ...prev, game_ids: ids } : prev));
        api_1.toaster.toast({ title: (0, i18n_1.t)("pluginName"), body: (0, i18n_1.t)("saved") });
    };
    const testAchievements = async () => {
        const parsed = Number.parseInt(raGameId, 10);
        if (!Number.isFinite(parsed) || parsed <= 0) {
            api_1.toaster.toast({ title: (0, i18n_1.t)("pluginName"), body: (0, i18n_1.t)("retroGameFailed") });
            return;
        }
        await (0, backend_1.setRetroAchievementsGameId)(appId, parsed);
        setAchievementSourceState("retroachievements");
        await (0, steam_1.refreshRaSettings)();
        const payload = await (0, backend_1.fetchAchievements)(appId);
        (0, steam_1.applyAchievementPayload)(appId, payload);
        api_1.toaster.toast({
            title: (0, i18n_1.t)("pluginName"),
            body: payload?.steam?.nTotal
                ? `${(0, i18n_1.t)("retroGameOk")}: ${payload.steam.nAchieved}/${payload.steam.nTotal}`
                : (0, i18n_1.t)("retroGameFailed"),
        });
    };
    const autoDetectAchievements = async () => {
        const details = await (0, steam_1.getAppDetails)(appId);
        const launchPath = `${details?.strShortcutExe || ""} ${details?.strShortcutLaunchOptions || ""}`;
        if (!launchPath.trim()) {
            api_1.toaster.toast({ title: (0, i18n_1.t)("pluginName"), body: (0, i18n_1.t)("retroDetectFailed") });
            return;
        }
        const payload = await (0, backend_1.resolveRetroAchievementsFromPath)(appId, launchPath, (0, steam_1.appName)(appId));
        (0, steam_1.applyAchievementPayload)(appId, payload);
        if (payload?.steam?.nTotal) {
            setRaGameId(String(payload.game_id));
            setAchievementSourceState("retroachievements");
            await (0, steam_1.refreshRaSettings)();
        }
        api_1.toaster.toast({
            title: (0, i18n_1.t)("pluginName"),
            body: payload?.steam?.nTotal
                ? `${(0, i18n_1.t)("retroGameOk")}: ${payload.steam.nAchieved}/${payload.steam.nTotal}`
                : (0, i18n_1.t)("retroDetectFailed"),
        });
    };
    const searchAchievements = async () => {
        setRaSearching(true);
        try {
            setRaResults(await (0, backend_1.searchRetroAchievementsGames)(raQuery || (0, steam_1.appName)(appId), 8, appId));
        }
        catch (error) {
            api_1.toaster.toast({ title: (0, i18n_1.t)("pluginName"), body: String(error) });
        }
        finally {
            setRaSearching(false);
        }
    };
    const useAchievementResult = async (result) => {
        setRaGameId(String(result.id));
        const ids = await (0, backend_1.setRetroAchievementsGameId)(appId, result.id);
        setAchievementSourceState("retroachievements");
        setRaSettings((prev) => (prev ? { ...prev, game_ids: ids } : prev));
        await (0, steam_1.refreshRaSettings)();
        const payload = await (0, backend_1.fetchAchievements)(appId);
        (0, steam_1.applyAchievementPayload)(appId, payload);
        api_1.toaster.toast({
            title: (0, i18n_1.t)("pluginName"),
            body: payload?.steam?.nTotal
                ? `${(0, i18n_1.t)("retroGameOk")}: ${payload.steam.nAchieved}/${payload.steam.nTotal}`
                : (0, i18n_1.t)("saved"),
        });
    };
    const saveXboxMatchManual = async () => {
        const manual = xboxTitleId.trim();
        if (!manual) {
            await clearXboxMatch();
            return;
        }
        const currentSettings = await (0, backend_1.getAchievementSettings)();
        await (0, backend_1.setXboxSettings)(true, currentSettings.xbox.api_key || "");
        const ids = await (0, backend_1.setXboxTitleId)(appId, manual);
        const nextId = ids[String(appId)] || manual;
        setXboxTitleIdState(nextId);
        await saveAchievementSource("xbox");
        await (0, steam_1.refreshRaSettings)();
        const payload = await (0, backend_1.fetchAchievements)(appId);
        (0, steam_1.applyAchievementPayload)(appId, payload);
        api_1.toaster.toast({
            title: (0, i18n_1.t)("pluginName"),
            body: payload?.steam?.nTotal
                ? `${(0, i18n_1.t)("xboxGameOk")}: ${payload.steam.nAchieved}/${payload.steam.nTotal}`
                : (0, i18n_1.t)("xboxGameFailed"),
        });
    };
    const autoDetectXboxAchievements = async () => {
        const currentSettings = await (0, backend_1.getAchievementSettings)();
        await (0, backend_1.setXboxSettings)(true, currentSettings.xbox.api_key || "");
        const details = await (0, steam_1.getAppDetails)(appId);
        const launchPath = `${details?.strShortcutExe || ""} ${details?.strShortcutLaunchOptions || ""}`;
        const payload = await (0, backend_1.resolveXboxFromShortcut)(appId, (0, steam_1.appName)(appId), launchPath);
        (0, steam_1.applyAchievementPayload)(appId, payload);
        if (payload?.steam?.nTotal) {
            await saveAchievementSource("xbox");
            const settings = await (0, backend_1.getAchievementSettings)();
            setXboxTitleIdState(settings.xbox.title_ids[String(appId)] || "");
            await (0, steam_1.refreshRaSettings)();
        }
        api_1.toaster.toast({
            title: (0, i18n_1.t)("pluginName"),
            body: payload?.steam?.nTotal
                ? `${(0, i18n_1.t)("xboxGameOk")}: ${payload.steam.nAchieved}/${payload.steam.nTotal}`
                : (0, i18n_1.t)("xboxDetectFailed"),
        });
    };
    const clearXboxMatch = async () => {
        const ids = await (0, backend_1.setXboxTitleId)(appId, null);
        setXboxTitleIdState(ids[String(appId)] || "");
        (0, steam_1.clearAchievementsForApp)(appId);
        if (achievementSource === "xbox") {
            await saveAchievementSource("auto");
        }
        await (0, steam_1.refreshRaSettings)();
        api_1.toaster.toast({ title: (0, i18n_1.t)("pluginName"), body: (0, i18n_1.t)("saved") });
    };
    const searchXbox = async () => {
        setXboxSearching(true);
        try {
            const results = await (0, backend_1.searchXboxTitles)(xboxQuery || (0, steam_1.appName)(appId), 12, appId, true);
            setXboxResults(results);
        }
        catch (error) {
            api_1.toaster.toast({ title: (0, i18n_1.t)("pluginName"), body: String(error) });
        }
        finally {
            setXboxSearching(false);
        }
    };
    const useXboxResult = async (result) => {
        const currentSettings = await (0, backend_1.getAchievementSettings)();
        await (0, backend_1.setXboxSettings)(true, currentSettings.xbox.api_key || "");
        const ids = await (0, backend_1.setXboxTitleId)(appId, result.id);
        setXboxTitleIdState(ids[String(appId)] || result.id);
        await saveAchievementSource("xbox");
        await (0, steam_1.refreshRaSettings)();
        const payload = await (0, backend_1.fetchAchievements)(appId);
        (0, steam_1.applyAchievementPayload)(appId, payload);
        if (!payload?.steam?.nTotal) {
            const cleared = await (0, backend_1.setXboxTitleId)(appId, null);
            setXboxTitleIdState(cleared[String(appId)] || "");
            await saveAchievementSource("auto");
        }
        api_1.toaster.toast({
            title: (0, i18n_1.t)("pluginName"),
            body: payload?.steam?.nTotal
                ? `${(0, i18n_1.t)("xboxGameOk")}: ${payload.steam.nAchieved}/${payload.steam.nTotal}`
                : (0, i18n_1.t)("xboxGameFailed"),
        });
    };
    const autoDetectRpcs3Trophies = async () => {
        const details = await (0, steam_1.getAppDetails)(appId);
        const launchPath = `${details?.strShortcutExe || ""} ${details?.strShortcutLaunchOptions || ""} ${details?.strShortcutStartDir || ""}`;
        const payload = await (0, backend_1.resolveRpcs3FromShortcut)(appId, (0, steam_1.appName)(appId), launchPath);
        (0, steam_1.applyAchievementPayload)(appId, payload);
        if (payload?.steam?.nTotal) {
            await saveAchievementSource("rpcs3");
            const settings = await (0, backend_1.getAchievementSettings)();
            setRpcs3TrophyIdState(settings.rpcs3?.trophy_ids?.[String(appId)] || "");
            await (0, steam_1.refreshRaSettings)();
        }
        api_1.toaster.toast({
            title: (0, i18n_1.t)("pluginName"),
            body: payload?.steam?.nTotal
                ? `${(0, i18n_1.t)("rpcs3GameOk")}: ${payload.steam.nAchieved}/${payload.steam.nTotal}`
                : (0, i18n_1.t)("rpcs3DetectFailed"),
        });
    };
    const searchRpcs3 = async () => {
        setRpcs3Searching(true);
        try {
            setRpcs3Results(await (0, backend_1.searchRpcs3TrophySets)(rpcs3Query || (0, steam_1.appName)(appId), 10, appId));
        }
        catch (error) {
            api_1.toaster.toast({ title: (0, i18n_1.t)("pluginName"), body: String(error) });
        }
        finally {
            setRpcs3Searching(false);
        }
    };
    const useRpcs3Result = async (result) => {
        const ids = await (0, backend_1.setRpcs3TrophyId)(appId, result.id, result.path);
        setRpcs3TrophyIdState(ids[String(appId)] || result.id);
        await saveAchievementSource("rpcs3");
        await (0, steam_1.refreshRaSettings)();
        (0, steam_1.clearAchievementsForApp)(appId);
        const payload = await (0, backend_1.fetchAchievements)(appId);
        (0, steam_1.applyAchievementPayload)(appId, payload);
        api_1.toaster.toast({
            title: (0, i18n_1.t)("pluginName"),
            body: payload?.steam?.nTotal
                ? `${(0, i18n_1.t)("rpcs3GameOk")}: ${payload.steam.nAchieved}/${payload.steam.nTotal}`
                : (0, i18n_1.t)("rpcs3GameFailed"),
        });
    };
    const clearRpcs3Match = async () => {
        const ids = await (0, backend_1.setRpcs3TrophyId)(appId, "");
        setRpcs3TrophyIdState(ids[String(appId)] || "");
        (0, steam_1.clearAchievementsForApp)(appId);
        if (achievementSource === "rpcs3") {
            await saveAchievementSource("auto");
        }
        await (0, steam_1.refreshRaSettings)();
        api_1.toaster.toast({ title: (0, i18n_1.t)("pluginName"), body: (0, i18n_1.t)("saved") });
    };
    const syncRpcs3ProgressForApp = async () => {
        const payload = await (0, backend_1.syncRpcs3Progress)(appId);
        (0, steam_1.applyAchievementPayload)(appId, payload);
        api_1.toaster.toast({
            title: (0, i18n_1.t)("pluginName"),
            body: payload?.steam?.nTotal
                ? `${(0, i18n_1.t)("rpcs3SyncProgressOk")}: ${payload.steam.nAchieved}/${payload.steam.nTotal}`
                : (0, i18n_1.t)("rpcs3SyncProgressFailed"),
        });
    };
    const syncXboxProgress = async () => {
        const payload = await (0, backend_1.syncTrueAchievementsProgress)(appId);
        (0, steam_1.applyAchievementPayload)(appId, payload);
        api_1.toaster.toast({
            title: (0, i18n_1.t)("pluginName"),
            body: payload?.steam?.nTotal
                ? `${(0, i18n_1.t)("xboxSyncProgressOk")}: ${payload.steam.nAchieved}/${payload.steam.nTotal}`
                : (0, i18n_1.t)("xboxSyncProgressFailed"),
        });
    };
    const refetchSteamActivityMatch = async () => {
        if (steamActivityBusy)
            return;
        setSteamActivityBusy(true);
        try {
            const saved = await (0, backend_1.refetchSteamActivityAssociation)(appId, steamActivityQuery || metadata.title || (0, steam_1.appName)(appId));
            if (saved) {
                steam_1.metadataCache[String(appId)] = saved;
                setFormMetadata(saved);
                window.dispatchEvent(new Event("playhub-metadata:activity-refreshed"));
                window.dispatchEvent(new Event("playhub-metadata:updated"));
                api_1.toaster.toast({
                    title: (0, i18n_1.t)("pluginName"),
                    body: saved.steam_news?.length ? (0, i18n_1.t)("steamActivityRefetchDone") : (0, i18n_1.t)("steamActivityNoMatch"),
                });
            }
            else {
                api_1.toaster.toast({ title: (0, i18n_1.t)("pluginName"), body: (0, i18n_1.t)("steamActivityNoMatch") });
            }
        }
        catch (error) {
            api_1.toaster.toast({ title: (0, i18n_1.t)("pluginName"), body: String(error) });
        }
        finally {
            setSteamActivityBusy(false);
        }
    };
    const clearSteamActivityMatch = async () => {
        if (steamActivityBusy)
            return;
        setSteamActivityBusy(true);
        try {
            const saved = await (0, backend_1.clearSteamActivityAssociation)(appId);
            if (saved) {
                steam_1.metadataCache[String(appId)] = saved;
                setFormMetadata(saved);
                window.dispatchEvent(new Event("playhub-metadata:activity-refreshed"));
                window.dispatchEvent(new Event("playhub-metadata:updated"));
            }
            api_1.toaster.toast({ title: (0, i18n_1.t)("pluginName"), body: (0, i18n_1.t)("steamActivityClearDone") });
        }
        catch (error) {
            api_1.toaster.toast({ title: (0, i18n_1.t)("pluginName"), body: String(error) });
        }
        finally {
            setSteamActivityBusy(false);
        }
    };
    const toggleSteamActivityEnabled = async (enabled) => {
        if (steamActivityBusy)
            return;
        setSteamActivityBusy(true);
        try {
            const saved = await (0, backend_1.setSteamActivityEnabled)(appId, enabled, steamActivityQuery || metadata.title || (0, steam_1.appName)(appId));
            if (saved) {
                steam_1.metadataCache[String(appId)] = saved;
                setFormMetadata(saved);
                window.dispatchEvent(new Event("playhub-metadata:activity-refreshed"));
                window.dispatchEvent(new Event("playhub-metadata:updated"));
            }
            api_1.toaster.toast({
                title: (0, i18n_1.t)("pluginName"),
                body: enabled ? (0, i18n_1.t)("steamActivityEnabledDone") : (0, i18n_1.t)("steamActivityDisabledDone"),
            });
        }
        catch (error) {
            api_1.toaster.toast({ title: (0, i18n_1.t)("pluginName"), body: String(error) });
        }
        finally {
            setSteamActivityBusy(false);
        }
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
    return ((0, jsx_runtime_1.jsx)(ui_1.ScrollPanel, { children: (0, jsx_runtime_1.jsxs)("div", { style: pageStyle, children: [(0, jsx_runtime_1.jsx)("style", { children: `
          .phShell{width:min(1560px,100%);margin:0 auto}
          .phGrid{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:16px;align-items:start;width:100%}
          .phCol{display:flex;flex-direction:column;gap:16px;min-width:0;width:100%}
          @media(max-width:1120px){.phGrid{grid-template-columns:1fr}}
        ` }), (0, jsx_runtime_1.jsxs)("div", { className: "phShell", children: [(0, jsx_runtime_1.jsxs)("div", { style: { display: "flex", alignItems: "center", gap: "14px", marginBottom: "6px", minWidth: 0 }, children: [(0, jsx_runtime_1.jsx)("span", { style: {
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        width: "46px",
                                        height: "46px",
                                        borderRadius: "12px",
                                        flex: "0 0 auto",
                                        background: "color-mix(in srgb, #66c0f4 20%, transparent)",
                                        color: "#66c0f4",
                                    }, children: (0, jsx_runtime_1.jsx)(fa_1.FaIdCard, { size: 22 }) }), (0, jsx_runtime_1.jsxs)("div", { style: { minWidth: 0 }, children: [(0, jsx_runtime_1.jsx)("h1", { style: { margin: 0, fontSize: "28px", letterSpacing: "-.02em", lineHeight: 1.15 }, children: (0, steam_1.cleanTitle)(metadata.title) || (0, steam_1.appName)(appId) }), (0, jsx_runtime_1.jsx)("div", { style: { marginTop: 3, opacity: 0.55, fontSize: "0.95em" }, children: [developerText, releaseText, ratingText ? `${ratingText}%` : ""].filter(Boolean).join("  •  ") || (0, i18n_1.t)("pluginName") })] })] }), !nonSteam ? (0, jsx_runtime_1.jsx)("div", { style: { ...cardHintStyle, marginBottom: "8px" }, children: (0, i18n_1.t)("notNonSteam") }) : null, (0, jsx_runtime_1.jsxs)("div", { style: { display: "flex", gap: "0.5rem", flexWrap: "wrap", margin: "10px 0 18px" }, children: [(0, jsx_runtime_1.jsx)(FocusableButton, { className: "DialogButton", onClick: saveCurrent, children: (0, i18n_1.t)("save") }), (0, jsx_runtime_1.jsx)(FocusableButton, { className: "DialogButton", disabled: busy, onClick: removeCurrent, children: (0, i18n_1.t)("remove") }), (0, jsx_runtime_1.jsx)(FocusableButton, { className: "DialogButton", onClick: () => ui_1.Navigation.NavigateBack(), children: (0, i18n_1.t)("done") })] }), (0, jsx_runtime_1.jsxs)(ui_1.Focusable, { className: "phGrid", "flow-children": "grid", children: [(0, jsx_runtime_1.jsxs)(ui_1.Focusable, { className: "phCol", "flow-children": "vertical", children: [(0, jsx_runtime_1.jsxs)(PlayhubCard, { icon: (0, jsx_runtime_1.jsx)(fa_1.FaIdCard, { size: 13 }), accent: PLAYHUB_ACCENTS.identity, title: (0, i18n_1.t)("metadataFieldsTitle"), children: [(0, jsx_runtime_1.jsx)("div", { style: fieldLabelStyle, children: (0, i18n_1.t)("title") }), (0, jsx_runtime_1.jsx)(ui_1.TextField, { value: metadata.title, onChange: (e) => setMetadata((prev) => ({ ...prev, title: e.target.value })), style: fieldStyle }), (0, jsx_runtime_1.jsx)("div", { style: fieldLabelStyle, children: (0, i18n_1.t)("description") }), (0, jsx_runtime_1.jsx)(ui_1.TextField, { value: metadata.description, onChange: (e) => setMetadata((prev) => ({
                                                        ...prev,
                                                        description: e.target.value,
                                                        short_description: e.target.value,
                                                    })), style: fieldStyle }), (0, jsx_runtime_1.jsx)("div", { style: fieldLabelStyle, children: (0, i18n_1.t)("developers") }), (0, jsx_runtime_1.jsx)(ui_1.TextField, { value: developerText, onChange: (e) => setDeveloperText(e.target.value), style: fieldStyle }), (0, jsx_runtime_1.jsx)("div", { style: fieldLabelStyle, children: (0, i18n_1.t)("publishers") }), (0, jsx_runtime_1.jsx)(ui_1.TextField, { value: publisherText, onChange: (e) => setPublisherText(e.target.value), style: fieldStyle }), (0, jsx_runtime_1.jsxs)("div", { style: buttonRowStyle, children: [(0, jsx_runtime_1.jsxs)("div", { style: { ...flexFieldStyle, minWidth: "8rem" }, children: [(0, jsx_runtime_1.jsx)("div", { style: fieldLabelStyle, children: (0, i18n_1.t)("releaseDate") }), (0, jsx_runtime_1.jsx)(ui_1.TextField, { value: releaseText, onChange: (e) => setReleaseText(e.target.value), style: fieldStyle })] }), (0, jsx_runtime_1.jsxs)("div", { style: { ...flexFieldStyle, minWidth: "7rem" }, children: [(0, jsx_runtime_1.jsx)("div", { style: fieldLabelStyle, children: (0, i18n_1.t)("rating") }), (0, jsx_runtime_1.jsx)(ui_1.TextField, { value: ratingText, onChange: (e) => setRatingText(e.target.value), style: fieldStyle })] })] })] }), (0, jsx_runtime_1.jsxs)(PlayhubCard, { icon: (0, jsx_runtime_1.jsx)(fa_1.FaSearch, { size: 13 }), accent: PLAYHUB_ACCENTS.search, title: (0, i18n_1.t)("searchTitle"), children: [(0, jsx_runtime_1.jsx)("div", { style: fieldLabelStyle, children: (0, i18n_1.t)("scraperGameLanguage") }), (0, jsx_runtime_1.jsx)(ui_1.DropdownItem, { bottomSeparator: "none", childrenContainerWidth: "max", layout: "below", rgOptions: [
                                                        { data: "auto", label: `${(0, i18n_1.t)("scraperLanguageAuto")} (${gameScraperSettings?.language_labels?.[gameScraperSettings?.language || "en"] || (gameScraperSettings?.language || "en")})` },
                                                        ...(gameScraperSettings?.languages ?? ["en"]).map((code) => ({
                                                            data: code,
                                                            label: gameScraperSettings?.language_labels?.[code] || code,
                                                        })),
                                                    ], selectedOption: scraperLanguageOverride, onChange: (option) => void saveScraperLanguageOverride(option.data) }), (0, jsx_runtime_1.jsx)("div", { style: cardHintStyle, children: gameScraperSettings?.translate_ign
                                                        ? (0, i18n_1.t)("scraperGameTranslationEnabled")
                                                        : (0, i18n_1.t)("scraperGameTranslationDisabled") }), (0, jsx_runtime_1.jsx)(FocusableButton, { className: "DialogButton", disabled: busy, onClick: refreshMetadataForGame, children: busy ? (0, i18n_1.t)("searching") : (0, i18n_1.t)("scraperGameRefresh") }), (0, jsx_runtime_1.jsxs)("div", { style: buttonRowStyle, children: [(0, jsx_runtime_1.jsx)(ui_1.TextField, { value: query, onChange: (e) => setQuery(e.target.value), style: { ...flexFieldStyle, minWidth: "10rem" } }), (0, jsx_runtime_1.jsx)(FocusableButton, { className: "DialogButton", disabled: busy, onClick: search, children: busy ? (0, i18n_1.t)("searching") : (0, i18n_1.t)("search") })] }), (0, jsx_runtime_1.jsxs)("div", { style: rowStackStyle, children: [busy ? (0, jsx_runtime_1.jsx)("div", { style: cardHintStyle, children: (0, i18n_1.t)("searching") }) : null, !busy && !results.length ? (0, jsx_runtime_1.jsx)("div", { style: cardHintStyle, children: (0, i18n_1.t)("noResults") }) : null, results.map((result) => ((0, jsx_runtime_1.jsx)(FocusableButton, { className: "DialogButton", onClick: () => void applyResult(result), style: { justifyContent: "flex-start", textAlign: "left" }, children: (0, jsx_runtime_1.jsxs)("div", { style: rowStackStyle, children: [(0, jsx_runtime_1.jsx)("b", { children: result.title }), (0, jsx_runtime_1.jsx)("span", { style: compactTextStyle, children: result.description })] }) }, result.slug || result.url)))] })] }), (0, jsx_runtime_1.jsx)(PlayhubCard, { icon: (0, jsx_runtime_1.jsx)(fa_1.FaTags, { size: 13 }), accent: PLAYHUB_ACCENTS.categories, title: (0, i18n_1.t)("categories"), children: Object.entries(types_1.CATEGORY_LABELS).map(([category, label]) => ((0, jsx_runtime_1.jsx)(ui_1.ToggleField, { bottomSeparator: "none", label: label, checked: (metadata.store_categories || []).includes(Number(category)), onChange: (checked) => toggleCategory(Number(category), checked) }, category))) }), (0, jsx_runtime_1.jsxs)(PlayhubCard, { icon: (0, jsx_runtime_1.jsx)(fa_1.FaNewspaper, { size: 13 }), accent: PLAYHUB_ACCENTS.activity, title: (0, i18n_1.t)("steamActivityTitle"), hint: (0, i18n_1.t)("steamActivityHint"), children: [(0, jsx_runtime_1.jsx)(ui_1.ToggleField, { bottomSeparator: "none", label: (0, i18n_1.t)("steamActivityEnabledForGame"), description: (0, i18n_1.t)("steamActivityEnabledForGameHint"), checked: !metadata.steam_activity_disabled, disabled: steamActivityBusy, onChange: (checked) => void toggleSteamActivityEnabled(checked) }), (0, jsx_runtime_1.jsx)("div", { style: cardSubheadingStyle, children: metadata.steam_activity_disabled
                                                        ? (0, i18n_1.t)("steamActivityDisabled")
                                                        : metadata.steam_appid
                                                            ? `${(0, i18n_1.t)("steamActivityCurrentMatch")}: ${metadata.steam_appid}${metadata.steam_news?.length ? ` - ${metadata.steam_news.length} ${(0, i18n_1.t)("steamActivityItems")}` : ""}`
                                                            : (0, i18n_1.t)("steamActivityNoCurrentMatch") }), (0, jsx_runtime_1.jsx)("div", { style: fieldLabelStyle, children: (0, i18n_1.t)("steamActivitySearchTitle") }), (0, jsx_runtime_1.jsxs)("div", { style: buttonRowStyle, children: [(0, jsx_runtime_1.jsx)(ui_1.TextField, { value: steamActivityQuery, onChange: (e) => setSteamActivityQuery(e.target.value), style: { ...flexFieldStyle, minWidth: "12rem" } }), (0, jsx_runtime_1.jsx)(FocusableButton, { className: "DialogButton", disabled: steamActivityBusy, onClick: refetchSteamActivityMatch, children: steamActivityBusy ? (0, i18n_1.t)("refreshingActivities") : (0, i18n_1.t)("steamActivityRefetch") }), (0, jsx_runtime_1.jsx)(FocusableButton, { className: "DialogButton", disabled: steamActivityBusy || (!metadata.steam_appid && !metadata.steam_news?.length && !!metadata.steam_activity_disabled), onClick: clearSteamActivityMatch, children: (0, i18n_1.t)("steamActivityClear") })] })] })] }), (0, jsx_runtime_1.jsxs)(ui_1.Focusable, { className: "phCol", "flow-children": "vertical", children: [(0, jsx_runtime_1.jsx)(PlayhubCard, { icon: (0, jsx_runtime_1.jsx)(fa_1.FaBolt, { size: 13 }), accent: PLAYHUB_ACCENTS.achievements, title: (0, i18n_1.t)("achievementSourceTitle"), hint: (0, i18n_1.t)("achievementSourceHint"), children: ["auto", "retroachievements", "xbox", "rpcs3", "disabled"].map((source) => ((0, jsx_runtime_1.jsx)(FocusableButton, { className: "DialogButton", onClick: () => void saveAchievementSource(source), style: { ...optionButtonStyle, opacity: achievementSource === source ? 1 : 0.6 }, children: (0, jsx_runtime_1.jsxs)("span", { style: optionContentStyle, children: [(0, jsx_runtime_1.jsx)("span", { children: (0, i18n_1.t)(`achievementSource_${source}`) }), (0, jsx_runtime_1.jsx)("span", { style: { marginLeft: "auto" }, children: achievementSource === source ? (0, jsx_runtime_1.jsx)(fa_1.FaCheck, {}) : null })] }) }, source))) }), (0, jsx_runtime_1.jsxs)(PlayhubCard, { icon: (0, jsx_runtime_1.jsx)(fa_1.FaTrophy, { size: 13 }), accent: PLAYHUB_ACCENTS.ra, title: "RetroAchievements", hint: (0, i18n_1.t)("retroHint"), children: [raSettings && !raSettings.enabled ? ((0, jsx_runtime_1.jsxs)("div", { style: cardHintStyle, children: [(0, i18n_1.t)("retroEnabled"), ": Off"] })) : null, (0, jsx_runtime_1.jsx)("div", { style: fieldLabelStyle, children: (0, i18n_1.t)("retroGameId") }), (0, jsx_runtime_1.jsxs)("div", { style: buttonRowStyle, children: [(0, jsx_runtime_1.jsx)(ui_1.TextField, { value: raGameId, onChange: (e) => setRaGameId(e.target.value), style: { ...flexFieldStyle, minWidth: "8rem" } }), (0, jsx_runtime_1.jsx)(FocusableButton, { className: "DialogButton", onClick: saveRaGameId, children: (0, i18n_1.t)("save") })] }), (0, jsx_runtime_1.jsxs)("div", { style: buttonRowStyle, children: [(0, jsx_runtime_1.jsx)(FocusableButton, { className: "DialogButton", onClick: autoDetectAchievements, children: (0, i18n_1.t)("retroGameDetect") }), (0, jsx_runtime_1.jsx)(FocusableButton, { className: "DialogButton", onClick: testAchievements, children: (0, i18n_1.t)("retroGameTest") })] }), (0, jsx_runtime_1.jsx)("div", { style: fieldLabelStyle, children: (0, i18n_1.t)("retroGameSearchHint") }), (0, jsx_runtime_1.jsxs)("div", { style: buttonRowStyle, children: [(0, jsx_runtime_1.jsx)(ui_1.TextField, { value: raQuery, onChange: (e) => setRaQuery(e.target.value), style: { ...flexFieldStyle, minWidth: "10rem" } }), (0, jsx_runtime_1.jsx)(FocusableButton, { className: "DialogButton", disabled: raSearching, onClick: searchAchievements, children: raSearching ? (0, i18n_1.t)("searching") : (0, i18n_1.t)("retroGameSearch") })] }), (0, jsx_runtime_1.jsxs)("div", { style: rowStackStyle, children: [raSearching ? (0, jsx_runtime_1.jsx)(ui_1.Spinner, {}) : null, !raSearching && !raResults.length ? ((0, jsx_runtime_1.jsx)("div", { style: cardHintStyle, children: (0, i18n_1.t)("retroGameNoMatches") })) : null, raResults.map((result) => ((0, jsx_runtime_1.jsx)(FocusableButton, { className: "DialogButton", onClick: () => void useAchievementResult(result), style: { justifyContent: "flex-start", textAlign: "left" }, children: (0, jsx_runtime_1.jsxs)("div", { style: rowStackStyle, children: [(0, jsx_runtime_1.jsx)("b", { children: result.title }), (0, jsx_runtime_1.jsxs)("span", { style: compactTextStyle, children: [result.console ? `${result.console} - ` : "", Math.round(result.score * 100), "% match"] })] }) }, result.id)))] })] }), (0, jsx_runtime_1.jsxs)(PlayhubCard, { icon: (0, jsx_runtime_1.jsx)(fa_1.FaXbox, { size: 13 }), accent: PLAYHUB_ACCENTS.xbox, title: (0, i18n_1.t)("xboxPerGameTitle"), hint: (0, i18n_1.t)("xboxHint"), children: [(0, jsx_runtime_1.jsx)("div", { style: fieldLabelStyle, children: (0, i18n_1.t)("xboxCurrentMatch") }), (0, jsx_runtime_1.jsxs)("div", { style: buttonRowStyle, children: [(0, jsx_runtime_1.jsx)(ui_1.TextField, { value: xboxTitleId, onChange: (e) => setXboxTitleIdState(e.target.value), style: { ...flexFieldStyle, minWidth: "12rem" } }), (0, jsx_runtime_1.jsx)(FocusableButton, { className: "DialogButton", onClick: saveXboxMatchManual, children: (0, i18n_1.t)("save") })] }), (0, jsx_runtime_1.jsxs)("div", { style: buttonRowStyle, children: [(0, jsx_runtime_1.jsx)(FocusableButton, { className: "DialogButton", onClick: autoDetectXboxAchievements, children: (0, i18n_1.t)("xboxGameDetect") }), (0, jsx_runtime_1.jsx)(FocusableButton, { className: "DialogButton", disabled: !xboxTitleId, onClick: syncXboxProgress, children: (0, i18n_1.t)("xboxSyncProgress") }), (0, jsx_runtime_1.jsx)(FocusableButton, { className: "DialogButton", onClick: clearXboxMatch, children: (0, i18n_1.t)("xboxClearMatch") })] }), (0, jsx_runtime_1.jsx)("div", { style: fieldLabelStyle, children: (0, i18n_1.t)("xboxGameSearchHint") }), (0, jsx_runtime_1.jsxs)("div", { style: buttonRowStyle, children: [(0, jsx_runtime_1.jsx)(ui_1.TextField, { value: xboxQuery, onChange: (e) => setXboxQuery(e.target.value), style: { ...flexFieldStyle, minWidth: "10rem" } }), (0, jsx_runtime_1.jsx)(FocusableButton, { className: "DialogButton", disabled: xboxSearching, onClick: searchXbox, children: xboxSearching ? (0, i18n_1.t)("searching") : (0, i18n_1.t)("xboxGameSearch") })] }), (0, jsx_runtime_1.jsxs)("div", { style: rowStackStyle, children: [xboxSearching ? (0, jsx_runtime_1.jsx)(ui_1.Spinner, {}) : null, !xboxSearching && !xboxResults.length ? ((0, jsx_runtime_1.jsx)("div", { style: cardHintStyle, children: (0, i18n_1.t)("xboxGameNoMatches") })) : null, xboxResults.map((result) => ((0, jsx_runtime_1.jsx)(FocusableButton, { className: "DialogButton", onClick: () => void useXboxResult(result), style: { justifyContent: "flex-start", textAlign: "left" }, children: (0, jsx_runtime_1.jsxs)("div", { style: rowStackStyle, children: [(0, jsx_runtime_1.jsx)("b", { children: result.title }), (0, jsx_runtime_1.jsxs)("span", { style: compactTextStyle, children: [Math.round(result.score * 100), "% match", result.unlocked != null && result.total != null
                                                                                ? ` - ${result.unlocked}/${result.total}`
                                                                                : "", result.gamerscore != null ? ` - ${result.gamerscore}G` : "", ` - ${result.source || "TrueAchievements"} - ${result.id}`] })] }) }, result.id)))] })] }), (0, jsx_runtime_1.jsxs)(PlayhubCard, { icon: (0, jsx_runtime_1.jsx)(fa_1.FaPlaystation, { size: 13 }), accent: PLAYHUB_ACCENTS.ps3, title: (0, i18n_1.t)("rpcs3PerGameTitle"), hint: (0, i18n_1.t)("rpcs3Hint"), children: [(0, jsx_runtime_1.jsxs)("div", { style: cardSubheadingStyle, children: [(0, i18n_1.t)("rpcs3CurrentMatch"), ": ", rpcs3TrophyId || (0, i18n_1.t)("none")] }), (0, jsx_runtime_1.jsxs)("div", { style: buttonRowStyle, children: [(0, jsx_runtime_1.jsx)(FocusableButton, { className: "DialogButton", onClick: autoDetectRpcs3Trophies, children: (0, i18n_1.t)("rpcs3GameDetect") }), (0, jsx_runtime_1.jsx)(FocusableButton, { className: "DialogButton", disabled: !rpcs3TrophyId, onClick: syncRpcs3ProgressForApp, children: (0, i18n_1.t)("rpcs3SyncProgress") }), (0, jsx_runtime_1.jsx)(FocusableButton, { className: "DialogButton", onClick: clearRpcs3Match, children: (0, i18n_1.t)("rpcs3ClearMatch") })] }), (0, jsx_runtime_1.jsx)("div", { style: fieldLabelStyle, children: (0, i18n_1.t)("rpcs3GameSearchHint") }), (0, jsx_runtime_1.jsxs)("div", { style: buttonRowStyle, children: [(0, jsx_runtime_1.jsx)(ui_1.TextField, { value: rpcs3Query, onChange: (e) => setRpcs3Query(e.target.value), style: { ...flexFieldStyle, minWidth: "10rem" } }), (0, jsx_runtime_1.jsx)(FocusableButton, { className: "DialogButton", disabled: rpcs3Searching, onClick: searchRpcs3, children: rpcs3Searching ? (0, i18n_1.t)("searching") : (0, i18n_1.t)("rpcs3GameSearch") })] }), (0, jsx_runtime_1.jsxs)("div", { style: rowStackStyle, children: [rpcs3Searching ? (0, jsx_runtime_1.jsx)(ui_1.Spinner, {}) : null, !rpcs3Searching && !rpcs3Results.length ? ((0, jsx_runtime_1.jsx)("div", { style: cardHintStyle, children: (0, i18n_1.t)("rpcs3GameNoMatches") })) : null, rpcs3Results.map((result) => ((0, jsx_runtime_1.jsx)(FocusableButton, { className: "DialogButton", onClick: () => void useRpcs3Result(result), style: { justifyContent: "flex-start", textAlign: "left" }, children: (0, jsx_runtime_1.jsxs)("div", { style: rowStackStyle, children: [(0, jsx_runtime_1.jsx)("b", { children: result.title }), (0, jsx_runtime_1.jsxs)("span", { style: compactTextStyle, children: [Math.round(result.score * 100), "% match", ` - ${result.unlocked}/${result.total}`, ` - ${result.id}`] })] }) }, result.path)))] })] })] })] })] })] }) }));
};
exports.MetadataPage = MetadataPage;
};
factories["contextMenuPatch"] = function(module, exports, require) {
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.injectMetadataMenuItem = exports.resolveLibraryContextMenu = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const DeckyUI = __importStar(require("@decky/ui"));
const pluginMenuSection_1 = require("./pluginMenuSection");
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
const react_1 = __importDefault(require("react"));
const ui_1 = require("@decky/ui");
const compat_1 = require("./compat");
const i18n_1 = require("./i18n");
const ENTRY_KEY = "playhub-metadata-edit";
const isLibraryMenuClass = (candidate) => typeof candidate?.prototype?.render === "function" &&
    (typeof candidate.prototype.GetTargetApps === "function" ||
        typeof candidate.prototype.BuildManageSubmenu === "function");
/** Resolve lazily: a missing/late Steam chunk must never abort module evaluation. */
const resolveLibraryContextMenu = () => {
    try {
        const owner = (0, ui_1.findModuleByExport)((member) => /\.LibraryContextMenu\b/.test((0, compat_1.functionSource)(member)) || isLibraryMenuClass(member));
        const entries = (0, compat_1.moduleEntries)(owner);
        for (const [, member] of entries) {
            if (isLibraryMenuClass(member))
                return member;
        }
        for (const [, member] of entries) {
            if (!/navigator\s*:/.test((0, compat_1.functionSource)(member)))
                continue;
            try {
                // Steam may export a function, React.forwardRef, or React.memo wrapper.
                const render = typeof member === "function" ? member : member?.render ?? member?.type;
                if (typeof render !== "function")
                    continue;
                const element = (0, ui_1.fakeRenderComponent)(render);
                let type = element?.type;
                for (let depth = 0; type && depth < 4; depth += 1) {
                    if (isLibraryMenuClass(type))
                        return type;
                    type = type.type;
                }
            }
            catch (_error) { /* Try the next matching export, not an unrelated component. */ }
        }
    }
    catch (_error) { /* The chunk or fake-render context may not be ready yet. */ }
    return undefined;
};
exports.resolveLibraryContextMenu = resolveLibraryContextMenu;
/** Clone only the library menu output, never the shared Steam menu component. */
const injectMetadataMenuItem = (menu, appId) => {
    if (!react_1.default.isValidElement(menu) || !appId)
        return menu;
    return (0, pluginMenuSection_1.insertPluginSection)(react_1.default, menu, (0, jsx_runtime_1.jsx)(ui_1.MenuItem, { onSelected: () => ui_1.Navigation.Navigate(`/playhub-metadata/${appId}`), children: (0, i18n_1.t)("editMetadata") }, ENTRY_KEY));
};
exports.injectMetadataMenuItem = injectMetadataMenuItem;
const contextMenuPatch = (initialClass) => {
    const stopFallback = (0, pluginMenuSection_1.installMenuSectionFallback)(react_1.default, DeckyUI, exports.injectMetadataMenuItem);
    let disposed = false;
    let unpatch;
    let timer;
    let attempts = 0;
    const install = () => {
        if (disposed || unpatch)
            return;
        const MenuClass = initialClass ?? (0, exports.resolveLibraryContextMenu)();
        if (isLibraryMenuClass(MenuClass)) {
            unpatch = (0, compat_1.patchMethod)(MenuClass.prototype, "render", (instance, original, args) => {
                const menu = original(...args);
                try {
                    const targets = instance?.GetTargetApps?.();
                    if (Array.isArray(targets) && targets.length !== 1)
                        return menu;
                    // Resolve for every render; Steam reuses instances when changing games.
                    const appId = Number(targets?.[0]?.appid ?? instance?.props?.overview?.appid ?? 0);
                    return (0, exports.injectMetadataMenuItem)(menu, appId);
                }
                catch (error) {
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
            stopFallback();
            if (timer !== undefined)
                window.clearTimeout(timer);
            unpatch?.();
            unpatch = undefined;
        } };
};
exports.default = contextMenuPatch;
};
factories["i18n"] = function(module, exports, require) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.t = void 0;
const STRINGS = {
    en: {
        pluginName: "Playhub Metadata",
        scanMissing: "Scan metadata",
        deleteAllMetadata: "Delete metadata",
        deleteMetadataConfirmTitle: "Are you sure?",
        deleteAllMetadataConfirm: "Delete metadata for every detected non-Steam game? Achievements and associations are not deleted.",
        deleteCurrentMetadataConfirm: "Delete metadata for this game? Achievements and associations are not deleted.",
        confirmYes: "Yes",
        confirmNo: "No",
        deleteAllMetadataDone: "All metadata deleted",
        metadataPhaseIgn: "Downloading from IGN for",
        metadataPhaseGoogle: "Translating with Google for",
        metadataPhaseMyMemory: "Translating with MyMemory for",
        metadataPhaseSaved: "Metadata saved for",
        metadataPhaseNoMatch: "No IGN match for",
        metadataPhaseFailed: "Metadata download failed for",
        refreshActivities: "Refresh Activity",
        refreshingActivities: "Refreshing Activity...",
        activityRefreshComplete: "Activity refresh complete",
        showActivitiesInHome: "Show Activity in Home",
        homeActivityCount: "Home Activity count",
        homeActivityCountHint: "Choose how many non-Steam games Playhub can show in Home. Max 6; 3 is recommended for performance.",
        homeActivityMostRecent: "Most recent",
        homeActivityShuffle: "Shuffle",
        scanning: "Scanning...",
        detected: "Detected non-Steam games",
        saved: "Metadata saved",
        missing: "Missing metadata",
        openSelected: "Open selected game",
        editMetadata: "Playhub Metadata",
        searchTitle: "Search metadata",
        search: "Search",
        searching: "Searching...",
        apply: "Apply",
        save: "Save",
        remove: "Delete metadata",
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
        postPlayAchievementSyncEnabled: "Sync the game just closed",
        postPlayAchievementSyncHint: "When a game closes, Playhub refreshes achievements only for that title through its linked provider: RetroAchievements, RPCS3 or Xbox.",
        retroUser: "RetroAchievements username",
        retroKey: "RetroAchievements API key",
        retroLogin: "Login",
        retroCreateAccount: "Open RetroAchievements",
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
        retroBulkScan: "Scan RetroAchievements",
        retroBulkScanning: "Scanning RetroAchievements",
        retroBulkDetecting: "detecting ROM match",
        retroBulkSearching: "searching RetroAchievements match",
        retroBulkApplying: "loading achievement list",
        retroBulkAppliedOne: "achievements applied",
        retroBulkSkippedOne: "skipped",
        retroBulkDone: "RetroAchievements scan complete",
        retroBulkApplied: "applied",
        retroBulkSkipped: "skipped",
        retroBulkNothing: "No ROM/emulator games without RetroAchievements to scan.",
        retroSyncProgress: "Sync RetroAchievements progress",
        retroSyncingProgress: "syncing RetroAchievements progress",
        retroSyncDone: "RetroAchievements progress synced",
        retroSyncNothing: "No matched RetroAchievements games to sync.",
        retroClearAll: "Clear RetroAchievements associations",
        retroClearAllDone: "RetroAchievements associations cleared",
        retroDetectFailed: "No RetroAchievements match found from this game's shortcut path.",
        retroHint: "Paste the numeric RetroAchievements game ID from the game page URL. Leave empty to hide achievements for this game.",
        xboxTitle: "Xbox achievements / OpenXBL",
        xboxEnabled: "Enable Xbox achievements",
        xboxKey: "OpenXBL API key",
        xboxLogin: "Login",
        xboxOpenOpenXbl: "Open OpenXBL",
        xboxLoginHint: "",
        xboxProfile: "OpenXBL API key",
        xboxLoggedIn: "OpenXBL account connected",
        xboxLoginNeedsPassword: "Enter your OpenXBL API key, then press Login.",
        xboxLoginNeedsProfile: "Enter your OpenXBL API key, then press Login.",
        xboxClearAll: "Clear Xbox associations",
        xboxClearAllDone: "Xbox associations cleared",
        xboxSyncProgress: "Sync progress",
        xboxSyncAllProgress: "Sync progress",
        xboxSyncProgressOk: "Progress synced",
        xboxSyncProgressFailed: "No progress found. Check the selected Xbox match.",
        xboxLoginOk: "OpenXBL verified",
        xboxLoginFailed: "OpenXBL not verified",
        xboxBulkScan: "Scan Xbox achievements",
        xboxBulkScanning: "Scanning Xbox achievements",
        xboxBulkSearching: "searching OpenXBL match",
        xboxBulkApplying: "loading achievement list",
        xboxBulkAppliedOne: "achievements applied",
        xboxBulkSkippedOne: "skipped",
        xboxBulkDone: "Xbox scan complete",
        xboxBulkApplied: "applied",
        xboxBulkSkipped: "skipped",
        xboxBulkNothing: "No games without Xbox achievements to scan.",
        xboxSyncingProgress: "syncing progress",
        xboxConnectedAs: "Connected as",
        achievementAutoSyncTitle: "Automatic achievement progress updates",
        achievementAutoSyncHint: "Choose how often Playhub runs scheduled progress updates for each achievement provider.",
        achievementCacheRetroTitle: "Automatically update RetroAchievements progress",
        achievementCacheXboxTitle: "Automatically update Xbox progress",
        achievementCacheRpcs3Title: "Automatically update PS3 trophies",
        achievementCache_hourly: "Hourly",
        achievementCache_daily: "Daily",
        achievementCache_weekly: "Weekly",
        achievementCache_pc_session: "PC session",
        achievementCache_manual: "Manually",
        steamActivityTitle: "Steam Activity metadata",
        steamActivityHint: "Manage the Steam title used only for this non-Steam game's Activity and Home news.",
        steamActivityCurrentMatch: "Current Steam AppID",
        steamActivityNoCurrentMatch: "No Steam Activity association yet.",
        steamActivityDisabled: "Steam Activity disabled for this game.",
        steamActivitySearchTitle: "Title to refetch",
        steamActivityRefetch: "Refetch from title",
        steamActivityClear: "Remove association",
        steamActivityItems: "items",
        steamActivityRefetchDone: "Steam Activity refreshed",
        steamActivityClearDone: "Steam Activity association removed",
        steamActivityNoMatch: "No Steam Activity match found",
        steamActivityEnabledForGame: "Enable Steam Activity for this game",
        steamActivityEnabledForGameHint: "Turn Steam Activity and Home news on or off only for this title.",
        steamActivityEnabledDone: "Steam Activity enabled for this game",
        steamActivityDisabledDone: "Steam Activity disabled for this game",
        qamLibraryTitle: "Library & metadata",
        scraperTitle: "IGN metadata",
        scraperHint: "Game information is downloaded from IGN. Descriptions can be translated automatically into any language supported by Google Translate.",
        scraperSourceIgn: "IGN",
        scraperRescanHint: "If you change the language, run \"Scan metadata\" again to overwrite descriptions in the previous language.",
        scraperLanguage: "Description language",
        scraperTranslateIgn: "Translate IGN descriptions",
        scraperTranslateIgnHint: "Automatically translate IGN text into the selected language.",
        scraperGameLanguage: "Description language for this game",
        scraperLanguageAuto: "Auto (global language)",
        scraperGameTranslationEnabled: "IGN translation is enabled and will use the language selected above.",
        scraperGameTranslationDisabled: "IGN translation is disabled globally; descriptions will remain in English.",
        scraperGameRefresh: "Update metadata with this language",
        scraperGameRefreshDone: "Metadata updated for this game",
        qamAchievementsTitle: "Achievements",
        metadataFieldsTitle: "Game details",
        achievementSourceTitle: "Achievement source",
        achievementSourceHint: "Auto keeps RetroAchievements for ROM/emulator shortcuts, reads local RPCS3 trophies for PS3 shortcuts and uses OpenXBL only for likely Xbox/UWPHook shortcuts.",
        achievementSource_auto: "Auto",
        achievementSource_retroachievements: "RetroAchievements",
        achievementSource_xbox: "Xbox",
        achievementSource_rpcs3: "PS3 (RPCS3)",
        achievementSource_disabled: "Disabled",
        rpcs3Title: "PS3 trophies (RPCS3)",
        rpcs3SettingsHint: "Trophies are read locally from RPCS3 (dev_hdd0). You can choose a custom data folder when EmuDeck stores it on another drive.",
        rpcs3DataPath: "RPCS3 data folder",
        rpcs3DataPathHint: "Choose this when EmuDeck stores dev_hdd0 separately. You can select the RPCS3 folder, dev_hdd0, home, a user folder or the trophy folder.",
        rpcs3ChooseDataPath: "Choose folder",
        rpcs3SaveDataPath: "Use this folder",
        rpcs3ResetDataPath: "Use automatic detection",
        rpcs3PathAutomatic: "RPCS3 folder: automatic detection",
        rpcs3PathInvalid: "The selected folder does not exist.",
        rpcs3PathSavedNoTrophies: "Folder saved. No trophy sets were found yet; launch a PS3 game once.",
        rpcs3PathSetsFound: "RPCS3 trophy sets found",
        rpcs3PerGameTitle: "PS3 trophies (RPCS3)",
        rpcs3Hint: "Playhub reads this game's trophies straight from your RPCS3 folder. If the game is stored as an ISO, launch it at least once before detecting its trophies. Use auto-detect for RPCS3 shortcuts, or pick the trophy set manually below.",
        rpcs3CurrentMatch: "Current trophy set",
        rpcs3GameDetect: "Auto-detect trophies",
        rpcs3SyncProgress: "Sync trophy progress",
        rpcs3ClearMatch: "Clear RPCS3 association",
        rpcs3GameSearch: "Search installed trophy sets",
        rpcs3GameSearchHint: "If auto-detect misses the game, search the trophy sets installed in RPCS3 and pick the right one.",
        rpcs3GameNoMatches: "No RPCS3 trophy sets found yet. Play the game once in RPCS3 or check the RPCS3 folder.",
        rpcs3GameOk: "PS3 trophies loaded",
        rpcs3GameFailed: "No PS3 trophies loaded for this selection.",
        rpcs3DetectFailed: "No RPCS3 trophy set found from this shortcut.",
        rpcs3SyncProgressOk: "PS3 trophies synced",
        rpcs3SyncProgressFailed: "PS3 trophy sync failed",
        rpcs3BulkScan: "Scan RPCS3 trophies",
        rpcs3BulkScanning: "Scanning RPCS3 trophies",
        rpcs3BulkDetecting: "detecting trophy set",
        rpcs3BulkAppliedOne: "trophies applied",
        rpcs3BulkSkippedOne: "skipped",
        rpcs3BulkDone: "RPCS3 scan complete",
        rpcs3BulkNothing: "No RPCS3 games to scan.",
        rpcs3SyncingProgress: "syncing trophies",
        rpcs3SyncDone: "RPCS3 trophy sync complete",
        rpcs3SyncAllProgress: "Sync all PS3 trophies",
        rpcs3ClearAll: "Clear RPCS3 associations",
        rpcs3ClearAllDone: "RPCS3 associations cleared",
        xboxPerGameTitle: "Xbox achievements",
        xboxHint: "Playhub matches Xbox title IDs through OpenXBL. Use the selector if the automatic match is wrong.",
        xboxCurrentMatch: "Current Xbox title ID",
        xboxGameDetect: "Auto-detect with OpenXBL",
        xboxGameTest: "Test Xbox achievements",
        xboxClearMatch: "Clear Xbox association",
        xboxGameSearch: "Search Xbox titles",
        xboxGameSearchHint: "Search OpenXBL account history and Microsoft Store for the correct Xbox title.",
        xboxGameNoMatches: "No Xbox results yet.",
        xboxGameOk: "Xbox achievements loaded",
        xboxGameFailed: "No Xbox achievements loaded. Try scanning again or paste the Xbox title ID manually.",
        xboxDetectFailed: "No Xbox match found from this UWPHook shortcut.",
        none: "None",
        noResults: "No results yet.",
        source: "Source",
        fetchCurrent: "Fetch from IGN",
        removeToast: "Metadata removed",
        scanComplete: "Scan complete",
        backgroundSyncStarted: "Progress sync started",
        backgroundSyncFinished: "Progress sync finished",
        backgroundSyncUpdated: "updated",
        backgroundSyncSkipped: "skipped",
        backgroundSyncFailed: "Progress sync failed",
        postPlaySyncStarted: "Recently played game sync started",
        postPlaySyncFinished: "Recently played game synced",
        postPlaySyncSkipped: "No new progress found",
        postPlaySyncFailed: "Recently played game sync failed",
        notNonSteam: "This plugin only changes non-Steam games.",
    },
    it: {
        pluginName: "Playhub Metadata",
        scanMissing: "Scansiona metadata",
        deleteAllMetadata: "Elimina metadata",
        deleteMetadataConfirmTitle: "Sei sicuro?",
        deleteAllMetadataConfirm: "Eliminare i metadata di tutti i giochi non-Steam rilevati? Obiettivi e associazioni non verranno eliminati.",
        deleteCurrentMetadataConfirm: "Eliminare i metadata di questo gioco? Obiettivi e associazioni non verranno eliminati.",
        confirmYes: "Sì",
        confirmNo: "No",
        deleteAllMetadataDone: "Metadata eliminati",
        metadataPhaseIgn: "Scaricamento da IGN per",
        metadataPhaseGoogle: "Traduzione da Google per",
        metadataPhaseMyMemory: "Traduzione da MyMemory per",
        metadataPhaseSaved: "Metadata salvati per",
        metadataPhaseNoMatch: "Nessun risultato IGN per",
        metadataPhaseFailed: "Scaricamento metadata non riuscito per",
        refreshActivities: "Aggiorna attività",
        refreshingActivities: "Aggiornamento attività...",
        activityRefreshComplete: "Aggiornamento attività completato",
        showActivitiesInHome: "Mostra attività nella Home",
        homeActivityCount: "Numero attività in Home",
        homeActivityCountHint: "Scegli quanti giochi non-Steam Playhub può mostrare nella Home. Massimo 6; 3 è consigliato per le prestazioni.",
        homeActivityMostRecent: "Più recenti",
        homeActivityShuffle: "Rimescola",
        scanning: "Scansione...",
        detected: "Giochi non Steam rilevati",
        saved: "Metadata salvati",
        missing: "Metadata mancanti",
        openSelected: "Apri gioco selezionato",
        editMetadata: "Playhub Metadata",
        searchTitle: "Cerca metadata",
        search: "Cerca",
        searching: "Ricerca...",
        apply: "Applica",
        save: "Salva",
        remove: "Elimina metadata",
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
        postPlayAchievementSyncEnabled: "Sincronizza il gioco appena chiuso",
        postPlayAchievementSyncHint: "Quando chiudi un gioco, Playhub aggiorna gli obiettivi soltanto di quel titolo tramite la fonte associata: RetroAchievements, RPCS3 o Xbox.",
        retroUser: "Username RetroAchievements",
        retroKey: "API key RetroAchievements",
        retroLogin: "Login",
        retroCreateAccount: "Apri RetroAchievements",
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
        retroBulkScan: "Scansiona RetroAchievements",
        retroBulkScanning: "Scansione RetroAchievements",
        retroBulkDetecting: "rilevamento match ROM",
        retroBulkSearching: "ricerca match RetroAchievements",
        retroBulkApplying: "caricamento lista obiettivi",
        retroBulkAppliedOne: "obiettivi applicati",
        retroBulkSkippedOne: "saltato",
        retroBulkDone: "Scansione RetroAchievements completata",
        retroBulkApplied: "applicati",
        retroBulkSkipped: "saltati",
        retroBulkNothing: "Nessun gioco ROM/emulatore senza RetroAchievements da scansionare.",
        retroSyncProgress: "Sincronizza progressi RetroAchievements",
        retroSyncingProgress: "sincronizzazione progressi RetroAchievements",
        retroSyncDone: "Progressi RetroAchievements sincronizzati",
        retroSyncNothing: "Nessun gioco RetroAchievements associato da sincronizzare.",
        retroClearAll: "Cancella associazioni RetroAchievements",
        retroClearAllDone: "Associazioni RetroAchievements cancellate",
        retroDetectFailed: "Nessun match RetroAchievements trovato dal percorso del collegamento.",
        retroHint: "Incolla l'ID numerico RetroAchievements dall'URL della pagina del gioco. Lascialo vuoto per nascondere gli obiettivi di questo gioco.",
        xboxTitle: "Obiettivi Xbox / OpenXBL",
        xboxEnabled: "Abilita obiettivi Xbox",
        xboxKey: "Chiave API OpenXBL",
        xboxLogin: "Login",
        xboxOpenOpenXbl: "Apri OpenXBL",
        xboxLoginHint: "",
        xboxProfile: "Chiave API OpenXBL",
        xboxLoggedIn: "Account OpenXBL collegato",
        xboxLoginNeedsPassword: "Inserisci la chiave API OpenXBL, poi premi Login.",
        xboxLoginNeedsProfile: "Inserisci la chiave API OpenXBL, poi premi Login.",
        xboxClearAll: "Cancella associazioni Xbox",
        xboxClearAllDone: "Associazioni Xbox cancellate",
        xboxSyncProgress: "Sincronizza progressi",
        xboxSyncAllProgress: "Sincronizza progressi",
        xboxSyncProgressOk: "Progressi sincronizzati",
        xboxSyncProgressFailed: "Nessun progresso trovato. Controlla il match Xbox selezionato.",
        xboxLoginOk: "OpenXBL verificato",
        xboxLoginFailed: "OpenXBL non verificato",
        xboxBulkScan: "Scansiona obiettivi Xbox",
        xboxBulkScanning: "Scansione obiettivi Xbox",
        xboxBulkSearching: "ricerca match OpenXBL",
        xboxBulkApplying: "caricamento lista obiettivi",
        xboxBulkAppliedOne: "obiettivi applicati",
        xboxBulkSkippedOne: "saltato",
        xboxBulkDone: "Scansione Xbox completata",
        xboxBulkApplied: "applicati",
        xboxBulkSkipped: "saltati",
        xboxBulkNothing: "Nessun gioco senza obiettivi Xbox da scansionare.",
        xboxSyncingProgress: "sincronizzazione progressi",
        xboxConnectedAs: "Connesso come",
        achievementAutoSyncTitle: "Aggiornamento automatico progressi",
        achievementAutoSyncHint: "Scegli ogni quanto Playhub esegue gli aggiornamenti programmati dei progressi per ogni piattaforma.",
        achievementCacheRetroTitle: "Aggiorna automaticamente i progressi RetroAchievements",
        achievementCacheXboxTitle: "Aggiorna automaticamente i progressi Xbox",
        achievementCacheRpcs3Title: "Aggiorna automaticamente i trofei PS3",
        achievementCache_hourly: "Ogni ora",
        achievementCache_daily: "Ogni giorno",
        achievementCache_weekly: "Ogni settimana",
        achievementCache_pc_session: "Sessione PC",
        achievementCache_manual: "Manualmente",
        steamActivityTitle: "Metadata attività Steam",
        steamActivityHint: "Gestisci il titolo Steam usato solo per le attività e le news Home di questo gioco non-Steam.",
        steamActivityCurrentMatch: "AppID Steam associato",
        steamActivityNoCurrentMatch: "Nessuna associazione attività Steam per ora.",
        steamActivityDisabled: "Attività Steam disabilitate per questo gioco.",
        steamActivitySearchTitle: "Titolo da ricaricare",
        steamActivityRefetch: "Ricarica dal titolo",
        steamActivityClear: "Rimuovi associazione",
        steamActivityItems: "elementi",
        steamActivityRefetchDone: "Attività Steam aggiornate",
        steamActivityClearDone: "Associazione attività Steam rimossa",
        steamActivityNoMatch: "Nessun match attività Steam trovato",
        steamActivityEnabledForGame: "Abilita attività Steam per questo gioco",
        steamActivityEnabledForGameHint: "Attiva o disattiva attività Steam e news nella Home soltanto per questo titolo.",
        steamActivityEnabledDone: "Attività Steam abilitate per questo gioco",
        steamActivityDisabledDone: "Attività Steam disabilitate per questo gioco",
        qamLibraryTitle: "Libreria e metadata",
        scraperTitle: "Metadata IGN",
        scraperHint: "Le informazioni dei giochi vengono scaricate da IGN. Le descrizioni possono essere tradotte automaticamente in tutte le lingue supportate da Google Translate.",
        scraperSourceIgn: "IGN",
        scraperRescanHint: "Se cambi la lingua, esegui di nuovo \"Scansione metadata\" per sovrascrivere le descrizioni nella lingua precedente.",
        scraperLanguage: "Lingua della descrizione",
        scraperTranslateIgn: "Traduci le descrizioni IGN",
        scraperTranslateIgnHint: "Traduce automaticamente i testi IGN nella lingua scelta.",
        scraperGameLanguage: "Lingua della descrizione per questo gioco",
        scraperLanguageAuto: "Automatica (lingua globale)",
        scraperGameTranslationEnabled: "La traduzione IGN è attiva e userà la lingua selezionata qui sopra.",
        scraperGameTranslationDisabled: "La traduzione IGN è disattivata globalmente; le descrizioni resteranno in inglese.",
        scraperGameRefresh: "Aggiorna metadata con questa lingua",
        scraperGameRefreshDone: "Metadata aggiornati per questo gioco",
        qamAchievementsTitle: "Obiettivi",
        metadataFieldsTitle: "Dati del gioco",
        achievementSourceTitle: "Fonte obiettivi",
        achievementSourceHint: "Auto mantiene RetroAchievements per ROM/emulatori, legge i trofei locali di RPCS3 per i collegamenti PS3 e usa OpenXBL solo per collegamenti probabilmente Xbox/UWPHook.",
        achievementSource_auto: "Auto",
        achievementSource_retroachievements: "RetroAchievements",
        achievementSource_xbox: "Xbox",
        achievementSource_rpcs3: "PS3 (RPCS3)",
        achievementSource_disabled: "Disabilitati",
        rpcs3Title: "Trofei PS3 (RPCS3)",
        rpcs3SettingsHint: "I trofei vengono letti in locale da RPCS3 (dev_hdd0). Puoi scegliere una cartella dati personalizzata quando EmuDeck la sposta su un altro disco.",
        rpcs3DataPath: "Cartella dati RPCS3",
        rpcs3DataPathHint: "Sceglila quando EmuDeck salva dev_hdd0 separatamente. Puoi selezionare la cartella RPCS3, dev_hdd0, home, una cartella utente o la cartella trophy.",
        rpcs3ChooseDataPath: "Scegli cartella",
        rpcs3SaveDataPath: "Usa questa cartella",
        rpcs3ResetDataPath: "Usa il rilevamento automatico",
        rpcs3PathAutomatic: "Cartella RPCS3: rilevamento automatico",
        rpcs3PathInvalid: "La cartella selezionata non esiste.",
        rpcs3PathSavedNoTrophies: "Cartella salvata. Non sono ancora stati trovati set di trofei; avvia una volta un gioco PS3.",
        rpcs3PathSetsFound: "set di trofei RPCS3 trovati",
        rpcs3PerGameTitle: "Trofei PS3 (RPCS3)",
        rpcs3Hint: "Playhub legge i trofei di questo gioco direttamente dalla cartella di RPCS3. Se il gioco è in formato ISO, avvialo almeno una volta prima di rilevarne i trofei. Usa il rilevamento automatico per i collegamenti RPCS3, o scegli il set di trofei manualmente qui sotto.",
        rpcs3CurrentMatch: "Set di trofei attuale",
        rpcs3GameDetect: "Rileva trofei",
        rpcs3SyncProgress: "Sincronizza trofei",
        rpcs3ClearMatch: "Cancella associazione RPCS3",
        rpcs3GameSearch: "Cerca set di trofei installati",
        rpcs3GameSearchHint: "Se il rilevamento automatico non trova il gioco, cerca tra i set di trofei installati in RPCS3 e scegli quello giusto.",
        rpcs3GameNoMatches: "Nessun set di trofei RPCS3 trovato. Avvia il gioco almeno una volta in RPCS3 o controlla la cartella di RPCS3.",
        rpcs3GameOk: "Trofei PS3 caricati",
        rpcs3GameFailed: "Nessun trofeo PS3 caricato per questa selezione.",
        rpcs3DetectFailed: "Nessun set di trofei RPCS3 trovato da questo collegamento.",
        rpcs3SyncProgressOk: "Trofei PS3 sincronizzati",
        rpcs3SyncProgressFailed: "Sincronizzazione trofei PS3 fallita",
        rpcs3BulkScan: "Scansiona trofei RPCS3",
        rpcs3BulkScanning: "Scansione trofei RPCS3",
        rpcs3BulkDetecting: "rilevamento set di trofei",
        rpcs3BulkAppliedOne: "trofei applicati",
        rpcs3BulkSkippedOne: "saltato",
        rpcs3BulkDone: "Scansione RPCS3 completata",
        rpcs3BulkNothing: "Nessun gioco RPCS3 da scansionare.",
        rpcs3SyncingProgress: "sincronizzazione trofei",
        rpcs3SyncDone: "Sincronizzazione trofei RPCS3 completata",
        rpcs3SyncAllProgress: "Sincronizza tutti i trofei PS3",
        rpcs3ClearAll: "Cancella associazioni RPCS3",
        rpcs3ClearAllDone: "Associazioni RPCS3 cancellate",
        xboxPerGameTitle: "Obiettivi Xbox",
        xboxHint: "Playhub abbina gli Xbox title ID tramite OpenXBL. Usa il selettore se il match automatico è sbagliato.",
        xboxCurrentMatch: "Xbox title ID attuale",
        xboxGameDetect: "Rileva con OpenXBL",
        xboxGameTest: "Testa obiettivi Xbox",
        xboxClearMatch: "Cancella associazione Xbox",
        xboxGameSearch: "Cerca titoli Xbox",
        xboxGameSearchHint: "Cerca nella cronologia OpenXBL e nel Microsoft Store il titolo Xbox corretto.",
        xboxGameNoMatches: "Nessun risultato Xbox per ora.",
        xboxGameOk: "Obiettivi Xbox caricati",
        xboxGameFailed: "Nessun obiettivo Xbox caricato. Riprova la scansione o incolla manualmente l'Xbox title ID.",
        xboxDetectFailed: "Nessun match Xbox trovato dal collegamento UWPHook.",
        none: "Nessuno",
        noResults: "Nessun risultato per ora.",
        source: "Fonte",
        fetchCurrent: "Scarica da IGN",
        removeToast: "Metadata rimossi",
        scanComplete: "Scansione completata",
        backgroundSyncStarted: "Sincronizzazione progressi avviata",
        backgroundSyncFinished: "Sincronizzazione completata",
        backgroundSyncUpdated: "aggiornati",
        backgroundSyncSkipped: "saltati",
        backgroundSyncFailed: "Sincronizzazione progressi fallita",
        postPlaySyncStarted: "Sync gioco appena chiuso avviato",
        postPlaySyncFinished: "Gioco appena chiuso sincronizzato",
        postPlaySyncSkipped: "Nessun nuovo progresso trovato",
        postPlaySyncFailed: "Sync gioco appena chiuso fallito",
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
exports.t = t;
};
factories["index"] = function(module, exports, require) {
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const api_1 = require("@decky/api");
const ui_1 = require("@decky/ui");
const fa_1 = require("react-icons/fa");
const components_1 = require("./components");
const contextMenuPatch_1 = __importDefault(require("./contextMenuPatch"));
const i18n_1 = require("./i18n");
const steam_1 = require("./steam");
const METADATA_ROUTE = "/playhub-metadata/:appid";
exports.default = (0, ui_1.definePlugin)(() => {
    void (0, steam_1.refreshMetadataCache)().catch((error) => console.warn("[Playhub Metadata] initial metadata load failed; bootstrap will retry", error));
    void (0, steam_1.refreshRaSettings)().catch((error) => console.warn("[Playhub Metadata] initial achievement settings load failed", error));
    void (0, steam_1.cleanupRetiredRpcs3ControllerOverrides)();
    const unpatchSteam = (0, steam_1.installSteamPatches)();
    const stopMetadataBootstrap = (0, steam_1.startMetadataBootstrap)();
    const menuPatch = (0, contextMenuPatch_1.default)();
    api_1.routerHook.addRoute(METADATA_ROUTE, () => (0, jsx_runtime_1.jsx)(components_1.MetadataPage, {}), { exact: true });
    api_1.routerHook.addRoute(steam_1.PLAYHUB_ACHIEVEMENTS_ROUTE, () => (0, jsx_runtime_1.jsx)(steam_1.PlayhubAchievementsRoute, {}), { exact: true });
    return {
        name: (0, i18n_1.t)("pluginName"),
        titleView: (0, jsx_runtime_1.jsx)("div", { className: ui_1.staticClasses.Title, children: (0, i18n_1.t)("pluginName") }),
        content: (0, jsx_runtime_1.jsx)(components_1.Content, {}),
        icon: (0, jsx_runtime_1.jsx)(fa_1.FaDatabase, {}),
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
                api_1.routerHook.removeRoute(METADATA_ROUTE);
                api_1.routerHook.removeRoute(steam_1.PLAYHUB_ACHIEVEMENTS_ROUTE);
            }
            catch (error) {
                console.error("[Playhub Metadata] route remove failed", error);
            }
        },
    };
});
};
factories["pluginMenuSection"] = function(module, exports, require) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertPluginSection = insertPluginSection;
exports.installMenuSectionFallback = installMenuSectionFallback;
// @ts-nocheck
// Insert into Steam's Properties section, including nested React fragments.
// Return the original tree when no Properties action exists.
function insertPluginSection(React, tree, entry) {
    const keys = new Set(['playhub-metadata-edit', 'themedeck-change-music',
        'trailerhero-game-settings', 'launch-curtain-game-settings',
        'quick-settings-game-profile', 'playhub-artworks-change-artwork']);
    const collected = new Map();
    let anchor;
    function scan(node, depth = 0) {
        if (!node || depth > 32)
            return;
        if (Array.isArray(node)) {
            node.forEach(n => scan(n, depth + 1));
            return;
        }
        if (!React.isValidElement(node))
            return;
        if (keys.has(node.key)) {
            collected.set(node.key, node);
            return;
        }
        const handler = node.props?.onSelected ?? node.props?.onClick;
        if (typeof handler === 'function' && /(?:Show)?AppProperties/.test(Function.prototype.toString.call(handler)))
            anchor = node;
        scan(node.props?.children, depth + 1);
    }
    scan(tree);
    if (!anchor)
        return tree;
    collected.set(entry.key, entry);
    const ordered = [...keys].filter(key => collected.has(key)).map(key => collected.get(key));
    function visit(node, depth = 0) {
        if (!node || depth > 32)
            return node;
        if (Array.isArray(node))
            return node.flatMap(n => n === anchor ? [...ordered, n] : keys.has(n?.key) ? [] : [visit(n, depth + 1)]);
        if (!React.isValidElement(node))
            return node;
        if (keys.has(node.key))
            return null;
        if (node === anchor)
            return [...ordered, node];
        if (node.props?.children === undefined)
            return node;
        return React.cloneElement(node, { children: visit(node.props.children, depth + 1) });
    }
    return visit(tree);
}
// Steam's MobX menu replaces instance.render after its first render.
// Patch the inner native Menu as well, deriving the game from React owners.
function installMenuSectionFallback(React, ui, inject) {
    let proto, hooks, oldUseId, changedUseId = false;
    if (typeof ui.applyHookStubs !== 'function' || typeof ui.removeHookStubs !== 'function')
        return () => { };
    try {
        hooks = ui.applyHookStubs();
        oldUseId = hooks.useId;
        hooks.useId = () => "playhub-menu-probe";
        changedUseId = true;
        proto = ui.Menu({ children: [] })?.type?.prototype;
    }
    catch {
        return () => { };
    }
    finally {
        if (changedUseId)
            hooks.useId = oldUseId;
        ui.removeHookStubs();
    }
    if (!proto || typeof proto.render !== 'function')
        return () => { };
    let active = true;
    const restores = [];
    const appFor = (tree, instance) => {
        // Production React elements omit _owner; the mounted native Menu fiber
        // still identifies its enclosing LibraryContextMenu and selected games.
        for (let f = instance?._reactInternals?.return, i = 0; f && i < 32; f = f.return, i++) {
            if (typeof f.stateNode?.GetTargetApps === 'function') {
                const targets = f.stateNode.GetTargetApps();
                if (targets?.length !== 1)
                    return 0;
                const id = Number(targets[0]?.appid);
                return Number.isInteger(id) && id > 0 && id <= 0xffffffff ? id : 0;
            }
        }
        const ids = new Set();
        let multi = false;
        const seen = new Set();
        function walk(n, depth = 0) {
            if (!n || depth > 24 || seen.has(n))
                return;
            if (typeof n === 'object')
                seen.add(n);
            if (Array.isArray(n)) {
                n.forEach(x => walk(x, depth + 1));
                return;
            }
            if (!React.isValidElement(n))
                return;
            for (let owner = n._owner, i = 0; owner && i < 24; owner = owner.return, i++) {
                if (typeof owner.stateNode?.GetTargetApps === 'function') {
                    const targets = owner.stateNode.GetTargetApps();
                    if (targets?.length !== 1) {
                        multi = true;
                        break;
                    }
                    const id = Number(targets[0]?.appid);
                    if (Number.isInteger(id) && id > 0 && id <= 0xffffffff)
                        ids.add(id);
                    break;
                }
                const id = Number(owner.pendingProps?.overview?.appid ?? owner.memoizedProps?.overview?.appid);
                if (Number.isInteger(id) && id > 0 && id <= 0xffffffff) {
                    ids.add(id);
                    break;
                }
            }
            walk(n.props?.children, depth + 1);
        }
        walk(tree);
        return !multi && ids.size === 1 ? [...ids][0] : 0;
    };
    const transform = (tree, instance) => {
        if (!active)
            return tree;
        try {
            const id = appFor(tree, instance);
            return id ? inject(tree, id) : tree;
        }
        catch (e) {
            console.warn('[Playhub menu] native menu injection skipped', e);
            return tree;
        }
    };
    function patch(name, wrap) {
        const descriptor = Object.getOwnPropertyDescriptor(proto, name);
        const original = proto[name];
        if (typeof original !== 'function' || (descriptor && !descriptor.configurable && !descriptor.writable))
            return;
        const replacement = function (...args) { return active ? wrap.call(this, original, args) : original.apply(this, args); };
        Object.defineProperty(proto, name, { configurable: true, writable: true, enumerable: descriptor?.enumerable ?? false, value: replacement });
        restores.push(() => { if (proto[name] === replacement) {
            if (descriptor)
                Object.defineProperty(proto, name, descriptor);
            else
                delete proto[name];
        } });
    }
    patch('render', function (original, args) { return transform(original.apply(this, args), this); });
    patch('shouldComponentUpdate', function (original, args) {
        const children = args[0]?.children;
        if (Array.isArray(children) && !Object.isFrozen(children)) {
            const wrapper = React.createElement(React.Fragment, { children });
            const result = transform(wrapper, this);
            if (result !== wrapper && Array.isArray(result?.props?.children))
                children.splice(0, children.length, ...result.props.children);
        }
        return original.apply(this, args);
    });
    return () => { active = false; restores.reverse().forEach(restore => restore()); };
}
};
factories["steam"] = function(module, exports, require) {
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cleanupRetiredRpcs3ControllerOverrides = exports.allNonSteamGames = exports.installSteamPatches = exports.historyPathFromArgs = exports.PlayhubAchievementsRoute = exports.getAppDetails = exports.tryEnrichCommunityMediaForApp = exports.tryEnrichScreenshotsForApp = exports.tryFetchMetadataForApp = exports.isUwphookGameOption = exports.clearAchievementsForApps = exports.clearAchievementsForApp = exports.applyAchievementPayload = exports.startBackgroundAchievementSync = exports.startPostPlayAchievementSync = exports.clearAppliedMetadata = exports.applyMetadata = exports.refreshRaSettings = exports.startMetadataBootstrap = exports.ensureMetadataCache = exports.refreshMetadataCache = exports.appName = exports.getOverview = exports.isNonSteamApp = exports.cleanTitle = exports.PLAYHUB_ACHIEVEMENTS_ROUTE = exports.achievementsCache = exports.metadataCache = void 0;
const react_1 = __importDefault(require("react"));
const compat_1 = require("./compat");
const ui_1 = require("@decky/ui");
const api_1 = require("@decky/api");
const backend_1 = require("./backend");
const types_1 = require("./types");
const i18n_1 = require("./i18n");
exports.metadataCache = {};
exports.achievementsCache = {};
const NON_STEAM_APP_TYPE = 1073741824;
const GAME_DETAIL_ROUTES = [
    "/library/app/:appid",
    "/library/details/:appid",
    "/library/:collection/app/:appid",
];
const GAME_ACHIEVEMENT_ROUTES = [
    "/library/app/:appid/achievements",
    "/library/app/:appid/achievements/:rest",
    "/library/details/:appid/achievements",
    "/library/details/:appid/achievements/:rest",
    "/library/:collection/app/:appid/achievements",
    "/library/:collection/app/:appid/achievements/:rest",
];
const GAME_ACTIVITY_ROUTES = [
    "/library/app/:appid/activity",
    "/library/app/:appid/activity/:rest",
    "/library/details/:appid/activity",
    "/library/details/:appid/activity/:rest",
    "/library/:collection/app/:appid/activity",
    "/library/:collection/app/:appid/activity/:rest",
];
exports.PLAYHUB_ACHIEVEMENTS_ROUTE = "/playhub-metadata/achievements/:appid";
let achievementSettingsCache = null;
let bypassCounter = 0;
let bypassBypass = 0;
let metadataLoaded = false;
let metadataLoadPromise = null;
const loadingMetadata = new Set();
const loadingAchievements = new Set();
const loadingScreenshots = new Set();
const loadingCommunityMedia = new Set();
let steamAchievementStoreRef = null;
let lastObservedGameDetailAppId = 0;
let selectedDetailsTabHint = "";
let selectedDetailsTabHintAt = 0;
let selectedDetailsTabIndexHint = null;
let selectedDetailsTabIndexHintAt = 0;
let backgroundAchievementSyncTimer;
let backgroundAchievementSyncRunning = false;
let postPlayAchievementSyncTimer;
let postPlayAchievementSyncGamesCacheAt = 0;
let postPlayAchievementSyncGamesCache = [];
const postPlayRunningState = new Map();
const postPlaySyncPending = new Set();
const BACKGROUND_SYNC_CHECK_MS = 60 * 1000;
const BACKGROUND_SYNC_INITIAL_DELAY_MS = 20 * 1000;
const BACKGROUND_SYNC_LOCAL_PREFIX = "playhub-metadata:bg-achievement-sync:last";
const BACKGROUND_SYNC_SESSION_KEY = "playhub-metadata:bg-achievement-sync:pc-session";
const POST_PLAY_SYNC_POLL_MS = 10 * 1000;
const POST_PLAY_SYNC_INITIAL_DELAY_MS = 30 * 1000;
const POST_PLAY_SYNC_GAME_CACHE_MS = 60 * 1000;
const POST_PLAY_SYNC_MIN_PLAY_MS = 45 * 1000;
const POST_PLAY_SYNC_DELAY_MS = 8 * 1000;
const POST_PLAY_SYNC_THROTTLE_MS = 10 * 60 * 1000;
const POST_PLAY_SYNC_LOCAL_PREFIX = "playhub-metadata:post-play-achievement-sync:last";
const POST_PLAY_SYNC_SETTING_KEY = "playhub-metadata:post-play-achievement-sync-enabled";
const readPostPlayAchievementSyncEnabled = () => {
    try {
        return window.localStorage.getItem(POST_PLAY_SYNC_SETTING_KEY) !== "0";
    }
    catch (_error) {
        return true;
    }
};
const PLAYHUB_HOME_ACTIVITY_SETTING_KEY = "playhub-metadata:show-activities-in-home";
const PLAYHUB_HOME_ACTIVITY_DEFAULT_LIMIT = 3;
const PLAYHUB_HOME_ACTIVITY_MAX_LIMIT = 6;
const PLAYHUB_HOME_ACTIVITY_COUNT_SETTING_KEY = "playhub-metadata:home-activity-count";
const PLAYHUB_HOME_ACTIVITY_SHUFFLE_SETTING_KEY = "playhub-metadata:home-activity-shuffle";
const PLAYHUB_HOME_ACTIVITY_SYNC_DEBOUNCE_MS = 8500;
const PLAYHUB_HOME_ACTIVITY_CACHE_TTL_MS = 120000;
const PLAYHUB_HOME_ACTIVITY_IMAGE_DIMENSION_TTL_MS = 30 * 60 * 1000;
const clampPlayhubHomeActivityLimit = (value) => Math.max(1, Math.min(PLAYHUB_HOME_ACTIVITY_MAX_LIMIT, Math.round(Number.isFinite(value) ? value : PLAYHUB_HOME_ACTIVITY_DEFAULT_LIMIT)));
const readPlayhubHomeActivityEnabled = () => {
    try {
        return window.localStorage.getItem(PLAYHUB_HOME_ACTIVITY_SETTING_KEY) === "1";
    }
    catch (_error) {
        return false;
    }
};
const readPlayhubHomeActivityLimit = () => {
    try {
        return clampPlayhubHomeActivityLimit(Number(window.localStorage.getItem(PLAYHUB_HOME_ACTIVITY_COUNT_SETTING_KEY) || PLAYHUB_HOME_ACTIVITY_DEFAULT_LIMIT));
    }
    catch (_error) {
        return PLAYHUB_HOME_ACTIVITY_DEFAULT_LIMIT;
    }
};
const readPlayhubHomeActivityShuffleSeed = () => {
    try {
        return String(window.localStorage.getItem(PLAYHUB_HOME_ACTIVITY_SHUFFLE_SETTING_KEY) || "");
    }
    catch (_error) {
        return "";
    }
};
const shouldShowAchievements = (appId) => {
    const key = String(appId);
    if (achievementSettingsCache?.achievement_sources?.[key] === "disabled")
        return false;
    if (exports.achievementsCache[key]?.steam?.nTotal)
        return true;
    if (achievementSettingsCache?.retroachievements?.game_ids?.[key])
        return true;
    if (achievementSettingsCache?.xbox?.title_ids?.[key])
        return true;
    if (achievementSettingsCache?.rpcs3?.trophy_ids?.[key])
        return true;
    const source = achievementSettingsCache?.achievement_sources?.[key] ?? "auto";
    if (source === "xbox")
        return !!achievementSettingsCache?.xbox?.enabled;
    if (source === "retroachievements")
        return !!achievementSettingsCache?.retroachievements?.enabled;
    if (source === "rpcs3")
        return true;
    // Auto mode must be allowed to show the section before a title id exists,
    // otherwise Xbox/UWPHook auto-detection never gets a chance to run. The backend
    // still refuses non-UWPHook Xbox calls and avoids RetroAchievements network
    // calls unless a RA id/hash was resolved.
    return !!achievementSettingsCache?.xbox?.enabled || !!achievementSettingsCache?.retroachievements?.enabled;
};
const cleanTitle = (value) => String(value || "")
    .replace(/[\u2122\u00ae\u00a9]/g, "")
    .replace(/\s+/g, " ")
    .trim();
exports.cleanTitle = cleanTitle;
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
    return Number.isFinite(appId) && !!exports.metadataCache[String(appId)];
};
const currentRoutePath = () => {
    const steamRouter = globalThis.Router ?? globalThis.window?.Router;
    const location = steamRouter?.WindowStore?.GamepadUIMainWindowInstance?.m_history?.location;
    const windowLocation = globalThis.window?.location;
    return [
        location?.pathname,
        location?.search,
        location?.hash,
        windowLocation?.pathname,
        windowLocation?.search,
        windowLocation?.hash,
        windowLocation?.href,
    ]
        .filter(Boolean)
        .join(" ");
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
exports.isNonSteamApp = isNonSteamApp;
const getOverview = (appId) => {
    try {
        return (0, compat_1.getSteamGlobal)("appStore")?.GetAppOverviewByAppID?.(appId) ?? null;
    }
    catch (_error) {
        return null;
    }
};
exports.getOverview = getOverview;
const shortcutAppIdForSteamAppId = (steamAppId) => {
    if (!Number.isFinite(steamAppId) || steamAppId <= 0)
        return null;
    for (const [shortcutAppIdText, metadata] of Object.entries(exports.metadataCache)) {
        const shortcutAppId = Number(shortcutAppIdText);
        const metadataSteamAppId = Number(metadata?.steam_appid);
        if (Number.isFinite(shortcutAppId) &&
            shortcutAppId > 0 &&
            metadataSteamAppId === steamAppId) {
            return shortcutAppId;
        }
    }
    return null;
};
const ensureDetailsOverviewSafeFields = (appId) => {
    try {
        const appData = (0, compat_1.getSteamGlobal)("appDetailsStore")?.GetAppData?.(appId);
        const details = appData?.details;
        const overview = (0, exports.getOverview)(appId);
        if (!details || !(0, exports.isNonSteamApp)(overview))
            return;
        const detailsAppId = Number(details.unAppID ?? details.appid ?? details.nAppID ?? 0);
        const detailsOverview = Number.isFinite(detailsAppId) && detailsAppId > 0 ? (0, exports.getOverview)(detailsAppId) : null;
        // Steam's play bar calls GetAppOverviewByAppID(details.unAppID).BIsApplicationOrTool().
        // For non-Steam games that have been enriched with official Steam data, the first
        // page render can temporarily expose a details object whose unAppID points nowhere
        // in the local library. Keep it tied to the actual shortcut AppID so SteamUI never
        // dereferences a null overview during the first open.
        if (!detailsOverview) {
            details.unAppID = appId;
        }
        // Some SteamUI reactions iterate these arrays while details are still being
        // bootstrapped. Non-Steam shortcut details can miss them on first render.
        if (!Array.isArray(details.vecDLC))
            details.vecDLC = [];
        if (!Array.isArray(details.vecChildConfigApps))
            details.vecChildConfigApps = [];
        if (!Array.isArray(details.vecScreenShots))
            details.vecScreenShots = [];
        if (details.appid == null)
            details.appid = appId;
        if (details.nAppID == null)
            details.nAppID = appId;
    }
    catch (_error) {
        // Best-effort guard only; never block Steam's native bootstrap.
    }
};
const appName = (appId) => {
    const overview = (0, exports.getOverview)(appId);
    return (0, exports.cleanTitle)(overview?.display_name ||
        overview?.localized_name ||
        overview?.name ||
        `App ${appId}`);
};
exports.appName = appName;
const refreshMetadataCache = async () => {
    const all = await (0, backend_1.getAllMetadata)();
    Object.keys(exports.metadataCache).forEach((key) => delete exports.metadataCache[key]);
    Object.assign(exports.metadataCache, all || {});
    metadataLoaded = true;
    Object.keys(exports.metadataCache).forEach((key) => (0, exports.applyMetadata)(Number(key)));
};
exports.refreshMetadataCache = refreshMetadataCache;
const ensureMetadataCache = async () => {
    if (metadataLoaded)
        return;
    if (!metadataLoadPromise) {
        metadataLoadPromise = (0, exports.refreshMetadataCache)().finally(() => {
            metadataLoadPromise = null;
        });
    }
    await metadataLoadPromise;
};
exports.ensureMetadataCache = ensureMetadataCache;
const startMetadataBootstrap = () => {
    let cancelled = false;
    let attempts = 0;
    let timer;
    const tick = async () => {
        if (cancelled)
            return;
        try {
            await (0, exports.ensureMetadataCache)();
            if (cancelled)
                return;
            Object.keys(exports.metadataCache).forEach((key) => (0, exports.applyMetadata)(Number(key)));
        }
        catch (error) {
            console.warn("[Playhub Metadata] metadata bootstrap failed", error);
        }
        attempts += 1;
        if (!cancelled && attempts < 24) {
            timer = window.setTimeout(tick, 500);
        }
    };
    void tick();
    const stopAchievementSync = (0, exports.startBackgroundAchievementSync)();
    const stopPostPlayAchievementSync = (0, exports.startPostPlayAchievementSync)();
    return () => {
        cancelled = true;
        if (timer !== undefined)
            window.clearTimeout(timer);
        stopAchievementSync?.();
        stopPostPlayAchievementSync?.();
    };
};
exports.startMetadataBootstrap = startMetadataBootstrap;
const refreshRaSettings = async () => {
    achievementSettingsCache = await (0, backend_1.getAchievementSettings)();
    return achievementSettingsCache;
};
exports.refreshRaSettings = refreshRaSettings;
const applyMetadata = (appId) => {
    const overview = (0, exports.getOverview)(appId);
    if (!(0, exports.isNonSteamApp)(overview))
        return;
    const metadata = exports.metadataCache[String(appId)];
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
    const appData = (0, compat_1.getSteamGlobal)("appDetailsStore")?.GetAppData?.(appId);
    if (!appData)
        return;
    ensureDetailsOverviewSafeFields(appId);
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
        (0, compat_1.getSteamGlobal)("appDetailsCache")?.SetCachedDataForApp?.(appId, "descriptions", 1, appData.descriptionsData);
        (0, compat_1.getSteamGlobal)("appDetailsCache")?.SetCachedDataForApp?.(appId, "associations", 1, appData.associationData);
        if (screenshots.length) {
            (0, compat_1.getSteamGlobal)("appDetailsCache")?.SetCachedDataForApp?.(appId, "screenshots", 1, appData.screenshots);
        }
    }
    catch (_error) {
        // Cache writes can fail if the page has not finished creating app data.
    }
};
exports.applyMetadata = applyMetadata;
const clearAppliedMetadata = (appId, previousMetadata) => {
    const overview = (0, exports.getOverview)(appId);
    const metadata = previousMetadata || exports.metadataCache[String(appId)] || null;
    try {
        if (overview && (0, exports.isNonSteamApp)(overview)) {
            if (typeof overview.metacritic_score === "number") {
                overview.metacritic_score = 0;
            }
            if (overview.m_setStoreCategories?.delete && metadata?.store_categories) {
                metadata.store_categories.forEach((category) => {
                    overview.m_setStoreCategories.delete(Number(category));
                });
            }
        }
    }
    catch (_error) {
        // Steam overview objects may temporarily be read-only.
    }
    const appData = (0, compat_1.getSteamGlobal)("appDetailsStore")?.GetAppData?.(appId);
    if (!appData)
        return;
    const emptyDescriptions = {
        strFullDescription: "",
        strSnippet: "",
    };
    const emptyAssociations = {
        rgDevelopers: [],
        rgPublishers: [],
        rgFranchises: [],
    };
    const emptyScreenshots = {
        rgScreenshots: [],
        screenshots: [],
        vecScreenshots: [],
        vecScreenShots: [],
    };
    appData.descriptionsData = emptyDescriptions;
    appData.associationData = emptyAssociations;
    appData.screenshots = emptyScreenshots;
    if (appData.details) {
        appData.details.nScreenshots = 0;
        appData.details.vecScreenShots = [];
    }
    try {
        (0, compat_1.getSteamGlobal)("appDetailsCache")?.SetCachedDataForApp?.(appId, "descriptions", 1, emptyDescriptions);
        (0, compat_1.getSteamGlobal)("appDetailsCache")?.SetCachedDataForApp?.(appId, "associations", 1, emptyAssociations);
        (0, compat_1.getSteamGlobal)("appDetailsCache")?.SetCachedDataForApp?.(appId, "screenshots", 1, emptyScreenshots);
    }
    catch (_error) {
        // Best-effort cache reset; the UI event below triggers a fresh render.
    }
};
exports.clearAppliedMetadata = clearAppliedMetadata;
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
const PLAYHUB_COMMUNITY_YOUTUBE_ICON = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAMAAABrrFhUAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAnlQTFRF//////P1/9Da/66+/5mt/42k/4CZ/26L/1h5/0Fn/ypV/xRD/wAz/wg5/x5L/zZe/0No/1l6/3CM/4Sd/52x/7TD/8vV/+Ln//r7/+br/629/4Ob/zFa/ws8/wM2/ydS/05x/3SQ/5yv/8TP//L1/+Pp/4ig/2SD/xxJ/2KB/7vI/+ru/2aF/0Np/9Lb/9Tc/wc4/0pu//3+/w4+/zVd/42j/8zW/yxW/xNC/zxj/2CA/7LC/9nh/yNP/119/3OP//f4/2uI/6W3/xdF//39/6S2/8bR/2mH/xBA/8/Y/+bq/5Cm/6a3/1d5/x9M/+nt/7jG/8nU/4mg/9Xd/5qu/zti/0Rp/w8///X3/wk6/8LO/5uv/0xw//v7/4ae/8nT/3mU/y5Y/+/y/wQ2/+Hn//j5/87X/2WE/+Xq/7zJ/x9L/6u8/+Po/wE0/52w/5+y/7nG/4+l/09y/4Kb//v8/xJC/6O1/3iS/9Td//n6/w09/5Sp/15+/32X/1p7/2+M/22K/3mT/3CN/7rI/3qU//H0/wY4/zBZ/4Ga//P2/5Ko/4qh/56x/5Wq/36X/6Gz/8rV/7rH/62+//f5/ww8/8rU/73K/z9l/9rh/83X/4ui/+zw/9/l/5ar/9zj/5yw/9/m//7+/xpI/1t7/6e4/zRd/0Bm/0tv/4yj/3eS/+Tp/9Pb/zph/3aR/8PP/7HB//L0/yVR/3+Y/yZR//z8/zJb/z5k/yBN/yJO/xhH/wI1/z1k/w4//6m6/2aE//T2/9Ha/46k/1V2/6e5/ww9/2eG/4We/1R2/y5X/zRc/7PC/0Jo/ypU/x1K/xZE/5mu/7HA/9Pc//b3sfblvgAAB9RJREFUeJztnWmMFFUUhatUQgiEGKNGhcSYiBgljKKCgrIjiwICURAG2dGBEZRdw6YCgrIFlVUG2XcYEFBQMCDirnHfDTHGkBCiJgQDqMggIVJO17vn1qs+08z9ft/37plvuqtedXXXC4NyTsgOwMYEsAOwMQHsAGxMADsAGxPADsDGBLADsDEB7ABsTAA7ABsTwA7AxgSwA7AxAewAbEwAOwAbE8AOwMYEsAOwMQHsAGxMADsAGxPADsDGBLADsDEB7ABsTAA7ABsTwA7AxgSwA7AxAewAbEwAOwAbE8AOwMYEsAOwMQHsAGxMADsAGxPADsDGBLADsDEB7ABsTAA7ABsTwA7AxgSwA7BJR0D4HxJO9GeFMzMd8JTu7A5+prk8DI9UDn/1M5mDi/7V8b2f2RIKqHEyyc9+kmg4r1oYfpFsiiQCau1P1tsXV4Wf6gerBeT5eg16ocbH2pFKAXXCb7QdU+LaD3TjdAJu+UrXLVWue08zSiWgXsIDT0pU07wqNQJu/VwxKBtc/y4+RiGgctldPf59BB6C/zG3fQYPyR6196EjYAENPkFHZJUb9oIDYAFV0AFZ5jBYjwq4Q73iyBJ19mD1oIDLUMHZB0wICrjyEFZP4KbdUDkooKwfAUrAXgKYgMbKBXdWSVNAk/ehcg51dyHVmIBceAcE9XYi1eegAOw9AAlo/g6WhER6Alq8jSUhUX8HUAwJuPE7MAqHBtuBYkhAbhwCgttfBYrPRQHQQcAEIBOXdwGt30STkGi4TV6LCLgLu87i0XiLvBYR0PYNOAoH5DyICGgHXWUQuRC4XwsIaA9dZFCpIv8qASDgntcVUTi02CguBQR0RJbYmWiJLFPVtFonLgUENPxIESXKYT8eHRw/Ki4FBNz8tSJKlJI1yr2veJgoljZrxKWAgM5bFVGinFqkdQlf9jBVDNXl/ytAgJeF8OlVatfNPiZzthFAEhB02+RjNmcbNywBQZBf7GM+ZxsXPAFB94PonVxVGwdEAUFQ+0cfUzrbxEIVEAQPbPAxqbNNDGQBQdBjvY9pnW0yQhcQBD3l69YkbTJQBgQEQa+1PqZ2tikVuQA/d4ZLT9Y7XO1jcleb0pAL6LtKkyRKpmSX/OFj9jPcv0BaKRfQf4UqSoTM/5oHl/uY/zT5c6WVcgEFS1VRIsS9Ngcs8dHhFC3F5xa5gIGLVVEixL45C8NFPnoEyP1RuYBBRaooERxHp8ELfTQ5ecCaKa2UC3hUfFyJw3l4HjLfR5uqv0gr5QKGzlNFieA+Pw0L5yRvM+AZaaVcwMgXVFEiSE7Qo55P3Eb+qahcQMUKqigRZCuUx8JZydoMniitlAvwc56WLtHqfpmoTSPx55dyAaPFB9Y45GvUMTMStDl6XFopFzB2uipKBOTWffXf1G3SEDBumipKBETA+KnqNsPHSSvlAp4Un1nikAt4akqCNqNGSyvlAhp9qIoSQSpgYjgpSZtjx6SVcgETJquiRBAKeFp8GiudK76VVsoFTJ6gihJBImDKhBNJ24wdIa2UC3j2CVWUCAIBPm7Cjh8mrZQLmCY+sMbhFDB9rI82PcTrdrmAGWNUUSI4BMwUH73jmThYWikXMOtxVZQIsQKeC0f56HGSKQOllXIBs8XHlTjiBMwZ7qPDKaY+JK2UC5g3VBUlQmYB84f4mP80M/pJK+UCXnxEFSVCJgF5P/iY3dnm/8gFXO3lMT6lJ/N+pzzHbo35/yVKTglYKD5lJWqTAbqAokE+pnW2yQhZwKKHfUzqbBMDVcBLhT6mdLaJhShgcTjAx4yuNg54ApYW+JjP2cYFS8Ay8Vo1URs3JAEJP/Z3UVP+8R1FQL88X1d9GZjXTVwKCPDyAJkSASv6e5goFuBRMoCAleIrrBgOB6v6epjGQUf5d00AAav7KKJEKUx+51dApYPiUkDAiNmKKByK7hOXAgLW9lJEoYA8RQT54eSkRDdrssjF++W1iIB1PcEgLIBjICRgfQ84CoclHeW1iICN3eEoHK4BfuGICCjOh6NwsCdIALUmAJk4RwRAT9eFBGySX2QxqYg89RESsLkrGIXDTORyCxKwpjcYhUN6D1PLkYNAeRewsi1SjQlI8NXF7CH/nnAJmIAtXaByDmk+VDUn3gOpCtjaGasnsKYNVA4KyIH3wKq7oXL04epJv8OaOmtbY/X2eH20wfmV0BFZZRz6VbtzbIuNda3QEYoNU5akd1s/KZ3xH55qdozZ3kkxKBtsuBMfo9oy57UOmlGpU9xcMUi3Z9DO9qph6bK5qWaUdtOkZopNnVJlQ4UmqnHqXaOK3/LwG2dv9OrUWDkyybZZu/Ozs8emk21/6f77JSTdN+zS9dtbwedefzQduW9vsufS+do4bcGBZmG4K0u3j2vOLjr0U56XBzqktO1uvxO16i9bXjhrR8HcsE+yrTn3FBzpcMHv7aqGYVjbU7qzKLtb52UJE8AOwMYEsAOwMQHsAGxMADsAGxPADsDGBLADsDEB7ABsTAA7ABsTwA7AxgSwA7AxAewAbEwAOwAbE8AOwMYEsAOwMQHsAGxMADsAGxPADsDGBLADsDEB7ABsTAA7ABsTwA7AxgSwA7AxAewAbEwAOwAbE8AOwMYEsAOwMQHsAGxMADsAGxPADsDGBLADsDEB7ABsTAA7ABsTwA7AptwL+Aeqhk8QNfif4AAAAABJRU5ErkJggg==";
const PLAYHUB_COMMUNITY_IGN_ICON = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAIAAADTED8xAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAErpJREFUeJztnfl/E2Uex/dvkbK70nKI5T4FQQ6XSwQWBQERRVkRd1FxEUHkUBZc0UU8UEFEURABRVwvDkGuFSFN0jPpkaZpmzZtrjZn90mnhtJkZp65mpLv5/t6/8CrTOY5Zt4zzzPzzPP8wXRbHwDI8oeM5wCADAIBAGkgACANBACkgQCANBAAkAYCANJAAEAaCABIAwEAaSAAIA0EAKSBAIA0EACQBgIA0kAAQBoIAEgDAQBpIAAgDQQApIEAgDQQAJAGAgDSQABAGggASAMBAGkgACANBACkgQCANBAAkAYCANJAAEAaCABIAwEAaSAAIA0EAKSBAIA0EACQBgIA0kAAQBoIAEgDAQBpIAAgDQQApIEAgDQQAJAGAgDSQABAGggASAMBAGkgACANBACkgQCANBAAkAYCANJAAEAaCABIAwEAaSAAIA0EAKSBAIA0EACQBgIA0kAAQBoIAEgDAQBpIAAgDQQApIEAgDQQAJAGAgDSQABAGggASAMBAGkgACANBACkgQCANBAAkAYCANJAAEAaCABIAwEAaSAAIA0EAKSBAIA0EACQBgIA0kAAQBoIAEgDAQBpIAAgDQQApIEAgDQQAJAGAgDSQABAGggASNNDBbDmj4i3traJh23ugoxnEmQBPVSA2p27JM5+Fp4vjmU8kyAL6KECtFis0gLEQyFz3/yM5xPc6vREAQpHjGuLxaUFYFG+5LGMZxXc6vREAZwvbZE9+1m4P9iX8axmN5b+g+2Lljk3bHZtf71m86sVj6+0DhmT8VzpS08RoGz2/LL7HxD+7f3+Rx4BwtVOYfvie6ZV/u1pU06eERmr3/Nh1OORwH/xkvZUCkeOdzy3tuHAQd/ps0FTQWuZPVTlCDmqdafyqdXy+emV61izLnj1WjwSSa321pJS146d5jzd2p/OjVsjtXVdYKk0HjxUOPwuo0+8zAtgf3BJ4NffWM3a5i8W/hJ2VPMIwKJw2Fi2vaXfoLZYLFReUf38i7pr0PDJZ9J5YN0V1TsvmTKTnfQs55zl1R6JKpLMku2vD7Xa7LL7ibjdVf9Yo0sN1+7YKZZKLBAoX/yooadfJgVgfnt/Ot0W72juW4eMZn+05I9I/kU27IseEXYVqqgU/tJiLSqb9VcdM2mQAJVPPBX87Tp/SfUKaQFqNr0SD6e56otF42eHC3r31VjDEgKwiLe2Fo2bbNxJmDEBHM+9EPX6kuWMNjYKfy9fupz/ANRs3ib8ynvqzI2/xmLuPXsL/thPl3zqLgBr6QWvF/CXUd+QEKBm63YVQjYd+5o1mbTUsLQALNhN0rjzMBMC5OQ1HjrSpZC+Mz8L/1v3xlsKav/rk8Kv3O/v7fJfgavXrINGas+tjgIU/Kl/w8cH49EofwF1DzEB7IuXxSMqM5a8DKlDVoDkxdEIulsAc+5A/8XLqYWsf3uPsAE7p/mrnrV8hF85Vj+f+r+sL6H97qmXAEV3TWIdO/6iGRRpBWBmhqudqvfJ+srFd09VXcOyArAw7oTsVgHY2R+8bkpbQseza4Vt2JVbSd3HC26/g/2qdNrstP8fcTdoOTZ6CWCbtzDq8Sgol2GRVgDXqzs07pb15SCAHL37Bi5dESuhfdEyYTOll6KiMRPb1bpTbINIbV3h8HEZFMC+8OGYP6CoUMZFWgFay2za92xf8DAEkMJz+Eux4oXKKzresPTKjYfDiuq9bM6Dwv5ZL0JsmxZrEbv5ZESAsplzY36/ohIZGqkCFI29R5c9h2zlrCkFAdLD6l2sbE3Hvjb3GyRslhgEoTAqn/x7Ryq9cl3bXhN7jtF48FD3C2AdPCpSV6+0RIZGqgASh0bxzv+5HgKkoXDk+JjPl7Zg9bvfNXV6kGy5Y1i4poa/xln3q3TG3M5pVa5Ylfb9JYvypcu7WYDAlV/5y9I9kSpA/bsfyP4q7OQ6KFGv15o/AgJ0xXf6bNpS1e9+L/URcuGwsS1FxXzV7SubNS81uYrHV7bFYqnbs4uxud/gbhPAte3fPKXoWiiPx3vqjPvDj+re3F375lu6Uzp9jtIChmtc7CLV8PGnPPmv37MXAtwE692mbZY0HT9hEnmJaOk/2P/LJZmjUu2UeMRZs+mVtL9ybX+9ewRgGscCCjq+rJdcu3NXyZSZBo1o0lLAVpudbcauHZGGRo6SxIon/kVRBrJcgOC166nlCVVUSV+MC/48gPUNxKqjxWwRxk1I0PzfH9IcnWCLReE9Wp0AEpnvGvF43a53LAOGGH0gVBdQEMDEPUo3+U6Tk2wWwDZ3QVt7Sz1YYGYV7dywqXzp46XT77cMGCr/81659e+8n6Z+T59ltwjZn5v7DCyZMsO+6BHHmhfce/b6L16OBYPs5zWbXtX3/EgVoGj0BM5nWeyaWnbffEMPgfYCJgVgd6fW4hKectkfeoQ/A9ksQMnkGSWTpqt7OibAnOncgmo8dKTg9gEq95aTVzR2Ytl9yobKqRCg4YDMT4RgbeuiUXcbWv+6FPCGAO3vNHiKFqqoZPdwzgxkswBisCaybf6iksnTeTZmndp4KMRqoW7X22Ldhpt2PnIcuwIVjb2HZ2NZFAuQkxdtlH/py25Hhg5y1LGAnQUwJcYdpn+k0SWq123kzECWC1DQu2/pjLnOjVs8h79k7ZBQlUM4m9vaR7pyDl22zVngeO4Fni2t+SNYEh37j0YjrtrA1WtNX33j2rHTvuBhFa/DlArA2ng850flilVG17xeBewiALuyJI+gRMR8fs7BiNkoQK9cdoF3f7g/eM0Ua5Ga3STa1KxxrE5nCvoMbLEWSiTHlGgtKWUqsvOP8x6tVACJF97J8J3+WeMQYh1RKgDDve9j2TKycO/dz5OBrBKgdNr9niPHIm43TwUJEXbWCB92aSUnz//LRf50Y4GA99SZikdXSJ+LSgXg6SaK9UPYxZUlZwT17+wpX/Jo2mesKgQw9x3EdYhjMZ5WblYJoO4Tp9biUu3PAZuOn1CRNAv7wqV6CcC6+2LvoW8UtrRMTLmy2fPVFYEz2Klc+pfZ2gVgVL/4Mk+K/nMXiAmgNgKXrqh/vJP4IGaf6qSln9kpEqBk6kzZ5FzbXhNLy2gB2hJv3PxdXlSpE4DdTFoKi3hSlJ29BgJ0RPPJ79S9B615ZbuWdHUUoPKJp+STe3BJBgVg4b9wUQcBbutje2AxT3LhKof0pQ0C3Aj3RweUpli1+vk2bR8Z6ihA9Xr5hoHE08/uEYBFYaf3D6oFYHh/PMWTnPOlzRCAN1zb/s2fHLu9xlvlH8lJh44CuLbK34usg0dlXADbvIW6CFA4egJP/ccCAYmhKxDgpuB83i9QOn1OLBDUmKKOAtRs2SabnMSp0H0CzF+kiwAm7t5Xw/5PIYB8uLbvVJqifdEy2Qcv0qFnE+iFDbLJFU+8N5sEMOflc330E4+XTJ0JAaSiYd8Bda+Hqv7+nJYZpnQUoOLRFbLJSUx1disKYOLTvi3R+b4MAUSj+cRJLVNZaZnXQEcBiifcK5tc3Zu7s0wAdtmSnc5eiIplT2S5AOpaI/6Ll1V/tJ7EvXe/iqTbbj4bNApgysmTXtiGRdjlEnvae6sK0D7vC0+64WqnMI1N1gpgHTrG+eLLwQIL13Foj5biEssdw3RIvVdus5JJtcLOmrqduyRa5GoEuK0PT9nF3j2b+w1mp6ZGHGvWyWZAdwEYzd9xzemd+j1GVgmQpGj0hMqV//AcPirdQ4rU1hYO020K7II/9fdfkBoOFPP7vT/8VL12A//Hh0oF4Pl2lkmiy1DttJRMnSWbASMEKBw5Pi458FGIWDBoHXrT0K/sFOCmqhl+l/3BJdXrNjZ+8nng6rWo19tRFz4/51DQyhVP1+7cxdNFNvcblBwQylojLYVFnqNf1Wz5V/nS5UXjpqg47ZQKYJv3kOzhZMHukwbVdqYEYNS/9wFP2Rs//bzzr7JfgFQsA4YUT5rGrhk8Gzs3bhG6Fp4vjvJ0lC13DmcngXXQKF2GHCv+IKZXLs8kIvFwmLX4jajbDApgzr0z4qqVTb0tHu88Ji+bBSh/eDnr+Fvu4PgCWIT6t/d0fsTpO3tO9dokBbcPYH21qtXKlnVQ8Ulk2k+ZUyPa7E2dpEQ7GRSAwdMDYRG48mvy8pTNApTee59QgLCr1n/xMruEu7a9VrH8ycKhHB8A5OQ1Hf0qtS4SU0JwfGqUWN9q8TLnS1vYAWbahMorhHnJq9cqm71MhQCWO0fEgi0850EsEKxa9Yy+dZ5ZAdhpHSww85S94rEnhZ9kswAM/4U0M/xE6t3WfKmT2NxnoP+8aHc2VFlVdNckFelGvb7kNIycqJsWpWE/1zRSQnh/OFU0eoJeFZ5hAdpXAOF5LxmucQnPvrNcgNKZc9NWh//8BbEGPbvAy441jzY2sj2LJVr/9ntpf+Vcv0lp/tUJYOk/JMozjdTvwTo53p9OV65YxZrRGis84wIwmr/9nqfUNVu3m7JeAJP4mheeI8dS+6nFd0/lnCGdNTPSTvfpXP9y2mWGQ/YKdmNRmnnVUyM6nl3LU4ouwUxgrbXA5f/5zp73nTmnAmHFQeno3P82QoDExHgcjcBYS0vRmIk8Xxjf2gKwNnGkoSFtwTxfHu98H7AOG6NsIYlotMv3JYlJEUU+Dyibu0BF5rVMjuvlezfU/SEsqmCcACbh6QVHJGYQk2svRZu9t7YAjIrH/iZWTv+lK8kpha1Dx/DUWue4Mb9ITl7DgYNiqdS99a66nGsRgPU3eJYc7eaIer2dl3Y0SAB2s2WtfF0yzO6Ht7wAJsm3JKxPnJjH6rb2BTLkxtJ0ieTdPGgSffiQ6G9wT1SmowAMdq2NuNPf/TIVjZ8dVlRAdQIwHM/8U5cM1+54IxsEYFdoib5R8tPp5LRWnCF83WfuP1hsg5DNbhk4XHW2tS+RVDJpulgLMCORXFPHaAESj0T1WBC2dFrXmSxuTQHa53wWWyvAsWadsI2yRSXicWHi0dJZ89L+P9NJ46RDuiySVzx+SshRraBchoX/wqUuDx4MFEA4LtoWAw/876qhk4h191CIxLznJ75NLaf794UVFEwszo5NmU34VXW6F5At1kLZWdS7RwCGJX+E7+fz/EUzItKuZ2qoAAxFQ3RTQ+lkxkrJxFigXrm1r/+ny4WBNdOF/6197Q3+2mk6erzjKKY8Sms++Z1F+Xowqch+aqNgpficPOeGTUo7OTpG5crVaQr4L5mVbDQKwNqfkdo6dRmu2/2e0WdjZgbDmRITbS/tPL1e1OcT7nT2hx7hryDnho75NnxnzyX/GI9EnetfNvXWZ6kV1seQXttdgQDtsG5x01ffqDgbNIZDZI14VsC0K0olQ6MAJmHuAuVLZTZ9862WifU5yZgApvZrQ8NHB5K3gsLhiQ8D2GWbv9WYfAkQ/r2FzUzQfdrxhv2fSORBqQACJVNner44Kq2WXhGpq7M9sFiqgJLfMGgXgFE6Y46iGWMbDhxU/eBOEZkUoONUmDy96cRJdtInv5MKlVdwVlNizHP7+Gf28+C164k9GNBhKujdt/Gzw2J5UCeAgHXwaMczz/vOnjfIhKinybV1u+zSgAV/7Nd46IjYTnQRoL2wozxHj8vmOVJXX7F8ZbedfpkXQKB4/JTiCR1fJzZ/81+eo5s8MIWjJyTeBhg84ThLwv3+Pt/5C4Fff+sMu5Br37k5L7901ryqp5+t3bnLc/hL7/c/+s/9og7vD6fY2Vyz+VXb3IWKLqJlsx9wf/CRP6WArMGmYzWWTJ7h3rM3zXPheNx/4VLVqmdUDFfRQk8RoDPVa9fzCNANPSRgFL1yWd+DXVPYTTuxVtCUmea+Kj/z0EhPFMCSP0K6WyaETXyWWQA46YkCMIK/pVlctXPEgsHUCTYAUEoPFUB2xvOGj0XnmgSAnx4qgLnf4JhfaqV1I76mBQTpoQIA0D1AAEAaCABIAwEAaSAAIA0EAKSBAIA0EACQBgIA0kAAQBoIAEgDAQBpIAAgDQQApIEAgDQQAJAGAgDSQABAGggASAMBAGkgACANBACkgQCANBAAkAYCANJAAEAaCABIAwEAaSAAIA0EAKSBAIA0EACQBgIA0kAAQBoIAEgDAQBpIAAgDQQApIEAgDQQAJAGAgDSQABAGggASAMBAGkgACANBACkgQCANBAAkAYCANJAAEAaCABIAwEAaSAAIA0EAKSBAIA0EACQBgIA0kAAQBoIAEgDAQBpIAAgDQQApIEAgDQQAJAGAgDSQABAGggASAMBAGkgACANBACkgQCANBAAkAYCANJAAEAaCABIAwEAaSAAIA0EAKSBAIA0EACQBgIA0kAAQBoIAEgDAQBpIAAgDQQApIEAgDQQAJAGAgDSQABAGggASAMBAGkgACANBACkgQCANBAAkAYCANJAAECa/wNL4ZWiPylAFAAAAABJRU5ErkJggg==";
const PLAYHUB_COMMUNITY_RAWG_ICON = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAMAAABrrFhUAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAGlQTFRFAAAABAQElJSU////9vb23NzcxcXFubm5s7OzZWVlEBAQCAgIjIyM/Pz86enpy8vLHh4e1tbWe3t7m5ub+fn5U1NTWVlZSEhIgYGBqampbW1t4+PjJSUlLCwsNjY2Ozs78PDwGBgY8/Pz0uSjuQAACCBJREFUeJztnXtbEzkUxk8oUJuWy4gWEBB3v/93WlYWlVsLYqcUKLPJgKurpT15cqZvMs37h/LocHL6ay4ntzOKFlwK7QBaCQDaAbQSALQDaCUAaAfQSgDQDqCVAKAdQCsBQDuAVgKAdgCtBADtAFoJANoBtBIAtANoJQBoB9BKANAOoJUAoB1AKwFAO4BWAoB2AK0EAO0AWgkA2gG0EgC0A2glAGgH0EoA0A6glQCgHUArAUA7gFYCgHYArQQA7QBaCYDv7xeqEHHk/zapqMLwxML8TSwJ1SJlZP/ILQKi9kDG7KxSvQ0UnaGAHzrXeflDe6hHt/bjz6cC+DcBkgFgZRBoysu/jeHOXS5kd6oCagK/a131LGGqsjIEDcCosXZZVrPKCggZgGkKWV8vXVv7lREIGQBl1NfNUb6+fF5dIwgawLNMTdg6qwpBDADM2KBapxVFRjEAyEYmSFAP1dSBGACQ2uybT9+4q8S2v4nqAXzX5qWdJMgOCVEBoHEZE4i2hagAqGJ1qLTsLCEmAJqaV5sXwnFhTACeNJY1Fx+At6eLXQOy/ptTSXvRATAxQfezpD1/E3NuAkbbn+Q6wigB7JwsOICsuBSzFSUAncuNhXECoOXVU6F4MEoAZiwsCqFOIEoAmZkdj4VC4igBmDZAq0L94PwA6Cn7HOV+iKPGMp1ACDWg3BFqjtwgSC2RzQ/A7uTHlLqlr2M7rE2rIpOKvXd6/CXND8B44g5X+W/2j03V6LuVK9MG5ghglr9b124f6N2x0+MvaJ41YLofhSp2zrX9mdUUdC4zKQwFQNkO2oOOopzdF7z9wnxwarH+JuQAGG92T1WLBSDr0/KIVfCMYv1NyDSB4vm40Z7D1zq5X3VTKAB+6PU9ezgcC+wXhgfAIbDa+8h98mWFBsB+o2+4AcGbM//5UGgALILmAzMq3BSYEIUHwKjBjYsFFoaCBPDhmAugjqOAVYMZDNW1BtA685hsbQHsM8P8mgJQxR8XvAnRTU37AFUwO4Ga1gALgPdgXQGUkYC4zclKAPxNJAAJAOuxBMDFZgLAe6ymAEwkyFzqqSkAou4jb1GotgDY02H/MwJBAti+YO6X1xOAKj4c82rA8qh+AOwe4f4Vc2dg79h/fzg4AHpA6wVzf3D3pI4bI6o14p6Yqd3OkN0gpOLDZc4hoPPsglXwjDL9TUgCMC1g45G7O9z6xip4Rpn+JkRrAK3lGXNnbLl1xXtwepn+JgT7ANVa+caMgVSrU7MTIrYCdC/ZZ8WkDkzP85DUS0FLeTbE9OdL7dzhrFz7a2ynxKZmRdlc6VHZs7G1dcZ/doqCaAIHt+p2UKZLcPhSYzsqO71uP/+vy2FRgYmQVQhnhZ1lc+5IHI+xihKAGQO3jhb5vkBG/Y2eUKqlKAGoYqMnZsvfBKAJCMUAVlECyL7ditmKEoC+kbMVHYBslNP7I7kL9NEBMB1A55OgtegAZLK35+MDoO9GC5tEpZTILYmfFBWAp1sii5xFJrsZtfMFTqREK6NCOr9kHACe1gkau3+TeH7RGACY6b+9TCibPue7YgBQRn+HJ8Ld/7MiAdB87MnX/lJRAJDZBJusGAC8/VJhZuUYANDW+YIDkE6h97PmuC8wYduHuRMkuQDyq+ZXAyZsenB3wvSwopy6NEcA5hP8iiDr8wjoJkmcBZks7N4g70CkbvY7104uOQgMgFeCIbD3saJGgASgite8L9bUk+1PFb1mAbw93h0yM6bY4wCRh8ITagAR936c6TAl8mVMELYJEO2ecc8EFI8uTrGFPiFy2GPmzVFKJnXWb3b9TfgdkeFmjdFUTTgIB0DLvLxBpJcqiQXQAEw/sMY9GFTJQIAGwL8pTrTRq2AcQAMwH2lnwE8eVsMaQOyAuDwdK04AD0AVr1a4KfTu7sRfOYUHYOLhS+7KwMER6zEXhQCAnTSG1IrUq/1+mPQ34Q/gcDBirgvIng6xCgIAHbA/lsg9oZ8VAgD7Fil2ae+OZUeCEAC0B/SKPdM5OIp1e3xaE1B7/INPQvcE/iva34TInaHmAzMg1rf3tWsCVp0he5NAdlocCgDi3hgnfS93UJjCAaB2b5qsYICEF8dCAUC095W7QCyUV/5J4QDgJ5Ol/Y9yI2EwAFThkFNacLs8GACk3v/DLVE/5nWsAQ7x8EqMN0ZmVlvVvGemjojzTVMMn9e4LxcQjAWCArD0mv2qGbFGEBQAbgYpTTR8YBU6WyEBMNNil3WByG6PszJI2KziXMV2fZ6XRGWbveKVrcqsDgYGgN8G9PJVZLfHeUN384GdRmMscn48MACqWGPuEqmisS2xPhoSAJtJRu0wc6OYoLFzXcNcYvyzg9TsSwTEQQEope/YX+rWeTE1Nw9H4QGgP88d3rRUu4ySJhzs8l+e0/1crz7AymldQCCVRnAA2gO1yn3REulX5+YXvPqB0ACUAxv//Gz7ftjOvfqB0ACUBLgHJkws0P3sOQ6EBqB87yD7uIAh8P4v5rMvFej36/Yqd4d3bMUlufr+LXuPYOek7bVE7F0DFBsAe8x2Ggh8Xzs5xybAb6zlG/e42vZbF/BuAuzpiMPExS2+84sGq7/1GbgSALQDaCUAaAfQSgDQDqCVAKAdQCsBQDuAVgKAdgCtBADtAFoJANoBtBIAtANoJQBoB9BKANAOoJUAoB1AKwFAO4BWAoB2AK0EAO0AWgkA2gG0EgC0A2glAGgH0EoA0A6glQCgHUArAUA7gFYCgHYArQQA7QBaCQDaAbQSALQDaC08gH8B8MCNH1oGk2wAAAAASUVORK5CYII=";
const playhubCommunityProviderIcon = (source) => {
    const cleanSource = String(source || "").trim().toLowerCase();
    if (cleanSource.includes("youtube"))
        return PLAYHUB_COMMUNITY_YOUTUBE_ICON;
    if (cleanSource.includes("rawg"))
        return PLAYHUB_COMMUNITY_RAWG_ICON;
    return PLAYHUB_COMMUNITY_IGN_ICON;
};
const playhubCommunityCreator = (source, avatar) => ({
    steamid: "76561197960287930",
    name: source || "Playhub Metadata",
    avatar,
    avatar_url: avatar,
    avatar_medium: avatar,
    avatar_full: avatar,
    avatarFullURL: avatar,
});
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
    // Keep Steam news out of the Community tab. News belongs to Activity, while
    // Community should stay screenshots/videos/community-style media only.
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
    const providerIconUrl = playhubCommunityProviderIcon(item.source);
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
            preview_image_url: video.thumbnail || `https://i.ytimg.com/vi/${video.id}/hq720.jpg`,
            full_image_url: video.url || `https://www.youtube.com/watch?v=${video.id}`,
            youtube_video_id: video.id,
            image_width: 1280,
            image_height: 720,
            spoiler_tag: false,
            content_descriptorids: [],
            reactions: [],
            avatar: providerIconUrl,
            avatar_url: providerIconUrl,
            creator_avatar_url: providerIconUrl,
            author_avatar_url: providerIconUrl,
            owner_avatar_url: providerIconUrl,
            creator: playhubCommunityCreator("YouTube", providerIconUrl),
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
        avatar: providerIconUrl,
        avatar_url: providerIconUrl,
        creator_avatar_url: providerIconUrl,
        author_avatar_url: providerIconUrl,
        owner_avatar_url: providerIconUrl,
        creator: playhubCommunityCreator(item.source || "IGN", providerIconUrl),
        time_created: Math.floor(Date.now() / 1000) - index * 60,
        votes_up: 0,
        votes_down: 0,
        num_comments_public: 0,
    };
});
const playhubActivityId = (appId, index, date) => `playhub-activity-${appId}-${date || 0}-${index}`;
const numericSteamNewsGid = (value) => {
    const text = String(value || "");
    const direct = text.match(/^\d{8,}$/);
    if (direct)
        return direct[0];
    const fromUrl = text.match(/(?:announcements\/detail|news\/app\/\d+\/view)\/(\d{8,})/i);
    if (fromUrl?.[1])
        return fromUrl[1];
    const fromOldAnnouncement = text.match(/old_announce_(\d{8,})/i);
    if (fromOldAnnouncement?.[1])
        return fromOldAnnouncement[1];
    const anyNumericGid = text.match(/\b(\d{8,})\b/);
    return anyNumericGid?.[1] || "";
};
const cleanSteamNewsDisplayText = (value) => String(value || "")
    .replace(/\[previewyoutube=[A-Za-z0-9_-]{11}(?:;[^\]]*)?\]\s*\[\/previewyoutube\]/gi, " ")
    .replace(/\[previewyoutube=[^\]]+\]/gi, " ")
    .replace(/\{STEAM_CLAN(?:_[A-Z]+)*_?IMAGE\}\/\d+\/[^\s<>\)\]\[]+/gi, " ")
    .replace(/\[img\][\s\S]*?\[\/img\]/gi, " ")
    .replace(/\[url=[^\]]+\]([\s\S]*?)\[\/url\]/gi, "$1")
    .replace(/\[\/?(?:p|br|hr|quote|spoiler|table|tr|td|th|img|url|h1|h2|h3|h4|b|i|u|s|strike|list|\*|code|noparse|previewyoutube|video|youtube|size|color|font|center|left|right)[^\]]*\]/gi, " ")
    .replace(/<br\s*\/?>/gi, " ")
    .replace(/<[^>]*>/g, " ")
    .replace(/&[a-z0-9#]+;/gi, " ")
    .replace(/\s+/g, " ")
    .trim();
const steamNewsRawBodyForModal = (value) => String(value || "")
    .replace(/\\\//g, "/")
    .trim();
const steamAppHeaderImage = (steamAppId) => steamAppId ? `https://cdn.akamai.steamstatic.com/steam/apps/${steamAppId}/header.jpg` : "";
const steamNewsImageCandidatesForMetadata = (_metadata, news) => {
    const rawSources = Array.isArray(news.image_sources) ? news.image_sources : [];
    return uniqueExpandedSteamNewsImageUrls([
        news.event_header_image_url,
        news.event_cover_image_url,
        news.event_spotlight_image_url,
        news.event_title_image_url,
        news.image,
        news.image_url,
        news.preview_image_url,
        ...rawSources,
    ]);
};
const steamNewsImageForMetadata = (metadata, news) => steamNewsImageCandidatesForMetadata(metadata, news)[0] || "";
const normaliseActivityNewsKeyText = (value) => String(value || "")
    .replace(/<[^>]*>/g, " ")
    .replace(/&[a-z0-9#]+;/gi, " ")
    .replace(/[\u2018\u2019\u201c\u201d]/g, "'")
    .replace(/\s+/g, " ")
    .trim()
    .toLocaleLowerCase("en-US");
const uniqueSteamNewsForActivity = (metadata) => {
    const seen = new Set();
    return (metadata.steam_news || [])
        .filter((item) => item?.url && item?.title)
        .filter((item) => {
        const title = normaliseActivityNewsKeyText(item.title);
        const summary = normaliseActivityNewsKeyText(item.summary || "").slice(0, 160);
        const canonicalUrl = String(item.url || "").replace(/[?#].*$/, "").toLocaleLowerCase("en-US");
        const day = Math.floor((Number(item.date || 0) || 0) / 86400);
        const key = `${title}|${canonicalUrl || day}|${summary}`;
        if (seen.has(key))
            return false;
        seen.add(key);
        return true;
    })
        .slice(0, 12);
};
const steamActivityNewsItemsFromMetadata = (appId, metadata) => metadata?.steam_activity_disabled ? [] : uniqueSteamNewsForActivity(metadata)
    .map((news, index) => {
    const date = Number(news.date || 0) || Math.floor(Date.now() / 1000) - index * 60;
    const imageCandidates = steamNewsImageCandidatesForMetadata(metadata, news);
    const imageUrl = imageCandidates[0] || "";
    const fallbackImageUrl = steamAppHeaderImage(metadata.steam_appid);
    const displayImageUrl = imageUrl || fallbackImageUrl;
    const eventType = normalizePlayhubSteamActivityType(news.event_type || news.type);
    const eventTags = playhubSteamActivityTypeTags(eventType);
    const eventLabel = playhubSteamActivityTypeLabel(eventType);
    const rawBody = steamNewsRawBodyForModal(news.raw_body || news.body || news.summary || "");
    const summary = eventType === 12 ? "" : cleanSteamNewsDisplayText(news.summary || news.title || "");
    const title = cleanSteamNewsDisplayText(news.title || metadata.title || "Steam news");
    const url = news.url || metadata.steam_store_url || "";
    const id = playhubActivityId(appId, index, date);
    const steamGid = numericSteamNewsGid(news.gid || news.news_id || news.announcement_gid || news.event_gid || news.id || news.url);
    const eventGid = numericSteamNewsGid(news.event_gid || news.gid || news.news_id || news.announcement_gid || news.id || news.url);
    const jsondata = JSON.stringify({
        localized_title_image: displayImageUrl,
        localized_capsule_image: displayImageUrl,
        localized_spotlight_image: displayImageUrl,
        localized_header_image: displayImageUrl,
        localized_summary: summary,
        localized_body: rawBody,
        store_url: url,
    });
    return {
        appid: appId,
        gid: steamGid || id,
        id,
        news_id: steamGid || id,
        announcement_gid: steamGid || id,
        clan_steamid: "103582791429521412",
        event_name: title,
        event_type: eventType,
        type: eventType,
        title,
        headline: title,
        description: summary,
        summary,
        body: cleanSteamNewsDisplayText(news.body || summary),
        raw_body: rawBody,
        contents: summary,
        url,
        external_url: url,
        link: url,
        image: displayImageUrl,
        image_url: displayImageUrl,
        event_image_url: imageUrl,
        image_sources: imageCandidates,
        fallback_image_url: fallbackImageUrl,
        header_image_url: fallbackImageUrl,
        capsule: displayImageUrl,
        capsule_image: displayImageUrl,
        preview_image_url: displayImageUrl,
        full_image_url: displayImageUrl || url,
        rtime32_start_time: date,
        rtime32_end_time: date,
        rtime32_last_modified: date,
        posttime: date,
        published: date,
        time_created: date,
        date,
        feedlabel: news.feedLabel || news.author || eventLabel,
        author: news.author || news.feedLabel || eventLabel,
        comment_count: 0,
        upvotes: 0,
        downvotes: 0,
        jsondata,
        announcement_body: {
            gid: steamGid || id,
            clanid: "0",
            posterid: "0",
            headline: title,
            posttime: date,
            updatetime: date,
            body: rawBody || summary,
            commentcount: 0,
            tags: eventTags,
            language: 0,
            hidden: 0,
            forum_topic_id: "0",
            event_gid: eventGid || steamGid || id,
            voteupcount: 0,
            votedowncount: 0,
        },
    };
});
const steamActivityPayloadForApp = async (appId) => {
    const overview = (0, exports.getOverview)(appId);
    if (!appId || !(0, exports.isNonSteamApp)(overview))
        return null;
    await (0, exports.ensureMetadataCache)();
    let metadata = exports.metadataCache[String(appId)];
    if (!metadata)
        return null;
    const items = metadata ? steamActivityNewsItemsFromMetadata(appId, metadata) : [];
    if (!items.length)
        return null;
    // Steam client internals changed names across versions. Return a deliberately
    // redundant shape so the native Activity store can read the same cards through
    // the field name it expects, while keeping the items Steam-like.
    return {
        events: items,
        rgEvents: items,
        rgNews: items,
        rgActivity: items,
        rgFeedItems: items,
        activity: items,
        activities: items,
        news: items,
        items,
        results: items,
        count: items.length,
        bHasMore: false,
        success: 1,
    };
};
const STEAM_POSTED_ANNOUNCEMENT_EVENT_TYPE = 1002;
const STEAM_PARTNER_EVENT_TYPE_NEWS = 28;
const PLAYHUB_SUPPORTED_STEAM_ACTIVITY_TYPES = new Set([12, 13, 14, 15, 23, 24, 25, 28, 35]);
const PLAYHUB_STEAM_ACTIVITY_TYPE_LABELS = {
    12: "Aggiornamento minore / Note della patch",
    13: "Aggiornamento standard",
    14: "Aggiornamento importante",
    15: "Pubblicazione contenuti scaricabili",
    23: "Evento: bottino",
    24: "Evento: vantaggi",
    25: "Evento: sfida",
    28: "Notizie",
    35: "Evento nel gioco",
};
const PLAYHUB_STEAM_ACTIVITY_TYPE_TAGS = {
    12: ["patchnotes", "update", "playhub_metadata"],
    13: ["update", "playhub_metadata"],
    14: ["majorupdate", "update", "playhub_metadata"],
    15: ["dlc", "release", "playhub_metadata"],
    23: ["loot", "event", "playhub_metadata"],
    24: ["perks", "event", "playhub_metadata"],
    25: ["challenge", "event", "playhub_metadata"],
    28: ["news", "playhub_metadata"],
    35: ["ingame", "event", "playhub_metadata"],
};
const normalizePlayhubSteamActivityType = (value) => {
    const type = Number(value || 0) || STEAM_PARTNER_EVENT_TYPE_NEWS;
    return PLAYHUB_SUPPORTED_STEAM_ACTIVITY_TYPES.has(type) ? type : STEAM_PARTNER_EVENT_TYPE_NEWS;
};
const playhubSteamActivityTypeLabel = (type) => PLAYHUB_STEAM_ACTIVITY_TYPE_LABELS[type] || "Notizie";
const playhubSteamActivityTypeTags = (type) => PLAYHUB_STEAM_ACTIVITY_TYPE_TAGS[type] || PLAYHUB_STEAM_ACTIVITY_TYPE_TAGS[28];
const isPlayhubPatchNoteActivity = (item) => normalizePlayhubSteamActivityType(item?.event_type || item?.type) === 12;
const PLAYHUB_NATIVE_ACTIVITY_WINDOW_KEY = "__playhubNativeActivityCache";
const PLAYHUB_NATIVE_PARTNER_EVENTS_WINDOW_KEY = "__playhubNativePartnerEvents";
const PLAYHUB_NATIVE_PARTNER_STORE_WINDOW_KEY = "__playhubNativePartnerEventStore";
const fakeSteamId = (accountId = 0, steamId64 = "76561197960287930") => ({
    GetAccountID: () => accountId,
    ConvertTo64BitString: () => steamId64,
    toString: () => steamId64,
});
const toSteamClanImageUrl = (value) => {
    const text = String(value || "").trim().replace(/\\\//g, "/");
    const match = text.match(/\{STEAM_CLAN(?:_[A-Z]+)*_?IMAGE\}\/(\d+)\/([^\s<>\)\]\[]+)/i);
    if (!match)
        return text;
    return `https://clan.cloudflare.steamstatic.com/images/${match[1]}/${match[2].replace(/[\"'.,;:]+$/g, "")}`;
};
const cleanSteamImageUrl = (value) => {
    let text = String(value || "").trim();
    if (!text)
        return "";
    try {
        text = decodeURIComponent(text);
    }
    catch (_error) {
        // Keep the original URL if it is not URI encoded.
    }
    text = text.replace(/\\\//g, "/").replace(/&amp;/gi, "&").trim();
    text = text.replace(/\[\/?img\].*$/i, "").replace(/[\]\)>.,;:'"]+$/g, "").trim();
    text = toSteamClanImageUrl(text);
    if (text.startsWith("//"))
        text = `https:${text}`;
    if (text.startsWith("http://"))
        text = text.replace(/^http:\/\//i, "https://");
    return /^https:\/\//i.test(text) ? text : "";
};
const expandedSteamNewsImageUrls = (value) => {
    const cleaned = cleanSteamImageUrl(value);
    if (!cleaned)
        return [];
    const youtubeMatch = cleaned.match(/https:\/\/i\.ytimg\.com\/vi\/([A-Za-z0-9_-]{11})\/[^?#\s]+/i);
    if (!youtubeMatch)
        return [cleaned];
    const videoId = youtubeMatch[1];
    // hqdefault is 4:3 and often contains black letterboxing. Prefer 16:9
    // YouTube stills for Steam activity cards, then fall back progressively.
    return [
        `https://i.ytimg.com/vi/${videoId}/hq720.jpg`,
        `https://i.ytimg.com/vi/${videoId}/sddefault.jpg`,
        cleaned.replace(/\/(?:maxresdefault|hq720|sddefault|hqdefault|mqdefault|default)\.jpg(?:[?#].*)?$/i, "/hqdefault.jpg"),
    ];
};
const uniqueExpandedSteamNewsImageUrls = (values) => {
    const out = [];
    const seen = new Set();
    values.forEach((value) => {
        expandedSteamNewsImageUrls(value).forEach((url) => {
            const cleaned = cleanSteamImageUrl(url);
            if (cleaned && !seen.has(cleaned)) {
                seen.add(cleaned);
                out.push(cleaned);
            }
        });
    });
    return out;
};
const collectSteamNewsImages = (steamAppId, item) => {
    const values = [
        item.image,
        item.image_url,
        item.preview_image_url,
        item.full_image_url,
        item.capsule_image,
        item.capsule,
        item.localized_title_image,
        item.localized_capsule_image,
        item.localized_spotlight_image,
        item.header_image_url,
        item.fallback_image_url,
    ];
    if (Array.isArray(item.image_sources))
        values.push(...item.image_sources);
    // Keep the explicit fallback at the end: cards with no embedded artwork should
    // still show the game header, but embedded/event-specific images stay first.
    return uniqueExpandedSteamNewsImageUrls(values);
};
const playhubNativeActivityCache = () => {
    const host = globalThis;
    if (!host[PLAYHUB_NATIVE_ACTIVITY_WINDOW_KEY])
        host[PLAYHUB_NATIVE_ACTIVITY_WINDOW_KEY] = new Map();
    return host[PLAYHUB_NATIVE_ACTIVITY_WINDOW_KEY];
};
const playhubNativePartnerEventCache = () => {
    const host = globalThis;
    if (!host[PLAYHUB_NATIVE_PARTNER_EVENTS_WINDOW_KEY])
        host[PLAYHUB_NATIVE_PARTNER_EVENTS_WINDOW_KEY] = new Map();
    return host[PLAYHUB_NATIVE_PARTNER_EVENTS_WINDOW_KEY];
};
const uniqueNonEmptyStrings = (values) => Array.from(new Set(values.map((value) => String(value || "").trim()).filter(Boolean)));
const playhubNativePartnerEventKeys = (event) => {
    const gid = numericSteamNewsGid(event?.AnnouncementGID || event?.announcement_gid || event?.announcementGID || event?.gid || event?.GID || event?.url);
    const oldAnnouncementGid = gid ? `old_announce_${gid}` : "";
    return uniqueNonEmptyStrings([
        event?.GID,
        event?.gid,
        event?.event_gid,
        event?.AnnouncementGID,
        event?.announcement_gid,
        event?.announcementGID,
        gid,
        oldAnnouncementGid,
    ]);
};
const playhubNativePartnerEventStore = () => globalThis[PLAYHUB_NATIVE_PARTNER_STORE_WINDOW_KEY] || null;
const collectNativePartnerEventStores = () => {
    const host = globalThis;
    const stores = [];
    const add = (candidate) => {
        if (!candidate || typeof candidate !== "object")
            return;
        const looksLikeStore = typeof candidate.GetClanEventModel === "function" ||
            typeof candidate.GetClanEventFromAnnouncementGID === "function" ||
            typeof candidate.LoadPartnerEventFromAnnoucementGIDAndClanSteamID === "function" ||
            candidate.m_mapExistingEvents?.set;
        if (looksLikeStore && !stores.includes(candidate))
            stores.push(candidate);
    };
    // Steam currently exposes multiple PartnerEvent stores. The Activity cards can
    // render from our custom event object, but the modal uses the native
    // window.partnerEventStore (`r(57016).IB`). Earlier builds sometimes patched the
    // base/summary store instead, which made the modal open but stay blurred/empty.
    add(host.partnerEventStore);
    add(host.g_PartnerEventStore);
    add(host.g_PartnerEventSummaryStore);
    add(host[PLAYHUB_NATIVE_PARTNER_STORE_WINDOW_KEY]);
    try {
        const discovered = (0, ui_1.findModuleChild)((module) => {
            if (!module || typeof module !== "object")
                return undefined;
            for (const prop in module) {
                const candidate = module[prop];
                if (candidate &&
                    typeof candidate === "object" &&
                    (typeof candidate.GetClanEventFromAnnouncementGID === "function" ||
                        typeof candidate.LoadPartnerEventFromAnnoucementGIDAndClanSteamID === "function" ||
                        typeof candidate.GetClanEventModel === "function")) {
                    return candidate;
                }
            }
            return undefined;
        });
        add(discovered);
    }
    catch (_error) {
        // Decky may not expose the module yet. The interval installer retries.
    }
    if (stores[0])
        host[PLAYHUB_NATIVE_PARTNER_STORE_WINDOW_KEY] = stores[0];
    return stores;
};
const registerPlayhubNativePartnerEventInSteamStore = (event, partnerStore) => {
    const store = partnerStore || playhubNativePartnerEventStore();
    if (!store || !event)
        return;
    const keys = playhubNativePartnerEventKeys(event);
    const numericGid = numericSteamNewsGid(event?.AnnouncementGID || event?.announcement_gid || event?.GID || event?.gid);
    const canonicalEventGid = String(event?.GID || (numericGid ? `old_announce_${numericGid}` : "")).trim();
    try {
        if (store.m_mapExistingEvents?.set) {
            keys.forEach((key) => store.m_mapExistingEvents.set(key, event));
        }
        if (numericGid && store.m_mapAnnouncementBodyToEvent?.set) {
            store.m_mapAnnouncementBodyToEvent.set(numericGid, canonicalEventGid || numericGid);
            store.m_mapAnnouncementBodyToEvent.set(String(numericGid), canonicalEventGid || numericGid);
            store.m_mapAnnouncementBodyToEvent.set(`old_announce_${numericGid}`, canonicalEventGid || `old_announce_${numericGid}`);
        }
        const appendToMapList = (map, key, value) => {
            if (!map?.get || !map?.set || !key || !value)
                return;
            const mapKey = typeof key === "number" ? key : Number(key);
            const actualKey = Number.isFinite(mapKey) && mapKey > 0 ? mapKey : key;
            const current = map.get(actualKey) || [];
            if (Array.isArray(current) && !current.includes(value)) {
                map.set(actualKey, [...current, value]);
            }
        };
        appendToMapList(store.m_mapAppIDToGIDs, event.appid, canonicalEventGid);
        appendToMapList(store.m_mapAppIDToGIDs, event.reference_appid || event.steam_appid, canonicalEventGid);
        const clanAccountId = event.clanSteamID?.GetAccountID?.();
        appendToMapList(store.m_mapClanToGIDs, clanAccountId, canonicalEventGid);
        if (canonicalEventGid && typeof store.GetPartnerEventChangeCallback === "function") {
            store.GetPartnerEventChangeCallback(canonicalEventGid)?.Dispatch?.(event);
        }
    }
    catch (error) {
        console.warn("Playhub Metadata: unable to register native PartnerEvent", error);
    }
};
const rememberPlayhubNativePartnerEvent = (event) => {
    const cache = playhubNativePartnerEventCache();
    playhubNativePartnerEventKeys(event).forEach((key) => cache.set(String(key), event));
    const stores = collectNativePartnerEventStores();
    if (stores.length)
        stores.forEach((store) => registerPlayhubNativePartnerEventInSteamStore(event, store));
    else
        registerPlayhubNativePartnerEventInSteamStore(event);
};
const clonePlayhubNativePartnerEventForRoute = (event, requestedKey) => {
    if (!event)
        return null;
    const raw = String(requestedKey || "").trim();
    const numericGid = numericSteamNewsGid(raw || event?.AnnouncementGID || event?.announcement_gid || event?.GID || event?.gid);
    // Steam's event overlay validates with a strict `event.GID == initialEventID` check.
    // Activity cards, old announcements and Store News routes may pass either the numeric
    // announcement id or the `old_announce_<gid>` event id, so return a route-local
    // clone whose GID matches the key Steam asked for while keeping AnnouncementGID
    // numeric for the real announcement data.
    const routeGid = raw || String(event?.GID || (numericGid ? `old_announce_${numericGid}` : "0"));
    return {
        ...event,
        GID: routeGid,
        gid: routeGid,
        event_gid: routeGid,
        AnnouncementGID: numericGid || event?.AnnouncementGID || event?.announcement_gid || "0",
        announcement_gid: numericGid || event?.announcement_gid || event?.AnnouncementGID || "0",
        announcementGID: numericGid || event?.announcementGID || event?.AnnouncementGID || "0",
        GetAnnouncementGID: () => numericGid || event?.AnnouncementGID || event?.announcement_gid || "0",
    };
};
const playhubNativePartnerEventForGid = (value, cloneForRoute = false) => {
    const raw = String(value || "").trim();
    const gid = numericSteamNewsGid(raw);
    const cache = playhubNativePartnerEventCache();
    const event = (raw && cache.get(raw)) || (gid && (cache.get(String(gid)) || cache.get(`old_announce_${gid}`))) || null;
    return cloneForRoute ? clonePlayhubNativePartnerEventForRoute(event, raw || gid) : event;
};
const makePlayhubNativePartnerEvent = (appId, steamAppId, item, index) => {
    const date = Number(item.date || item.posttime || item.published || 0) || Math.floor(Date.now() / 1000) - index * 60;
    const announcementGid = numericSteamNewsGid(item.announcement_gid || item.news_id || item.gid || item.id || item.url);
    const eventGid = numericSteamNewsGid(item.event_gid || "");
    const gid = announcementGid || eventGid;
    const nativeEventGid = eventGid && eventGid !== announcementGid ? eventGid : gid ? `old_announce_${gid}` : "0";
    const isOldAnnouncement = nativeEventGid.startsWith("old_announce_");
    const title = cleanSteamNewsDisplayText(item.title || item.event_name || item.headline || "Steam News");
    const summary = cleanSteamNewsDisplayText(item.summary || item.description || item.body || title);
    const body = cleanSteamNewsDisplayText(item.body || item.content || item.description || item.summary || title);
    const images = collectSteamNewsImages(steamAppId, item);
    const primaryImage = images[0] || "";
    const clanSteamID = fakeSteamId(0, String(item.clan_steamid || "103582791429521412"));
    const type = normalizePlayhubSteamActivityType(item.event_type || item.type);
    const isPatchNote = type === 12;
    const eventLabel = playhubSteamActivityTypeLabel(type);
    const eventTags = playhubSteamActivityTypeTags(type);
    const modalBody = steamNewsRawBodyForModal(item.raw_body || item.rawBody || item.body_html || item.body_raw || item.body || body || summary);
    const activitySummary = isPatchNote ? "" : summary;
    const announcementUrl = item.url || item.external_url || item.link || (steamAppId && announcementGid ? `https://steamcommunity.com/games/${steamAppId}/announcements/detail/${announcementGid}` : steamAppId && eventGid ? `https://store.steampowered.com/news/app/${steamAppId}/view/${eventGid}` : "");
    const jsondata = {
        // Keep the detail viewer from rendering a duplicated non-clickable preview
        // paragraph above Steam's real BBCode/HTML body.
        localized_summary: [""],
        localized_subtitle: [""],
        localized_body: [modalBody],
        localized_title_image: [primaryImage],
        localized_capsule_image: [primaryImage],
        localized_spotlight_image: [primaryImage],
        localized_header_image: [primaryImage],
        library_spotlight: true,
        library_spotlight_text: true,
        referenced_appids: steamAppId ? [steamAppId] : [],
    };
    const partnerEvent = {
        __playhubNativePartnerEvent: true,
        GID: nativeEventGid,
        gid: nativeEventGid,
        event_gid: nativeEventGid,
        AnnouncementGID: announcementGid || gid || "0",
        announcement_gid: announcementGid || gid || "0",
        announcementGID: announcementGid || gid || "0",
        appid: appId,
        reference_appid: steamAppId || appId,
        steam_appid: steamAppId || appId,
        type,
        event_type: type,
        bOldAnnouncement: isOldAnnouncement,
        bLoaded: true,
        loadedAllLanguages: true,
        visibility_state: 2,
        postTime: date,
        createTime: date,
        startTime: date,
        endTime: date,
        visibilityStartTime: date,
        visibilityEndTime: date + 86400 * 365,
        rtime32_moderator_reviewed: date,
        rtime32_start_time: date,
        rtime32_end_time: date,
        rtime32_last_modified: date,
        nVotesUp: Number(item.upvotes || 0) || 0,
        nVotesDown: Number(item.downvotes || 0) || 0,
        nCommentCount: Number(item.comment_count || 0) || 0,
        forumTopicGID: item.forumTopicGID || item.forum_topic_id || "0",
        clanSteamID,
        announcementClanSteamID: clanSteamID,
        jsondata,
        name: new Map([[0, title]]),
        description: new Map([[0, modalBody || body || summary]]),
        timestamp_loc_updated: new Map([[0, date]]),
        vecTags: eventTags,
        tags: eventTags,
        BHasTag: (tag) => eventTags.includes(String(tag || "")),
        BHasTagStartingWith: (prefix) => eventTags.some((tag) => tag.startsWith(String(prefix || ""))),
        GetAllTags: () => eventTags,
        BMatchesAllTags: (tags) => !Array.isArray(tags) || tags.every((tag) => eventTags.includes(String(tag || ""))),
        BInRealmGlobal: () => true,
        BInRealmChina: () => false,
        BIsLanguageValidForRealms: () => true,
        GetNameWithFallback: () => title,
        GetGameTitle: () => title,
        GetDescriptionWithFallback: () => modalBody || body || summary,
        GetSummaryWithFallback: () => activitySummary,
        GetSummary: () => activitySummary,
        BHasSummary: () => !!activitySummary,
        GetSubTitle: () => "",
        BHasSubTitle: () => false,
        GetSubTitleWithLanguageFallback: () => "",
        GetSubTitleWithSummaryFallback: () => "",
        GetCategoryAsString: () => eventLabel,
        GetEventTypeAsString: () => eventLabel,
        GetImgArray: () => images,
        GetImageHash: () => null,
        GetImageHashAndExt: () => null,
        GetImageFromBeginningOfDescription: () => primaryImage || "",
        GetImageURL: () => primaryImage,
        GetImageURLWithFallback: () => primaryImage || images[0] || "",
        GetImageForSizeAsArrayWithFallback: (_size, _language, _format, skipFallback) => {
            const out = images.slice();
            if (!skipFallback && steamAppId) {
                out.push(`https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/${steamAppId}/header.jpg`);
                out.push(`https://cdn.akamai.steamstatic.com/steam/apps/${steamAppId}/header.jpg`);
            }
            return Array.from(new Set(out.map(cleanSteamImageUrl).filter(Boolean)));
        },
        BImageNeedScreenshotFallback: () => images.length === 0,
        BHasSomeImage: () => images.length > 0,
        BHasImage: () => images.length > 0,
        GetFallbackArtworkScreenshot: () => images[0] || (steamAppId ? `https://cdn.akamai.steamstatic.com/steam/apps/${steamAppId}/header.jpg` : ""),
        GetStartTimeAndDateUnixSeconds: () => date,
        GetEndTimeAndDateUnixSeconds: () => date,
        GetPostTimeAndDateUnixSeconds: () => date,
        GetAnnouncementGID: () => announcementGid || gid || "0",
        BHasAnnouncementGID: () => !!(announcementGid || gid),
        GetAppID: () => appId,
        GetReferenceAppID: () => steamAppId || appId,
        GetStoreAppID: () => steamAppId || appId,
        BIsPartnerEvent: () => false,
        BIsOGGEvent: () => !!steamAppId,
        BIsEventInFuture: () => false,
        BHasEventEnded: () => false,
        BIsEventActionEnabled: () => false,
        BShowLibrarySpotlight: () => true,
        BShowLibrarySpotlightText: () => true,
        BIsImageSafeForAllAges: () => true,
        BHasBroadcastEnabled: () => false,
        BEventCanShowBroadcastWidget: () => false,
        BHasBroadcastForceBanner: () => false,
        BSaleShowBroadcastAtTopOfPage: () => false,
        GetVisibilityStartTimeAndDateUnixSeconds: () => date,
        BHasForumTopicGID: () => false,
        GetForumTopicURL: () => "",
        GetAppIDOrReferenceAppID: () => steamAppId || appId,
        GetEventType: () => type,
        BIsVisibleEvent: () => true,
        BIsStagedEvent: () => false,
        BIsUnlistedEvent: () => false,
        BHasEmailEnabled: () => false,
        BHasSaleEnabled: () => false,
        BHasSaleVanity: () => false,
        GetSaleVanity: () => "",
        BHasSaleUpdateLandingPageVanity: () => false,
        GetSaleUpdateLandingPageVanity: () => "",
        GetSaleURL: () => null,
        GetSaleSections: () => [],
        GenerateDynamicSaleSections: () => [],
        GetSaleSectionIncludingFooterSections: () => null,
        GetSaleSectionByID: () => null,
        GetSaleSectionCount: () => 0,
        GetSaleSectionsByType: () => [],
        GetSaleSectionFirstMatchByType: () => null,
        GetSaleItemOfType: () => null,
        GetSaleItemCountOfType: () => 0,
        GetSaleFeaturedAppsCount: () => 0,
        GetSaleFeaturedAppsAndDemosCount: () => 0,
        GetSaleFeaturedBundlesCount: () => 0,
        GetSaleFeaturedPackagesCount: () => 0,
        GetSaleFeaturedApps: () => [],
        GetSaleFeaturedAppsAndDemos: () => [],
        GetSaleFeaturedBundles: () => [],
        GetSaleFeaturedPackages: () => [],
        GetTaggedItems: () => [],
        BHasScheduleEnabled: () => false,
        BAllowedSteamStoreSpotlight: () => false,
        BHasLibaryHomeSpotlight: () => true,
        BHasLibraryHomeSpotlight: () => true,
        BHasSaleProductBanners: () => false,
        GetSteamAwardCategory: () => 0,
        GetSteamAwardNomineeCategories: () => [],
        BIsLockedToGameOwners: () => false,
        GetRequiredAppIDs: () => [],
        GetRequiredPackageIDs: () => [],
        BUseSubscriptionLayout: () => false,
        BIsLockedToPartnerAppRights: () => false,
        GetRequiredPartnerAppRights: () => undefined,
        GetValveAccessLog: () => [],
        BUsesContentHubForItemSource: () => false,
        GetContentHubType: () => undefined,
        GetContentHubCategory: () => undefined,
        GetContentHubTag: () => undefined,
        GetContentHub: () => undefined,
        BContentHubDiscountedOnly: () => false,
        BIsBackgroundImageGroupingEnabled: () => false,
        GetSalePageGroupDefinition: () => undefined,
        GetSalePageBackgroundImageGroupCount: () => 0,
        GetAllSalePageGroups: () => [],
        GetSalePageBackgroundGroup: () => undefined,
        GetIncludedRealmList: () => [0],
        BIsValidForRealm: () => true,
        BIsNextFest: () => false,
        GetLastUpdateTime: () => date,
        GetLastUpdaterSteamIDStr: () => "",
        GetStoreOrCommunityURL: () => announcementUrl,
        GetCommunityDiscussionURL: () => announcementUrl,
        GetStoreNewsURL: () => steamAppId && (announcementGid || eventGid || gid) ? `https://store.steampowered.com/news/app/${steamAppId}/view/${announcementGid || eventGid || gid}` : announcementUrl,
        url: announcementUrl,
    };
    rememberPlayhubNativePartnerEvent(partnerEvent);
    return partnerEvent;
};
const makePlayhubNativeActivityEvent = (appId, metadata, item, index) => {
    const steamAppId = Number(metadata.steam_appid || item.appid || appId) || appId;
    const partnerEvent = makePlayhubNativePartnerEvent(appId, steamAppId, item, index);
    const date = Number(partnerEvent.postTime || 0) || Math.floor(Date.now() / 1000) - index * 60;
    const gid = numericSteamNewsGid(partnerEvent.GID || item.url) || String(date);
    const actor = fakeSteamId(0, String(item.clan_steamid || "103582791429521412"));
    return {
        __playhubNativeActivityEvent: true,
        gameid: String(appId),
        unUniqueID: Number(`${String(gid).slice(-8)}${index}`.slice(-9)) || date + index,
        rtEventTime: date,
        steamIDActor: actor,
        steamIDTarget: fakeSteamId(),
        eEventType: STEAM_POSTED_ANNOUNCEMENT_EVENT_TYPE,
        eEventSubType: 0,
        eGameActivityType: 0,
        bIsGameActivity: false,
        commentThreads: [],
        activeThread: 0,
        get appid() {
            return appId;
        },
        get referenceAppID() {
            return steamAppId || appId;
        },
        get announcementGID() {
            return gid;
        },
        get clan_announcementid() {
            return gid;
        },
        get eventModel() {
            return partnerEvent;
        },
        get forumTopicGID() {
            return partnerEvent.forumTopicGID;
        },
        get upvotes() {
            return partnerEvent.nVotesUp;
        },
        get downvotes() {
            return partnerEvent.nVotesDown;
        },
        get comment_count() {
            return partnerEvent.nCommentCount;
        },
        BIsValid: () => true,
        IsEventLoaded: () => true,
        GetEvent: async () => partnerEvent,
        ReloadEvent: async () => partnerEvent,
        GetParentalFeature: () => 0,
        BUserCanDelete: () => false,
        BSupportsCommentThreads: () => false,
        GetActiveCommentThread: () => null,
        SetActiveCommentThread: () => undefined,
    };
};
const makePlayhubNativeActivity = (appId, metadata) => {
    const items = steamActivityNewsItemsFromMetadata(appId, metadata)
        .filter((item) => numericSteamNewsGid(item.gid || item.news_id || item.announcement_gid || item.id || item.url));
    if (!items.length)
        return null;
    const events = items
        .map((item, index) => makePlayhubNativeActivityEvent(appId, metadata, item, index))
        .sort((a, b) => Number(b.rtEventTime || 0) - Number(a.rtEventTime || 0));
    const grouped = new Map();
    for (const event of events) {
        const day = Math.floor(Number(event.rtEventTime || 0) / 86400) * 86400;
        if (!grouped.has(day))
            grouped.set(day, []);
        grouped.get(day).push(event);
    }
    const days = Array.from(grouped.entries())
        .sort((a, b) => b[0] - a[0])
        .map(([, dayEvents]) => ({
        isValid: dayEvents.length > 0,
        events: dayEvents,
        GetLatestEventTime: () => Math.max(...dayEvents.map((event) => Number(event.rtEventTime || 0))),
        GetEarliestEventTime: () => Math.min(...dayEvents.map((event) => Number(event.rtEventTime || 0))),
        BHasEvents: () => dayEvents.length > 0,
    }));
    const latest = events[0]?.rtEventTime || 0;
    const earliest = events[events.length - 1]?.rtEventTime || latest;
    return {
        __playhubNativeActivity: true,
        appid: appId,
        m_bNoMoreHistoryAvailable: true,
        lastAddedEventType: STEAM_POSTED_ANNOUNCEMENT_EVENT_TYPE,
        lastAddedPartnerEvent: null,
        get appActivityByDay() {
            return days;
        },
        get latest_user_news_time() {
            return latest;
        },
        get earliest_user_news_time() {
            return earliest;
        },
        get latest_game_activity_time() {
            return 0;
        },
        get earliest_game_activity_time() {
            return 0;
        },
        BHasEvents: () => events.length > 0,
        SortEvents: () => undefined,
        RequestStoreItems: async () => undefined,
        MergeUserNews: async () => undefined,
        MergeGameActivity: () => undefined,
        GetAchievementMapCache: () => "[]",
        GetUserNewsCache: () => [],
        GetGameActivityCache: () => [],
    };
};
const getPlayhubNativeActivityForApp = (appId) => {
    const overview = (0, exports.getOverview)(appId);
    if (!appId || !(0, exports.isNonSteamApp)(overview))
        return null;
    const cached = playhubNativeActivityCache().get(appId);
    if (cached)
        return cached;
    const metadata = exports.metadataCache[String(appId)];
    if (!metadata)
        return null;
    const native = makePlayhubNativeActivity(appId, metadata);
    if (native)
        playhubNativeActivityCache().set(appId, native);
    return native;
};
const refreshPlayhubNativeActivityForApp = async (appId, store) => {
    const overview = (0, exports.getOverview)(appId);
    if (!appId || !(0, exports.isNonSteamApp)(overview))
        return null;
    await (0, exports.ensureMetadataCache)();
    let metadata = exports.metadataCache[String(appId)];
    if (!metadata)
        return null;
    const native = metadata ? makePlayhubNativeActivity(appId, metadata) : null;
    if (!native)
        return null;
    playhubNativeActivityCache().set(appId, native);
    const appActivityStore = store || (0, compat_1.getSteamGlobal)("appActivityStore");
    try {
        if (appActivityStore?.m_mapAppActivity?.set)
            appActivityStore.m_mapAppActivity.set(appId, native);
    }
    catch (_error) {
        // If Steam changes the store shape, GetAppActivity still returns our cache.
    }
    return native;
};
const installNativeActivityStorePatch = (unpatchers) => {
    let attempts = 0;
    const tryInstall = () => {
        const store = (0, compat_1.getSteamGlobal)("appActivityStore");
        if (!store || typeof store.GetAppActivity !== "function" || store.__playhubNativeActivityPatched)
            return !!store?.__playhubNativeActivityPatched;
        store.__playhubNativeActivityPatched = true;
        unpatchers.push(() => {
            delete store.__playhubNativeActivityPatched;
            for (const [appId, value] of store.m_mapAppActivity?.entries?.() ?? []) {
                if (value?.__playhubNativeActivity)
                    store.m_mapAppActivity.delete(appId);
            }
            playhubNativeActivityCache().clear();
        });
        unpatchers.push((0, compat_1.patchMethod)(store, "GetAppActivity", (_thisValue, original, args) => {
            const appId = Number(args[0]);
            const native = getPlayhubNativeActivityForApp(appId);
            if (native)
                return native;
            if (appId && (0, exports.isNonSteamApp)((0, exports.getOverview)(appId))) {
                void refreshPlayhubNativeActivityForApp(appId, store);
            }
            return original(...args);
        }));
        for (const methodName of ["RequestRestoreActivity", "RestoreActivity", "FetchLatestActivity", "FetchLatestActivityFromServer", "FetchActivityHistory"]) {
            if (typeof store[methodName] !== "function")
                continue;
            unpatchers.push((0, compat_1.patchMethod)(store, methodName, (_thisValue, original, args) => {
                const appId = Number(args[0]);
                const native = getPlayhubNativeActivityForApp(appId);
                if (native) {
                    store.m_mapAppActivity?.set?.(appId, native);
                    store.m_setAppsLoading?.delete?.(appId);
                    // In the supplied Steam build these two methods are synchronous.
                    return methodName === "RequestRestoreActivity" || methodName === "FetchLatestActivity"
                        ? undefined : Promise.resolve(native);
                }
                if (appId && (0, exports.isNonSteamApp)((0, exports.getOverview)(appId))) {
                    void refreshPlayhubNativeActivityForApp(appId, store);
                }
                return original(...args);
            }));
        }
        return true;
    };
    if (tryInstall())
        return;
    const timer = window.setInterval(() => {
        attempts += 1;
        if (tryInstall() || attempts >= 40)
            window.clearInterval(timer);
    }, 500);
    unpatchers.push(() => window.clearInterval(timer));
};
const installNativePartnerEventStorePatch = (unpatchers) => {
    let attempts = 0;
    const patchedStores = new WeakSet();
    const patchOneStore = (partnerStore) => {
        if (!partnerStore || typeof partnerStore !== "object")
            return false;
        globalThis[PLAYHUB_NATIVE_PARTNER_STORE_WINDOW_KEY] = partnerStore;
        for (const event of playhubNativePartnerEventCache().values())
            registerPlayhubNativePartnerEventInSteamStore(event, partnerStore);
        if (partnerStore.__playhubNativePartnerEventsPatched || patchedStores.has(partnerStore))
            return true;
        partnerStore.__playhubNativePartnerEventsPatched = true;
        unpatchers.push(() => { delete partnerStore.__playhubNativePartnerEventsPatched; });
        patchedStores.add(partnerStore);
        const maybePatch = (methodName, handler) => {
            if (typeof partnerStore[methodName] !== "function")
                return;
            unpatchers.push((0, compat_1.patchMethod)(partnerStore, methodName, (_thisValue, original, args) => handler(original, args)));
        };
        maybePatch("GetClanEventFromAnnouncementGID", (original, args) => {
            const event = playhubNativePartnerEventForGid(args[0], false);
            return event || original(...args);
        });
        maybePatch("BHasClanAnnouncementGID", (original, args) => {
            if (playhubNativePartnerEventForGid(args[0]))
                return true;
            return original(...args);
        });
        maybePatch("GetClanEventGIDFromAnnouncementGID", (original, args) => {
            const event = playhubNativePartnerEventForGid(args[0], false);
            return event?.GID || original(...args);
        });
        maybePatch("GetClanEventModel", (original, args) => {
            const event = playhubNativePartnerEventForGid(args[0], true);
            return event || original(...args);
        });
        maybePatch("BHasClanEventModel", (original, args) => {
            if (playhubNativePartnerEventForGid(args[0]))
                return true;
            return original(...args);
        });
        maybePatch("GetClanEventGIDs", (original, args) => {
            const originalResult = original(...args) || [];
            const accountId = args[0]?.GetAccountID?.();
            const playhubGids = Array.from(playhubNativePartnerEventCache().values())
                .filter((event) => !accountId || event?.clanSteamID?.GetAccountID?.() === accountId)
                .map((event) => event?.GID)
                .filter(Boolean);
            return Array.from(new Set([...originalResult, ...playhubGids]));
        });
        maybePatch("GetClanEventGIDsForApp", (original, args) => {
            const appId = Number(args[0]);
            const originalResult = original(...args) || [];
            const playhubGids = Array.from(playhubNativePartnerEventCache().values())
                .filter((event) => Number(event?.appid) === appId || Number(event?.reference_appid || event?.steam_appid) === appId)
                .map((event) => event?.GID)
                .filter(Boolean);
            return Array.from(new Set([...originalResult, ...playhubGids]));
        });
        maybePatch("GetRankedClanEvents", (original, args) => {
            const originalResult = original(...args) || [];
            const clanAccountId = args[0]?.GetAccountID?.();
            const appId = Number(args[1] || 0);
            const playhubEvents = Array.from(playhubNativePartnerEventCache().values()).filter((event) => {
                const clanMatches = !clanAccountId || event?.clanSteamID?.GetAccountID?.() === clanAccountId;
                const appMatches = !appId || Number(event?.appid) === appId || Number(event?.reference_appid || event?.steam_appid) === appId;
                return clanMatches && appMatches;
            });
            return Array.from(new Map([...originalResult, ...playhubEvents].map((event) => [String(event?.GID || event?.AnnouncementGID), event])).values());
        });
        maybePatch("LoadPartnerEventFromAnnoucementGID", (original, args) => {
            const event = playhubNativePartnerEventForGid(args[0], false);
            if (event)
                return Promise.resolve(event);
            return original(...args);
        });
        maybePatch("LoadPartnerEventFromAnnoucementGIDAndClanSteamID", (original, args) => {
            const event = playhubNativePartnerEventForGid(args[1] || args[0], false);
            if (event)
                return Promise.resolve(event);
            return original(...args);
        });
        maybePatch("LoadPartnerEventFromClanEventGID", (original, args) => {
            const event = playhubNativePartnerEventForGid(args[0], true);
            if (event)
                return Promise.resolve(event);
            return original(...args);
        });
        maybePatch("LoadPartnerEventFromClanEventGIDAndClanSteamID", (original, args) => {
            const event = playhubNativePartnerEventForGid(args[1] || args[0], true);
            if (event)
                return Promise.resolve(event);
            return original(...args);
        });
        maybePatch("LoadPartnerEventGeneric", (original, args) => {
            // Real Steam signature is (clanSteamID, appid, eventGID, announcementGID, ...).
            const requestKey = args.find((arg) => playhubNativePartnerEventForGid(arg));
            const event = playhubNativePartnerEventForGid(requestKey, !!args[2]);
            if (event)
                return Promise.resolve(event);
            return original(...args);
        });
        maybePatch("LoadHiddenPartnerEvent", (original, args) => {
            const event = playhubNativePartnerEventForGid(args[0], true);
            if (event)
                return Promise.resolve(event);
            return original(...args);
        });
        maybePatch("LoadHiddenPartnerEventByAnnouncementGID", (original, args) => {
            const event = playhubNativePartnerEventForGid(args[0], false);
            if (event)
                return Promise.resolve(event);
            return original(...args);
        });
        maybePatch("LoadAdjacentPartnerEvents", (original, args) => {
            const requestedId = args[0];
            const appId = Number(args[2] || 0);
            const direct = playhubNativePartnerEventForGid(requestedId, true);
            if (direct)
                return Promise.resolve([direct]);
            const appEvents = Array.from(playhubNativePartnerEventCache().values()).filter((event) => {
                return appId && (Number(event?.appid) === appId || Number(event?.reference_appid || event?.steam_appid) === appId);
            });
            if (appEvents.length)
                return Promise.resolve(appEvents);
            return original(...args);
        });
        maybePatch("LoadBatchPartnerEventsByEventGIDsOrAnnouncementGIDs", (original, args) => {
            const eventGids = Array.isArray(args[0]) ? args[0] : [];
            const announcementGids = Array.isArray(args[1]) ? args[1] : [];
            const hits = [];
            const missingEventGids = [];
            const missingAnnouncementGids = [];
            eventGids.forEach((gid) => {
                const event = playhubNativePartnerEventForGid(gid, true);
                if (event)
                    hits.push(event);
                else
                    missingEventGids.push(gid);
            });
            announcementGids.forEach((gid) => {
                const event = playhubNativePartnerEventForGid(gid, false);
                if (event)
                    hits.push(event);
                else
                    missingAnnouncementGids.push(gid);
            });
            if (!hits.length)
                return original(...args);
            if (!missingEventGids.length && !missingAnnouncementGids.length)
                return Promise.resolve(hits);
            return Promise.resolve(original(missingEventGids, missingAnnouncementGids, args[2])).then((rest) => [...hits, ...((Array.isArray(rest) && rest) || [])]);
        });
        maybePatch("FlushEventFromCache", (original, args) => {
            const event = playhubNativePartnerEventForGid(args[1] || args[0]);
            if (event)
                return undefined;
            return original(...args);
        });
        return true;
    };
    const tryInstall = () => {
        const stores = collectNativePartnerEventStores();
        let patchedAny = false;
        for (const store of stores)
            patchedAny = patchOneStore(store) || patchedAny;
        return patchedAny;
    };
    if (tryInstall())
        return;
    const timer = window.setInterval(() => {
        attempts += 1;
        if (tryInstall() || attempts >= 80)
            window.clearInterval(timer);
    }, 500);
    unpatchers.push(() => window.clearInterval(timer));
};
const activityAppIdFromUrl = (url) => {
    const decoded = decodeURIComponent(String(url || ""));
    const patterns = [
        /library\/(?:appactivityfeed|appactivity|activityfeed|activity|appnews|appupdates)\/(\d+)/i,
        /(?:appactivityfeed|appactivity|activityfeed|activity|appnews|appupdates)[^?]*[?&](?:appid|app_id|appId)=(\d+)/i,
        /(?:appid|app_id|appId)=(\d+).*?(?:appactivity|activity|appnews|appupdates)/i,
    ];
    for (const pattern of patterns) {
        const match = decoded.match(pattern);
        if (match)
            return Number(match[1]);
    }
    return 0;
};
const gameDetailAppIdFromPath = (path) => {
    const decoded = decodeURIComponent(String(path || ""));
    const patterns = [
        /\/library\/(?:app|details|[^/]+\/app)\/(\d+)(?:[/?#\s].*)?/i,
        /(?:^|[?#&\s])appid=(\d+)/i,
        /(?:^|[?#&\s])app_id=(\d+)/i,
        /\bapp\/(\d+)\b/i,
    ];
    for (const pattern of patterns) {
        const match = decoded.match(pattern);
        if (match)
            return Number(match[1] || 0);
    }
    return 0;
};
const appIdFromDom = () => {
    const attributes = ["href", "data-appid", "data-app-id", "data-appid64", "data-ds-appid", "aria-label", "title"];
    const candidates = deepQuerySelectorAll("a, button, [role='button'], [role='tab'], [data-appid], [data-app-id], [data-ds-appid]");
    for (const element of candidates) {
        if (!visibleElement(element))
            continue;
        for (const attribute of attributes) {
            const value = element.getAttribute(attribute) || "";
            const appId = gameDetailAppIdFromPath(value);
            if (appId)
                return appId;
        }
    }
    return 0;
};
const appIdFromVisibleMetadataTitle = () => {
    try {
        const pageText = normalizedTabText(document.body?.textContent || "");
        if (!pageText || !exports.metadataCache)
            return 0;
        const candidates = Object.entries(exports.metadataCache)
            .map(([key, metadata]) => {
            const appId = Number(key);
            const title = normalizedTabText(metadata?.title || (0, exports.appName)(appId));
            return { appId, title };
        })
            .filter((candidate) => candidate.appId && candidate.title && candidate.title.length >= 3)
            .sort((a, b) => b.title.length - a.title.length);
        for (const candidate of candidates) {
            if (pageText.includes(candidate.title))
                return candidate.appId;
        }
    }
    catch (_error) {
        // Best-effort fallback only.
    }
    return 0;
};
const currentGameDetailAppId = () => {
    const routeAppId = gameDetailAppIdFromPath(currentRoutePath());
    if (routeAppId)
        return routeAppId;
    if (lastObservedGameDetailAppId)
        return lastObservedGameDetailAppId;
    const titleAppId = appIdFromVisibleMetadataTitle();
    if (titleAppId)
        return titleAppId;
    const domAppId = appIdFromDom();
    if (domAppId && (exports.metadataCache[String(domAppId)] || isNonSteamAppWithoutPatchedMethod((0, exports.getOverview)(domAppId))))
        return domAppId;
    return domAppId || 0;
};
const isTransparentColor = (value) => {
    const color = String(value || "").trim().toLowerCase();
    return !color || color === "transparent" || color === "rgba(0, 0, 0, 0)" || color === "rgba(0,0,0,0)";
};
const visibleElement = (element) => {
    if (!(element instanceof HTMLElement))
        return false;
    const rect = element.getBoundingClientRect();
    if (rect.width < 2 || rect.height < 2)
        return false;
    const style = window.getComputedStyle(element);
    return style.display !== "none" && style.visibility !== "hidden" && Number(style.opacity || 1) > 0;
};
const textOf = (element) => String(element?.textContent || "").replace(/\s+/g, " ").trim();
const isPlayhubActivityNewsElement = (element) => !!(element instanceof HTMLElement && element.closest("#playhub-activity-news-root, #playhub-activity-news-overlay, [data-playhub-activity-news='1']"));
const deepQuerySelectorAll = (selector, root = document) => {
    const results = [];
    const seen = new Set();
    const visit = (scope) => {
        let elements = [];
        try {
            elements = Array.from(scope.querySelectorAll?.(selector) || []);
        }
        catch (_error) {
            elements = [];
        }
        elements.forEach((element) => {
            if (!seen.has(element)) {
                seen.add(element);
                results.push(element);
            }
            const shadowRoot = element.shadowRoot;
            if (shadowRoot)
                visit(shadowRoot);
        });
    };
    visit(root);
    return results;
};
const deepVisibleElements = (selector) => deepQuerySelectorAll(selector).filter((element) => visibleElement(element));
const findVisibleTextElement = (label) => {
    const wanted = label.toLocaleLowerCase("it-IT");
    const candidates = deepQuerySelectorAll("button, [role='tab'], [role='button'], a, div, span");
    return candidates.find((element) => {
        if (!visibleElement(element))
            return false;
        return textOf(element).toLocaleLowerCase("it-IT") === wanted;
    });
};
const knownDetailsTabLabels = ["Attività", "Activity", "I tuoi articoli", "Your Stuff", "Comunità", "Community", "Informazioni sul gioco", "Game Info"];
const normalizedTabText = (value) => String(value || "").replace(/\s+/g, " ").trim().toLocaleLowerCase("it-IT");
const canonicalDetailsTabLabel = (label) => {
    const normalized = normalizedTabText(label);
    if (normalized === normalizedTabText("Activity"))
        return "Attività";
    if (normalized === normalizedTabText("Your Stuff"))
        return "I tuoi articoli";
    if (normalized === normalizedTabText("Community"))
        return "Comunità";
    if (normalized === normalizedTabText("Game Info"))
        return "Informazioni sul gioco";
    return label;
};
const detailsTabLabelFromText = (value) => {
    const text = normalizedTabText(value);
    if (!text)
        return "";
    for (const label of knownDetailsTabLabels) {
        if (text === normalizedTabText(label))
            return canonicalDetailsTabLabel(label);
    }
    // Steam sometimes wraps the label with focus helpers / counters. Accept a
    // short containing text, but avoid the full tab row because it contains every
    // label and would otherwise always resolve to Activity.
    for (const label of knownDetailsTabLabels) {
        const wanted = normalizedTabText(label);
        if (text.includes(wanted) && text.length <= wanted.length + 28)
            return canonicalDetailsTabLabel(label);
    }
    return "";
};
const detailsTabLabelFromElement = (element) => {
    let current = element;
    for (let depth = 0; current && current !== document.body && depth < 8; depth += 1) {
        const directLabel = detailsTabLabelFromText(textOf(current));
        if (directLabel)
            return directLabel;
        const ariaLabel = detailsTabLabelFromText(current.getAttribute("aria-label") || current.getAttribute("title") || "");
        if (ariaLabel)
            return ariaLabel;
        current = current.parentElement;
    }
    return "";
};
const noteDetailsTabSelection = (label) => {
    if (!label)
        return;
    selectedDetailsTabHint = label;
    selectedDetailsTabHintAt = Date.now();
};
const noteDetailsTabIndexSelection = (index) => {
    if (!Number.isFinite(index) || index < 0)
        return;
    selectedDetailsTabIndexHint = index;
    selectedDetailsTabIndexHintAt = Date.now();
    if (index === 0)
        noteDetailsTabSelection("Attività");
};
const tabCandidateText = (element) => {
    const text = textOf(element);
    // Steam sometimes puts helper text/counters inside focus wrappers. We only need
    // short visible labels for geometry grouping, not the localized wording.
    if (text.length > 96)
        return "";
    return text;
};
const elementDepth = (element) => {
    let depth = 0;
    let current = element?.parentElement || null;
    while (current && current !== document.body) {
        depth += 1;
        current = current.parentElement;
    }
    return depth;
};
const uniqueVisibleElements = (elements) => {
    const out = [];
    for (const element of elements) {
        if (!(element instanceof HTMLElement) || !visibleElement(element))
            continue;
        if (out.some((existing) => existing === element))
            continue;
        out.push(element);
    }
    return out;
};
const tabLikeElement = (element) => {
    if (isPlayhubActivityNewsElement(element))
        return false;
    const rect = element.getBoundingClientRect();
    const text = tabCandidateText(element);
    if (!text)
        return false;
    if (rect.width < 34 || rect.width > Math.min(420, window.innerWidth * 0.45))
        return false;
    if (rect.height < 18 || rect.height > 82)
        return false;
    if (rect.top < window.innerHeight * 0.18 || rect.top > window.innerHeight * 0.58)
        return false;
    if (rect.left < 0 || rect.right > window.innerWidth + 8)
        return false;
    // Avoid the big Play button / header stats row. The details tab strip is below
    // the hero/header controls and is usually centered around the page content.
    if (rect.top < 220 && window.innerHeight > 850)
        return false;
    return true;
};
const dedupeNestedTabCandidates = (elements) => {
    const sorted = elements.slice().sort((a, b) => elementDepth(b) - elementDepth(a));
    const kept = [];
    for (const element of sorted) {
        const rect = element.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const duplicate = kept.some((other) => {
            const otherRect = other.getBoundingClientRect();
            const otherCenterX = otherRect.left + otherRect.width / 2;
            const otherCenterY = otherRect.top + otherRect.height / 2;
            return Math.abs(centerX - otherCenterX) < 18 && Math.abs(centerY - otherCenterY) < 14;
        });
        if (!duplicate)
            kept.push(element);
    }
    return kept;
};
const groupTabCandidatesByRow = (elements) => {
    const rows = [];
    const sorted = elements.slice().sort((a, b) => {
        const ar = a.getBoundingClientRect();
        const br = b.getBoundingClientRect();
        return ar.top - br.top || ar.left - br.left;
    });
    for (const element of sorted) {
        const rect = element.getBoundingClientRect();
        const centerY = rect.top + rect.height / 2;
        const row = rows.find((candidate) => {
            const firstRect = candidate[0].getBoundingClientRect();
            const firstCenterY = firstRect.top + firstRect.height / 2;
            return Math.abs(centerY - firstCenterY) <= 18;
        });
        if (row)
            row.push(element);
        else
            rows.push([element]);
    }
    return rows
        .map((row) => row.slice().sort((a, b) => a.getBoundingClientRect().left - b.getBoundingClientRect().left))
        .filter((row) => row.length >= 3);
};
const scoreTabRow = (row) => {
    const rects = row.map((element) => element.getBoundingClientRect());
    const left = Math.min(...rects.map((rect) => rect.left));
    const right = Math.max(...rects.map((rect) => rect.right));
    const top = Math.min(...rects.map((rect) => rect.top));
    const bottom = Math.max(...rects.map((rect) => rect.bottom));
    const width = right - left;
    const height = bottom - top;
    const selectedBonus = row.some((element) => elementLooksSelected(element)) ? 500 : 0;
    const countBonus = Math.min(row.length, 6) * 60;
    const contentWidthBonus = width > window.innerWidth * 0.22 && width < window.innerWidth * 0.78 ? 120 : 0;
    const compactBonus = height < 92 ? 120 : 0;
    const verticalPreference = Math.max(0, 160 - Math.abs(top - window.innerHeight * 0.31));
    return selectedBonus + countBonus + contentWidthBonus + compactBonus + verticalPreference;
};
const findDetailsTabCandidates = () => {
    const roleTabs = uniqueVisibleElements(deepQuerySelectorAll("[role='tab']"));
    const roleRows = groupTabCandidatesByRow(dedupeNestedTabCandidates(roleTabs.filter(tabLikeElement)));
    if (roleRows.length)
        return roleRows.sort((a, b) => scoreTabRow(b) - scoreTabRow(a))[0];
    const raw = uniqueVisibleElements(deepQuerySelectorAll("button, [role='button'], [tabindex], a, div, span")).filter(tabLikeElement);
    const rows = groupTabCandidatesByRow(dedupeNestedTabCandidates(raw));
    if (!rows.length)
        return [];
    return rows.sort((a, b) => scoreTabRow(b) - scoreTabRow(a))[0];
};
const findDetailsTabRow = () => {
    const tabs = findDetailsTabCandidates();
    if (tabs.length >= 3) {
        let current = tabs[0].parentElement;
        for (let depth = 0; current && current !== document.body && depth < 8; depth += 1) {
            const rect = current.getBoundingClientRect();
            const contains = tabs.filter((tab) => current?.contains(tab)).length;
            if (contains >= Math.min(3, tabs.length) && rect.width > 260 && rect.height < 180)
                return current;
            current = current.parentElement;
        }
        return tabs[0];
    }
    const activity = findVisibleTextElement("Attività") || findVisibleTextElement("Activity");
    if (!activity)
        return null;
    let current = activity;
    for (let depth = 0; current && current !== document.body && depth < 8; depth += 1) {
        const text = textOf(current);
        const hits = knownDetailsTabLabels.filter((label) => text.includes(label)).length;
        const rect = current.getBoundingClientRect();
        if (hits >= 3 && rect.width > 300 && rect.height < 160)
            return current;
        current = current.parentElement;
    }
    return activity.parentElement;
};
const detailsTabIndexFromPoint = (x, y) => {
    const tabs = findDetailsTabCandidates();
    return tabs.findIndex((tab) => {
        const rect = tab.getBoundingClientRect();
        return x >= rect.left - 10 && x <= rect.right + 10 && y >= rect.top - 10 && y <= rect.bottom + 10;
    });
};
const detailsTabIndexFromElement = (element) => {
    if (!element)
        return -1;
    const tabs = findDetailsTabCandidates();
    return tabs.findIndex((tab) => tab === element || tab.contains(element) || element.contains(tab));
};
const selectedNativeDetailsTabIndex = () => {
    const tabs = findDetailsTabCandidates();
    if (!tabs.length)
        return -1;
    const direct = tabs.findIndex((tab) => elementLooksSelected(tab));
    if (direct >= 0)
        return direct;
    return tabs.findIndex((tab) => {
        let current = tab.parentElement;
        for (let depth = 0; current && current !== document.body && depth < 4; depth += 1) {
            if (elementLooksSelected(current))
                return true;
            current = current.parentElement;
        }
        return false;
    });
};
const elementLooksSelected = (element) => {
    let current = element;
    for (let depth = 0; current && current !== document.body && depth < 5; depth += 1) {
        const ariaSelected = current.getAttribute("aria-selected") || current.getAttribute("aria-current");
        if (ariaSelected === "true" || ariaSelected === "page")
            return true;
        const className = String(current.className || "").toLowerCase();
        if (/(active|selected|current)/.test(className))
            return true;
        const style = window.getComputedStyle(current);
        const rect = current.getBoundingClientRect();
        const radius = Math.max(parseFloat(style.borderTopLeftRadius || "0") || 0, parseFloat(style.borderTopRightRadius || "0") || 0, parseFloat(style.borderBottomLeftRadius || "0") || 0, parseFloat(style.borderBottomRightRadius || "0") || 0);
        if (rect.width >= 48 && rect.height >= 24 && radius >= 8 && !isTransparentColor(style.backgroundColor)) {
            return true;
        }
        current = current.parentElement;
    }
    return false;
};
const selectedNativeDetailsTabLabel = () => {
    const selectedCandidates = Array.from(deepQuerySelectorAll("[aria-selected='true'], [aria-current='page'], [role='tab'], button, [role='button']"));
    for (const element of selectedCandidates) {
        if (!visibleElement(element))
            continue;
        const html = element;
        const ariaSelected = html.getAttribute("aria-selected") || html.getAttribute("aria-current");
        const className = String(html.className || "").toLowerCase();
        if (ariaSelected !== "true" && ariaSelected !== "page" && !/(active|selected|current)/.test(className))
            continue;
        const label = detailsTabLabelFromElement(html);
        if (label)
            return label;
    }
    return "";
};
const activeDetailsTabLabel = () => {
    const path = currentRoutePath();
    if (/\/activity(?:[/?#].*)?$/i.test(path))
        return "Attività";
    const indexHintAge = selectedDetailsTabIndexHintAt ? Date.now() - selectedDetailsTabIndexHintAt : Number.MAX_SAFE_INTEGER;
    // Language-independent fast path: in Steam's game detail page the Activity tab
    // is the first details tab. This avoids depending on localized labels.
    if (selectedDetailsTabIndexHint === 0 && indexHintAge < 2200)
        return "Attività";
    const nativeIndex = selectedNativeDetailsTabIndex();
    if (nativeIndex === 0)
        return "Attività";
    if (nativeIndex > 0)
        return `tab-${nativeIndex}`;
    const hintAge = selectedDetailsTabHintAt ? Date.now() - selectedDetailsTabHintAt : Number.MAX_SAFE_INTEGER;
    // Immediately after a click, Steam's selected class can still point to the old
    // tab for a few frames. Trust the click hint briefly, then prefer native state.
    if (selectedDetailsTabHint && hintAge < 1500)
        return selectedDetailsTabHint;
    const nativeLabel = selectedNativeDetailsTabLabel();
    if (nativeLabel)
        return nativeLabel;
    if (selectedDetailsTabHint && hintAge < 2500)
        return selectedDetailsTabHint;
    const activity = findVisibleTextElement("Attività") || findVisibleTextElement("Activity");
    if (activity && elementLooksSelected(activity))
        return "Attività";
    return "";
};
const ACTIVITY_EMPTY_STATE_TEXTS = [
    "nessuna attività recente",
    "attività recente dagli sviluppatori",
    "dai tuoi amici",
    "no recent activity",
    "recent activity from developers",
    "from developers or your friends",
    "from the developers of this title or your friends",
];
const textLooksLikeActivityEmptyState = (value) => {
    const text = normalizedTabText(value);
    if (!text)
        return false;
    return ACTIVITY_EMPTY_STATE_TEXTS.some((needle) => text.includes(normalizedTabText(needle)));
};
const findActivityEmptyStateElement = () => {
    const body = document.body;
    if (!body)
        return null;
    try {
        const walker = document.createTreeWalker(body, NodeFilter.SHOW_TEXT, {
            acceptNode: (node) => {
                const text = String(node.textContent || "");
                return textLooksLikeActivityEmptyState(text) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
            },
        });
        let node = walker.nextNode();
        while (node) {
            let element = (node.parentNode instanceof HTMLElement ? node.parentNode : null);
            while (element && element !== body) {
                if (visibleElement(element))
                    return element;
                element = element.parentElement;
            }
            node = walker.nextNode();
        }
    }
    catch (_error) {
        // Fall back below.
    }
    const candidates = deepQuerySelectorAll("div, span, p, button, [role='tab'], [role='button']");
    return candidates.find((element) => visibleElement(element) && textLooksLikeActivityEmptyState(textOf(element))) || null;
};
const findActivityEmptyStateContainer = () => {
    const leaf = findActivityEmptyStateElement();
    if (!leaf)
        return null;
    let current = leaf;
    let best = leaf;
    for (let depth = 0; current && current !== document.body && depth < 10; depth += 1) {
        const rect = current.getBoundingClientRect();
        const text = textOf(current);
        if (rect.width >= 260 && rect.height >= 28 && textLooksLikeActivityEmptyState(text) && text.length < 700) {
            best = current;
        }
        // Stop before swallowing the whole detail page / tab row.
        if (rect.width > window.innerWidth * 0.75 && rect.height > window.innerHeight * 0.55)
            break;
        current = current.parentElement;
    }
    return best;
};
const findActivityEmptyDropZone = (includeHidden = true) => {
    const tabRowBottom = findDetailsTabRow()?.getBoundingClientRect()?.bottom || Math.max(210, window.innerHeight * 0.27);
    const hiddenCandidates = includeHidden
        ? deepQuerySelectorAll("[data-playhub-activity-empty-hidden='1']")
            .filter((element) => element instanceof HTMLElement)
        : [];
    if (hiddenCandidates.length) {
        hiddenCandidates.sort((a, b) => a.getBoundingClientRect().top - b.getBoundingClientRect().top);
        return hiddenCandidates[0];
    }
    const candidates = deepVisibleElements("div, section, article").filter((element) => {
        if (isPlayhubActivityNewsElement(element))
            return false;
        const rect = element.getBoundingClientRect();
        if (rect.width < Math.min(520, window.innerWidth * 0.35))
            return false;
        if (rect.height < 34 || rect.height > 240)
            return false;
        if (rect.top < tabRowBottom + 12 || rect.top > window.innerHeight * 0.82)
            return false;
        if (rect.left > window.innerWidth * 0.2 || rect.right < window.innerWidth * 0.55)
            return false;
        const style = window.getComputedStyle(element);
        const borderStyles = [
            style.borderTopStyle,
            style.borderRightStyle,
            style.borderBottomStyle,
            style.borderLeftStyle,
            style.outlineStyle,
        ].join(" ").toLowerCase();
        const borderWidths = [
            style.borderTopWidth,
            style.borderRightWidth,
            style.borderBottomWidth,
            style.borderLeftWidth,
            style.outlineWidth,
        ].map((value) => parseFloat(value || "0") || 0);
        const hasDashedBorder = /(dashed|dotted)/.test(borderStyles) && borderWidths.some((width) => width >= 1);
        if (!hasDashedBorder)
            return false;
        // Steam's Activity empty composer/state is a wide dashed panel directly under the tab row.
        // This is language-independent and works even when the localized text is not known.
        return true;
    });
    candidates.sort((a, b) => a.getBoundingClientRect().top - b.getBoundingClientRect().top);
    return candidates[0] || null;
};
const steamActivityEmptyStateVisible = () => !!findSteamNativeActivityMountInfo() || !!findActivityEmptyStateElement() || !!findActivityEmptyDropZone(false);
const recentNonActivityTabSelection = () => {
    const now = Date.now();
    const indexAge = selectedDetailsTabIndexHintAt ? now - selectedDetailsTabIndexHintAt : Number.MAX_SAFE_INTEGER;
    if (selectedDetailsTabIndexHint > 0 && indexAge < 2 * 60 * 1000)
        return true;
    const labelAge = selectedDetailsTabHintAt ? now - selectedDetailsTabHintAt : Number.MAX_SAFE_INTEGER;
    if (selectedDetailsTabHint && selectedDetailsTabHint !== "Attività" && labelAge < 2 * 60 * 1000)
        return true;
    return false;
};
const isActivityTabActive = () => {
    if (recentNonActivityTabSelection())
        return false;
    const label = activeDetailsTabLabel();
    if (label === "Attività")
        return true;
    if (label)
        return false;
    const nativeIndex = selectedNativeDetailsTabIndex();
    if (nativeIndex === 0)
        return true;
    if (nativeIndex > 0)
        return false;
    return false;
};
const restoreNativeActivityEmptyStates = () => {
    deepQuerySelectorAll("[data-playhub-activity-empty-hidden='1']").forEach((element) => {
        if (!(element instanceof HTMLElement))
            return;
        element.style.removeProperty("display");
        element.style.removeProperty("visibility");
        element.style.removeProperty("opacity");
        element.style.removeProperty("color");
        element.style.removeProperty("background");
        element.style.removeProperty("border-color");
        element.style.removeProperty("outline-color");
        element.style.removeProperty("box-shadow");
        element.style.removeProperty("pointer-events");
        element.removeAttribute("data-playhub-activity-empty-hidden");
    });
};
const STEAM_ACTIVITY_NATIVE_CLASSES = {
    // Extracted from Andrea's current SteamUI bundle. These are not the only path,
    // but they let us mount inside Steam's real Activity feed instead of guessing
    // by translated strings or by geometry. If Steam updates them, the fixed-body
    // fallback below still keeps the news visible.
    activityFeedContainer: "_3yTl3RiWfo-Itg-xp967wP",
    innerContainer: "_2EEApFUXB7aWXBtitgV5dk",
    noActivity: "_2-kDc3UDR-GN6V1lBpSupb",
};
const classSelector = (className) => `.${String(className || "")}`;
const closestByClass = (element, className) => {
    let current = element;
    while (current && current !== document.body) {
        if (current.classList?.contains(className))
            return current;
        current = current.parentElement;
    }
    return null;
};
const findSteamNativeActivityMountInfo = () => {
    const noActivity = deepVisibleElements(classSelector(STEAM_ACTIVITY_NATIVE_CLASSES.noActivity))
        .find((element) => element instanceof HTMLElement && element.getBoundingClientRect().width > 260);
    if (!noActivity)
        return null;
    const inner = closestByClass(noActivity, STEAM_ACTIVITY_NATIVE_CLASSES.innerContainer) || noActivity.parentElement;
    if (!inner)
        return null;
    return { target: inner, anchor: noActivity, mode: "native" };
};
const hideElementForActivityNews = (element) => {
    if (!element)
        return null;
    element.setAttribute("data-playhub-activity-empty-hidden", "1");
    // Do not use display:none here. Steam's Activity pane is recycled heavily:
    // keeping the native empty panel measurable lets the Playhub overlay follow
    // the real Activity position while making the useless empty message vanish.
    element.style.setProperty("color", "transparent", "important");
    element.style.setProperty("background", "transparent", "important");
    element.style.setProperty("border-color", "transparent", "important");
    element.style.setProperty("outline-color", "transparent", "important");
    element.style.setProperty("box-shadow", "none", "important");
    element.style.setProperty("pointer-events", "none", "important");
    return element;
};
const hideNativeActivityEmptyState = () => {
    const native = findSteamNativeActivityMountInfo();
    if (native?.anchor)
        return hideElementForActivityNews(native.anchor);
    const container = findActivityEmptyDropZone() || findActivityEmptyStateContainer();
    return hideElementForActivityNews(container);
};
const findActivityNewsMountInfo = () => {
    // Best path: use Steam's own empty Activity panel as an anchor. This is
    // language-independent and keeps the cards in the real scrolling Activity
    // layout instead of floating over the hero/header.
    const emptyAnchor = findActivityEmptyDropZone() || findActivityEmptyStateContainer();
    if (emptyAnchor?.parentElement) {
        return { target: emptyAnchor.parentElement, anchor: emptyAnchor, mode: "native" };
    }
    const native = findSteamNativeActivityMountInfo();
    if (native)
        return native;
    return { target: document.body, anchor: null, mode: "fixed" };
};
const mountActivityNewsRoot = (root, mount) => {
    const { target, anchor, mode } = mount;
    if (mode === "native" && anchor?.parentElement === target) {
        hideNativeActivityEmptyState();
        if (root.parentElement !== target) {
            target.insertBefore(root, anchor);
        }
        else if (root.nextElementSibling !== anchor) {
            target.insertBefore(root, anchor);
        }
        return;
    }
    // Last-resort path: keep the cards visible even when Steam changes the native
    // class names or the Activity pane is recycled by React before we can insert.
    hideNativeActivityEmptyState();
    if (!root.parentElement || root.parentElement !== target)
        target.appendChild(root);
};
const steamNewsNativeUrl = (url, steamAppId, gid) => {
    const rawUrl = String(url || "");
    const eventGid = numericSteamNewsGid(gid) || numericSteamNewsGid(rawUrl);
    const appId = Number(steamAppId || rawUrl.match(/news\/app\/(\d+)/i)?.[1] || rawUrl.match(/games\/(\d+)/i)?.[1] || 0);
    if (appId && eventGid)
        return `https://store.steampowered.com/news/app/${appId}/view/${eventGid}`;
    return rawUrl;
};
const openExternalActivityUrl = (url, steamAppId, gid) => {
    const target = steamNewsNativeUrl(url, steamAppId, gid);
    if (!target)
        return;
    try {
        const navigation = ui_1.Navigation;
        // Prefer Steam's own in-client web viewer. Opening the system browser makes
        // these feel like ordinary webpages instead of native Steam news cards.
        if (typeof navigation?.NavigateToSteamWeb === "function") {
            navigation.NavigateToSteamWeb(target);
            return;
        }
        if (typeof navigation?.NavigateToExternalWeb === "function") {
            navigation.NavigateToExternalWeb(target);
            return;
        }
    }
    catch (_error) {
        // Fall through to SteamClient/browser fallbacks.
    }
    try {
        const steamClient = window?.SteamClient;
        if (steamClient?.Overlay?.OpenExternalBrowserURL) {
            steamClient.Overlay.OpenExternalBrowserURL(target);
            return;
        }
        if (steamClient?.System?.OpenInSystemBrowser) {
            steamClient.System.OpenInSystemBrowser(target);
            return;
        }
    }
    catch (_error) {
        // Browser fallback below.
    }
    window.open(target, "_blank", "noopener,noreferrer");
};
const steamNewsDateLabel = (date) => {
    const value = Number(date || 0) || Math.floor(Date.now() / 1000);
    const dt = new Date(value * 1000);
    const currentYear = new Date().getFullYear();
    const options = dt.getFullYear() === currentYear
        ? { day: "numeric", month: "long" }
        : { day: "numeric", month: "long", year: "numeric" };
    return dt.toLocaleDateString("it-IT", options);
};
const ensurePlayhubHomeActivityStyle = () => {
    if (document.getElementById("playhub-home-activity-style"))
        return;
    const style = document.createElement("style");
    style.id = "playhub-home-activity-style";
    style.textContent = `
    .playhub-home-activity-card {
      position: relative;
      flex: 0 0 425px;
      width: 425px;
      min-width: 425px;
      height: 405px;
      border-radius: 10px;
      overflow: hidden;
      background: rgb(39, 43, 47);
      color: rgba(255,255,255,0.92);
      box-sizing: border-box;
      cursor: pointer;
      margin-right: 16px;
      scroll-snap-align: start;
      outline: none;
      box-shadow: 0 0 0 1px rgba(255,255,255,0.04) inset;
    }
    .playhub-home-activity-card:hover,
    .playhub-home-activity-card:focus {
      box-shadow: 0 0 0 2px rgba(255,255,255,0.38) inset, 0 0 20px rgba(102,192,244,0.20);
      background: rgb(49, 55, 62);
    }
    .playhub-home-activity-card-image {
      width: 100%;
      height: 205px;
      overflow: hidden;
      background: rgba(0,0,0,0.34);
    }
    .playhub-home-activity-card-image img {
      width: 100%;
      height: 100%;
      display: block;
      object-fit: cover;
      object-position: center;
    }
    .playhub-home-activity-card-body {
      padding: 16px 16px 14px;
      display: flex;
      flex-direction: column;
      gap: 8px;
      min-height: 0;
    }
    .playhub-home-activity-card-kind {
      color: rgb(102,192,244);
      font-size: 15px;
      font-weight: 700;
      line-height: 1.2;
    }
    .playhub-home-activity-card-date {
      color: rgba(255,255,255,0.52);
      font-size: 14px;
      line-height: 1.2;
    }
    .playhub-home-activity-card-title {
      color: rgba(255,255,255,0.95);
      font-size: 22px;
      line-height: 1.16;
      min-height: 50px;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    .playhub-home-activity-card-summary {
      color: rgba(255,255,255,0.66);
      font-size: 16px;
      line-height: 1.25;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    .playhub-home-activity-card-footer {
      margin-top: auto;
      display: flex;
      align-items: center;
      gap: 8px;
      color: rgba(255,255,255,0.58);
      font-size: 15px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .playhub-home-activity-card-icon {
      width: 22px;
      height: 22px;
      border-radius: 4px;
      background: rgba(0,0,0,0.38);
      object-fit: cover;
      flex: 0 0 22px;
    }
  `;
    document.head.appendChild(style);
};
const isLibraryHomeRoute = () => /(?:^|\s|#|\/)library\/home(?:[/?#\s]|$)/i.test(currentRoutePath());
const appIconUrlForHomeActivity = (appId, metadata) => {
    const overview = (0, exports.getOverview)(appId);
    const direct = String(overview?.icon_data ||
        overview?.icon_url ||
        overview?.strIconURL ||
        overview?.m_strIconURL ||
        overview?.assets?.icon ||
        "");
    if (direct)
        return direct;
    const steamAppId = Number(metadata?.steam_appid || 0);
    return steamAppId ? `https://cdn.akamai.steamstatic.com/steamcommunity/public/images/apps/${steamAppId}/icon.jpg` : "";
};
const gameHeaderFallbackForHomeActivity = (appId, metadata) => {
    const steamAppId = Number(metadata.steam_appid || 0);
    return (metadata.screenshots || [])[0]?.url || (steamAppId ? steamAppHeaderImage(steamAppId) : "");
};
const playhubHomeActivityItems = () => {
    const rows = [];
    for (const [key, metadata] of Object.entries(exports.metadataCache)) {
        const appId = Number(key);
        const overview = (0, exports.getOverview)(appId);
        if (!appId || !metadata || !(0, exports.isNonSteamApp)(overview))
            continue;
        const items = steamActivityNewsItemsFromMetadata(appId, metadata);
        items.forEach((item, index) => {
            const date = Number(item.date || item.time_created || 0) || 0;
            const steamAppId = Number(metadata.steam_appid || item.appid || appId) || appId;
            try {
                makePlayhubNativePartnerEvent(appId, steamAppId, item, index);
            }
            catch (_error) {
                // The Home card can still open via URL even if Steam's event store is not ready.
            }
            const candidates = steamNewsImageCandidatesForMetadata(metadata, item);
            const fallback = normalizeSteamNewsImageUrl(item.fallback_image_url || item.header_image_url || gameHeaderFallbackForHomeActivity(appId, metadata), steamAppId);
            rows.push({
                appId,
                metadata,
                item,
                index,
                date,
                image: normalizeSteamNewsImageUrl(candidates[0] || item.event_image_url || item.image_url || item.image || item.preview_image_url, steamAppId) || fallback,
                fallback,
                icon: appIconUrlForHomeActivity(appId, metadata),
            });
        });
    }
    return rows
        .filter((row) => row.item?.title)
        .sort((a, b) => Number(b.date || 0) - Number(a.date || 0))
        .slice(0, readPlayhubHomeActivityLimit());
};
let playhubHomeNativeEventsCache = null;
const invalidatePlayhubHomeNativeEventsCache = () => {
    playhubHomeNativeEventsCache = null;
};
const playhubHomeImageDimensionCache = new Map();
let playhubHomeImageDimensionRefreshTimer;
const schedulePlayhubHomeImageDimensionRefresh = () => {
    if (playhubHomeImageDimensionRefreshTimer)
        return;
    playhubHomeImageDimensionRefreshTimer = window.setTimeout(() => {
        playhubHomeImageDimensionRefreshTimer = undefined;
        invalidatePlayhubHomeNativeEventsCache();
        window.dispatchEvent(new Event("playhub-metadata:home-image-dimensions-ready"));
    }, 250);
};
const preloadPlayhubHomeActivityImageDimensions = (url) => {
    const clean = cleanSteamImageUrl(url || "");
    if (!clean)
        return;
    const existing = playhubHomeImageDimensionCache.get(clean);
    const now = Date.now();
    if (existing && (existing.pending || now - existing.checkedAt < PLAYHUB_HOME_ACTIVITY_IMAGE_DIMENSION_TTL_MS))
        return;
    playhubHomeImageDimensionCache.set(clean, { width: 0, height: 0, checkedAt: now, pending: true });
    const image = new Image();
    let done = false;
    const finish = (dimensions) => {
        if (done)
            return;
        done = true;
        window.clearTimeout(timer);
        playhubHomeImageDimensionCache.set(clean, {
            width: Number(dimensions.width || 0),
            height: Number(dimensions.height || 0),
            failed: !!dimensions.failed,
            checkedAt: Date.now(),
        });
        schedulePlayhubHomeImageDimensionRefresh();
    };
    const timer = window.setTimeout(() => finish({ failed: true }), 4500);
    image.onload = () => finish({ width: image.naturalWidth || image.width || 0, height: image.naturalHeight || image.height || 0 });
    image.onerror = () => finish({ failed: true });
    image.referrerPolicy = "no-referrer";
    image.src = clean;
};
const isLikelyDecorativeHomeActivityImage = (url) => /divider|separator|spacer|rule|line|border|footer|headerbar|header_bar|icon|logo|avatar|profile|emoji|badge|button|transparent|blank|discord/i.test(String(url || ""));
const isLikelySafeHomeActivityImage = (url) => {
    const lower = String(url || "").toLowerCase();
    if (!lower || isLikelyDecorativeHomeActivityImage(lower))
        return false;
    return /hq720|maxresdefault|sddefault|header\.jpg|capsule|spotlight|library|hero|store_item_assets|cdn\.akamai\.steamstatic|clan\.cloudflare\.steamstatic|1920|1600|1280|1200|1080|800|720|roadmap|calendar|wide|banner/.test(lower);
};
const homeActivityImageScore = (url, isFallback = false) => {
    const clean = cleanSteamImageUrl(url || "");
    if (!clean)
        return -100000;
    const lower = clean.toLowerCase();
    if (!isFallback && isLikelyDecorativeHomeActivityImage(lower))
        return -100000;
    let score = isFallback ? 240 : 0;
    // Prefer Steam event assets that are already intended for Steam surfaces.
    // The backend places localized_header_image/cover-derived URLs first. Avoid
    // client-side Image() probing here: it made the Home rail visibly sluggish.
    if (/localized_header|header_image|event_header|header/.test(lower))
        score += 360;
    if (/capsule|spotlight|library|hero|banner/.test(lower))
        score += isFallback ? 70 : 210;
    if (/hq720|maxresdefault/.test(lower))
        score += 190;
    if (/sddefault/.test(lower))
        score += 90;
    if (/roadmap|calendar|schedule|content|update|patch|event|events|screenshot|preview|wide/.test(lower))
        score += 70;
    if (/store_capsule|small_capsule|capsule_sm|icon|logo|avatar|badge/.test(lower))
        score -= 240;
    if (/\b(?:800x450|1920x622|1920|1600|1280|1200|1080|720)\b/.test(lower))
        score += 60;
    return isLikelySafeHomeActivityImage(clean) || isFallback ? score : score - 260;
};
const homeSafeImageForActivity = (appId, steamAppId, metadata, item) => {
    const preferredNativeAssets = uniqueExpandedSteamNewsImageUrls([
        item.event_header_image_url,
        item.event_cover_image_url,
        item.event_spotlight_image_url,
        item.event_title_image_url,
    ]).map((url) => normalizeSteamNewsImageUrl(url, steamAppId)).filter(Boolean);
    // For the Home rail, prefer the same native event header Steam shows at the
    // very top of the event viewer. Body images are still fallbacks, but they no
    // longer outrank the curated event assets because tall article images can break
    // the Steam Home layout.
    if (preferredNativeAssets[0])
        return preferredNativeAssets[0];
    const fallback = normalizeSteamNewsImageUrl(item.fallback_image_url || item.header_image_url || gameHeaderFallbackForHomeActivity(appId, metadata), steamAppId) || (steamAppId ? steamAppHeaderImage(steamAppId) : "");
    const candidates = Array.from(new Set(steamNewsImageCandidatesForMetadata(metadata, item)
        .map((url) => normalizeSteamNewsImageUrl(url, steamAppId))
        .filter(Boolean)));
    const scored = candidates
        .map((url) => ({ url, score: homeActivityImageScore(url, false) }))
        .filter((row) => row.score > -1000)
        .sort((a, b) => b.score - a.score);
    return scored[0]?.url || fallback || "";
};
const clonePlayhubNativeEventForHome = (event, imageUrl) => {
    const image = cleanSteamImageUrl(imageUrl || "");
    const images = image ? [image] : [];
    const clone = {
        ...event,
        jsondata: {
            ...(event?.jsondata || {}),
            localized_title_image: images,
            localized_capsule_image: images,
            localized_spotlight_image: images,
            localized_header_image: images,
            library_spotlight: true,
            library_spotlight_text: true,
        },
        __playhubNativeHomeWhatsNew: true,
        __playhubNativePartnerEvent: true,
    };
    clone.GetImgArray = () => images;
    clone.GetImageFromBeginningOfDescription = () => "";
    clone.GetImageURL = () => image;
    clone.GetImageURLWithFallback = () => image;
    clone.GetImageForSizeAsArrayWithFallback = () => images;
    clone.BImageNeedScreenshotFallback = () => !image;
    clone.BHasSomeImage = () => !!image;
    clone.BHasImage = () => !!image;
    clone.GetFallbackArtworkScreenshot = () => image;
    clone.BShowLibrarySpotlight = () => true;
    clone.BShowLibrarySpotlightText = () => true;
    clone.BHasLibaryHomeSpotlight = () => true;
    clone.BHasLibraryHomeSpotlight = () => true;
    return clone;
};
const playhubHomeItemDedupKey = (item) => {
    const gid = numericSteamNewsGid(item?.event_gid || item?.announcement_gid || item?.news_id || item?.gid || item?.id || "");
    if (gid && gid !== "0")
        return `gid:${gid}`;
    const url = String(item?.url || item?.external_url || item?.link || "").replace(/[?#].*$/, "").toLowerCase();
    if (url)
        return `url:${url}`;
    const title = normaliseActivityNewsKeyText(item?.title || item?.event_name || item?.headline || "");
    const day = Math.floor((Number(item?.date || item?.posttime || item?.published || 0) || 0) / 86400);
    return title ? `title:${title}|${day}` : "";
};
const PLAYHUB_HOME_DIVERSITY_STOPWORDS = new Set([
    "the", "and", "with", "for", "from", "into", "your", "you", "game", "games", "edition", "deluxe",
    "definitive", "enhanced", "remastered", "remaster", "complete", "ultimate", "standard", "goty",
    "demo", "beta", "alpha", "legacy", "windows", "steam", "playhub", "of", "di", "del", "della",
    "dei", "degli", "gli", "con", "per", "editione", "edizione", "collection", "bundle", "pack", "episode"
]);
const playhubHomeDiversityTokens = (title) => {
    const normalised = String(title || "")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .replace(/['’`´]/g, "")
        .replace(/\b(?:i{1,3}|iv|v|vi{0,3}|ix|x|xi|xii|xiii|xiv|xv)\b/g, " ")
        .replace(/\b\d+(?:st|nd|rd|th)?\b/g, " ")
        .replace(/[^a-z0-9]+/g, " ");
    const tokens = normalised
        .split(/\s+/)
        .map((token) => token.trim())
        .filter((token) => token.length >= 3 && !PLAYHUB_HOME_DIVERSITY_STOPWORDS.has(token));
    return Array.from(new Set(tokens));
};
const playhubHomeRowGameTitle = (row) => String(row.metadata?.title || (0, exports.appName)(row.appId) || row.metadata?.steam_activity_title || "");
const playhubHomeRowSeriesKey = (row) => {
    const tokens = playhubHomeDiversityTokens(playhubHomeRowGameTitle(row));
    if (!tokens.length)
        return `app:${row.appId}`;
    // One-token franchises such as Mafia must be treated as one family; two-token
    // franchises such as Forza Horizon / Tomb Raider should also stay together.
    return tokens.length === 1 ? tokens[0] : `${tokens[0]} ${tokens[1]}`;
};
const playhubHomeRowTitleKey = (row) => {
    const title = normaliseActivityNewsKeyText(row.item?.title || row.item?.event_name || row.item?.headline || "");
    if (!title)
        return "";
    const day = Math.floor((Number(row.date || row.item?.date || row.item?.posttime || row.item?.published || 0) || 0) / 86400);
    return `${title}|${day}`;
};
const stablePlayhubHash = (value) => {
    let hash = 2166136261;
    for (let index = 0; index < value.length; index += 1) {
        hash ^= value.charCodeAt(index);
        hash = Math.imul(hash, 16777619);
    }
    return hash >>> 0;
};
const playhubHomeShuffleValue = (row, seed) => stablePlayhubHash(`${seed}|${row.appId}|${row.key || playhubHomeItemDedupKey(row.item) || ""}`);
const arePlayhubHomeRowsTooSimilar = (a, b) => {
    if (a.appId === b.appId)
        return true;
    if (playhubHomeRowSeriesKey(a) === playhubHomeRowSeriesKey(b))
        return true;
    const aTokens = playhubHomeDiversityTokens(playhubHomeRowGameTitle(a));
    const bTokens = playhubHomeDiversityTokens(playhubHomeRowGameTitle(b));
    if (!aTokens.length || !bTokens.length)
        return false;
    const bSet = new Set(bTokens);
    const common = aTokens.filter((token) => bSet.has(token)).length;
    if (common < 1)
        return false;
    const overlap = common / Math.min(aTokens.length, bTokens.length);
    const jaccard = common / new Set([...aTokens, ...bTokens]).size;
    return overlap >= 0.5 || jaccard >= 0.34;
};
const selectDiversePlayhubHomeRows = (rows, limit) => {
    const seed = readPlayhubHomeActivityShuffleSeed();
    const ordered = rows.slice().sort((a, b) => {
        if (seed)
            return playhubHomeShuffleValue(a, seed) - playhubHomeShuffleValue(b, seed);
        return Number(b.date || 0) - Number(a.date || 0);
    });
    const selected = [];
    const usedAppIds = new Set();
    const usedSteamAppIds = new Set();
    const usedSeries = new Set();
    const usedNewsTitles = new Set();
    const tryAdd = (row, strictSeries, strictNews) => {
        if (selected.length >= limit)
            return true;
        if (usedAppIds.has(row.appId))
            return false;
        const steamAppId = Number(row.steamAppId || 0);
        if (steamAppId && usedSteamAppIds.has(steamAppId))
            return false;
        const seriesKey = playhubHomeRowSeriesKey(row);
        if (strictSeries && usedSeries.has(seriesKey))
            return false;
        if (strictSeries && selected.some((candidate) => arePlayhubHomeRowsTooSimilar(row, candidate)))
            return false;
        const newsKey = playhubHomeRowTitleKey(row);
        if (strictNews && newsKey && usedNewsTitles.has(newsKey))
            return false;
        selected.push(row);
        usedAppIds.add(row.appId);
        if (steamAppId)
            usedSteamAppIds.add(steamAppId);
        if (seriesKey)
            usedSeries.add(seriesKey);
        if (newsKey)
            usedNewsTitles.add(newsKey);
        return selected.length >= limit;
    };
    // Pass 1: one per franchise/series and one per news title. This is the normal path.
    for (const row of ordered)
        if (tryAdd(row, true, true))
            return selected;
    // Pass 2: allow same news headline only if there are not enough different headlines.
    for (const row of ordered)
        if (tryAdd(row, true, false))
            return selected;
    // Pass 3: final fallback. Still avoid same app/Steam AppID, but do not leave Home empty.
    for (const row of ordered)
        if (tryAdd(row, false, false))
            return selected;
    return selected.slice(0, limit);
};
const playhubHomeNativePartnerEvents = () => {
    const enabled = readPlayhubHomeActivityEnabled();
    const limit = readPlayhubHomeActivityLimit();
    const shuffleSeed = readPlayhubHomeActivityShuffleSeed();
    const now = Date.now();
    if (playhubHomeNativeEventsCache &&
        playhubHomeNativeEventsCache.enabled === enabled &&
        playhubHomeNativeEventsCache.limit === limit &&
        playhubHomeNativeEventsCache.shuffleSeed === shuffleSeed &&
        now - playhubHomeNativeEventsCache.builtAt < PLAYHUB_HOME_ACTIVITY_CACHE_TTL_MS) {
        return playhubHomeNativeEventsCache.events;
    }
    if (!enabled) {
        playhubHomeNativeEventsCache = { builtAt: now, enabled, limit, shuffleSeed, events: [] };
        return [];
    }
    const rows = [];
    for (const [key, metadata] of Object.entries(exports.metadataCache)) {
        const appId = Number(key);
        const overview = (0, exports.getOverview)(appId);
        if (!appId || !metadata || !(0, exports.isNonSteamApp)(overview))
            continue;
        const typedMetadata = metadata;
        const steamAppId = Number(typedMetadata.steam_appid || 0) || appId;
        steamActivityNewsItemsFromMetadata(appId, typedMetadata).slice(0, 1).forEach((item, index) => {
            const dedupKey = playhubHomeItemDedupKey(item);
            if (!dedupKey)
                return;
            rows.push({
                appId,
                steamAppId,
                metadata: typedMetadata,
                item,
                index,
                key: dedupKey,
                date: Number(item?.date || item?.posttime || item?.published || 0) || 0,
            });
        });
    }
    const seenRows = new Set();
    const events = [];
    const uniqueRows = rows
        .sort((a, b) => b.date - a.date)
        .filter((row) => {
        const titleKey = playhubHomeRowTitleKey(row);
        const dedupKeys = [row.key, titleKey].filter(Boolean);
        if (dedupKeys.some((key) => seenRows.has(key)))
            return false;
        dedupKeys.forEach((key) => seenRows.add(key));
        return true;
    });
    selectDiversePlayhubHomeRows(uniqueRows, limit)
        .forEach((row) => {
        try {
            const baseEvent = makePlayhubNativePartnerEvent(row.appId, row.steamAppId, row.item, row.index);
            if (baseEvent) {
                events.push(clonePlayhubNativeEventForHome(baseEvent, homeSafeImageForActivity(row.appId, row.steamAppId, row.metadata, row.item)));
            }
        }
        catch (error) {
            console.warn("[Playhub Metadata] unable to build native Home activity", error);
        }
    });
    playhubHomeNativeEventsCache = { builtAt: now, enabled, limit, shuffleSeed, events };
    return events;
};
const playhubHomeEventDedupKey = (event) => {
    const gid = numericSteamNewsGid(event?.GID || event?.gid || event?.AnnouncementGID || event?.announcement_gid || event?.event_gid || "");
    if (gid && gid !== "0")
        return `gid:${gid}`;
    const url = String(event?.url || event?.GetStoreOrCommunityURL?.() || event?.GetStoreNewsURL?.() || "").replace(/[?#].*$/, "").toLowerCase();
    if (url)
        return `url:${url}`;
    const title = normaliseActivityNewsKeyText(event?.GetNameWithFallback?.() || event?.event_name || event?.title || "");
    const day = Math.floor((Number(event?.GetPostTimeAndDateUnixSeconds?.() || event?.postTime || event?.date || 0) || 0) / 86400);
    return title ? `title:${title}|${day}` : "";
};
const mergePlayhubHomeEventArrays = (originalEvents, playhubEvents = playhubHomeNativePartnerEvents()) => {
    if (!readPlayhubHomeActivityEnabled() || !playhubEvents.length) {
        return Array.isArray(originalEvents) ? originalEvents.filter((event) => !event?.__playhubNativeHomeWhatsNew) : [];
    }
    const seen = new Set();
    const merged = [];
    const add = (event) => {
        if (!event)
            return;
        const key = playhubHomeEventDedupKey(event);
        if (!key || key.endsWith(":") || seen.has(key))
            return;
        seen.add(key);
        merged.push(event);
    };
    playhubEvents.forEach(add);
    (Array.isArray(originalEvents) ? originalEvents : [])
        .filter((event) => !event?.__playhubNativeHomeWhatsNew)
        .forEach(add);
    return merged;
};
const mergePlayhubHomeNativeEvents = (result) => {
    if (!result || !readPlayhubHomeActivityEnabled())
        return result;
    const playhubEvents = playhubHomeNativePartnerEvents();
    if (!playhubEvents.length)
        return result;
    const originalEvents = Array.isArray(result.eventsToShow) ? result.eventsToShow : [];
    if (originalEvents.some((event) => event?.__playhubNativeHomeWhatsNew))
        return result;
    return {
        ...result,
        __playhubNativeHomeWhatsNewMerged: true,
        bEventsLoaded: true,
        bInitialLoadPending: false,
        eventsToShow: mergePlayhubHomeEventArrays(originalEvents, playhubEvents),
    };
};
const replaceSteamObservableArray = (target, values) => {
    if (!target)
        return false;
    try {
        if (typeof target.replace === "function") {
            target.replace(values);
            return true;
        }
        if (Array.isArray(target) || typeof target.splice === "function") {
            target.splice(0, target.length, ...values);
            return true;
        }
    }
    catch (error) {
        console.warn("[Playhub Metadata] unable to replace native Home event array", error);
    }
    return false;
};
const syncPlayhubHomeEventsIntoNativeStore = (store) => {
    const libraryStore = store || globalThis.libraryEventStore || globalThis.window?.libraryEventStore;
    if (!libraryStore?.m_vecHomeBestEventsForUser)
        return false;
    const current = Array.from(libraryStore.m_vecHomeBestEventsForUser || []);
    const cleanCurrent = current.filter((event) => !event?.__playhubNativeHomeWhatsNew);
    const next = readPlayhubHomeActivityEnabled()
        ? mergePlayhubHomeEventArrays(cleanCurrent, playhubHomeNativePartnerEvents())
        : cleanCurrent;
    const changed = next.length !== current.length || next.some((event, index) => event !== current[index]);
    if (!changed)
        return true;
    const replaced = replaceSteamObservableArray(libraryStore.m_vecHomeBestEventsForUser, next);
    if (replaced) {
        try {
            libraryStore.m_bEventsLoaded = true;
            libraryStore.m_bInitialLoadPending = false;
        }
        catch (_error) {
            // Best effort only; the observable array mutation is the important part.
        }
    }
    return replaced;
};
const findSteamWhatsNewHookModule = () => {
    try {
        return (0, ui_1.findModuleChild)((module) => {
            if (!module || typeof module !== "object")
                return undefined;
            if (typeof module.yX === "function" && module.dm && module.IB)
                return module;
            for (const prop in module) {
                const candidate = module[prop];
                if (candidate && typeof candidate === "object" && typeof candidate.yX === "function" && candidate.dm && candidate.IB) {
                    return candidate;
                }
            }
            return undefined;
        });
    }
    catch (_error) {
        return null;
    }
};
const findPlayhubHomeNewsRail = () => {
    const newsTab = findVisibleTextElement("Novità") || findVisibleTextElement("What's New") || findVisibleTextElement("News") || findVisibleTextElement("Novità");
    const tabBottom = newsTab?.getBoundingClientRect?.().bottom || 70;
    const candidates = deepQuerySelectorAll("div").map((element) => {
        if (!(element instanceof HTMLElement) || !visibleElement(element))
            return null;
        if (element.closest("[data-playhub-home-activity='1']"))
            return null;
        const rect = element.getBoundingClientRect();
        if (rect.width < 800 || rect.height < 220 || rect.height > 520)
            return null;
        if (rect.top < tabBottom - 40 || rect.top > tabBottom + 520)
            return null;
        const children = Array.from(element.children).filter((child) => {
            if (!(child instanceof HTMLElement) || !visibleElement(child))
                return false;
            if (child.hasAttribute("data-playhub-home-activity"))
                return false;
            const childRect = child.getBoundingClientRect();
            return childRect.width >= 220 && childRect.width <= 620 && childRect.height >= 220 && childRect.height <= 470;
        });
        if (children.length < 2)
            return null;
        const overflowX = window.getComputedStyle(element).overflowX;
        const scrollBonus = element.scrollWidth > rect.width + 80 || /auto|scroll/i.test(overflowX) ? 80 : 0;
        const topScore = Math.max(0, 260 - Math.abs(rect.top - (tabBottom + 55)));
        const childScore = Math.min(children.length, 8) * 20;
        const depthPenalty = elementDepth(element) * 2;
        return { element, score: scrollBonus + topScore + childScore - depthPenalty };
    }).filter(Boolean);
    candidates.sort((a, b) => b.score - a.score);
    return candidates[0]?.element || null;
};
const clearPlayhubHomeActivityCards = () => {
    deepQuerySelectorAll("[data-playhub-home-activity='1']").forEach((element) => element.remove());
};
const createPlayhubHomeActivityCard = (row) => {
    const { appId, metadata, item } = row;
    const card = document.createElement("div");
    card.className = "playhub-home-activity-card";
    card.tabIndex = 0;
    card.setAttribute("role", "button");
    card.setAttribute("data-focusable", "true");
    card.setAttribute("data-playhub-home-activity", "1");
    card.setAttribute("data-playhub-appid", String(appId));
    const url = String(item.url || item.external_url || item.link || "");
    const activate = () => openExternalActivityUrl(url, metadata?.steam_appid || null, item.gid || item.id || item.news_id);
    card.onclick = activate;
    card.onkeydown = (event) => {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            activate();
        }
    };
    const imageWrap = document.createElement("div");
    imageWrap.className = "playhub-home-activity-card-image";
    const image = document.createElement("img");
    image.referrerPolicy = "no-referrer";
    image.loading = "lazy";
    image.alt = "";
    image.onerror = () => {
        if (row.fallback && image.src !== row.fallback) {
            image.src = row.fallback;
            return;
        }
        image.style.display = "none";
    };
    if (row.image || row.fallback)
        image.src = row.image || row.fallback;
    imageWrap.appendChild(image);
    const body = document.createElement("div");
    body.className = "playhub-home-activity-card-body";
    const kind = document.createElement("div");
    kind.className = "playhub-home-activity-card-kind";
    kind.textContent = activityNewsKindLabel(item);
    const date = document.createElement("div");
    date.className = "playhub-home-activity-card-date";
    date.textContent = row.date ? `${String(navigator.language || "").toLowerCase().startsWith("it") ? "Pubblicato" : "Published"} ${steamNewsDateLabel(row.date)}` : "";
    const title = document.createElement("div");
    title.className = "playhub-home-activity-card-title";
    title.textContent = cleanSteamNewsDisplayText(item.title || item.event_name || "");
    const summaryText = isPlayhubPatchNoteActivity(item) ? "" : cleanSteamNewsDisplayText(item.summary || item.description || "");
    body.append(kind, date, title);
    if (summaryText) {
        const summary = document.createElement("div");
        summary.className = "playhub-home-activity-card-summary";
        summary.textContent = summaryText;
        body.appendChild(summary);
    }
    const footer = document.createElement("div");
    footer.className = "playhub-home-activity-card-footer";
    if (row.icon) {
        const icon = document.createElement("img");
        icon.className = "playhub-home-activity-card-icon";
        icon.referrerPolicy = "no-referrer";
        icon.src = row.icon;
        icon.onerror = () => icon.remove();
        footer.appendChild(icon);
    }
    const footerText = document.createElement("span");
    footerText.textContent = metadata?.title || (0, exports.appName)(appId);
    footer.appendChild(footerText);
    body.appendChild(footer);
    card.append(imageWrap, body);
    return card;
};
const renderPlayhubHomeActivities = async () => {
    if (!readPlayhubHomeActivityEnabled() || !isLibraryHomeRoute()) {
        clearPlayhubHomeActivityCards();
        return;
    }
    await (0, exports.ensureMetadataCache)();
    const rail = findPlayhubHomeNewsRail();
    if (!rail)
        return;
    const items = playhubHomeActivityItems();
    clearPlayhubHomeActivityCards();
    if (!items.length)
        return;
    ensurePlayhubHomeActivityStyle();
    const fragment = document.createDocumentFragment();
    items.slice().reverse().forEach((row) => {
        fragment.insertBefore(createPlayhubHomeActivityCard(row), fragment.firstChild);
    });
    rail.insertBefore(fragment, rail.firstElementChild);
};
const installPlayhubHomeActivityPatch = (unpatchers) => {
    // Native-only Home integration. Keep this deliberately light: no DOM cards,
    // no method-patching loops, and no refresh-on-click. We only merge a small,
    // cached set of Playhub events into Steam's native event payload/store.
    clearPlayhubHomeActivityCards();
    let attempts = 0;
    let patchedModule = null;
    let originalHook = null;
    let refreshTimer;
    const startupSyncTimers = [];
    let startupSyncScheduled = false;
    let disposed = false;
    let unpatchHomeHook;
    let refreshRunning = false;
    let refreshQueued = false;
    const nativeStore = () => patchedModule?.dm || globalThis.libraryEventStore || globalThis.window?.libraryEventStore;
    const refreshNativeHomeStore = async () => {
        const store = nativeStore();
        if (disposed || !store)
            return;
        if (refreshRunning) {
            refreshQueued = true;
            return;
        }
        refreshRunning = true;
        try {
            await (0, exports.ensureMetadataCache)();
            if (!disposed)
                syncPlayhubHomeEventsIntoNativeStore(store);
        }
        catch (error) {
            console.warn("[Playhub Metadata] unable to sync native Home activities", error);
        }
        finally {
            refreshRunning = false;
            if (refreshQueued) {
                refreshQueued = false;
                scheduleRefreshNativeHomeStore(PLAYHUB_HOME_ACTIVITY_SYNC_DEBOUNCE_MS);
            }
        }
    };
    function scheduleRefreshNativeHomeStore(delay = PLAYHUB_HOME_ACTIVITY_SYNC_DEBOUNCE_MS) {
        if (disposed)
            return;
        if (refreshTimer)
            window.clearTimeout(refreshTimer);
        refreshTimer = window.setTimeout(refreshNativeHomeStore, delay);
    }
    const scheduleStartupHomeSyncs = () => {
        if (startupSyncScheduled)
            return;
        startupSyncScheduled = true;
        [900, 2800, 7000, 16000].forEach((delay) => {
            const timer = window.setTimeout(() => {
                if (readPlayhubHomeActivityEnabled()) {
                    invalidatePlayhubHomeNativeEventsCache();
                    void refreshNativeHomeStore();
                }
            }, delay);
            startupSyncTimers.push(timer);
        });
    };
    const patchOne = (homeModule) => {
        const store = homeModule?.dm || globalThis.libraryEventStore || globalThis.window?.libraryEventStore;
        if (disposed || !store)
            return false;
        if (homeModule && typeof homeModule.yX === "function" && !homeModule.__playhubNativeHomeWhatsNewPatched) {
            originalHook = homeModule.yX;
            unpatchHomeHook = (0, compat_1.patchMethod)(homeModule, "yX", (_instance, original, args) => disposed ? original(...args) : mergePlayhubHomeNativeEvents(original(...args)));
            // Read-only webpack getters cannot always be replaced. The observable
            // store path still works; only mark the hook if replacement succeeded.
            if (homeModule.yX !== originalHook)
                homeModule.__playhubNativeHomeWhatsNewPatched = true;
        }
        patchedModule = homeModule || { dm: store };
        scheduleRefreshNativeHomeStore(900);
        scheduleStartupHomeSyncs();
        return true;
    };
    const tryInstall = () => patchOne(findSteamWhatsNewHookModule() || { dm: globalThis.libraryEventStore || globalThis.window?.libraryEventStore });
    if (!tryInstall()) {
        const timer = window.setInterval(() => {
            attempts += 1;
            if (tryInstall() || attempts >= 24)
                window.clearInterval(timer);
        }, 1000);
        unpatchers.push(() => window.clearInterval(timer));
    }
    const onNativeHomeRefreshSignal = () => {
        invalidatePlayhubHomeNativeEventsCache();
        scheduleRefreshNativeHomeStore();
    };
    window.addEventListener("playhub-metadata:updated", onNativeHomeRefreshSignal);
    window.addEventListener("playhub-metadata:activity-refreshed", onNativeHomeRefreshSignal);
    window.addEventListener("playhub-metadata:home-activity-setting-changed", onNativeHomeRefreshSignal);
    unpatchers.push(() => {
        disposed = true;
        if (refreshTimer)
            window.clearTimeout(refreshTimer);
        startupSyncTimers.forEach((timer) => window.clearTimeout(timer));
        startupSyncTimers.length = 0;
        window.removeEventListener("playhub-metadata:updated", onNativeHomeRefreshSignal);
        window.removeEventListener("playhub-metadata:activity-refreshed", onNativeHomeRefreshSignal);
        window.removeEventListener("playhub-metadata:home-activity-setting-changed", onNativeHomeRefreshSignal);
        if (playhubHomeImageDimensionRefreshTimer)
            window.clearTimeout(playhubHomeImageDimensionRefreshTimer);
        playhubHomeImageDimensionRefreshTimer = undefined;
        const store = nativeStore();
        if (store?.m_vecHomeBestEventsForUser) {
            const clean = Array.from(store.m_vecHomeBestEventsForUser || []).filter((event) => !event?.__playhubNativeHomeWhatsNew);
            replaceSteamObservableArray(store.m_vecHomeBestEventsForUser, clean);
        }
        unpatchHomeHook?.();
        if (patchedModule && originalHook)
            delete patchedModule.__playhubNativeHomeWhatsNewPatched;
        invalidatePlayhubHomeNativeEventsCache();
        clearPlayhubHomeActivityCards();
    });
};
const ensurePlayhubActivityStyle = () => {
    if (document.getElementById("playhub-activity-news-style"))
        return;
    const style = document.createElement("style");
    style.id = "playhub-activity-news-style";
    style.textContent = `
    .playhub-activity-news-root {
      z-index: 4;
      overflow: visible;
      padding: 0 0 80px;
      box-sizing: border-box;
      pointer-events: auto;
      isolation: isolate;
      color: rgba(255,255,255,0.92);
    }
    .playhub-activity-news-root.is-fixed {
      position: fixed;
      top: var(--playhub-activity-news-top, 150px);
      left: 48px;
      right: 48px;
      bottom: 24px;
      z-index: 2147483647;
      overflow-y: auto;
    }
    .playhub-activity-news-root.is-native {
      position: relative;
      width: 100%;
      max-width: none;
      min-height: 220px;
      margin: 18px 0 80px;
      flex: 0 0 auto;
      align-self: stretch;
    }
    .playhub-activity-news-root.is-fixed {
      background: linear-gradient(180deg, rgba(20,24,29,0.78), rgba(20,24,29,0.18));
      border-radius: 12px;
      padding: 0 0 80px;
    }
    .playhub-activity-news-day {
      display: grid;
      grid-template-columns: auto 1fr;
      align-items: center;
      gap: 16px;
      margin: 20px 0 12px;
      color: rgba(255,255,255,0.68);
      font-size: 17px;
      letter-spacing: 0.03em;
    }
    .playhub-activity-news-day::after {
      content: "";
      height: 1px;
      background: rgba(255,255,255,0.10);
    }
    .playhub-activity-news-card {
      display: grid;
      grid-template-columns: 320px 1fr;
      gap: 24px;
      min-height: 172px;
      padding: 18px;
      margin: 0 0 24px;
      border-radius: 10px;
      background: rgba(48,55,63,0.58);
      box-sizing: border-box;
      cursor: pointer;
    }
    .playhub-activity-news-card:hover,
    .playhub-activity-news-card-focused {
      background: rgba(64,72,82,0.82) !important;
      box-shadow: 0 0 0 3px rgba(255,255,255,0.42), 0 16px 44px rgba(0,0,0,0.34);
      outline: none;
    }
    .playhub-activity-news-card.is-patch-note {
      grid-template-columns: 74px 1fr;
      gap: 20px;
      min-height: 132px;
      padding: 20px 22px;
      margin: 0 0 22px;
      background: rgba(42,49,57,0.80);
    }
    .playhub-activity-news-update-icon {
      width: 64px;
      height: 64px;
      align-self: center;
      color: rgba(255,255,255,0.52);
      display: flex;
      align-items: center;
      justify-content: center;
      filter: drop-shadow(0 4px 14px rgba(0,0,0,0.22));
    }
    .playhub-activity-news-update-icon svg {
      width: 100%;
      height: 100%;
      display: block;
    }
    .playhub-activity-news-card.is-patch-note .playhub-activity-news-content {
      gap: 8px;
    }
    .playhub-activity-news-card.is-patch-note .playhub-activity-news-kind {
      font-size: 16px;
    }
    .playhub-activity-news-card.is-patch-note .playhub-activity-news-title {
      font-size: 24px;
      -webkit-line-clamp: 1;
    }
    .playhub-activity-news-card.is-patch-note .playhub-activity-news-summary {
      max-width: none;
      font-size: 17px;
      -webkit-line-clamp: 1;
    }
    .playhub-activity-news-image {
      width: 100%;
      height: 136px;
      border-radius: 6px;
      overflow: hidden;
      background: rgba(0,0,0,0.25);
      object-fit: cover;
      object-position: center;
      align-self: center;
    }
    .playhub-activity-news-image-fallback {
      width: 100%;
      height: 136px;
      border-radius: 6px;
      display: none;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding: 14px;
      box-sizing: border-box;
      color: rgba(255,255,255,0.55);
      background: linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02));
      font-size: 15px;
      line-height: 1.25;
    }
    .playhub-activity-news-content {
      min-width: 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 10px;
    }
    .playhub-activity-news-kind {
      color: rgba(255,255,255,0.62);
      font-size: 16px;
    }
    .playhub-activity-news-title {
      color: rgba(255,255,255,0.92);
      font-size: 24px;
      line-height: 1.18;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    .playhub-activity-news-summary {
      max-width: 940px;
      color: rgba(255,255,255,0.58);
      font-size: 16px;
      line-height: 1.35;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    .playhub-activity-news-debug {
      max-width: 980px;
      margin: 0 0 24px;
      padding: 18px 20px;
      border-radius: 10px;
      background: rgba(18,22,28,0.98);
      border: 2px solid rgba(90, 170, 255, 0.85);
      box-shadow: 0 12px 42px rgba(0,0,0,0.45);
      color: rgba(255,255,255,0.88);
      font-size: 15px;
      line-height: 1.45;
      box-sizing: border-box;
    }
    .playhub-activity-news-debug strong {
      display: block;
      color: rgba(255,255,255,0.94);
      font-size: 18px;
      margin-bottom: 8px;
    }
    .playhub-activity-news-debug code {
      color: rgba(255,255,255,0.92);
      background: rgba(0,0,0,0.22);
      padding: 1px 5px;
      border-radius: 4px;
    }
    .playhub-activity-news-root.is-fixed {
      top: var(--playhub-activity-news-top, 360px);
      left: var(--playhub-activity-news-left, 48px);
      right: var(--playhub-activity-news-right, 48px);
      bottom: 74px;
      z-index: 9000;
      background: transparent;
      border-radius: 0;
      padding: 0 0 90px;
      box-shadow: none;
    }
    .playhub-activity-news-root.is-native {
      background: transparent;
      padding: 0 0 90px;
      margin: 14px 0 90px;
      z-index: auto;
    }
    .playhub-activity-news-root.is-native .playhub-activity-news-card,
    .playhub-activity-news-root.is-fixed .playhub-activity-news-card {
      background: rgba(48,55,63,0.86);
    }
  `;
    document.head.appendChild(style);
};
const activityNewsOverlayTop = () => {
    const empty = findActivityEmptyDropZone() || findActivityEmptyStateContainer();
    const emptyRect = empty?.getBoundingClientRect();
    if (emptyRect?.top)
        return Math.max(110, Math.round(emptyRect.top));
    const tabRow = findDetailsTabRow();
    const rect = tabRow?.getBoundingClientRect();
    return Math.max(110, Math.round((rect?.bottom || 132) + 96));
};
const activityNewsOverlayEdges = () => {
    const empty = findActivityEmptyDropZone() || findActivityEmptyStateContainer();
    const rect = empty?.getBoundingClientRect();
    if (rect?.width && rect.width > 320) {
        return {
            left: Math.max(46, Math.round(rect.left)),
            right: Math.max(46, Math.round(window.innerWidth - rect.right)),
        };
    }
    return { left: 48, right: 48 };
};
const activityNewsAnchorIsInViewport = () => {
    const anchor = findActivityEmptyDropZone() || findActivityEmptyStateContainer() || findSteamNativeActivityMountInfo()?.anchor || null;
    if (!anchor)
        return true;
    const rect = anchor.getBoundingClientRect();
    const tabBottom = findDetailsTabRow()?.getBoundingClientRect()?.bottom || 110;
    // When the native Activity empty panel has scrolled above the tab area, the
    // Playhub fixed overlay must disappear too. Otherwise it floats over other
    // Steam content and looks detached from the Activity feed.
    return rect.bottom > tabBottom + 8 && rect.top < window.innerHeight - 90;
};
const appendActivityDiagnostic = (root, appId, diagnostic) => {
    const box = document.createElement("div");
    box.className = "playhub-activity-news-debug";
    const title = document.createElement("strong");
    title.textContent = "Playhub Metadata · Activity diagnostic";
    box.appendChild(title);
    const intro = document.createElement("div");
    intro.textContent = diagnostic.status;
    box.appendChild(intro);
    const fields = [
        ["Steam shortcut AppID", String(appId || "not detected")],
        ["Detected tab", diagnostic.tab || "not detected"],
        ["Empty Activity panel", findSteamNativeActivityMountInfo() ? "native Steam NoActivity class detected" : (findActivityEmptyDropZone() ? "wide dashed panel detected" : (findActivityEmptyStateElement() ? "localized text detected" : "not detected"))],
        ["Resolved Steam AppID", diagnostic.steamAppId ? String(diagnostic.steamAppId) : "not resolved"],
        ["Steam News found", String(diagnostic.newsCount ?? 0)],
    ];
    if (diagnostic.metadataTitle)
        fields.push(["Metadata title", diagnostic.metadataTitle]);
    fields.forEach(([label, value]) => {
        const line = document.createElement("div");
        line.append(`${label}: `);
        const code = document.createElement("code");
        code.textContent = value;
        line.appendChild(code);
        box.appendChild(line);
    });
    root.appendChild(box);
};
const activityNewsKindLabel = (item) => {
    const type = normalizePlayhubSteamActivityType(item?.event_type || item?.type);
    if (type)
        return playhubSteamActivityTypeLabel(type);
    return String(navigator.language || "").toLowerCase().startsWith("it") ? "Notizie" : "News";
};
const patchNoteActivityIconSvg = () => `
  <svg viewBox="0 0 64 64" aria-hidden="true" focusable="false">
    <path fill="currentColor" d="M38.8 7.9c4.5-1.6 9.8-.5 13.4 3.1 3.2 3.2 4.5 7.6 3.6 11.8l-8.1-8.1-8.3 8.3 8.2 8.2c-4.2.9-8.7-.4-11.9-3.6-3.7-3.7-4.8-9-3.1-13.5L10.4 36.3c-3.1 3.1-3.1 8.2 0 11.3l5.9 5.9c3.1 3.1 8.2 3.1 11.3 0l22.1-22.1-5.2-5.2-21.9 21.9c-.9.9-2.3.9-3.2 0l-3.6-3.6c-.9-.9-.9-2.3 0-3.2L38.8 7.9Z"/>
    <path fill="currentColor" d="M13.3 10.2 7.6 15.9l12.2 12.2 5.7-5.7-3.1-3.1 4.7-4.7-3.9-3.9-4.7 4.7-5.2-5.2Z" opacity=".82"/>
    <path fill="currentColor" d="M43.2 37.1 37.5 42.8 50.4 55.7c1.6 1.6 4.2 1.6 5.8 0 1.6-1.6 1.6-4.2 0-5.8L43.2 37.1Z" opacity=".82"/>
  </svg>
`;
const patchNoteActivityIconReact = () => react_1.default.createElement("svg", { viewBox: "0 0 64 64", "aria-hidden": "true", focusable: "false", style: { width: "100%", height: "100%" } }, react_1.default.createElement("path", { fill: "currentColor", d: "M38.8 7.9c4.5-1.6 9.8-.5 13.4 3.1 3.2 3.2 4.5 7.6 3.6 11.8l-8.1-8.1-8.3 8.3 8.2 8.2c-4.2.9-8.7-.4-11.9-3.6-3.7-3.7-4.8-9-3.1-13.5L10.4 36.3c-3.1 3.1-3.1 8.2 0 11.3l5.9 5.9c3.1 3.1 8.2 3.1 11.3 0l22.1-22.1-5.2-5.2-21.9 21.9c-.9.9-2.3.9-3.2 0l-3.6-3.6c-.9-.9-.9-2.3 0-3.2L38.8 7.9Z" }), react_1.default.createElement("path", { fill: "currentColor", opacity: ".82", d: "M13.3 10.2 7.6 15.9l12.2 12.2 5.7-5.7-3.1-3.1 4.7-4.7-3.9-3.9-4.7 4.7-5.2-5.2Z" }), react_1.default.createElement("path", { fill: "currentColor", opacity: ".82", d: "M43.2 37.1 37.5 42.8 50.4 55.7c1.6 1.6 4.2 1.6 5.8 0 1.6-1.6 1.6-4.2 0-5.8L43.2 37.1Z" }));
const normalizeSteamNewsImageUrl = (value, _steamAppId) => {
    let url = String(value || "").trim().replace(/\\\//g, "/");
    try {
        url = decodeURIComponent(url);
    }
    catch (_error) {
        // Keep original URL if it is not URI-encoded.
    }
    const clan = url.match(/\{STEAM_CLAN(?:_[A-Z]+)*_?IMAGE\}\/(\d+)\/([^\s<>\)\]\[]+)/i);
    if (clan)
        return `https://clan.cloudflare.steamstatic.com/images/${clan[1]}/${clan[2]}`;
    if (url.startsWith("//"))
        return `https:${url}`;
    if (/^http:\/\//i.test(url))
        return url.replace(/^http:\/\//i, "https://");
    if (/^https:\/\//i.test(url))
        return url;
    return "";
};
const renderPlayhubActivityNewsDom = (appId, metadata, diagnostic) => {
    const reactOverlay = document.getElementById("playhub-activity-news-overlay");
    if (reactOverlay) {
        document.getElementById("playhub-activity-news-root")?.remove();
        return;
    }
    const items = metadata ? steamActivityNewsItemsFromMetadata(appId, metadata) : [];
    const existing = document.getElementById("playhub-activity-news-root");
    if (!items.length && !diagnostic) {
        existing?.remove();
        return;
    }
    ensurePlayhubActivityStyle();
    const mount = findActivityNewsMountInfo();
    const root = existing || document.createElement("div");
    root.id = "playhub-activity-news-root";
    root.className = `playhub-activity-news-root ${mount.mode === "native" ? "is-native" : "is-fixed"}`;
    root.setAttribute("data-playhub-activity-news", "1");
    root.setAttribute("data-playhub-appid", String(appId));
    root.setAttribute("data-playhub-mount", mount.mode === "native" ? "activity-empty-panel-inline" : "fixed-body-fallback");
    const fixedEdges = activityNewsOverlayEdges();
    root.style.setProperty("--playhub-activity-news-top", `${activityNewsOverlayTop()}px`);
    root.style.setProperty("--playhub-activity-news-left", `${fixedEdges.left}px`);
    root.style.setProperty("--playhub-activity-news-right", `${fixedEdges.right}px`);
    root.innerHTML = "";
    if (!items.length && diagnostic) {
        appendActivityDiagnostic(root, appId, diagnostic);
    }
    let lastDate = "";
    items.forEach((item) => {
        const dateLabel = steamNewsDateLabel(Number(item.date || item.time_created || 0));
        if (dateLabel !== lastDate) {
            lastDate = dateLabel;
            const day = document.createElement("div");
            day.className = "playhub-activity-news-day";
            day.textContent = dateLabel;
            root.appendChild(day);
        }
        const isPatchNote = isPlayhubPatchNoteActivity(item);
        const card = document.createElement("div");
        card.className = `playhub-activity-news-card${isPatchNote ? " is-patch-note" : ""}`;
        card.tabIndex = 0;
        card.setAttribute("data-focusable", "true");
        card.setAttribute("role", "button");
        const activateCard = () => openExternalActivityUrl(String(item.url || item.external_url || item.link || ""), metadata?.steam_appid || null, item.gid || item.id || item.news_id);
        card.onclick = activateCard;
        card.onfocus = () => card.scrollIntoView({ block: "nearest", behavior: "smooth" });
        card.onkeydown = (event) => {
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                activateCard();
            }
        };
        const content = document.createElement("div");
        content.className = "playhub-activity-news-content";
        const kind = document.createElement("div");
        kind.className = "playhub-activity-news-kind";
        kind.textContent = activityNewsKindLabel(item);
        const title = document.createElement("div");
        title.className = "playhub-activity-news-title";
        title.textContent = cleanSteamNewsDisplayText(item.title || item.event_name || "");
        content.append(kind, title);
        const summaryText = isPatchNote ? "" : cleanSteamNewsDisplayText(item.summary || item.description || "");
        if (summaryText) {
            const summary = document.createElement("div");
            summary.className = "playhub-activity-news-summary";
            summary.textContent = summaryText;
            content.appendChild(summary);
        }
        if (isPatchNote) {
            const icon = document.createElement("div");
            icon.className = "playhub-activity-news-update-icon";
            icon.innerHTML = patchNoteActivityIconSvg();
            card.append(icon, content);
        }
        else {
            const imageWrap = document.createElement("div");
            imageWrap.style.width = "100%";
            imageWrap.style.height = "136px";
            imageWrap.style.overflow = "hidden";
            imageWrap.style.borderRadius = "6px";
            imageWrap.style.alignSelf = "center";
            const imageSourceList = uniqueExpandedSteamNewsImageUrls([
                item.event_image_url,
                item.image_url,
                item.image,
                item.preview_image_url,
                ...(Array.isArray(item.image_sources) ? item.image_sources : []),
            ]);
            const fallbackHeader = normalizeSteamNewsImageUrl(item.fallback_image_url || item.header_image_url, metadata?.steam_appid || null);
            const displaySources = Array.from(new Set([...imageSourceList, fallbackHeader].filter(Boolean)));
            let imageSourceIndex = 0;
            const image = document.createElement("img");
            image.className = "playhub-activity-news-image";
            image.referrerPolicy = "no-referrer";
            image.loading = "lazy";
            const imageFallback = document.createElement("div");
            imageFallback.className = "playhub-activity-news-image-fallback";
            imageFallback.textContent = metadata?.title || "Steam News";
            image.onerror = () => {
                imageSourceIndex += 1;
                if (displaySources[imageSourceIndex]) {
                    image.src = displaySources[imageSourceIndex];
                    return;
                }
                image.style.display = "none";
                imageFallback.style.display = "flex";
            };
            if (displaySources[0]) {
                image.src = displaySources[0];
            }
            else {
                image.style.display = "none";
                imageFallback.style.display = "flex";
            }
            imageWrap.append(image, imageFallback);
            card.append(imageWrap, content);
        }
        root.appendChild(card);
    });
    mountActivityNewsRoot(root, mount);
};
const removePlayhubActivityNewsDom = () => {
    document.getElementById("playhub-activity-news-root")?.remove();
    restoreNativeActivityEmptyStates();
};
const refreshPlayhubActivityNewsDom = async () => {
    const appId = currentGameDetailAppId();
    const detectedTab = activeDetailsTabLabel();
    const activityVisible = isActivityTabActive() && activityNewsAnchorIsInViewport();
    const tab = activityVisible ? "Attività" : detectedTab;
    if (!activityVisible) {
        removePlayhubActivityNewsDom();
        return;
    }
    if (!appId) {
        removePlayhubActivityNewsDom();
        return;
    }
    const overview = (0, exports.getOverview)(appId);
    if (!(0, exports.isNonSteamApp)(overview)) {
        removePlayhubActivityNewsDom();
        return;
    }
    await (0, exports.ensureMetadataCache)();
    let metadata = exports.metadataCache[String(appId)] || null;
    if (!metadata) {
        removePlayhubActivityNewsDom();
        await (0, exports.tryFetchMetadataForApp)(appId);
        metadata = exports.metadataCache[String(appId)] || null;
    }
    if (!metadata) {
        removePlayhubActivityNewsDom();
        return;
    }
    const newsCount = metadata.steam_news?.length || 0;
    if (!newsCount) {
        removePlayhubActivityNewsDom();
        return;
    }
    renderPlayhubActivityNewsDom(appId, metadata);
};
const installActivityNewsDomPatch = (unpatchers) => {
    let cancelled = false;
    let timer;
    const schedule = (delay = 150) => {
        if (cancelled)
            return;
        if (timer)
            window.clearTimeout(timer);
        timer = window.setTimeout(() => {
            if (cancelled)
                return;
            void refreshPlayhubActivityNewsDom().catch((error) => {
                console.warn("[Playhub Metadata] activity news DOM patch failed", error);
            });
        }, delay);
    };
    const clickTracker = (event) => {
        const target = event.target;
        const label = detailsTabLabelFromElement(target);
        const pointerIndex = Number.isFinite(event.clientX) && Number.isFinite(event.clientY)
            ? detailsTabIndexFromPoint(event.clientX, event.clientY)
            : -1;
        const elementIndex = detailsTabIndexFromElement(target);
        const tabIndex = pointerIndex >= 0 ? pointerIndex : elementIndex;
        if (tabIndex >= 0)
            noteDetailsTabIndexSelection(tabIndex);
        if (label)
            noteDetailsTabSelection(label);
        if (label === "Attività" || tabIndex === 0) {
            const appId = currentGameDetailAppId();
            const quickMetadata = exports.metadataCache[String(appId || 0)] || null;
            if (quickMetadata?.steam_news?.length)
                renderPlayhubActivityNewsDom(appId || 0, quickMetadata);
        }
        schedule(label || tabIndex >= 0 ? 35 : 120);
    };
    const observer = new MutationObserver(() => schedule(250));
    observer.observe(document.body, { childList: true, subtree: true });
    document.addEventListener("click", clickTracker, true);
    document.addEventListener("pointerup", clickTracker, true);
    document.addEventListener("focusin", clickTracker, true);
    document.addEventListener("keyup", clickTracker, true);
    const popstateListener = () => schedule(50);
    const hashchangeListener = () => schedule(50);
    window.addEventListener("popstate", popstateListener);
    window.addEventListener("hashchange", hashchangeListener);
    window.addEventListener("playhub-metadata:updated", popstateListener);
    let lastFallbackRoute = currentRoutePath();
    const interval = window.setInterval(() => {
        const route = currentRoutePath();
        if (route !== lastFallbackRoute) {
            lastFallbackRoute = route;
            schedule(0);
        }
    }, 1500);
    schedule(350);
    unpatchers.push(() => {
        cancelled = true;
        if (timer)
            window.clearTimeout(timer);
        window.clearInterval(interval);
        observer.disconnect();
        document.removeEventListener("click", clickTracker, true);
        document.removeEventListener("pointerup", clickTracker, true);
        document.removeEventListener("focusin", clickTracker, true);
        document.removeEventListener("keyup", clickTracker, true);
        window.removeEventListener("popstate", popstateListener);
        window.removeEventListener("hashchange", hashchangeListener);
        window.removeEventListener("playhub-metadata:updated", popstateListener);
        removePlayhubActivityNewsDom();
    });
};
const PlayhubActivityNewsOverlay = ({ appId, force = false, source = "route" }) => {
    const ownerId = react_1.default.useMemo(() => `playhub-activity-${source}-${Date.now()}-${Math.random().toString(36).slice(2)}`, []);
    const priority = source === "empty" ? 20 : (force ? 10 : 5);
    const [owned, setOwned] = react_1.default.useState(false);
    const [active, setActive] = react_1.default.useState(false);
    const [metadata, setMetadata] = react_1.default.useState(() => exports.metadataCache[String(appId)] || null);
    const [top, setTop] = react_1.default.useState(132);
    const claimOverlayOwnership = react_1.default.useCallback(() => {
        const host = window;
        const now = Date.now();
        const current = host.__playhubActivityOverlayOwner;
        const stale = !current?.touched || now - Number(current.touched || 0) > 2500;
        if (!current?.id || current.id === ownerId || stale || Number(current.priority || 0) <= priority) {
            host.__playhubActivityOverlayOwner = { id: ownerId, priority, touched: now };
            setOwned(true);
            return true;
        }
        setOwned(false);
        return false;
    }, [ownerId, priority]);
    react_1.default.useEffect(() => {
        claimOverlayOwnership();
        const timer = window.setInterval(() => claimOverlayOwnership(), 900);
        return () => {
            window.clearInterval(timer);
            const host = window;
            if (host.__playhubActivityOverlayOwner?.id === ownerId) {
                host.__playhubActivityOverlayOwner = null;
            }
        };
    }, [claimOverlayOwnership, ownerId]);
    react_1.default.useEffect(() => {
        if (owned)
            removePlayhubActivityNewsDom();
    }, [owned]);
    react_1.default.useEffect(() => {
        let cancelled = false;
        const refresh = async () => {
            if (cancelled)
                return;
            const currentAppId = currentGameDetailAppId();
            const shortcutMatches = !currentAppId || currentAppId === Number(appId);
            const indexHintAge = selectedDetailsTabIndexHintAt ? Date.now() - selectedDetailsTabIndexHintAt : Number.MAX_SAFE_INTEGER;
            const recentlyClickedFirstTab = selectedDetailsTabIndexHint === 0 && indexHintAge < 1800;
            const activityVisible = !recentNonActivityTabSelection() && (isActivityTabActive() || recentlyClickedFirstTab);
            const inViewport = activityNewsAnchorIsInViewport();
            const isActive = (force ? activityVisible : (shortcutMatches && activityVisible)) && inViewport;
            const hasOwnership = claimOverlayOwnership();
            setActive(isActive && hasOwnership);
            if (!isActive)
                restoreNativeActivityEmptyStates();
            const desiredTop = activityNewsOverlayTop();
            const clampedTop = Math.max(220, Math.min(Math.round(desiredTop), Math.max(260, window.innerHeight - 260)));
            setTop(clampedTop);
            if (!isActive || !hasOwnership)
                return;
            await (0, exports.ensureMetadataCache)();
            let next = exports.metadataCache[String(appId)] || null;
            if (!cancelled)
                setMetadata(next);
        };
        const updateListener = () => void refresh().catch((error) => console.warn("[Playhub Metadata] activity overlay refresh failed", error));
        const clickListener = (event) => {
            const target = event.target;
            const label = detailsTabLabelFromElement(target);
            const pointerIndex = Number.isFinite(event.clientX) && Number.isFinite(event.clientY)
                ? detailsTabIndexFromPoint(event.clientX, event.clientY)
                : -1;
            const elementIndex = detailsTabIndexFromElement(target);
            const tabIndex = pointerIndex >= 0 ? pointerIndex : elementIndex;
            if (tabIndex >= 0)
                noteDetailsTabIndexSelection(tabIndex);
            if (label)
                noteDetailsTabSelection(label);
            void refresh().catch((error) => console.warn("[Playhub Metadata] activity overlay click refresh failed", error));
        };
        const timer = window.setInterval(updateListener, 1500);
        window.addEventListener("playhub-metadata:updated", updateListener);
        document.addEventListener("click", clickListener, true);
        window.addEventListener("scroll", updateListener, true);
        document.addEventListener("wheel", updateListener, true);
        void refresh().catch((error) => console.warn("[Playhub Metadata] activity overlay initial refresh failed", error));
        return () => {
            cancelled = true;
            window.clearInterval(timer);
            window.removeEventListener("playhub-metadata:updated", updateListener);
            document.removeEventListener("click", clickListener, true);
            window.removeEventListener("scroll", updateListener, true);
            document.removeEventListener("wheel", updateListener, true);
            restoreNativeActivityEmptyStates();
        };
    }, [appId]);
    if (!active || !owned)
        return null;
    const items = metadata ? steamActivityNewsItemsFromMetadata(appId, metadata) : [];
    if (!items.length) {
        restoreNativeActivityEmptyStates();
        return null;
    }
    hideNativeActivityEmptyState();
    let lastDate = "";
    const children = [];
    items.forEach((item) => {
        const dateLabel = steamNewsDateLabel(Number(item.date || item.time_created || 0));
        if (dateLabel !== lastDate) {
            lastDate = dateLabel;
            children.push(react_1.default.createElement("div", {
                key: `date-${dateLabel}`,
                style: {
                    display: "grid",
                    gridTemplateColumns: "auto 1fr",
                    alignItems: "center",
                    gap: 16,
                    margin: "18px 0 12px",
                    color: "rgba(255,255,255,0.68)",
                    fontSize: 17,
                    letterSpacing: "0.03em",
                },
            }, react_1.default.createElement("span", null, dateLabel), react_1.default.createElement("div", { style: { height: 1, background: "rgba(255,255,255,0.10)" } })));
        }
        const isPatchNote = isPlayhubPatchNoteActivity(item);
        const imageSourceList = uniqueExpandedSteamNewsImageUrls([
            item.event_image_url,
            item.image_url,
            item.image,
            item.preview_image_url,
            ...(Array.isArray(item.image_sources) ? item.image_sources : []),
        ]);
        const fallbackImageUrl = normalizeSteamNewsImageUrl(item.fallback_image_url || item.header_image_url, metadata?.steam_appid || null);
        const displayImageSources = Array.from(new Set([...imageSourceList, fallbackImageUrl].filter(Boolean)));
        const displayImageUrl = displayImageSources[0] || "";
        const url = String(item.url || item.external_url || item.link || "");
        const visual = isPatchNote
            ? react_1.default.createElement("div", {
                className: "playhub-activity-news-update-icon",
                style: {
                    width: 64,
                    height: 64,
                    alignSelf: "center",
                    color: "rgba(255,255,255,0.52)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                },
            }, patchNoteActivityIconReact())
            : (displayImageUrl
                ? react_1.default.createElement("img", {
                    src: displayImageUrl,
                    referrerPolicy: "no-referrer",
                    loading: "lazy",
                    onError: (event) => {
                        const img = event.currentTarget;
                        const currentIndex = Math.max(0, displayImageSources.indexOf(img.src));
                        const next = displayImageSources[currentIndex + 1];
                        if (next) {
                            img.src = next;
                            return;
                        }
                        img.style.display = "none";
                        const fallback = img.parentElement?.querySelector?.(".playhub-activity-react-image-fallback");
                        if (fallback)
                            fallback.style.display = "flex";
                    },
                    style: {
                        width: "100%",
                        height: 136,
                        borderRadius: 6,
                        objectFit: "cover",
                        objectPosition: "center",
                        alignSelf: "center",
                        background: "rgba(0,0,0,0.25)",
                    },
                })
                : react_1.default.createElement("div", {
                    className: "playhub-activity-react-image-fallback",
                    style: {
                        width: "100%",
                        height: 136,
                        borderRadius: 6,
                        alignSelf: "center",
                        background: "rgba(0,0,0,0.25)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "rgba(255,255,255,0.42)",
                        fontSize: 14,
                    },
                }, "News"));
        children.push(react_1.default.createElement(ui_1.Focusable, {
            key: String(item.id || item.gid || item.news_id),
            className: `playhub-activity-news-card${isPatchNote ? " is-patch-note" : ""}`,
            focusClassName: "playhub-activity-news-card-focused",
            "data-playhub-activity-news-card": "1",
            onActivate: () => openExternalActivityUrl(url, metadata?.steam_appid || null, item.gid || item.id || item.news_id),
            onClick: () => openExternalActivityUrl(url, metadata?.steam_appid || null, item.gid || item.id || item.news_id),
            onFocus: (event) => event.currentTarget?.scrollIntoView?.({ block: "nearest", behavior: "smooth" }),
            onKeyDown: (event) => {
                if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    openExternalActivityUrl(url, metadata?.steam_appid || null, item.gid || item.id || item.news_id);
                }
            },
            style: {
                display: "grid",
                gridTemplateColumns: isPatchNote ? "74px 1fr" : "320px 1fr",
                gap: isPatchNote ? 20 : 24,
                minHeight: isPatchNote ? 132 : 172,
                padding: isPatchNote ? "20px 22px" : 18,
                margin: isPatchNote ? "0 0 22px" : "0 0 24px",
                borderRadius: 10,
                background: isPatchNote ? "rgba(42,49,57,0.80)" : "rgba(48,55,63,0.86)",
                boxSizing: "border-box",
                cursor: url ? "pointer" : "default",
            },
        }, visual, react_1.default.createElement("div", { style: { minWidth: 0, display: "flex", flexDirection: "column", justifyContent: "center", gap: isPatchNote ? 8 : 10 } }, react_1.default.createElement("div", { style: { color: "rgba(255,255,255,0.62)", fontSize: 16 } }, activityNewsKindLabel(item)), react_1.default.createElement("div", {
            style: {
                color: "rgba(255,255,255,0.92)",
                fontSize: 24,
                lineHeight: 1.18,
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                WebkitLineClamp: isPatchNote ? 1 : 2,
                WebkitBoxOrient: "vertical",
            },
        }, cleanSteamNewsDisplayText(item.title || item.event_name || "")), ...(!isPatchNote && cleanSteamNewsDisplayText(item.summary || item.description || "")
            ? [react_1.default.createElement("div", {
                    style: {
                        maxWidth: 940,
                        color: "rgba(255,255,255,0.58)",
                        fontSize: 16,
                        lineHeight: 1.35,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                    },
                }, cleanSteamNewsDisplayText(item.summary || item.description || ""))]
            : []))));
    });
    const integrated = source === "empty";
    const overlayStyle = integrated
        ? {
            position: "relative",
            zIndex: 2,
            width: "100%",
            maxWidth: "none",
            margin: "18px 0 80px",
            padding: "0 0 24px",
            overflow: "visible",
            pointerEvents: "auto",
        }
        : {
            position: "fixed",
            top,
            left: 48,
            right: 48,
            bottom: 24,
            zIndex: 9000,
            overflowY: "auto",
            overscrollBehavior: "contain",
            scrollPaddingTop: 18,
            paddingTop: 2,
            paddingBottom: 80,
            pointerEvents: "auto",
        };
    return react_1.default.createElement("div", {
        id: "playhub-activity-news-overlay",
        "data-playhub-activity-news": "1",
        "data-playhub-source": source,
        "data-playhub-integrated": integrated ? "1" : "0",
        tabIndex: -1,
        style: overlayStyle,
    }, children);
};
const reactChildrenText = (value) => {
    if (value === null || value === undefined || value === false)
        return "";
    if (typeof value === "string" || typeof value === "number")
        return String(value);
    if (Array.isArray(value))
        return value.map(reactChildrenText).join(" ");
    if (typeof value === "object")
        return reactChildrenText(value.props?.children);
    return "";
};
const installActivityEmptyStateReactPatch = (unpatchers) => {
    const reactAny = react_1.default;
    const originalCreateElement = reactAny.createElement;
    if (typeof originalCreateElement !== "function" || originalCreateElement.__playhubActivityPatched)
        return;
    let guard = false;
    const patched = function patchedPlayhubActivityCreateElement(type, props, ...children) {
        const element = originalCreateElement.apply(this, [type, props, ...children]);
        if (guard)
            return element;
        try {
            const appId = currentGameDetailAppId() || lastObservedGameDetailAppId;
            if (!appId || !(0, exports.isNonSteamApp)((0, exports.getOverview)(appId)))
                return element;
            const text = reactChildrenText(children.length ? children : props?.children);
            // This is not the primary localization path; it is an extra trap for the
            // native Activity empty-state React node when Steam exposes only React
            // children and not a stable route/DOM state.
            if (!textLooksLikeActivityEmptyState(text))
                return element;
            if (recentNonActivityTabSelection())
                return element;
            guard = true;
            noteDetailsTabSelection("Attività");
            noteDetailsTabIndexSelection(0);
            return originalCreateElement(react_1.default.Fragment, null, element, originalCreateElement(PlayhubActivityNewsOverlay, { appId, force: true, source: "empty" }));
        }
        catch (_error) {
            return element;
        }
        finally {
            guard = false;
        }
    };
    patched.__playhubActivityPatched = true;
    patched.__playhubActivityOriginal = originalCreateElement;
    reactAny.createElement = patched;
    unpatchers.push(() => {
        if (reactAny.createElement === patched)
            reactAny.createElement = originalCreateElement;
    });
};
const communityPayloadForApp = async (appId) => {
    const overview = (0, exports.getOverview)(appId);
    if (!appId || !(0, exports.isNonSteamApp)(overview))
        return null;
    await (0, exports.ensureMetadataCache)();
    let metadata = exports.metadataCache[String(appId)];
    if (!metadata)
        return null;
    if (!metadata.screenshots?.length) {
        await (0, exports.tryEnrichScreenshotsForApp)(appId);
        metadata = exports.metadataCache[String(appId)];
    }
    if (!metadata?.community_enriched_at || (!metadata?.steam_news_enriched_at && !(metadata?.steam_news || []).length)) {
        await (0, exports.tryEnrichCommunityMediaForApp)(appId);
        metadata = exports.metadataCache[String(appId)];
    }
    const hub = metadata ? steamCommunityItemsFromMetadata(appId, metadata) : [];
    return hub.length ? { hub } : null;
};
const achievementSortTimestamp = (item) => Number(item?.rtUnlocked || 0);
const achievementDisplayName = (item) => String(item?.strName || item?.name || "");
const sortAchievementsForMyAchievements = (items) => items.slice().sort((a, b) => {
    const achievedDiff = Number(Boolean(b?.bAchieved)) - Number(Boolean(a?.bAchieved));
    if (achievedDiff)
        return achievedDiff;
    const dateDiff = achievementSortTimestamp(b) - achievementSortTimestamp(a);
    if (dateDiff)
        return dateDiff;
    return achievementDisplayName(a).localeCompare(achievementDisplayName(b));
});
const orderedAchievementRecord = (record) => {
    const out = {};
    sortAchievementsForMyAchievements(Object.values(record || {})).forEach((item) => {
        const key = String(item?.strID || item?.strName || "");
        if (key)
            out[key] = item;
    });
    return out;
};
const sortedAchievementPayloadForNative = (payload) => {
    const userData = payload.user?.data;
    const sortedAchieved = orderedAchievementRecord(userData?.achieved);
    const sortedHidden = orderedAchievementRecord(userData?.hidden);
    const sortedUnachieved = orderedAchievementRecord(userData?.unachieved);
    const achievedList = Object.values(sortedAchieved);
    const hiddenList = Object.values(sortedHidden);
    const unachievedList = Object.values(sortedUnachieved);
    return {
        ...payload,
        user: payload.user
            ? {
                ...payload.user,
                data: {
                    achieved: sortedAchieved,
                    hidden: sortedHidden,
                    unachieved: sortedUnachieved,
                },
            }
            : payload.user,
        steam: payload.steam
            ? {
                ...payload.steam,
                vecHighlight: sortAchievementsForMyAchievements([
                    ...(payload.steam.vecHighlight || []),
                    ...achievedList,
                ]).filter((item, index, list) => list.findIndex((candidate) => candidate.strID === item.strID) === index).slice(0, Math.max(3, Math.min(12, achievedList.length || 3))),
                vecAchievedHidden: sortAchievementsForMyAchievements(hiddenList),
                vecUnachieved: sortAchievementsForMyAchievements(unachievedList),
            }
            : payload.steam,
    };
};
const backgroundPolicyIntervalMs = (policy) => {
    switch (policy) {
        case "hourly":
            return 60 * 60 * 1000;
        case "daily":
            return 24 * 60 * 60 * 1000;
        case "weekly":
            return 7 * 24 * 60 * 60 * 1000;
        default:
            return 0;
    }
};
const backgroundSyncLastKey = (provider, policy) => `${BACKGROUND_SYNC_LOCAL_PREFIX}:${provider}:${policy}`;
const backgroundSyncSessionKey = (provider) => `${BACKGROUND_SYNC_SESSION_KEY}:${provider}`;
const backgroundAchievementSyncIsDue = (provider, policy) => {
    if (policy === "manual")
        return false;
    if (policy === "pc_session") {
        try {
            return sessionStorage.getItem(backgroundSyncSessionKey(provider)) !== "done";
        }
        catch (_error) {
            return true;
        }
    }
    const interval = backgroundPolicyIntervalMs(policy);
    if (!interval)
        return false;
    try {
        const last = Number(localStorage.getItem(backgroundSyncLastKey(provider, policy)) || 0);
        return !last || Date.now() - last >= interval;
    }
    catch (_error) {
        return true;
    }
};
const markBackgroundAchievementSyncDone = (provider, policy) => {
    try {
        if (policy === "pc_session")
            sessionStorage.setItem(backgroundSyncSessionKey(provider), "done");
        else
            localStorage.setItem(backgroundSyncLastKey(provider, policy), String(Date.now()));
    }
    catch (_error) {
        // Storage can be unavailable in some embedded Steam contexts.
    }
};
const syncPayloadForProvider = async (provider, appId) => {
    if (provider === "xbox") {
        return ((await (0, backend_1.syncTrueAchievementsProgress)(appId)) || (await (0, backend_1.fetchAchievements)(appId)));
    }
    if (provider === "rpcs3") {
        return (await (0, backend_1.syncRpcs3Progress)(appId)) || (await (0, backend_1.fetchAchievements)(appId));
    }
    return ((await (0, backend_1.syncRetroAchievementsProgress)(appId)) || (await (0, backend_1.fetchAchievements)(appId)));
};
const providerPolicyFromSettings = (provider, settings) => {
    const legacyPolicy = settings?.achievement_cache?.policy || "daily";
    if (provider === "xbox") {
        return settings?.achievement_cache?.xbox_policy || legacyPolicy;
    }
    if (provider === "retroachievements") {
        return settings?.achievement_cache?.retroachievements_policy || legacyPolicy;
    }
    // RPCS3 trophies are read from the local disk, so the default refreshes
    // once per PC session; the user can pick any policy from the QAM.
    return settings?.achievement_cache?.rpcs3_policy || "pc_session";
};
const isRpcs3GameOption = (game) => {
    const text = `${game.exe || ""} ${game.start_dir || ""} ${game.launch_options || ""} ${game.shortcut_path || ""} ${game.name || ""}`
        .toLowerCase()
        .replace(/\\/g, "/");
    return (/(?:^|[\s/"'])rpcs3(?:\.exe)?(?:[\s/"']|$)/i.test(text) ||
        text.includes("/dev_hdd0/") ||
        text.includes("/ps3_game/") ||
        text.includes("/ps3iso/") ||
        text.includes("/roms/ps3/") ||
        text.includes("/playstation 3/") ||
        text.includes("eboot.bin"));
};
const achievementSyncProviderForGame = (game, settings, allowedProviders, options = {}) => {
    const key = String(game.appid);
    const sources = settings.achievement_sources || {};
    const raIds = settings.retroachievements?.game_ids || {};
    const xboxIds = settings.xbox?.title_ids || {};
    const rpcs3Ids = settings.rpcs3?.trophy_ids || {};
    const source = sources[key] || "auto";
    if (source === "disabled")
        return null;
    // Only the post-session path enables this option. A clearly identified
    // RPCS3 shortcut must be checked even when it had no trophy association
    // before launch: ISO games often create their local trophy data only after
    // the first play session. Other platforms keep the existing provider rules.
    if (options.allowUnmatchedRpcs3 &&
        (!allowedProviders || allowedProviders.has("rpcs3")) &&
        isRpcs3GameOption(game)) {
        return "rpcs3";
    }
    const hasXbox = Boolean(xboxIds[key]);
    const hasRa = Boolean(raIds[key]);
    const hasRpcs3 = Boolean(rpcs3Ids[key]);
    if ((!allowedProviders || allowedProviders.has("xbox")) &&
        (source === "xbox" || (source === "auto" && hasXbox)) &&
        hasXbox &&
        (0, exports.isUwphookGameOption)(game)) {
        return "xbox";
    }
    if ((!allowedProviders || allowedProviders.has("rpcs3")) &&
        (source === "rpcs3" || (source === "auto" && !hasXbox && hasRpcs3)) &&
        hasRpcs3) {
        return "rpcs3";
    }
    if ((!allowedProviders || allowedProviders.has("retroachievements")) &&
        (source === "retroachievements" ||
            (source === "auto" && !hasXbox && !hasRpcs3 && hasRa)) &&
        hasRa) {
        return "retroachievements";
    }
    return null;
};
const scheduledAchievementTargets = async (settings, dueProviders) => {
    const games = await (0, exports.allNonSteamGames)();
    const targets = [];
    for (const game of games) {
        const provider = achievementSyncProviderForGame(game, settings, dueProviders);
        if (provider)
            targets.push({ appid: game.appid, name: game.name, provider });
    }
    return targets;
};
const runBackgroundAchievementSync = async (reason = "scheduled") => {
    if (backgroundAchievementSyncRunning)
        return;
    backgroundAchievementSyncRunning = true;
    let updated = 0;
    let skipped = 0;
    const policies = {
        xbox: "daily",
        retroachievements: "daily",
        rpcs3: "pc_session",
    };
    const dueProviders = new Set();
    try {
        const settings = await (0, exports.refreshRaSettings)();
        const legacyPolicy = settings?.achievement_cache?.policy || "daily";
        policies.retroachievements =
            settings?.achievement_cache?.retroachievements_policy || legacyPolicy;
        policies.xbox = settings?.achievement_cache?.xbox_policy || legacyPolicy;
        policies.rpcs3 = settings?.achievement_cache?.rpcs3_policy || "pc_session";
        if (backgroundAchievementSyncIsDue("retroachievements", policies.retroachievements)) {
            dueProviders.add("retroachievements");
        }
        if (backgroundAchievementSyncIsDue("xbox", policies.xbox)) {
            dueProviders.add("xbox");
        }
        if (backgroundAchievementSyncIsDue("rpcs3", policies.rpcs3)) {
            dueProviders.add("rpcs3");
        }
        if (!dueProviders.size)
            return;
        const targets = await scheduledAchievementTargets(settings, dueProviders);
        for (const provider of dueProviders) {
            const count = targets.filter((target) => target.provider === provider).length;
            if (!count)
                markBackgroundAchievementSyncDone(provider, policies[provider]);
        }
        if (!targets.length)
            return;
        const raCount = targets.filter((target) => target.provider === "retroachievements").length;
        const xboxCount = targets.filter((target) => target.provider === "xbox").length;
        const rpcs3Count = targets.filter((target) => target.provider === "rpcs3").length;
        api_1.toaster.toast({
            title: (0, i18n_1.t)("pluginName"),
            body: `${(0, i18n_1.t)("backgroundSyncStarted")}: RA ${raCount}, Xbox ${xboxCount}, PS3 ${rpcs3Count}`,
        });
        for (const target of targets) {
            try {
                const payload = await syncPayloadForProvider(target.provider, target.appid);
                if (payload?.steam?.nTotal) {
                    (0, exports.applyAchievementPayload)(target.appid, payload);
                    updated += 1;
                }
                else {
                    skipped += 1;
                }
            }
            catch (error) {
                skipped += 1;
                console.warn(`[Playhub Metadata] background achievement sync failed for ${target.name}`, error);
            }
            await new Promise((resolve) => window.setTimeout(resolve, 350));
        }
        for (const provider of dueProviders) {
            markBackgroundAchievementSyncDone(provider, policies[provider]);
        }
        api_1.toaster.toast({
            title: (0, i18n_1.t)("pluginName"),
            body: `${(0, i18n_1.t)("backgroundSyncFinished")}: ${updated} ${(0, i18n_1.t)("backgroundSyncUpdated")}, ${skipped} ${(0, i18n_1.t)("backgroundSyncSkipped")}`,
        });
    }
    catch (error) {
        api_1.toaster.toast({ title: (0, i18n_1.t)("pluginName"), body: `${(0, i18n_1.t)("backgroundSyncFailed")}: ${String(error)}` });
    }
    finally {
        backgroundAchievementSyncRunning = false;
    }
};
const postPlaySyncLastKey = (provider, appId) => `${POST_PLAY_SYNC_LOCAL_PREFIX}:${provider}:${appId}`;
const wasPostPlaySyncedRecently = (provider, appId) => {
    try {
        const last = Number(localStorage.getItem(postPlaySyncLastKey(provider, appId)) || 0);
        return Boolean(last && Date.now() - last < POST_PLAY_SYNC_THROTTLE_MS);
    }
    catch (_error) {
        return false;
    }
};
const markPostPlaySynced = (provider, appId) => {
    try {
        localStorage.setItem(postPlaySyncLastKey(provider, appId), String(Date.now()));
    }
    catch (_error) {
        // Storage can be unavailable in some embedded Steam contexts.
    }
};
const boolLike = (value) => {
    if (typeof value === "boolean")
        return value;
    if (typeof value === "number")
        return value > 0;
    if (typeof value === "string") {
        const lower = value.toLowerCase();
        if (["true", "running", "1", "yes"].includes(lower))
            return true;
        if (["false", "stopped", "0", "no", "none"].includes(lower))
            return false;
    }
    if (value && typeof value === "object") {
        for (const key of ["running", "bRunning", "is_running", "isRunning", "bIsRunning", "result"]) {
            if (key in value) {
                const nested = boolLike(value[key]);
                if (typeof nested === "boolean")
                    return nested;
            }
        }
    }
    return undefined;
};
const safeCallRunning = async (owner, methodName, appId) => {
    try {
        const fn = owner?.[methodName];
        if (typeof fn !== "function")
            return undefined;
        const value = fn.call(owner, appId);
        const resolved = value && typeof value.then === "function" ? await value : value;
        return boolLike(resolved);
    }
    catch (_error) {
        return undefined;
    }
};
const runningFromList = (value, appId) => {
    try {
        const list = value && typeof value.then === "function" ? undefined : value;
        if (!list)
            return undefined;
        const values = Array.isArray(list)
            ? list
            : Array.from(list?.values?.() || []);
        if (!values.length)
            return undefined;
        return values.some((item) => Number(item?.appid ?? item?.app_id ?? item?.unAppID ?? item?.nAppID ?? item) === appId);
    }
    catch (_error) {
        return undefined;
    }
};
const safeRunningList = async (owner, methodName, appId) => {
    try {
        const fn = owner?.[methodName];
        if (typeof fn !== "function")
            return undefined;
        const value = fn.call(owner);
        const resolved = value && typeof value.then === "function" ? await value : value;
        return runningFromList(resolved, appId);
    }
    catch (_error) {
        return undefined;
    }
};
const runningFromObject = (value) => {
    if (!value)
        return undefined;
    for (const methodName of ["BIsRunning", "BIsAppRunning", "BIsPlaying", "IsRunning", "IsAppRunning", "GetIsRunning"]) {
        try {
            const fn = value?.[methodName];
            if (typeof fn === "function") {
                const result = boolLike(fn.call(value));
                if (typeof result === "boolean")
                    return result;
            }
        }
        catch (_error) {
            // Try the next method/field.
        }
    }
    for (const fieldName of [
        "bRunning",
        "m_bRunning",
        "is_running",
        "isRunning",
        "running",
        "bIsRunning",
        "m_bIsRunning",
        "bPlaying",
        "m_bPlaying",
        "nRunning",
    ]) {
        if (fieldName in value) {
            const result = boolLike(value[fieldName]);
            if (typeof result === "boolean")
                return result;
        }
    }
    return undefined;
};
const readAppRunningState = async (appId) => {
    for (const methodName of ["BIsAppRunning", "IsAppRunning", "GetAppRunning", "GetAppRunState"]) {
        const fromAppStore = await safeCallRunning((0, compat_1.getSteamGlobal)("appStore"), methodName, appId);
        if (typeof fromAppStore === "boolean")
            return fromAppStore;
        const fromSteamClient = await safeCallRunning((0, compat_1.getSteamGlobal)("SteamClient")?.Apps, methodName, appId);
        if (typeof fromSteamClient === "boolean")
            return fromSteamClient;
    }
    for (const methodName of ["GetRunningAppIDs", "GetRunningApps", "GetRunningAppIds", "GetRunningAppIDList"]) {
        const fromAppStore = await safeRunningList((0, compat_1.getSteamGlobal)("appStore"), methodName, appId);
        if (typeof fromAppStore === "boolean")
            return fromAppStore;
        const fromSteamClient = await safeRunningList((0, compat_1.getSteamGlobal)("SteamClient")?.Apps, methodName, appId);
        if (typeof fromSteamClient === "boolean")
            return fromSteamClient;
    }
    const overview = (0, exports.getOverview)(appId);
    const appData = (() => {
        try {
            return (0, compat_1.getSteamGlobal)("appDetailsStore")?.GetAppData?.(appId);
        }
        catch (_error) {
            return null;
        }
    })();
    for (const value of [overview, appData, appData?.details, appData?.overview, appData?.appinfo, appData?.appInfo]) {
        const result = runningFromObject(value);
        if (typeof result === "boolean")
            return result;
    }
    return undefined;
};
const postPlaySyncGames = async () => {
    if (Date.now() - postPlayAchievementSyncGamesCacheAt < POST_PLAY_SYNC_GAME_CACHE_MS && postPlayAchievementSyncGamesCache.length) {
        return postPlayAchievementSyncGamesCache;
    }
    const games = await (0, exports.allNonSteamGames)();
    postPlayAchievementSyncGamesCache = games;
    postPlayAchievementSyncGamesCacheAt = Date.now();
    return games;
};
const syncRecentlyClosedGame = async (target) => {
    const pendingKey = `${target.provider}:${target.appid}`;
    if (backgroundAchievementSyncRunning) {
        window.setTimeout(() => void syncRecentlyClosedGame(target), 30 * 1000);
        return;
    }
    try {
        const settings = await (0, exports.refreshRaSettings)();
        const policy = providerPolicyFromSettings(target.provider, settings);
        if (policy === "manual")
            return;
        const game = (await postPlaySyncGames()).find((candidate) => candidate.appid === target.appid) || target;
        const provider = achievementSyncProviderForGame(game, settings, new Set([target.provider]), { allowUnmatchedRpcs3: true });
        if (provider !== target.provider)
            return;
        if (wasPostPlaySyncedRecently(target.provider, target.appid))
            return;
        backgroundAchievementSyncRunning = true;
        api_1.toaster.toast({
            title: (0, i18n_1.t)("pluginName"),
            body: `${(0, i18n_1.t)("postPlaySyncStarted")}: ${target.name}`,
        });
        // Only this game's achievements are synced here: the payload call below is
        // scoped to target.appid, never to the whole library.
        const payload = await syncPayloadForProvider(target.provider, target.appid);
        if (payload?.steam?.nTotal) {
            (0, exports.applyAchievementPayload)(target.appid, payload);
            api_1.toaster.toast({
                title: (0, i18n_1.t)("pluginName"),
                body: `${(0, i18n_1.t)("postPlaySyncFinished")}: ${target.name}`,
            });
        }
        else {
            api_1.toaster.toast({
                title: (0, i18n_1.t)("pluginName"),
                body: `${(0, i18n_1.t)("postPlaySyncSkipped")}: ${target.name}`,
            });
        }
        markPostPlaySynced(target.provider, target.appid);
    }
    catch (error) {
        api_1.toaster.toast({
            title: (0, i18n_1.t)("pluginName"),
            body: `${(0, i18n_1.t)("postPlaySyncFailed")}: ${target.name}`,
        });
        console.warn(`[Playhub Metadata] post-play achievement sync failed for ${target.name}`, error);
    }
    finally {
        backgroundAchievementSyncRunning = false;
        postPlaySyncPending.delete(pendingKey);
    }
};
const queuePostPlaySync = (target) => {
    const pendingKey = `${target.provider}:${target.appid}`;
    if (postPlaySyncPending.has(pendingKey))
        return;
    if (wasPostPlaySyncedRecently(target.provider, target.appid))
        return;
    postPlaySyncPending.add(pendingKey);
    window.setTimeout(() => void syncRecentlyClosedGame(target), POST_PLAY_SYNC_DELAY_MS);
};
const postPlayAllowedProviders = (settings) => {
    const allowed = new Set();
    for (const provider of ["xbox", "retroachievements", "rpcs3"]) {
        if (providerPolicyFromSettings(provider, settings) !== "manual") {
            allowed.add(provider);
        }
    }
    return allowed;
};
// Precise per-game session tracking: Steam tells us exactly which app started
// or stopped, so ONLY that game is queued for an achievement sync when its
// session ends. Nothing else in the library is touched.
const handleAppLifetimeNotification = async (notification) => {
    try {
        if (!readPostPlayAchievementSyncEnabled())
            return;
        const appId = Number(notification?.unAppID ??
            notification?.unAppId ??
            notification?.appid ??
            notification?.nAppID ??
            0);
        if (!Number.isFinite(appId) || appId <= 0)
            return;
        const running = boolLike(notification?.bRunning);
        const now = Date.now();
        if (running === true) {
            const previous = postPlayRunningState.get(appId);
            postPlayRunningState.set(appId, {
                running: true,
                startedAt: previous?.running ? previous.startedAt || now : now,
                name: previous?.name || "",
            });
            return;
        }
        if (running !== false)
            return;
        const previous = postPlayRunningState.get(appId);
        postPlayRunningState.delete(appId);
        // If Steam's UI reloaded while the game was running we have no start time;
        // still sync the closed game rather than losing its progress.
        const playedMs = previous?.startedAt
            ? now - previous.startedAt
            : Number.POSITIVE_INFINITY;
        if (playedMs < POST_PLAY_SYNC_MIN_PLAY_MS)
            return;
        const game = (await postPlaySyncGames()).find((candidate) => candidate.appid === appId);
        if (!game)
            return;
        const settings = await (0, exports.refreshRaSettings)();
        const provider = achievementSyncProviderForGame(game, settings, postPlayAllowedProviders(settings), { allowUnmatchedRpcs3: true });
        if (!provider)
            return;
        queuePostPlaySync({ appid: game.appid, name: game.name, provider });
    }
    catch (error) {
        console.warn("[Playhub Metadata] app lifetime notification handling failed", error);
    }
};
const pollPostPlayAchievementSync = async () => {
    try {
        if (!readPostPlayAchievementSyncEnabled()) {
            postPlayRunningState.clear();
            return;
        }
        const settings = await (0, exports.refreshRaSettings)();
        const allowedProviders = postPlayAllowedProviders(settings);
        if (!allowedProviders.size)
            return;
        const games = await postPlaySyncGames();
        const now = Date.now();
        const observedIds = new Set();
        for (const game of games) {
            const provider = achievementSyncProviderForGame(game, settings, allowedProviders, { allowUnmatchedRpcs3: true });
            if (!provider)
                continue;
            const running = await readAppRunningState(game.appid);
            if (typeof running !== "boolean")
                continue;
            observedIds.add(game.appid);
            const previous = postPlayRunningState.get(game.appid);
            if (!previous) {
                postPlayRunningState.set(game.appid, {
                    running,
                    startedAt: running ? now : 0,
                    name: game.name,
                });
                continue;
            }
            if (running) {
                postPlayRunningState.set(game.appid, {
                    running: true,
                    startedAt: previous.running ? previous.startedAt || now : now,
                    name: game.name,
                });
                continue;
            }
            if (previous.running) {
                const playedMs = previous.startedAt ? now - previous.startedAt : 0;
                postPlayRunningState.set(game.appid, { running: false, startedAt: 0, name: game.name });
                if (playedMs >= POST_PLAY_SYNC_MIN_PLAY_MS) {
                    queuePostPlaySync({ appid: game.appid, name: game.name, provider });
                }
            }
            else {
                postPlayRunningState.set(game.appid, { running: false, startedAt: 0, name: game.name });
            }
        }
        for (const appId of Array.from(postPlayRunningState.keys())) {
            if (!observedIds.has(appId))
                postPlayRunningState.delete(appId);
        }
    }
    catch (error) {
        console.warn("[Playhub Metadata] post-play achievement sync poll failed", error);
    }
};
const startPostPlayAchievementSync = () => {
    if (postPlayAchievementSyncTimer)
        window.clearInterval(postPlayAchievementSyncTimer);
    // Preferred path: Steam's own per-app lifetime notifications. They identify
    // exactly which game started/stopped, so only the closed game gets synced.
    let unregisterLifetime;
    try {
        const registration = (0, compat_1.getSteamGlobal)("SteamClient")?.GameSessions?.RegisterForAppLifetimeNotifications?.((notification) => void handleAppLifetimeNotification(notification));
        if (typeof registration === "function") {
            unregisterLifetime = registration;
        }
        else if (typeof registration?.unregister === "function") {
            unregisterLifetime = () => {
                try {
                    registration.unregister();
                }
                catch (_error) {
                    // Already gone.
                }
            };
        }
    }
    catch (_error) {
        unregisterLifetime = undefined;
    }
    let initial;
    if (!unregisterLifetime) {
        // Fallback for Steam clients without lifetime notifications: keep the old
        // poller, which also queues only the specific game whose state flipped.
        const run = () => void pollPostPlayAchievementSync();
        postPlayAchievementSyncTimer = window.setInterval(run, POST_PLAY_SYNC_POLL_MS);
        initial = window.setTimeout(run, POST_PLAY_SYNC_INITIAL_DELAY_MS);
    }
    const onPolicyChanged = () => {
        postPlayRunningState.clear();
        postPlayAchievementSyncGamesCacheAt = 0;
        if (!unregisterLifetime)
            void pollPostPlayAchievementSync();
    };
    window.addEventListener("playhub-metadata:achievement-cache-policy-changed", onPolicyChanged);
    window.addEventListener("playhub-metadata:post-play-sync-setting-changed", onPolicyChanged);
    return () => {
        if (initial)
            window.clearTimeout(initial);
        if (postPlayAchievementSyncTimer)
            window.clearInterval(postPlayAchievementSyncTimer);
        unregisterLifetime?.();
        window.removeEventListener("playhub-metadata:achievement-cache-policy-changed", onPolicyChanged);
        window.removeEventListener("playhub-metadata:post-play-sync-setting-changed", onPolicyChanged);
        postPlayAchievementSyncTimer = undefined;
        postPlayRunningState.clear();
        postPlaySyncPending.clear();
    };
};
exports.startPostPlayAchievementSync = startPostPlayAchievementSync;
const startBackgroundAchievementSync = () => {
    if (backgroundAchievementSyncTimer)
        window.clearInterval(backgroundAchievementSyncTimer);
    const run = () => void runBackgroundAchievementSync("timer");
    const onPolicyChanged = () => void runBackgroundAchievementSync("settings");
    const initial = window.setTimeout(run, BACKGROUND_SYNC_INITIAL_DELAY_MS);
    backgroundAchievementSyncTimer = window.setInterval(run, BACKGROUND_SYNC_CHECK_MS);
    window.addEventListener("playhub-metadata:achievement-cache-policy-changed", onPolicyChanged);
    return () => {
        window.clearTimeout(initial);
        if (backgroundAchievementSyncTimer)
            window.clearInterval(backgroundAchievementSyncTimer);
        window.removeEventListener("playhub-metadata:achievement-cache-policy-changed", onPolicyChanged);
        backgroundAchievementSyncTimer = undefined;
    };
};
exports.startBackgroundAchievementSync = startBackgroundAchievementSync;
const applyAchievementPayload = (appId, payload) => {
    if (!payload?.steam?.nTotal)
        return;
    const sortedPayload = sortedAchievementPayloadForNative(payload);
    clearAchievementStoreMapsForApp(appId);
    exports.achievementsCache[String(appId)] = sortedPayload;
    if (steamAchievementStoreRef)
        primeAchievementStore(steamAchievementStoreRef, appId, sortedPayload);
    const appData = (0, compat_1.getSteamGlobal)("appDetailsStore")?.GetAppData?.(appId);
    if (appData?.details) {
        appData.details.achievements = sortedPayload.steam;
        appData.bLoadingAchievments = false;
    }
    try {
        (0, compat_1.getSteamGlobal)("appDetailsCache")?.SetCachedDataForApp?.(appId, "achievements", 2, sortedPayload.steam);
    }
    catch (_error) {
        // Best effort, same cache route used by Steam.
    }
    try {
        if ((0, compat_1.getSteamGlobal)("appAchievementProgressCache")?.m_achievementProgress) {
            (0, compat_1.getSteamGlobal)("appAchievementProgressCache").m_achievementProgress.mapCache.set(appId, {
                all_unlocked: sortedPayload.progress.achieved === sortedPayload.progress.total,
                appid: appId,
                cache_time: Date.now(),
                percentage: sortedPayload.progress.percentage,
                total: sortedPayload.progress.total,
                unlocked: sortedPayload.progress.achieved,
            });
            (0, compat_1.getSteamGlobal)("appAchievementProgressCache").SaveCacheFile?.();
        }
    }
    catch (_error) {
        // Progress cache is optional across Steam client versions.
    }
    try {
        (0, compat_1.getSteamGlobal)("appDetailsStore")?.GetAchievements?.(appId);
    }
    catch (_error) {
        // Touching the getter nudges Steam into re-reading the cached achievement data.
    }
    window.dispatchEvent(new Event("playhub-metadata:achievements-updated"));
};
exports.applyAchievementPayload = applyAchievementPayload;
const emptySteamAchievementsPayload = () => ({
    nAchieved: 0,
    nTotal: 0,
    vecAchievedHidden: [],
    vecHighlight: [],
    vecUnachieved: [],
});
const clearAchievementStoreMapsForApp = (appId) => {
    const keys = [appId, String(appId)];
    const store = steamAchievementStoreRef;
    if (!store)
        return;
    try {
        for (const key of keys) {
            for (const mapName of [
                "m_mapMyAchievements",
                "m_mapAchievements",
                "m_mapGlobalAchievements",
                "m_mapGlobalAchievementPercentages",
                "m_mapAchievementPercentages",
            ]) {
                const map = store?.[mapName];
                map?.delete?.(key);
                if (map?.set && (mapName.includes("Global") || mapName.includes("Percent"))) {
                    map.set(key, { loading: false, data: {} });
                }
                if (map?.set && (mapName === "m_mapMyAchievements" || mapName === "m_mapAchievements")) {
                    map.set(key, emptyAchievementUserPayload());
                }
            }
        }
    }
    catch (error) {
        console.warn("[Playhub Metadata] failed to clear achievement store maps", error);
    }
};
const clearAchievementsForApp = (appId) => {
    const key = String(appId);
    delete exports.achievementsCache[key];
    const empty = emptySteamAchievementsPayload();
    clearAchievementStoreMapsForApp(appId);
    try {
        const appData = (0, compat_1.getSteamGlobal)("appDetailsStore")?.GetAppData?.(appId);
        if (appData?.details) {
            appData.details.achievements = empty;
            appData.bLoadingAchievments = false;
        }
    }
    catch (_error) {
        // Best effort.
    }
    try {
        (0, compat_1.getSteamGlobal)("appDetailsCache")?.SetCachedDataForApp?.(appId, "achievements", 2, empty);
    }
    catch (_error) {
        // Best effort.
    }
    try {
        (0, compat_1.getSteamGlobal)("appAchievementProgressCache")?.m_achievementProgress?.mapCache?.delete?.(appId);
        (0, compat_1.getSteamGlobal)("appAchievementProgressCache")?.m_achievementProgress?.mapCache?.delete?.(String(appId));
        (0, compat_1.getSteamGlobal)("appAchievementProgressCache")?.SaveCacheFile?.();
    }
    catch (_error) {
        // Best effort.
    }
    window.dispatchEvent(new Event("playhub-metadata:achievements-updated"));
};
exports.clearAchievementsForApp = clearAchievementsForApp;
const clearAchievementsForApps = (appIds) => {
    for (const appId of appIds) {
        if (Number.isFinite(appId) && appId > 0)
            (0, exports.clearAchievementsForApp)(appId);
    }
};
exports.clearAchievementsForApps = clearAchievementsForApps;
const isUwphookGameOption = (game) => {
    const text = `${game?.exe || ""} ${game?.start_dir || ""} ${game?.launch_options || ""} ${game?.shortcut_path || ""} ${game?.name || ""}`.toLowerCase().replace(/\\/g, "/");
    return text.includes("uwphook.exe") || text.includes("/uwphook/uwphook.exe") || text.includes("briano/uwphook");
};
exports.isUwphookGameOption = isUwphookGameOption;
const flushTrueAchievementsNativeCache = async () => {
    try {
        const settings = achievementSettingsCache ?? (await (0, exports.refreshRaSettings)());
        const ids = settings?.xbox?.title_ids || {};
        Object.keys(ids).forEach((key) => {
            const appId = Number(key);
            if (appId)
                (0, exports.clearAchievementsForApp)(appId);
        });
    }
    catch (error) {
        console.warn("[Playhub Metadata] failed to flush stale achievement cache", error);
    }
};
const primeAchievementStore = (store, appId, payload) => {
    const sortedPayload = payload ? sortedAchievementPayloadForNative(payload) : {
        user: emptyAchievementUserPayload(), global: { loading: false, data: {} },
    };
    try {
        const keys = [appId, String(appId)];
        for (const key of keys) {
            store?.m_mapInflightMyAchievementsRequests?.delete?.(key);
            if (sortedPayload.global) {
                store?.m_mapGlobalAchievements?.set?.(key, sortedPayload.global);
                store?.m_mapGlobalAchievementPercentages?.set?.(key, sortedPayload.global);
                store?.m_mapAchievementPercentages?.set?.(key, sortedPayload.global);
            }
            if (sortedPayload.user) {
                store?.m_mapMyAchievements?.set?.(key, sortedPayload.user);
                store?.m_mapAchievements?.set?.(key, sortedPayload.user);
            }
        }
    }
    catch (error) {
        console.warn("[Playhub Metadata] failed to prime achievement store", error);
    }
};
const emptyAchievementUserPayload = () => ({
    loading: false,
    data: {
        achieved: {},
        hidden: {},
        unachieved: {},
    },
});
const tryFetchMetadataForApp = async (appId) => {
    await (0, exports.ensureMetadataCache)();
    if (exports.metadataCache[String(appId)] || loadingMetadata.has(appId))
        return;
    const overview = (0, exports.getOverview)(appId);
    if (!(0, exports.isNonSteamApp)(overview))
        return;
    loadingMetadata.add(appId);
    try {
        const metadata = await (0, backend_1.autoFetchMetadata)(appId, (0, exports.appName)(appId));
        if (metadata) {
            exports.metadataCache[String(appId)] = metadata;
            (0, exports.applyMetadata)(appId);
            window.dispatchEvent(new Event("playhub-metadata:updated"));
        }
    }
    finally {
        loadingMetadata.delete(appId);
    }
};
exports.tryFetchMetadataForApp = tryFetchMetadataForApp;
const tryEnrichScreenshotsForApp = async (appId) => {
    await (0, exports.ensureMetadataCache)();
    const metadata = exports.metadataCache[String(appId)];
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
        const refreshed = await (0, backend_1.fetchMetadata)(source);
        if (refreshed?.screenshots?.length) {
            const saved = await (0, backend_1.saveMetadata)(appId, {
                ...metadata,
                screenshots: refreshed.screenshots,
            });
            exports.metadataCache[String(appId)] = saved;
            (0, exports.applyMetadata)(appId);
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
exports.tryEnrichScreenshotsForApp = tryEnrichScreenshotsForApp;
const tryEnrichCommunityMediaForApp = async (appId) => {
    await (0, exports.ensureMetadataCache)();
    const metadata = exports.metadataCache[String(appId)];
    const enrichedRecently = metadata?.community_enriched_at &&
        metadata?.steam_news_enriched_at &&
        Date.now() / 1000 - Number(metadata.community_enriched_at) < 7 * 24 * 60 * 60 &&
        Date.now() / 1000 - Number(metadata.steam_news_enriched_at) < 6 * 60 * 60;
    if (!metadata || enrichedRecently || loadingCommunityMedia.has(appId)) {
        return;
    }
    loadingCommunityMedia.add(appId);
    try {
        const enriched = await (0, backend_1.enrichCommunityMedia)(appId, metadata.title || (0, exports.appName)(appId), metadata.source_url || "");
        if (enriched) {
            exports.metadataCache[String(appId)] = enriched;
            (0, exports.applyMetadata)(appId);
            void refreshPlayhubNativeActivityForApp(appId);
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
exports.tryEnrichCommunityMediaForApp = tryEnrichCommunityMediaForApp;
const getAppDetails = async (appId) => new Promise((resolve) => {
    let timeoutId;
    try {
        const { unregister } = (0, compat_1.getSteamGlobal)("SteamClient").Apps.RegisterForAppDetails(appId, (details) => {
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
exports.getAppDetails = getAppDetails;
const achievementLoads = new Map();
const loadAchievementsForApp = (appId) => {
    if (achievementSettingsCache?.achievement_sources?.[String(appId)] === "disabled")
        return Promise.resolve(null);
    const pending = achievementLoads.get(appId);
    if (pending)
        return pending;
    // Defer the worker until the map entry is set, including synchronous cache hits.
    const request = Promise.resolve().then(() => fetchAchievementPayloadForApp(appId)).catch((error) => {
        console.warn("[Playhub Metadata] achievement settings/backend unavailable", error);
        return exports.achievementsCache[String(appId)] || null;
    }).finally(() => {
        if (achievementLoads.get(appId) === request)
            achievementLoads.delete(appId);
    });
    achievementLoads.set(appId, request);
    return request;
};
const fetchAchievementPayloadForApp = async (appId) => {
    if (exports.achievementsCache[String(appId)]) {
        return exports.achievementsCache[String(appId)];
    }
    const overview = (0, exports.getOverview)(appId);
    if (!(0, exports.isNonSteamApp)(overview))
        return null;
    const settings = achievementSettingsCache ?? (await (0, exports.refreshRaSettings)());
    const appSource = settings?.achievement_sources?.[String(appId)] ?? "auto";
    if (appSource === "disabled")
        return null;
    const hasAnyProvider = !!settings?.retroachievements?.enabled ||
        !!settings?.xbox?.enabled ||
        !!settings?.rpcs3?.trophy_ids?.[String(appId)] ||
        appSource === "rpcs3";
    if (!hasAnyProvider)
        return null;
    const appKey = String(appId);
    const source = settings?.achievement_sources?.[appKey] ?? "auto";
    const hasXboxMatch = !!settings?.xbox?.title_ids?.[appKey];
    const shouldClearStaleXbox = hasXboxMatch || source === "xbox";
    if (shouldClearStaleXbox) {
        // Steam can keep old native achievement data around even after the plugin
        // data folders are deleted. Clear the native cache before loading TA data
        // so old OpenXBL payloads cannot leak into the page.
        (0, exports.clearAchievementsForApp)(appId);
    }
    loadingAchievements.add(appId);
    try {
        let payload = await (0, backend_1.fetchAchievements)(appId);
        if (!payload && shouldClearStaleXbox) {
            (0, exports.clearAchievementsForApp)(appId);
            return null;
        }
        if (!payload) {
            const details = await (0, exports.getAppDetails)(appId);
            const launchPath = `${details?.strShortcutExe || ""} ${details?.strShortcutLaunchOptions || ""}`;
            if (launchPath.trim()) {
                payload = await (0, backend_1.resolveRetroAchievementsFromPath)(appId, launchPath, (0, exports.appName)(appId));
            }
        }
        if (payload)
            (0, exports.applyAchievementPayload)(appId, payload);
        return payload || exports.achievementsCache[String(appId)] || null;
    }
    catch (error) {
        console.error("[Playhub Metadata] achievements fetch failed", error);
        return exports.achievementsCache[String(appId)] || null;
    }
    finally {
        loadingAchievements.delete(appId);
    }
};
let achievementStorePatchInstalled = false;
const tryInstallAchievementStorePatch = (unpatchers) => {
    if (achievementStorePatchInstalled)
        return true;
    try {
        const achievementsStore = (0, ui_1.findModuleChild)((module) => {
            if (!module || typeof module !== "object")
                return undefined;
            for (const [, candidate] of (0, compat_1.moduleEntries)(module)) {
                if ((candidate?.m_mapMyAchievements || candidate?.m_mapGlobalAchievements) &&
                    typeof candidate?.LoadMyAchievements === "function")
                    return candidate;
            }
            return undefined;
        });
        if (!achievementsStore)
            return false;
        steamAchievementStoreRef = achievementsStore;
        // Patch the instance: newer Steam builds can bind loaders as own properties.
        const proto = achievementsStore;
        if (achievementsStore?.LoadMyAchievements || proto?.LoadMyAchievements) {
            unpatchers.push((0, compat_1.patchMethod)(proto, "LoadMyAchievements", (thisValue, original, args) => {
                const appId = Number(args[0]);
                if (!(0, exports.isNonSteamApp)((0, exports.getOverview)(appId))) {
                    return original(...args);
                }
                if (achievementSettingsCache?.achievement_sources?.[String(appId)] === "disabled") {
                    primeAchievementStore(thisValue, appId, null);
                    return Promise.resolve(emptyAchievementUserPayload());
                }
                const cached = exports.achievementsCache[String(appId)];
                if (cached) {
                    primeAchievementStore(thisValue, appId, cached);
                    return Promise.resolve(cached.user ?? emptyAchievementUserPayload());
                }
                return loadAchievementsForApp(appId)
                    .then((payload) => {
                    primeAchievementStore(thisValue, appId, payload);
                    return payload?.user ?? emptyAchievementUserPayload();
                })
                    .catch((error) => {
                    console.error("[Playhub Metadata] LoadMyAchievements failed", error);
                    primeAchievementStore(thisValue, appId, null);
                    return emptyAchievementUserPayload();
                });
            }));
        }
        for (const methodName of [
            "LoadGlobalAchievements",
            "LoadGlobalAchievementPercentages",
            "LoadAchievementPercentages",
        ]) {
            if (!(achievementsStore?.[methodName] || proto?.[methodName]))
                continue;
            unpatchers.push((0, compat_1.patchMethod)(proto, methodName, (thisValue, original, args) => {
                const appId = Number(args[0]);
                if (!(0, exports.isNonSteamApp)((0, exports.getOverview)(appId))) {
                    return original(...args);
                }
                if (achievementSettingsCache?.achievement_sources?.[String(appId)] === "disabled") {
                    primeAchievementStore(thisValue, appId, null);
                    return Promise.resolve({ loading: false, data: {} });
                }
                const cached = exports.achievementsCache[String(appId)];
                if (cached) {
                    primeAchievementStore(thisValue, appId, cached);
                    return Promise.resolve(cached.global ?? { loading: false, data: {} });
                }
                return loadAchievementsForApp(appId).then((payload) => {
                    primeAchievementStore(thisValue, appId, payload);
                    return payload?.global ?? { loading: false, data: {} };
                }).catch((error) => {
                    console.warn("[Playhub Metadata] global achievements unavailable", error);
                    primeAchievementStore(thisValue, appId, null);
                    return { loading: false, data: {} };
                });
            }));
        }
        achievementStorePatchInstalled = true;
        unpatchers.push(() => {
            achievementStorePatchInstalled = false;
            if (steamAchievementStoreRef === achievementsStore)
                steamAchievementStoreRef = null;
        });
        return true;
    }
    catch (error) {
        console.warn("[Playhub Metadata] achievement store patch skipped", error);
        return false;
    }
};
const routeAchievementAppId = () => achievementAppIdFromPath(currentRoutePath());
const achievementAppIdFromPath = (path) => {
    const match = String(path || "").match(/\/library\/(?:app|details|[^/]+\/app)\/(\d+)\/achievements(?:[/?#].*)?/)
        || String(path || "").match(/\/playhub-metadata\/achievements\/(\d+)(?:[/?#].*)?/);
    return Number(match?.[1] || 0);
};
const playhubAchievementsPath = (appId) => `/playhub-metadata/achievements/${appId}`;
const achievementDate = (value) => {
    if (!value)
        return "";
    try {
        return new Date(value * 1000).toLocaleDateString();
    }
    catch (_error) {
        return "";
    }
};
const allAchievementsFromPayload = (payload) => {
    const data = payload?.user?.data;
    if (!data)
        return [];
    return [
        ...Object.values(data.achieved || {}),
        ...Object.values(data.unachieved || {}),
        ...Object.values(data.hidden || {}),
    ];
};
const achievementImageUrl = (achievement) => {
    const candidates = [
        achievement.playhubImage,
        achievement.strImageURL,
        achievement.strImageUrl,
        achievement.strImage,
        achievement.strIconURL,
        achievement.strIcon,
        achievement.iconUrl,
        achievement.imageUrl,
    ].filter(Boolean);
    return candidates[0] || "";
};
const imageElement = (achievement, size = 96) => {
    const src = achievementImageUrl(achievement);
    const wrapperStyle = {
        width: size,
        height: size,
        borderRadius: 10,
        backgroundColor: "rgba(255,255,255,0.08)",
        flex: "0 0 auto",
        overflow: "hidden",
    };
    const imgStyle = {
        width: "100%",
        height: "100%",
        objectFit: "contain",
        objectPosition: "center center",
        display: "block",
    };
    return react_1.default.createElement("div", { className: "playhub-achievement-art", style: wrapperStyle }, src ? react_1.default.createElement("img", { src, style: imgStyle, referrerPolicy: "no-referrer" }) : null);
};
const XBOX_IMAGE_URL_RE = /(trueachievements|imagestore|xboxlive|xboxservices|microsoft|akamaized|store-images|dlassets)/i;
const XBOX_IMAGE_SELECTOR = [
    'img[src*="trueachievements" i]',
    'img[src*="imagestore" i]',
    'img[src*="xboxlive" i]',
    'img[src*="xboxservices" i]',
    'img[src*="microsoft" i]',
    'img[src*="akamaized" i]',
    'img[src*="store-images" i]',
    'img[src*="dlassets" i]',
    'img[srcset*="trueachievements" i]',
    'img[srcset*="imagestore" i]',
    'img[srcset*="xboxlive" i]',
    'img[srcset*="xboxservices" i]',
    'img[srcset*="microsoft" i]',
    'img[srcset*="akamaized" i]',
    'img[srcset*="store-images" i]',
    'img[srcset*="dlassets" i]',
].join(",");
const XBOX_BACKGROUND_SELECTOR = [
    '[style*="trueachievements" i][style*="background-image" i]',
    '[style*="imagestore" i][style*="background-image" i]',
    '[style*="xboxlive" i][style*="background-image" i]',
    '[style*="xboxservices" i][style*="background-image" i]',
    '[style*="microsoft" i][style*="background-image" i]',
    '[style*="akamaized" i][style*="background-image" i]',
    '[style*="store-images" i][style*="background-image" i]',
    '[style*="dlassets" i][style*="background-image" i]',
].join(",");
const matchingElements = (root, selector) => {
    const matches = [];
    if (root instanceof Element && root.matches(selector))
        matches.push(root);
    root.querySelectorAll?.(selector).forEach((node) => matches.push(node));
    return matches;
};
const setImportantStyle = (element, property, value) => {
    if (element.style.getPropertyValue(property) !== value ||
        element.style.getPropertyPriority(property) !== "important") {
        element.style.setProperty(property, value, "important");
    }
};
const isLikelyAchievementArtBox = (element) => {
    const rect = element.getBoundingClientRect?.();
    if (!rect || rect.width < 18 || rect.height < 18)
        return false;
    // Steam can render achievement art into square tiles, wide cards, or small
    // strips depending on the page. Keep this bounded so large metadata artwork
    // is not touched, but do not require a square ratio.
    return rect.width <= 520 && rect.height <= 360;
};
const fixNativeAchievementImageStretch = (root = document) => {
    try {
        matchingElements(root, XBOX_IMAGE_SELECTOR).forEach((node) => {
            const img = node;
            const src = img.currentSrc || img.src || img.srcset || img.getAttribute("src") || img.getAttribute("srcset") || "";
            const parent = img.parentElement;
            const achievementArtTarget = isLikelyAchievementArtBox(img) || (!!parent && isLikelyAchievementArtBox(parent));
            if (!XBOX_IMAGE_URL_RE.test(src) || !achievementArtTarget)
                return;
            if (parent) {
                setImportantStyle(parent, "overflow", "hidden");
                if (!parent.style.position)
                    setImportantStyle(parent, "position", "relative");
                setImportantStyle(parent, "background-color", "rgba(0,0,0,0.18)");
            }
            setImportantStyle(img, "object-fit", "contain");
            setImportantStyle(img, "object-position", "center center");
            setImportantStyle(img, "width", "100%");
            setImportantStyle(img, "height", "100%");
            setImportantStyle(img, "max-width", "none");
            setImportantStyle(img, "max-height", "none");
            setImportantStyle(img, "display", "block");
        });
        matchingElements(root, XBOX_BACKGROUND_SELECTOR).forEach((node) => {
            const el = node;
            const bg = el.style?.backgroundImage || "";
            if (!bg || !XBOX_IMAGE_URL_RE.test(bg) || !isLikelyAchievementArtBox(el))
                return;
            setImportantStyle(el, "background-size", "contain");
            setImportantStyle(el, "background-position", "center center");
            setImportantStyle(el, "background-repeat", "no-repeat");
            setImportantStyle(el, "background-color", "rgba(0,0,0,0.18)");
        });
    }
    catch (_error) {
        // Best effort: Steam changes this DOM often.
    }
};
const installAchievementImageCoverPatch = (unpatchers) => {
    const style = document.createElement("style");
    style.id = "playhub-achievement-cover-style";
    style.textContent = `
    .playhub-achievement-art {
      background-size: contain !important;
      background-position: center center !important;
      background-repeat: no-repeat !important;
    }
    .playhub-achievement-art > img {
      width: 100% !important;
      height: 100% !important;
      object-fit: contain !important;
      object-position: center center !important;
      display: block !important;
    }
    [style*="trueachievements"][style*="background-image"],
    [style*="imagestore"][style*="background-image"],
    [style*="xboxlive"][style*="background-image"],
    [style*="xboxservices"][style*="background-image"],
    [style*="store-images"][style*="background-image"],
    [style*="dlassets"][style*="background-image"],
    [style*="akamaized"][style*="background-image"] {
      background-size: contain !important;
      background-position: center center !important;
      background-repeat: no-repeat !important;
    }
    img[src*="trueachievements"],
    img[src*="imagestore"],
    img[src*="xboxlive"],
    img[src*="xboxservices"],
    img[src*="store-images"],
    img[src*="dlassets"],
    img[src*="akamaized"] {
      object-fit: contain !important;
      object-position: center center !important;
    }
  `;
    document.head.appendChild(style);
    unpatchers.push(() => style.remove());
    const run = () => fixNativeAchievementImageStretch(document);
    run();
    const interval = window.setInterval(() => {
        if (/achievement/i.test(currentRoutePath()))
            run();
    }, 5000);
    unpatchers.push(() => window.clearInterval(interval));
    const observer = new MutationObserver((mutations) => {
        for (const mutation of mutations) {
            mutation.addedNodes.forEach((node) => {
                if (node instanceof Element)
                    fixNativeAchievementImageStretch(node);
            });
        }
    });
    observer.observe(document.body, { childList: true, subtree: true });
    unpatchers.push(() => observer.disconnect());
    const imageLoadListener = (event) => {
        if (event.target instanceof HTMLImageElement) {
            fixNativeAchievementImageStretch(event.target);
        }
    };
    document.addEventListener("load", imageLoadListener, true);
    unpatchers.push(() => document.removeEventListener("load", imageLoadListener, true));
    window.addEventListener("playhub-metadata:achievements-updated", run);
    unpatchers.push(() => window.removeEventListener("playhub-metadata:achievements-updated", run));
};
const PlayhubAchievementsPage = ({ appId }) => {
    const [payload, setPayload] = react_1.default.useState(exports.achievementsCache[String(appId)] || null);
    const [loading, setLoading] = react_1.default.useState(!exports.achievementsCache[String(appId)]);
    react_1.default.useEffect(() => {
        let cancelled = false;
        setLoading(!exports.achievementsCache[String(appId)]);
        loadAchievementsForApp(appId).then((next) => {
            if (!cancelled) {
                setPayload(next || exports.achievementsCache[String(appId)] || null);
                setLoading(false);
            }
        });
        return () => {
            cancelled = true;
        };
    }, [appId]);
    const achievements = allAchievementsFromPayload(payload)
        .slice()
        .sort((a, b) => (b.rtUnlocked || 0) - (a.rtUnlocked || 0));
    const unlocked = achievements.filter((item) => item.bAchieved).length;
    const total = achievements.length || payload?.progress?.total || 0;
    const percent = total ? Math.round((unlocked / total) * 100) : 0;
    const title = payload?.title || (0, exports.appName)(appId);
    const provider = payload?.provider === "xbox" ? "Xbox" : "RetroAchievements";
    const content = loading
        ? react_1.default.createElement("div", { style: { padding: 24 } }, react_1.default.createElement(ui_1.Spinner, null))
        : !achievements.length
            ? react_1.default.createElement("div", { style: { opacity: 0.72, padding: 24 } }, "No achievements loaded for this game.")
            : react_1.default.createElement("div", {
                style: {
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))",
                    gap: 16,
                },
            }, achievements.map((achievement) => react_1.default.createElement("div", {
                key: achievement.strID,
                style: {
                    display: "flex",
                    gap: 16,
                    padding: 16,
                    borderRadius: 12,
                    background: achievement.bAchieved
                        ? "rgba(255,255,255,0.10)"
                        : "rgba(255,255,255,0.055)",
                    opacity: achievement.bAchieved ? 1 : 0.68,
                },
            }, imageElement(achievement, 96), react_1.default.createElement("div", { style: { minWidth: 0 } }, react_1.default.createElement("div", { style: { fontWeight: 700, fontSize: 18, marginBottom: 6 } }, achievement.strName || "Secret achievement"), react_1.default.createElement("div", { style: { opacity: 0.76, lineHeight: 1.35 } }, achievement.strDescription || ""), achievement.bAchieved
                ? react_1.default.createElement("div", { style: { opacity: 0.65, marginTop: 12 } }, achievementDate(achievement.rtUnlocked)
                    ? `Unlocked on ${achievementDate(achievement.rtUnlocked)}`
                    : "Unlocked")
                : react_1.default.createElement("div", { style: { opacity: 0.58, marginTop: 12 } }, achievement.bHidden ? "Hidden" : "Locked")))));
    return react_1.default.createElement("div", { style: { padding: 32, paddingBottom: 120, minHeight: "100vh", boxSizing: "border-box", overflowY: "auto" } }, react_1.default.createElement("div", { style: { display: "flex", alignItems: "center", gap: 16, marginBottom: 22 } }, react_1.default.createElement(ui_1.DialogButton, { focusable: true, onClick: () => ui_1.Navigation.NavigateBack(), style: { width: "auto" } }, "Back"), react_1.default.createElement("div", null, react_1.default.createElement("div", { style: { fontSize: 32, fontWeight: 800 } }, "Achievements"), react_1.default.createElement("div", { style: { opacity: 0.72, marginTop: 4 } }, `${title} · ${provider} · ${unlocked}/${total} (${percent}%)`))), react_1.default.createElement("div", { style: { height: 8, borderRadius: 999, background: "rgba(255,255,255,0.16)", overflow: "hidden", marginBottom: 24 } }, react_1.default.createElement("div", {
        style: {
            width: `${Math.max(0, Math.min(100, percent))}%`,
            height: "100%",
            borderRadius: 999,
            background: "linear-gradient(90deg, #a67cff, #ff2d6f)",
        },
    })), content);
};
const PlayhubAchievementsRoute = () => {
    const appId = routeAchievementAppId();
    return react_1.default.createElement(PlayhubAchievementsPage, { appId });
};
exports.PlayhubAchievementsRoute = PlayhubAchievementsRoute;
const overviewFromReactTree = (tree) => {
    try {
        const holder = (0, ui_1.findInReactTree)(tree, (node) => {
            const overview = node?.props?.overview || node?.overview;
            return overview?.appid ? true : undefined;
        });
        return holder?.props?.overview || holder?.overview || null;
    }
    catch (_error) {
        return null;
    }
};
const appIdFromReactTree = (tree) => {
    const overview = overviewFromReactTree(tree);
    const appId = Number(overview?.appid || 0);
    return Number.isFinite(appId) ? appId : 0;
};
const appendActivityOverlay = (ret, appId, force = false) => {
    // The route-level React append is the mount path that survives Steam Big
    // Picture most consistently. A singleton owner inside PlayhubActivityNewsOverlay
    // prevents duplicate cards when the empty-state trap also fires.
    if (!appId)
        return ret;
    lastObservedGameDetailAppId = Number(appId);
    if (force) {
        noteDetailsTabSelection("Attività");
        noteDetailsTabIndexSelection(0);
    }
    return react_1.default.createElement(react_1.default.Fragment, null, ret, react_1.default.createElement(PlayhubActivityNewsOverlay, { appId, force, source: "route" }));
};
const historyPathFromArgs = (args) => {
    const first = args?.[0];
    if (typeof first === "string")
        return first;
    if (first && typeof first === "object") {
        return String(first.pathname || first.path || first.href || first.url || "");
    }
    return "";
};
exports.historyPathFromArgs = historyPathFromArgs;
const historyStateFromArgs = (args) => {
    const first = args?.[0];
    const second = args?.[1];
    // React Router / Steam history may call push(path, { state }), push(path, state),
    // push({ pathname, state }), replace(location, state), or the raw browser
    // history API with the state as first argument. The previous build only handled
    // the direct state shapes, so Steam's Navigator.App(appid, { gidPartnerEvent })
    // slipped through as args[1].state and kept polluting the back stack.
    if (first && typeof first === "object") {
        if (first.state?.event_to_show)
            return first.state;
        if (first.event_to_show)
            return first;
        if ("state" in first && first.state)
            return first.state;
    }
    if (second && typeof second === "object") {
        if (second.state?.event_to_show)
            return second.state;
        if (second.event_to_show)
            return second;
        if ("state" in second && second.state)
            return second.state;
    }
    return second;
};
const isPlayhubNativeNewsRouteState = (state) => {
    const eventToShow = state?.event_to_show;
    if (!eventToShow)
        return false;
    const eventId = eventToShow.eventid || eventToShow.gidPartnerEvent || eventToShow.gid || eventToShow.GID;
    return !!eventId && !!playhubNativePartnerEventForGid(eventId);
};
const playhubNativeNewsRouteAppId = (state, fallbackPath = "") => {
    const eventToShow = state?.event_to_show || {};
    const appId = Number(eventToShow.appid || gameDetailAppIdFromPath(fallbackPath));
    return Number.isFinite(appId) && appId > 0 ? appId : 0;
};
const shouldReplacePlayhubNativeNewsPush = (targetPath, state) => {
    if (!isPlayhubNativeNewsRouteState(state))
        return false;
    const targetAppId = playhubNativeNewsRouteAppId(state, targetPath);
    const currentAppId = gameDetailAppIdFromPath(currentRoutePath());
    // Steam's native Activity click normally pushes the same game-detail route with
    // only `event_to_show` added. Its close handler then replaces the current route
    // to remove `event_to_show`, leaving a duplicate game-detail entry behind. That
    // is why Andrea had to press B/Esc once for every news he had opened. For
    // Playhub native news, make that event navigation replace the current game route
    // instead of pushing a new history entry. The modal still opens natively, but
    // closing it returns to the original route without polluting the back stack.
    return !!targetAppId && (!currentAppId || currentAppId === targetAppId);
};
const currentSteamHistoryState = (steamHistory) => {
    const location = steamHistory?.location || globalThis.Router?.WindowStore?.GamepadUIMainWindowInstance?.m_history?.location;
    return location?.state || null;
};
const shouldBackOutOfPlayhubNativeNewsClose = (steamHistory, targetPath, nextState) => {
    const currentState = currentSteamHistoryState(steamHistory);
    if (!isPlayhubNativeNewsRouteState(currentState))
        return false;
    if (isPlayhubNativeNewsRouteState(nextState))
        return false;
    const currentAppId = playhubNativeNewsRouteAppId(currentState, currentRoutePath());
    const targetAppId = Number(gameDetailAppIdFromPath(targetPath) || currentAppId);
    return !!currentAppId && (!targetAppId || currentAppId === targetAppId);
};
const backSteamHistory = (steamHistory) => {
    if (typeof steamHistory?.goBack === "function")
        return steamHistory.goBack();
    if (typeof steamHistory?.back === "function")
        return steamHistory.back();
    if (typeof steamHistory?.go === "function")
        return steamHistory.go(-1);
    return undefined;
};
const installSteamPatches = () => {
    const overviewProto = (0, compat_1.getOverviewPrototype)();
    const detailsStore = (0, compat_1.getSteamGlobal)("appDetailsStore");
    // Instance-bound methods are used in some Steam builds; do not touch a
    // shared prototype (or Object.prototype when stores are plain objects).
    const detailsProto = detailsStore;
    if (!overviewProto || !detailsProto || typeof detailsStore?.GetAppData !== "function") {
        let cancelled = false;
        let delayedUnpatch;
        let retryId;
        let attempts = 0;
        const retry = () => {
            if (cancelled)
                return;
            if ((0, compat_1.getOverviewPrototype)() && typeof (0, compat_1.getSteamGlobal)("appDetailsStore")?.GetAppData === "function") {
                delayedUnpatch = (0, exports.installSteamPatches)();
                return;
            }
            attempts += 1;
            retryId = window.setTimeout(retry, attempts < 40 ? 500 : 2000);
        };
        retry();
        return () => {
            cancelled = true;
            if (retryId !== undefined)
                window.clearTimeout(retryId);
            delayedUnpatch?.();
        };
    }
    let patchesActive = true;
    const unpatchers = [];
    installAchievementImageCoverPatch(unpatchers);
    // Activity news now use Steam's own AppActivityStore and native Activity
    // renderer. Do not mount Playhub overlay/DOM UI here: those paths are kept in
    // source only as old fallbacks, but the integration attempt for this build is
    // intentionally native-only.
    installNativeActivityStorePatch(unpatchers);
    installNativePartnerEventStorePatch(unpatchers);
    installPlayhubHomeActivityPatch(unpatchers);
    const activityRefreshedListener = () => {
        playhubNativeActivityCache().clear();
        playhubNativePartnerEventCache().clear();
        const appId = currentGameDetailAppId();
        void (0, exports.ensureMetadataCache)().then(() => {
            if (appId)
                void refreshPlayhubNativeActivityForApp(appId);
        });
    };
    window.addEventListener("playhub-metadata:activity-refreshed", activityRefreshedListener);
    unpatchers.push(() => window.removeEventListener("playhub-metadata:activity-refreshed", activityRefreshedListener));
    void flushTrueAchievementsNativeCache();
    const flushTimer = window.setTimeout(() => void flushTrueAchievementsNativeCache(), 2500);
    unpatchers.push(() => window.clearTimeout(flushTimer));
    const redirectAchievementTarget = (target) => {
        const raw = String(target || "");
        if (raw.includes("/playhub-metadata/achievements/"))
            return "";
        const appId = achievementAppIdFromPath(raw);
        if (appId && (0, exports.isNonSteamApp)((0, exports.getOverview)(appId)) && shouldShowAchievements(appId)) {
            return playhubAchievementsPath(appId);
        }
        return "";
    };
    if (ui_1.Navigation?.Navigate) {
        unpatchers.push((0, compat_1.patchMethod)(ui_1.Navigation, "Navigate", (_thisValue, original, args) => {
            const redirected = redirectAchievementTarget(args[0]);
            if (redirected)
                return original(redirected);
            return original(...args);
        }));
    }
    try {
        const steamHistory = globalThis.Router?.WindowStore?.GamepadUIMainWindowInstance?.m_history;
        for (const methodName of ["push", "replace"]) {
            if (steamHistory?.[methodName]) {
                unpatchers.push((0, compat_1.patchMethod)(steamHistory, methodName, (_thisValue, original, args) => {
                    const target = (0, exports.historyPathFromArgs)(args);
                    const redirected = redirectAchievementTarget(target);
                    if (redirected)
                        return original(redirected);
                    const state = historyStateFromArgs(args);
                    if (methodName === "push" && shouldReplacePlayhubNativeNewsPush(target, state) && typeof steamHistory.replace === "function") {
                        globalThis.__playhubNativeNewsOpenedWithReplaceAt = Date.now();
                        return steamHistory.replace(...args);
                    }
                    if (methodName === "replace" && shouldBackOutOfPlayhubNativeNewsClose(steamHistory, target || currentRoutePath(), state)) {
                        const replacedAt = Number(globalThis.__playhubNativeNewsOpenedWithReplaceAt || 0);
                        // If our push->replace interception ran, closing the modal should keep using
                        // Steam's replace. If Steam opened via a path we did not intercept, use Back
                        // for the close action so the event entry is removed instead of replaced by a
                        // duplicate app-detail entry.
                        if (!replacedAt || Date.now() - replacedAt > 15000) {
                            return backSteamHistory(steamHistory) ?? original(...args);
                        }
                    }
                    return original(...args);
                }));
            }
        }
    }
    catch (error) {
        console.warn("[Playhub Metadata] history achievement redirect patch skipped", error);
    }
    try {
        for (const methodName of ["pushState", "replaceState"]) {
            const original = window.history?.[methodName];
            if (typeof original !== "function")
                continue;
            const patched = function (...args) {
                const target = String(args[2] || "");
                const redirected = redirectAchievementTarget(target || args[0]);
                if (redirected) {
                    args[2] = redirected;
                }
                const state = historyStateFromArgs(args);
                if (methodName === "pushState" && shouldReplacePlayhubNativeNewsPush(target, state)) {
                    globalThis.__playhubNativeNewsOpenedWithReplaceAt = Date.now();
                    return window.history.replaceState(args[0], args[1], args[2]);
                }
                if (methodName === "replaceState") {
                    const currentState = window.history?.state;
                    if (isPlayhubNativeNewsRouteState(currentState) && !isPlayhubNativeNewsRouteState(state)) {
                        const replacedAt = Number(globalThis.__playhubNativeNewsOpenedWithReplaceAt || 0);
                        if (!replacedAt || Date.now() - replacedAt > 15000) {
                            window.history.back();
                            return undefined;
                        }
                    }
                }
                return original.apply(this, args);
            };
            window.history[methodName] = patched;
            unpatchers.push(() => {
                window.history[methodName] = original;
            });
        }
    }
    catch (error) {
        console.warn("[Playhub Metadata] window history redirect patch skipped", error);
    }
    const clickAchievementRedirect = (event) => {
        try {
            const target = event.target;
            const anchor = target?.closest?.("a[href]");
            const redirected = redirectAchievementTarget(anchor?.getAttribute?.("href") || anchor?.href || "");
            if (redirected) {
                event.preventDefault();
                event.stopPropagation();
                ui_1.Navigation?.Navigate?.(redirected);
            }
        }
        catch (_error) {
            // Best effort only.
        }
    };
    document.addEventListener("click", clickAchievementRedirect, true);
    unpatchers.push(() => document.removeEventListener("click", clickAchievementRedirect, true));
    const clickDetailsTabTracker = (event) => {
        const target = event.target;
        const label = detailsTabLabelFromElement(target);
        const pointerIndex = Number.isFinite(event.clientX) && Number.isFinite(event.clientY)
            ? detailsTabIndexFromPoint(event.clientX, event.clientY)
            : -1;
        const elementIndex = detailsTabIndexFromElement(target);
        const tabIndex = pointerIndex >= 0 ? pointerIndex : elementIndex;
        if (tabIndex >= 0)
            noteDetailsTabIndexSelection(tabIndex);
        if (label)
            noteDetailsTabSelection(label);
    };
    document.addEventListener("click", clickDetailsTabTracker, true);
    unpatchers.push(() => document.removeEventListener("click", clickDetailsTabTracker, true));
    let lastRouteGuardPath = "";
    const routeGuard = () => {
        const path = currentRoutePath();
        if (path === lastRouteGuardPath)
            return;
        lastRouteGuardPath = path;
        const redirected = redirectAchievementTarget(path);
        if (redirected) {
            try {
                ui_1.Navigation?.Navigate?.(redirected);
            }
            catch (_error) {
                // If the router is mid-transition, the route patch below will still catch.
            }
        }
    };
    routeGuard();
    const routeGuardTimer = window.setInterval(routeGuard, 1000);
    const routeGuardEvent = () => {
        lastRouteGuardPath = "";
        routeGuard();
    };
    window.addEventListener("popstate", routeGuardEvent);
    window.addEventListener("hashchange", routeGuardEvent);
    unpatchers.push(() => {
        window.clearInterval(routeGuardTimer);
        window.removeEventListener("popstate", routeGuardEvent);
        window.removeEventListener("hashchange", routeGuardEvent);
    });
    if ((0, compat_1.getSteamGlobal)("appStore")?.GetAppOverviewByAppID) {
        unpatchers.push((0, compat_1.patchMethod)((0, compat_1.getSteamGlobal)("appStore"), "GetAppOverviewByAppID", (_thisValue, original, args) => {
            const requestedAppId = Number(args[0]);
            const result = original(...args);
            if (result || !Number.isFinite(requestedAppId) || requestedAppId <= 0) {
                return result;
            }
            const shortcutAppId = shortcutAppIdForSteamAppId(requestedAppId);
            if (!shortcutAppId || shortcutAppId === requestedAppId)
                return result;
            try {
                const shortcutOverview = original(shortcutAppId);
                if (isNonSteamAppWithoutPatchedMethod(shortcutOverview))
                    return shortcutOverview;
            }
            catch (_error) {
                // Fall through to Steam's native null result.
            }
            return result;
        }));
    }
    unpatchers.push((0, compat_1.patchMethod)(detailsProto, "GetDescriptions", (_thisValue, original, args) => {
        const appId = Number(args[0]);
        const overview = (0, exports.getOverview)(appId);
        const originalResult = original(...args);
        if ((0, exports.isNonSteamApp)(overview)) {
            ensureDetailsOverviewSafeFields(appId);
            const metadata = exports.metadataCache[String(appId)];
            if (metadata) {
                (0, exports.applyMetadata)(appId);
                const appData = (0, compat_1.getSteamGlobal)("appDetailsStore")?.GetAppData?.(appId);
                // Keep Steam's first-run detail bootstrap intact. Returning Playhub data
                // before Steam has created the native details object can make SteamUI
                // render the play bar with an invalid/null AppOverview and crash on
                // BIsApplicationOrTool during the first page open.
                if (appData?.details && appData?.descriptionsData) {
                    return appData.descriptionsData;
                }
            }
            else {
                void (0, exports.ensureMetadataCache)().then(() => {
                    if (exports.metadataCache[String(appId)]) {
                        (0, exports.applyMetadata)(appId);
                        void (0, exports.tryEnrichScreenshotsForApp)(appId);
                    }
                    else {
                        void (0, exports.tryFetchMetadataForApp)(appId);
                    }
                });
            }
        }
        return originalResult;
    }));
    unpatchers.push((0, compat_1.patchMethod)(detailsProto, "GetAssociations", (_thisValue, original, args) => {
        const appId = Number(args[0]);
        const originalResult = original(...args);
        const overview = (0, exports.getOverview)(appId);
        if ((0, exports.isNonSteamApp)(overview))
            ensureDetailsOverviewSafeFields(appId);
        if ((0, exports.isNonSteamApp)(overview) && exports.metadataCache[String(appId)]) {
            (0, exports.applyMetadata)(appId);
            const appData = (0, compat_1.getSteamGlobal)("appDetailsStore")?.GetAppData?.(appId);
            if (appData?.details && appData?.associationData) {
                return appData.associationData;
            }
        }
        return originalResult;
    }));
    unpatchers.push((0, compat_1.patchMethod)(detailsProto, "GetAchievements", (_thisValue, original, args) => {
        const appId = Number(args[0]);
        if ((0, exports.isNonSteamApp)((0, exports.getOverview)(appId))) {
            const payload = exports.achievementsCache[String(appId)];
            if (payload?.steam && shouldShowAchievements(appId))
                return payload.steam;
            if (shouldShowAchievements(appId))
                void loadAchievementsForApp(appId);
            // Steam's native loader expects details.achievements to exist and calls
            // its Steam-only API for shortcuts. Keep first-render/empty data safe.
            return emptySteamAchievementsPayload();
        }
        return original(...args);
    }));
    unpatchers.push((0, compat_1.patchMethod)(overviewProto, "BHasStoreCategory", (thisValue, original, args) => {
        if ((0, exports.isNonSteamApp)(thisValue)) {
            const category = Number(args[0]);
            const metadata = exports.metadataCache[String(thisValue.appid)];
            if (metadata?.store_categories?.includes(category))
                return true;
            if (category === types_1.StoreCategory.Achievements &&
                shouldShowAchievements(Number(thisValue.appid))) {
                return true;
            }
        }
        return original(...args);
    }));
    if (overviewProto?.BIsModOrShortcut) {
        unpatchers.push((0, ui_1.afterPatch)(overviewProto, "BIsModOrShortcut", function (_args, ret) {
            if (!isNonSteamAppWithoutPatchedMethod(this) || ret !== true)
                return ret;
            if (bypassBypass > 0) {
                bypassBypass -= 1;
                return false;
            }
            const path = currentRoutePath();
            if (isLibraryHomeRoute())
                return false;
            if (bypassCounter > 0)
                bypassCounter -= 1;
            return bypassCounter === -1 || bypassCounter > 0;
        }).unpatch);
    }
    if (detailsProto?.BHasRecentlyLaunched) {
        unpatchers.push((0, ui_1.afterPatch)(detailsProto, "BHasRecentlyLaunched", (_args, ret) => {
            bypassCounter = 4;
            return ret;
        }).unpatch);
    }
    ["GetGameID", "GetPrimaryAppID"].forEach((methodName) => {
        if (!overviewProto?.[methodName])
            return;
        unpatchers.push((0, compat_1.patchMethod)(overviewProto, methodName, (_thisValue, original, args) => {
            const previous = bypassCounter;
            bypassCounter = -1;
            try {
                return original(...args);
            }
            finally {
                bypassCounter = previous;
            }
        }));
    });
    if (overviewProto?.GetCanonicalReleaseDate) {
        unpatchers.push((0, compat_1.patchMethod)(overviewProto, "GetCanonicalReleaseDate", (thisValue, original, args) => {
            const metadata = exports.metadataCache[String(thisValue?.appid)];
            if ((0, exports.isNonSteamApp)(thisValue) && metadata?.release_date) {
                return metadata.release_date;
            }
            return original(...args);
        }));
    }
    if (overviewProto?.GetPerClientData) {
        unpatchers.push((0, ui_1.afterPatch)(overviewProto, "GetPerClientData", (_args, ret) => {
            bypassCounter = 4;
            return ret;
        }).unpatch);
    }
    try {
        const appDetailsSections = (0, ui_1.findModuleChild)((module) => {
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
            unpatchers.push((0, ui_1.afterPatch)(appDetailsSections.prototype, "GetSections", function (_args, ret) {
                if (!ret || typeof ret.add !== "function")
                    return ret;
                const overview = _args[0]?.appid ? _args[0] : this?.props?.overview;
                const appId = Number(overview?.appid);
                if (appId && (0, exports.isNonSteamApp)(overview))
                    ensureDetailsOverviewSafeFields(appId);
                if (appId && (0, exports.isNonSteamApp)(overview) && shouldShowAchievements(appId)) {
                    ret.add("achievements");
                    void loadAchievementsForApp(appId);
                }
                if (appId && (0, exports.isNonSteamApp)(overview) && exports.metadataCache[String(appId)]) {
                    lastObservedGameDetailAppId = appId;
                    const metadata = exports.metadataCache[String(appId)];
                    if (metadata?.screenshots?.length) {
                        ret.add("screenshots");
                    }
                    else {
                        void (0, exports.tryEnrichScreenshotsForApp)(appId);
                    }
                    ret.add("community");
                    // Add the real Steam Activity section too. News are deliberately
                    // served through the Activity feed patch, not the Community feed.
                    ret.add("activity");
                }
                return ret;
            }).unpatch);
        }
    }
    catch (error) {
        console.warn("[Playhub Metadata] app details sections patch skipped", error);
    }
    try {
        const httpClient = (0, ui_1.findModuleChild)((module) => {
            if (!module || typeof module !== "object")
                return undefined;
            return (0, compat_1.moduleEntries)(module).map(([, value]) => value).find((value) => typeof value?.get === "function" && typeof value?.post === "function" &&
                (typeof value?.request === "function" || typeof value?.put === "function"));
        });
        const patchFeedMethod = (methodName) => {
            if (!httpClient?.[methodName])
                return;
            unpatchers.push((0, compat_1.patchMethod)(httpClient, methodName, (_thisValue, original, args) => {
                const url = String(args[0] || "");
                const activityAppId = activityAppIdFromUrl(url);
                if (activityAppId) {
                    return steamActivityPayloadForApp(activityAppId).then((payload) => {
                        if (payload)
                            return payload;
                        return original(...args);
                    });
                }
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
        };
        patchFeedMethod("get");
        patchFeedMethod("post");
    }
    catch (error) {
        console.warn("[Playhub Metadata] community feed patch skipped", error);
    }
    try {
        const communityVoteModule = (0, ui_1.findModuleChild)((module) => {
            if (!module || typeof module !== "object")
                return undefined;
            if (module.bJ && typeof module.dK === "function")
                return module;
            return undefined;
        });
        if (communityVoteModule?.dK) {
            unpatchers.push((0, compat_1.patchMethod)(communityVoteModule, "dK", (_thisValue, original, args) => {
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
    tryInstallAchievementStorePatch(unpatchers);
    let achievementPatchAttempts = 0;
    const achievementPatchTimer = window.setInterval(() => {
        achievementPatchAttempts += 1;
        if (tryInstallAchievementStorePatch(unpatchers) || achievementPatchAttempts >= 30) {
            window.clearInterval(achievementPatchTimer);
        }
    }, 1000);
    unpatchers.push(() => window.clearInterval(achievementPatchTimer));
    // Do not routerHook.addPatch Steam's native achievement routes. In recent
    // Decky dev builds that can crash RouterHook.processList before our custom
    // page renders. Redirect navigation/history/clicks instead and let the
    // native route fall back safely if Steam opens it by another internal path.
    const patchedRouteProps = new WeakSet();
    const addRoutePatch = (route, callback) => {
        try {
            const patch = api_1.routerHook.addPatch(route, (tree) => patchesActive ? callback(tree) : tree);
            unpatchers.push(() => api_1.routerHook.removePatch(route, patch));
        }
        catch (error) {
            console.warn(`[Playhub Metadata] optional route patch skipped: ${route}`, error);
        }
    };
    GAME_DETAIL_ROUTES.forEach((route) => {
        addRoutePatch(route, (tree) => {
            const routeProps = (0, ui_1.findInReactTree)(tree, (x) => x?.renderFunc);
            if (routeProps?.renderFunc && !patchedRouteProps.has(routeProps)) {
                patchedRouteProps.add(routeProps);
                const renderPatch = (0, ui_1.afterPatch)(routeProps, "renderFunc", (_args, ret) => {
                    const overview = ret?.props?.children?.props?.overview || overviewFromReactTree(ret);
                    const appId = Number(overview?.appid || appIdFromReactTree(ret) || currentGameDetailAppId());
                    const appOverview = overview || (0, exports.getOverview)(appId);
                    if (appId && (0, exports.isNonSteamApp)(appOverview)) {
                        lastObservedGameDetailAppId = appId;
                        bypassBypass = 11;
                        void (0, exports.ensureMetadataCache)().then(() => {
                            (0, exports.applyMetadata)(appId);
                            void (0, exports.tryEnrichScreenshotsForApp)(appId);
                            void (0, exports.tryFetchMetadataForApp)(appId);
                        });
                        void loadAchievementsForApp(appId);
                        void refreshPlayhubNativeActivityForApp(appId);
                        return ret;
                    }
                    return ret;
                });
                unpatchers.push(renderPatch.unpatch);
            }
            return tree;
        });
    });
    GAME_ACTIVITY_ROUTES.forEach((route) => {
        addRoutePatch(route, (tree) => {
            const routeProps = (0, ui_1.findInReactTree)(tree, (x) => x?.renderFunc);
            if (routeProps?.renderFunc && !patchedRouteProps.has(routeProps)) {
                patchedRouteProps.add(routeProps);
                const renderPatch = (0, ui_1.afterPatch)(routeProps, "renderFunc", (_args, ret) => {
                    const treeAppId = appIdFromReactTree(ret);
                    const appId = currentGameDetailAppId() || treeAppId;
                    const overview = overviewFromReactTree(ret) || (0, exports.getOverview)(appId);
                    if (appId && (0, exports.isNonSteamApp)(overview)) {
                        lastObservedGameDetailAppId = appId;
                        noteDetailsTabSelection("Attività");
                        noteDetailsTabIndexSelection(0);
                        void (0, exports.ensureMetadataCache)().then(() => {
                            (0, exports.applyMetadata)(appId);
                        });
                        void refreshPlayhubNativeActivityForApp(appId);
                        return ret;
                    }
                    return ret;
                });
                unpatchers.push(renderPatch.unpatch);
            }
            return tree;
        });
    });
    return () => {
        patchesActive = false;
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
exports.installSteamPatches = installSteamPatches;
const allNonSteamGames = async () => {
    const byId = new Map();
    const addEntry = (entry) => {
        const appid = Number(entry?.appid ?? entry?.app_id ?? entry?.unAppID ?? entry?.nAppID ?? entry);
        if (!Number.isFinite(appid) || appid <= 0)
            return;
        const overview = (0, exports.getOverview)(appid);
        const nonSteam = entry?.isNonSteam === true || (0, exports.isNonSteamApp)(overview);
        if (!nonSteam)
            return;
        const previous = byId.get(appid) || {};
        byId.set(appid, {
            ...previous,
            appid,
            name: (0, exports.cleanTitle)(overview?.display_name ||
                overview?.localized_name ||
                entry?.name ||
                entry?.title ||
                previous.name ||
                `App ${appid}`),
            exe: entry?.exe || previous.exe || "",
            start_dir: entry?.start_dir || previous.start_dir || "",
            launch_options: entry?.launch_options || previous.launch_options || "",
            shortcut_path: entry?.shortcut_path || previous.shortcut_path || "",
        });
    };
    try {
        (0, compat_1.getSteamGlobal)("appStore")?.allApps?.forEach?.(addEntry);
        (0, compat_1.getSteamGlobal)("appStore")?.m_mapAppOverview?.forEach?.(addEntry);
    }
    catch (_error) {
        // Continue with backend fallback.
    }
    try {
        const localShortcuts = await Promise.resolve().then(() => __importStar(require("./backend"))).then((m) => m.getLocalShortcuts());
        localShortcuts.forEach(addEntry);
    }
    catch (_error) {
        // Optional fallback.
    }
    return Array.from(byId.values()).sort((a, b) => a.name.localeCompare(b.name));
};
exports.allNonSteamGames = allNonSteamGames;
const RETIRED_RPCS3_INPUT_PROFILE = "Playhub Steam Controller";
const stripRetiredRpcs3LaunchOptions = (launchOptions) => {
    const escaped = RETIRED_RPCS3_INPUT_PROFILE.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const profilePattern = new RegExp(`(?:^|\\s)--input-config(?:=|\\s+)(?:"${escaped}"|'${escaped}')(?=\\s|$)`, "gi");
    let seenNoGui = false;
    return String(launchOptions || "")
        .replace(profilePattern, " ")
        .replace(/(?:^|\s)--no-gui(?=\s|$)/gi, () => {
        if (seenNoGui)
            return " ";
        seenNoGui = true;
        return " --no-gui";
    })
        .replace(/\s{2,}/g, " ")
        .trim();
};
/**
 * Remove launch/config overrides left by the retired RPCS3 controller
 * experiment. This does not change RPCS3's normal SDL configuration.
 */
const cleanupRetiredRpcs3ControllerOverrides = async () => {
    try {
        const games = await (0, exports.allNonSteamGames)();
        const apps = window?.SteamClient?.Apps;
        if (!apps)
            return;
        let cleaned = 0;
        for (const game of games) {
            if (!isRpcs3GameOption(game))
                continue;
            const current = String(game.launch_options || "");
            const next = stripRetiredRpcs3LaunchOptions(current);
            try {
                // Return third-party shortcuts to Steam's default controller policy.
                apps.SetThirdPartyControllerConfiguration?.(game.appid, 1);
                if (next !== current.trim() && apps.SetShortcutLaunchOptions) {
                    apps.SetShortcutLaunchOptions(game.appid, next);
                    cleaned += 1;
                }
            }
            catch (error) {
                console.warn(`[Playhub Metadata] retired RPCS3 controller cleanup failed for ${game.name}`, error);
            }
        }
        if (cleaned) {
            console.log(`[Playhub Metadata] removed retired RPCS3 controller options from ${cleaned} shortcut(s)`);
        }
    }
    catch (error) {
        console.warn("[Playhub Metadata] retired RPCS3 controller cleanup failed", error);
    }
};
exports.cleanupRetiredRpcs3ControllerOverrides = cleanupRetiredRpcs3ControllerOverrides;
};
factories["types"] = function(module, exports, require) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CATEGORY_LABELS = exports.StoreCategory = void 0;
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
})(StoreCategory || (exports.StoreCategory = StoreCategory = {}));
exports.CATEGORY_LABELS = {
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
};
factories.vendor = function(module, exports, require) {
// Runtime dependencies retained verbatim from the supplied 1.8.0 build. See vendor/README.md.
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
const openFilePicker = api.openFilePicker;

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
    var attr = props.attr,
      size = props.size,
      title = props.title,
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
function FaXbox (props) {
  return GenIcon({"attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M369.9 318.2c44.3 54.3 64.7 98.8 54.4 118.7-7.9 15.1-56.7 44.6-92.6 55.9-29.6 9.3-68.4 13.3-100.4 10.2-38.2-3.7-76.9-17.4-110.1-39C93.3 445.8 87 438.3 87 423.4c0-29.9 32.9-82.3 89.2-142.1 32-33.9 76.5-73.7 81.4-72.6 9.4 2.1 84.3 75.1 112.3 109.5zM188.6 143.8c-29.7-26.9-58.1-53.9-86.4-63.4-15.2-5.1-16.3-4.8-28.7 8.1-29.2 30.4-53.5 79.7-60.3 122.4-5.4 34.2-6.1 43.8-4.2 60.5 5.6 50.5 17.3 85.4 40.5 120.9 9.5 14.6 12.1 17.3 9.3 9.9-4.2-11-.3-37.5 9.5-64 14.3-39 53.9-112.9 120.3-194.4zm311.6 63.5C483.3 127.3 432.7 77 425.6 77c-7.3 0-24.2 6.5-36 13.9-23.3 14.5-41 31.4-64.3 52.8C367.7 197 427.5 283.1 448.2 346c6.8 20.7 9.7 41.1 7.4 52.3-1.7 8.5-1.7 8.5 1.4 4.6 6.1-7.7 19.9-31.3 25.4-43.5 7.4-16.2 15-40.2 18.6-58.7 4.3-22.5 3.9-70.8-.8-93.4zM141.3 43C189 40.5 251 77.5 255.6 78.4c.7.1 10.4-4.2 21.6-9.7 63.9-31.1 94-25.8 107.4-25.2-63.9-39.3-152.7-50-233.9-11.7-23.4 11.1-24 11.9-9.4 11.2z"},"child":[]}]})(props);
}function FaPlaystation (props) {
  return GenIcon({"attr":{"viewBox":"0 0 576 512"},"child":[{"tag":"path","attr":{"d":"M570.9 372.3c-11.3 14.2-38.8 24.3-38.8 24.3L327 470.2v-54.3l150.9-53.8c17.1-6.1 19.8-14.8 5.8-19.4-13.9-4.6-39.1-3.3-56.2 2.9L327 381.1v-56.4c23.2-7.8 47.1-13.6 75.7-16.8 40.9-4.5 90.9.6 130.2 15.5 44.2 14 49.2 34.7 38 48.9zm-224.4-92.5v-139c0-16.3-3-31.3-18.3-35.6-11.7-3.8-19 7.1-19 23.4v347.9l-93.8-29.8V32c39.9 7.4 98 24.9 129.2 35.4C424.1 94.7 451 128.7 451 205.2c0 74.5-46 102.8-104.5 74.6zM43.2 410.2c-45.4-12.8-53-39.5-32.3-54.8 19.1-14.2 51.7-24.9 51.7-24.9l134.5-47.8v54.5l-96.8 34.6c-17.1 6.1-19.7 14.8-5.8 19.4 13.9 4.6 39.1 3.3 56.2-2.9l46.4-16.9v48.8c-51.6 9.3-101.4 7.3-153.9-10z"},"child":[]}]})(props);
}function FaTrophy (props) {
  return GenIcon({"attr":{"viewBox":"0 0 576 512"},"child":[{"tag":"path","attr":{"d":"M552 64H448V24c0-13.3-10.7-24-24-24H152c-13.3 0-24 10.7-24 24v40H24C10.7 64 0 74.7 0 88v56c0 35.7 22.5 72.4 61.9 100.7 31.5 22.7 69.8 37.1 110 41.7C203.3 338.5 240 360 240 360v72h-48c-35.3 0-64 20.7-64 56v12c0 6.6 5.4 12 12 12h296c6.6 0 12-5.4 12-12v-12c0-35.3-28.7-56-64-56h-48v-72s36.7-21.5 68.1-73.6c40.3-4.6 78.6-19 110-41.7 39.3-28.3 61.9-65 61.9-100.7V88c0-13.3-10.7-24-24-24zM99.3 192.8C74.9 175.2 64 155.6 64 144v-16h64.2c1 32.6 5.8 61.2 12.8 86.2-15.1-5.2-29.2-12.4-41.7-21.4zM512 144c0 16.1-17.7 36.1-35.3 48.8-12.5 9-26.7 16.2-41.8 21.4 7-25 11.8-53.6 12.8-86.2H512v16z"},"child":[]}]})(props);
}function FaTags (props) {
  return GenIcon({"attr":{"viewBox":"0 0 640 512"},"child":[{"tag":"path","attr":{"d":"M497.941 225.941L286.059 14.059A48 48 0 0 0 252.118 0H48C21.49 0 0 21.49 0 48v204.118a48 48 0 0 0 14.059 33.941l211.882 211.882c18.744 18.745 49.136 18.746 67.882 0l204.118-204.118c18.745-18.745 18.745-49.137 0-67.882zM112 160c-26.51 0-48-21.49-48-48s21.49-48 48-48 48 21.49 48 48-21.49 48-48 48zm513.941 133.823L421.823 497.941c-18.745 18.745-49.137 18.745-67.882 0l-.36-.36L527.64 323.522c16.999-16.999 26.36-39.6 26.36-63.64s-9.362-46.641-26.36-63.64L331.397 0h48.721a48 48 0 0 1 33.941 14.059l211.882 211.882c18.745 18.745 18.745 49.137 0 67.882z"},"child":[]}]})(props);
}function FaSearch (props) {
  return GenIcon({"attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"},"child":[]}]})(props);
}function FaNewspaper (props) {
  return GenIcon({"attr":{"viewBox":"0 0 576 512"},"child":[{"tag":"path","attr":{"d":"M552 64H88c-13.255 0-24 10.745-24 24v8H24c-13.255 0-24 10.745-24 24v272c0 30.928 25.072 56 56 56h472c26.51 0 48-21.49 48-48V88c0-13.255-10.745-24-24-24zM56 400a8 8 0 0 1-8-8V144h16v248a8 8 0 0 1-8 8zm236-16H140c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm208 0H348c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm-208-96H140c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm208 0H348c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm0-96H140c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h360c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12z"},"child":[]}]})(props);
}function FaIdCard (props) {
  return GenIcon({"attr":{"viewBox":"0 0 576 512"},"child":[{"tag":"path","attr":{"d":"M528 32H48C21.5 32 0 53.5 0 80v16h576V80c0-26.5-21.5-48-48-48zM0 432c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V128H0v304zm352-232c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-16zm0 64c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-16zm0 64c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-16zM176 192c35.3 0 64 28.7 64 64s-28.7 64-64 64-64-28.7-64-64 28.7-64 64-64zM67.1 396.2C75.5 370.5 99.6 352 128 352h8.2c12.3 5.1 25.7 8 39.8 8s27.6-2.9 39.8-8h8.2c28.4 0 52.5 18.5 60.9 44.2 3.2 9.9-5.2 19.8-15.6 19.8H82.7c-10.4 0-18.8-10-15.6-19.8z"},"child":[]}]})(props);
}function FaDatabase (props) {
  return GenIcon({"attr":{"viewBox":"0 0 448 512"},"child":[{"tag":"path","attr":{"d":"M448 73.143v45.714C448 159.143 347.667 192 224 192S0 159.143 0 118.857V73.143C0 32.857 100.333 0 224 0s224 32.857 224 73.143zM448 176v102.857C448 319.143 347.667 352 224 352S0 319.143 0 278.857V176c48.125 33.143 136.208 48.572 224 48.572S399.874 209.143 448 176zm0 160v102.857C448 479.143 347.667 512 224 512S0 479.143 0 438.857V336c48.125 33.143 136.208 48.572 224 48.572S399.874 369.143 448 336z"},"child":[]}]})(props);
}function FaCheck (props) {
  return GenIcon({"attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"},"child":[]}]})(props);
}function FaBolt (props) {
  return GenIcon({"attr":{"viewBox":"0 0 320 512"},"child":[{"tag":"path","attr":{"d":"M296 160H180.6l42.6-129.8C227.2 15 215.7 0 200 0H56C44 0 33.8 8.9 32.2 20.8l-32 240C-1.7 275.2 9.5 288 24 288h118.7L96.6 482.5c-3.6 15.2 8 29.5 23.3 29.5 8.4 0 16.4-4.4 20.8-12l176-304c9.3-15.9-2.2-36-20.7-36z"},"child":[]}]})(props);
}


module.exports = { api, icons: { FaXbox, FaPlaystation, FaTrophy, FaTags, FaSearch, FaNewspaper, FaIdCard, FaDatabase, FaCheck, FaBolt } };

};
const cache = Object.create(null);
function load(id) {
  if (id.startsWith('./')) id = id.slice(2);
  if (id === 'react') return SP_REACT;
  if (id === '@decky/ui') return DFL;
  if (id === '@decky/api') return load('vendor').api;
  if (id === 'react-icons/fa') return load('vendor').icons;
  if (id === 'react/jsx-runtime') {
    const jsx = (type, props, key) => SP_REACT.createElement(type, key == null ? props : { ...props, key });
    return { jsx, jsxs: jsx, Fragment: SP_REACT.Fragment };
  }
  if (cache[id]) return cache[id].exports;
  if (!factories[id]) throw new Error('[Playhub Metadata] Missing bundled module: ' + id);
  const module = { exports: {} }; cache[id] = module;
  factories[id](module, module.exports, load);
  return module.exports;
}
return load('index').default;
})();
export { index as default };
//# sourceMappingURL=index.js.map
