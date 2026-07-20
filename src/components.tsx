import {
  ConfirmModal,
  DialogButton,
  Dropdown,
  DropdownItem,
  Focusable,
  Navigation,
  PanelSection,
  PanelSectionRow,
  ScrollPanel,
  Spinner,
  TextField,
  ToggleField,
  showModal,
  useParams,
} from "@decky/ui";
import { openFilePicker, toaster } from "@decky/api";
import { useCallback, useEffect, useMemo, useState } from "react";
import {
  FaBolt,
  FaCheck,
  FaDatabase,
  FaIdCard,
  FaNewspaper,
  FaPlaystation,
  FaSearch,
  FaTags,
  FaTrophy,
  FaXbox,
} from "react-icons/fa";
import {
  fetchAchievements,
  fetchMetadata,
  autoFetchMetadata,
  getAchievementSettings,
  getMetadata,
  getRetroAchievementsSettings,
  getRpcs3Settings,
  getScraperSettings,
  setScraperLanguageOverride,
  setScraperSettings,
  getActivityRefreshProgress,
  removeMetadata,
  clearAllMetadata,
  resolveRetroAchievementsFromPath,
  resolveRpcs3FromShortcut,
  resolveXboxFromShortcut,
  saveMetadata,
  searchRetroAchievementsGames,
  searchRpcs3TrophySets,
  searchXboxTitles,
  searchMetadata,
  setAchievementCachePolicy,
  setAchievementSource,
  setRetroAchievementsGameId,
  setRetroAchievementsSettings,
  setRpcs3DataPath,
  setRpcs3TrophyId,
  setXboxSettings,
  setXboxTitleId,
  startRefreshSteamActivities,
  startScanMissing,
  testRetroAchievementsCredentials,
  getScanProgress,
  testOpenXblCredentials,
  clearXboxAssociations,
  clearRetroAchievementsAssociations,
  clearRpcs3Associations,
  syncTrueAchievementsProgress,
  syncRetroAchievementsProgress,
  syncRpcs3Progress,
  refetchSteamActivityAssociation,
  clearSteamActivityAssociation,
  setSteamActivityEnabled,
} from "./backend";
import { t } from "./i18n";
import {
  allNonSteamGames,
  appName,
  applyAchievementPayload,
  applyMetadata,
  clearAppliedMetadata,
  clearAchievementsForApp,
  clearAchievementsForApps,
  achievementsCache,
  cleanTitle,
  getAppDetails,
  getOverview,
  isNonSteamApp,
  metadataCache,
  ensureMetadataCache,
  refreshMetadataCache,
  refreshRaSettings,
  isUwphookGameOption,
} from "./steam";
import {
  AchievementSource,
  AchievementCachePolicy,
  CATEGORY_LABELS,
  GameOption,
  MetadataData,
  MetadataSearchResult,
  RetroAchievementsGameResult,
  RetroAchievementsSettings,
  Rpcs3Settings,
  Rpcs3TrophySetResult,
  ScraperSettings,
  StoreCategory,
  XboxSettings,
  XboxTitleResult,
} from "./types";

const FocusableButton = (props: any) => (
  <DialogButton focusable={true} {...props} />
);

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
} as const;

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
} as const;

const cardHeaderStyle = {
  display: "flex",
  alignItems: "center",
  gap: "0.55rem",
  fontSize: "0.98em",
  fontWeight: 700,
  letterSpacing: ".01em",
  minWidth: 0,
} as const;

const cardHintStyle = {
  opacity: 0.6,
  fontSize: "0.85em",
  lineHeight: 1.4,
} as const;

const cardSubheadingStyle = {
  fontSize: "0.85em",
  fontWeight: 700,
  opacity: 0.85,
  marginTop: "0.3rem",
} as const;

const fieldLabelStyle = {
  fontSize: "0.8em",
  opacity: 0.65,
} as const;

const statChipRowStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "0.35rem",
  width: "100%",
  minWidth: 0,
} as const;

const qamCardSpacingStyle = {
  marginBottom: "12px",
} as const;

const QamDropdown = (props: any) => (
  <div
    className="playhub-qam-dropdown"
    style={{ width: "100%", minWidth: 0, maxWidth: "100%", boxSizing: "border-box" }}
  >
    <Dropdown {...props} />
  </div>
);

const isLikelyRpcs3GameOption = (game: Partial<GameOption>) => {
  const text = `${game.exe || ""} ${game.launch_options || ""} ${game.start_dir || ""} ${game.shortcut_path || ""} ${game.name || ""}`
    .toLowerCase()
    .replace(/\\/g, "/");
  return (
    /(?:^|[\s/"'])rpcs3(?:\.exe)?(?:[\s/"']|$)/i.test(text) ||
    text.includes("/dev_hdd0/") ||
    text.includes("/ps3_game/") ||
    text.includes("/ps3iso/") ||
    text.includes("/roms/ps3/") ||
    text.includes("/playstation 3/") ||
    text.includes("eboot.bin")
  );
};

const sliderClampStyle = {
  width: "100%",
  maxWidth: "100%",
  minWidth: 0,
  overflow: "hidden",
  boxSizing: "border-box",
} as const;


const halfButtonStyle = {
  flex: "1 1 45%",
  minWidth: 0,
} as const;

const optionButtonStyle = {
  width: "100%",
  minWidth: 0,
} as const;

const optionContentStyle = {
  width: "100%",
  display: "flex",
  alignItems: "center",
  gap: "8px",
  textAlign: "left",
  minWidth: 0,
} as const;

const PlayhubCard = (props: {
  icon?: any;
  accent?: string;
  title: string;
  hint?: string;
  children?: any;
  style?: any;
}) => {
  const accent = props.accent || PLAYHUB_ACCENTS.library;
  return (
    <div style={{ ...cardStyle, ...(props.style || {}) }}>
      <div style={cardHeaderStyle}>
        {props.icon ? (
          <span
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "26px",
              height: "26px",
              borderRadius: "8px",
              flex: "0 0 auto",
              background: `color-mix(in srgb, ${accent} 20%, transparent)`,
              color: accent,
            }}
          >
            {props.icon}
          </span>
        ) : null}
        <span style={{ minWidth: 0 }}>{props.title}</span>
      </div>
      {props.hint ? <div style={cardHintStyle}>{props.hint}</div> : null}
      {props.children}
    </div>
  );
};

// Progress bar styled after Now Playing's local-music image cache progress:
// a slim rounded track with an accent fill, label on top and counts on the right.
const PlayhubProgressBar = (props: {
  label: string;
  completed?: number;
  total?: number;
  accent?: string;
  busy?: boolean;
}) => {
  const total = Math.max(0, Number(props.total || 0));
  const completed = Math.max(0, Math.min(Number(props.completed || 0), total || Number(props.completed || 0)));
  const percent = total > 0 ? Math.max(0, Math.min(100, Math.round((completed / total) * 100))) : 0;
  const accent = props.accent || "#66c0f4";
  return (
    <div
      style={{
        marginTop: 4,
        padding: "8px 9px",
        borderRadius: 7,
        background: "rgba(255,255,255,.045)",
        overflow: "hidden",
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 8,
          fontSize: ".74em",
          lineHeight: 1.3,
        }}
      >
        <span
          style={{
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
          }}
        >
          {props.label}
        </span>
        {total > 0 ? (
          <span style={{ flex: "0 0 auto", opacity: 0.5 }}>
            {completed}/{total}
          </span>
        ) : null}
      </div>
      <div
        style={{
          height: 3,
          marginTop: 6,
          borderRadius: 999,
          background: "rgba(255,255,255,.10)",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: total > 0 ? `${percent}%` : "0%",
            height: "100%",
            borderRadius: 999,
            background: accent,
            transition: "width 180ms ease",
          }}
        />
      </div>
    </div>
  );
};

const metadataScanLabel = (progress: {
  phase?: string;
  current_title?: string;
  current?: string;
  message?: string;
}) => {
  const title = progress.current_title || progress.current || "";
  if (progress.phase === "ign" && title) return `${t("metadataPhaseIgn")} ${title}`;
  if (progress.phase === "google" && title) return `${t("metadataPhaseGoogle")} ${title}`;
  if (progress.phase === "mymemory" && title) return `${t("metadataPhaseMyMemory")} ${title}`;
  if (progress.phase === "saved" && title) return `${t("metadataPhaseSaved")} ${title}`;
  if (progress.phase === "no_match" && title) return `${t("metadataPhaseNoMatch")} ${title}`;
  if (progress.phase === "failed" && title) return `${t("metadataPhaseFailed")} ${title}`;
  return progress.message || title || t("scanning");
};

const StatChip = (props: { label: string; value: any; accent?: string }) => (
  <div
    style={{
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
    }}
  >
    <span
      style={{
        fontSize: "0.85em",
        opacity: 0.7,
        minWidth: 0,
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
      }}
    >
      {props.label}
    </span>
    <span
      style={{
        fontSize: "1.05em",
        fontWeight: 700,
        flex: "0 0 auto",
        color: props.accent || "#ffffff",
      }}
    >
      {props.value}
    </span>
  </div>
);

const pageStyle = {
  padding: 24,
  paddingTop: 48,
  paddingBottom: 120,
  minHeight: "100vh",
  boxSizing: "border-box",
} as const;

const rowStackStyle = {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  maxWidth: "100%",
  minWidth: 0,
  boxSizing: "border-box",
  gap: "0.65rem",
} as const;

const buttonRowStyle = {
  display: "flex",
  width: "100%",
  maxWidth: "100%",
  minWidth: 0,
  boxSizing: "border-box",
  gap: "0.5rem",
  alignItems: "center",
  flexWrap: "wrap",
} as const;

const spacedButtonRowStyle = {
  ...buttonRowStyle,
  marginTop: "0.35rem",
} as const;

const actionButtonStackStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "stretch",
  gap: "0.35rem",
  flex: "1 1 13rem",
  minWidth: 0,
} as const;

const resultsStackStyle = {
  ...rowStackStyle,
  marginTop: "1.25rem",
} as const;

const fieldStyle = {
  width: "100%",
  maxWidth: "100%",
  minWidth: 0,
  boxSizing: "border-box",
} as const;

const flexFieldStyle = {
  ...fieldStyle,
  flex: "1 1 14rem",
} as const;

const compactTextStyle = {
  opacity: 0.72,
  fontSize: "0.82rem",
  lineHeight: 1.35,
} as const;

const inlineStatusStyle = {
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
  ...compactTextStyle,
} as const;

const scanSpinnerStyle = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  width: "1rem",
  height: "1rem",
  flex: "0 0 1rem",
  overflow: "hidden",
} as const;

const scanSpinnerInnerStyle = {
  display: "inline-flex",
  transform: "scale(0.5)",
  transformOrigin: "center",
} as const;

const activityStatusStyle = {
  ...inlineStatusStyle,
  minHeight: "3.35rem",
} as const;

const activitySpinnerStyle = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  width: "3.35rem",
  height: "3.35rem",
  flex: "0 0 3.35rem",
  overflow: "hidden",
} as const;

const activitySpinnerInnerStyle = {
  display: "inline-flex",
  transform: "scale(0.72)",
  transformOrigin: "center",
} as const;

const sectionHeadingStyle = {
  width: "100%",
  paddingTop: "0.75rem",
  fontWeight: 700,
  fontSize: "0.95rem",
} as const;

const metadataTemplate = (title: string): MetadataData => ({
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

const personsToText = (people?: { name: string }[]) =>
  (people || []).map((person) => person.name).join(", ");

const textToPersons = (value: string) =>
  value
    .split(",")
    .map((name) => name.trim())
    .filter(Boolean)
    .map((name) => ({ name, url: "" }));

const epochToDate = (value?: number | null) => {
  if (!value) return "";
  const date = new Date(value * 1000);
  if (Number.isNaN(date.getTime())) return "";
  return date.toISOString().slice(0, 10);
};

const dateToEpoch = (value: string) => {
  if (!value.trim()) return null;
  const timestamp = Date.parse(`${value.trim()}T00:00:00Z`);
  if (Number.isNaN(timestamp)) return null;
  return Math.floor(timestamp / 1000);
};

const parseRating = (value: string) => {
  if (!value.trim()) return null;
  const number = Number(value);
  if (!Number.isFinite(number)) return null;
  return Math.max(0, Math.min(100, Math.round(number)));
};

const achievementCachePolicies: AchievementCachePolicy[] = [
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
  } catch (_error) {
    return true;
  }
};

const setPostPlayAchievementSyncEnabledSetting = (enabled: boolean) => {
  try {
    window.localStorage.setItem(POST_PLAY_ACHIEVEMENT_SYNC_SETTING_KEY, enabled ? "1" : "0");
  } catch (_error) {
    // Steam's embedded browser may reject storage in unusual states; keep UI optimistic.
  }
  window.dispatchEvent(
    new CustomEvent("playhub-metadata:post-play-sync-setting-changed", {
      detail: { enabled },
    })
  );
};

const clampHomeActivityCount = (value: number) =>
  Math.max(1, Math.min(PLAYHUB_HOME_ACTIVITY_MAX_LIMIT, Math.round(Number.isFinite(value) ? value : PLAYHUB_HOME_ACTIVITY_DEFAULT_LIMIT)));

const readHomeActivityCount = () => {
  try {
    return clampHomeActivityCount(Number(window.localStorage.getItem(PLAYHUB_HOME_ACTIVITY_COUNT_SETTING_KEY) || PLAYHUB_HOME_ACTIVITY_DEFAULT_LIMIT));
  } catch (_error) {
    return PLAYHUB_HOME_ACTIVITY_DEFAULT_LIMIT;
  }
};

const readShowActivitiesInHome = () => {
  try {
    return window.localStorage.getItem(PLAYHUB_HOME_ACTIVITY_SETTING_KEY) === "1";
  } catch (_error) {
    return false;
  }
};

const setShowActivitiesInHomeSetting = (enabled: boolean) => {
  try {
    window.localStorage.setItem(PLAYHUB_HOME_ACTIVITY_SETTING_KEY, enabled ? "1" : "0");
  } catch (_error) {
    // Steam's embedded browser may reject storage in unusual states; keep UI optimistic.
  }
  window.dispatchEvent(
    new CustomEvent("playhub-metadata:home-activity-setting-changed", {
      detail: { enabled },
    })
  );
  window.dispatchEvent(new Event("playhub-metadata:updated"));
};


const shuffleHomeActivitiesSetting = () => {
  const value = `${Date.now()}:${Math.random().toString(36).slice(2)}`;
  try {
    window.localStorage.setItem(PLAYHUB_HOME_ACTIVITY_SHUFFLE_SETTING_KEY, value);
  } catch (_error) {
    // localStorage can fail in odd embedded contexts; the event still asks Steam to resync.
  }
  window.dispatchEvent(
    new CustomEvent("playhub-metadata:home-activity-setting-changed", {
      detail: { shuffle: value },
    })
  );
  window.dispatchEvent(new Event("playhub-metadata:updated"));
};

const resetHomeActivitiesToMostRecentSetting = () => {
  try {
    window.localStorage.removeItem(PLAYHUB_HOME_ACTIVITY_SHUFFLE_SETTING_KEY);
  } catch (_error) {
    // localStorage can fail in odd embedded contexts; the event still asks Steam to resync.
  }
  window.dispatchEvent(
    new CustomEvent("playhub-metadata:home-activity-setting-changed", {
      detail: { shuffle: "" },
    })
  );
  window.dispatchEvent(new Event("playhub-metadata:updated"));
};

const setHomeActivityCountSetting = (count: number) => {
  const clamped = clampHomeActivityCount(count);
  try {
    window.localStorage.setItem(PLAYHUB_HOME_ACTIVITY_COUNT_SETTING_KEY, String(clamped));
  } catch (_error) {
    // Steam's embedded browser may reject storage in unusual states; keep UI optimistic.
  }
  window.dispatchEvent(
    new CustomEvent("playhub-metadata:home-activity-setting-changed", {
      detail: { count: clamped },
    })
  );
  window.dispatchEvent(new Event("playhub-metadata:updated"));
  return clamped;
};

const useNonSteamGames = () => {
  const [games, setGames] = useState<GameOption[]>([]);
  const loadGames = useCallback(async () => {
    const currentGames = await allNonSteamGames();
    setGames(currentGames);
    return currentGames;
  }, []);
  return { games, loadGames };
};

export const Content = () => {
  const { games, loadGames } = useNonSteamGames();
  const [metadataCount, setMetadataCount] = useState(0);
  const [busy, setBusy] = useState(false);
  const [scanMessage, setScanMessage] = useState("");
  const [activityBusy, setActivityBusy] = useState(false);
  const [activityMessage, setActivityMessage] = useState("");
  const [showActivitiesInHome, setShowActivitiesInHome] = useState(readShowActivitiesInHome);
  const [homeActivityCount, setHomeActivityCount] = useState(readHomeActivityCount);
  const [postPlayAchievementSyncEnabled, setPostPlayAchievementSyncEnabled] = useState(readPostPlayAchievementSyncEnabled);
  const [xboxBulkBusy, setXboxBulkBusy] = useState(false);
  const [xboxBulkMessage, setXboxBulkMessage] = useState("");
  const [raBulkBusy, setRaBulkBusy] = useState(false);
  const [raBulkMessage, setRaBulkMessage] = useState("");
  const [rpcs3BulkBusy, setRpcs3BulkBusy] = useState(false);
  const [rpcs3BulkMessage, setRpcs3BulkMessage] = useState("");
  const [rpcs3PathBusy, setRpcs3PathBusy] = useState(false);
  const [rpcs3Settings, setRpcs3SettingsState] = useState<Rpcs3Settings>({
    enabled: true,
    trophy_ids: {},
    data_path: "",
    automatic: true,
    data_path_valid: true,
    data_path_ready: false,
    trophy_set_count: 0,
  });
  const [rpcs3PathDraft, setRpcs3PathDraft] = useState("");
  const [scraper, setScraper] = useState<ScraperSettings | null>(null);
  const [scanProgress, setScanProgress] = useState({ completed: 0, total: 0, phase: "idle", current_title: "" });
  const [activityProgress, setActivityProgress] = useState({ completed: 0, total: 0 });
  const [bulkProgress, setBulkProgress] = useState({ completed: 0, total: 0 });

  const saveScraperSettings = async (
    next: Partial<{ language: string; translate_ign: boolean }>
  ) => {
    try {
      const saved = await setScraperSettings(
        next.language ?? scraper?.language ?? "",
        next.translate_ign ?? null
      );
      setScraper(saved);
    } catch (error) {
      toaster.toast({ title: t("pluginName"), body: String(error) });
    }
  };
  const [ra, setRa] = useState<RetroAchievementsSettings>({
    enabled: false,
    username: "",
    api_key: "",
    game_ids: {},
  });
  const [xbox, setXbox] = useState<XboxSettings>({
    enabled: false,
    api_key: "",
    xuid: "",
    gamertag: "",
    ta_logged_in: false,
    title_ids: {},
  });
  const [retroAchievementCachePolicy, setRetroAchievementCachePolicyState] =
    useState<AchievementCachePolicy>("daily");
  const [xboxAchievementCachePolicy, setXboxAchievementCachePolicyState] =
    useState<AchievementCachePolicy>("daily");
  const [rpcs3AchievementCachePolicy, setRpcs3AchievementCachePolicyState] =
    useState<AchievementCachePolicy>("pc_session");

  const missing = Math.max(games.length - metadataCount, 0);

  const refresh = useCallback(async (forceMetadata = false) => {
    const metadataRefresh = forceMetadata
      ? refreshMetadataCache()
      : ensureMetadataCache();
    const [currentGames, achievementSettings, currentRpcs3Settings, currentScraper] =
      await Promise.all([
        loadGames(),
        getAchievementSettings(),
        getRpcs3Settings(),
        getScraperSettings(),
        metadataRefresh,
      ]);
    setMetadataCount(
      currentGames.filter((game) => metadataCache[String(game.appid)]).length
    );
    setScraper(currentScraper);
    setRa(achievementSettings.retroachievements);
    setXbox(achievementSettings.xbox);
    setRetroAchievementCachePolicyState(achievementSettings.achievement_cache?.retroachievements_policy || achievementSettings.achievement_cache?.policy || "daily");
    setXboxAchievementCachePolicyState(achievementSettings.achievement_cache?.xbox_policy || achievementSettings.achievement_cache?.policy || "daily");
    setRpcs3AchievementCachePolicyState(achievementSettings.achievement_cache?.rpcs3_policy || "pc_session");
    setRpcs3SettingsState(currentRpcs3Settings);
    setRpcs3PathDraft(currentRpcs3Settings.data_path || "");
  }, [loadGames]);

  useEffect(() => {
    void refresh();
  }, [refresh]);

  const scanMissing = async () => {
    if (busy) return;
    setBusy(true);
    setScanProgress({ completed: 0, total: 0, phase: "starting", current_title: "" });
    setScanMessage(t("scanning"));
    try {
      await startScanMissing(games);
      const interval = window.setInterval(async () => {
        const progress = await getScanProgress();
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
          toaster.toast({ title: t("pluginName"), body: t("scanComplete") });
        }
      }, 800);
    } catch (error) {
      setBusy(false);
      toaster.toast({ title: t("pluginName"), body: String(error) });
    }
  };

  const performDeleteAllMetadata = async () => {
    if (busy) return;
    setBusy(true);
    try {
      const appliedEntries = Object.entries(metadataCache);
      await clearAllMetadata();
      appliedEntries.forEach(([appIdText, metadata]) => {
        clearAppliedMetadata(Number(appIdText), metadata);
      });
      Object.keys(metadataCache).forEach((key) => delete metadataCache[key]);
      await refresh(true);
      setScanMessage(t("deleteAllMetadataDone"));
      toaster.toast({ title: t("pluginName"), body: t("deleteAllMetadataDone") });
      window.dispatchEvent(new Event("playhub-metadata:updated"));
    } catch (error) {
      toaster.toast({ title: t("pluginName"), body: String(error) });
    } finally {
      setBusy(false);
    }
  };

  const deleteAllMetadata = () => {
    if (busy) return;
    showModal(
      <ConfirmModal
        strTitle={t("deleteMetadataConfirmTitle")}
        strDescription={t("deleteAllMetadataConfirm")}
        strOKButtonText={t("confirmYes")}
        strCancelButtonText={t("confirmNo")}
        bDestructiveWarning
        onOK={() => void performDeleteAllMetadata()}
      />
    );
  };

  const refreshActivities = async () => {
    if (activityBusy) return;
    setActivityBusy(true);
    setActivityMessage(t("refreshingActivities"));
    try {
      await startRefreshSteamActivities(games);
      const interval = window.setInterval(async () => {
        const progress = await getActivityRefreshProgress();
        setActivityProgress({ completed: progress.completed || 0, total: progress.total || 0 });
        setActivityMessage(
          progress.current ||
            progress.message ||
            `${progress.completed}/${progress.total}`
        );
        if (!progress.running) {
          window.clearInterval(interval);
          await refreshMetadataCache();
          setMetadataCount(
            games.filter((game) => metadataCache[String(game.appid)]).length
          );
          setActivityBusy(false);
          window.dispatchEvent(new Event("playhub-metadata:activity-refreshed"));
          window.dispatchEvent(new Event("playhub-metadata:updated"));
          toaster.toast({ title: t("pluginName"), body: t("activityRefreshComplete") });
        }
      }, 800);
    } catch (error) {
      setActivityBusy(false);
      toaster.toast({ title: t("pluginName"), body: String(error) });
    }
  };


  const retroAchievementLaunchText = (game: GameOption) =>
    [game.exe, game.start_dir, game.launch_options, game.shortcut_path, game.name]
      .map((value) => String(value || ""))
      .filter(Boolean)
      .join(" ");

  const isExcludedRetroAchievementsPlatform = (game: GameOption) => {
    if (isLikelyRpcs3GameOption(game)) return true;
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

    return (
      emulatorHints.some((hint) => text.includes(hint)) ||
      platformPathHints.some((hint) => text.includes(hint)) ||
      platformExtensions.some((extension) => text.includes(extension))
    );
  };

  const isLikelyRetroAchievementsTarget = (game: GameOption, source: AchievementSource = "auto") => {
    if (isUwphookGameOption(game) || isExcludedRetroAchievementsPlatform(game)) return false;
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
    if (emulatorHints.some((hint) => text.includes(hint))) return true;
    if (romHints.some((hint) => text.includes(hint.toLowerCase()))) return true;
    return source === "retroachievements";
  };

  const scanRetroAchievements = async () => {
    if (raBulkBusy || xboxBulkBusy || busy) return;
    if (!ra.enabled || !ra.api_key.trim()) {
      toaster.toast({ title: t("pluginName"), body: t("retroLoginFailed") });
      return;
    }
    const settings = await getAchievementSettings();
    const sources = settings.achievement_sources || {};
    const existingIds = settings.retroachievements.game_ids || {};
    const targets = games.filter((game) => {
      const key = String(game.appid);
      const source = sources[key] || "auto";
      if (source === "disabled" || source === "xbox") return false;
      if (existingIds[key]) return false;
      if (achievementsCache[key]?.steam?.nTotal) return false;
      return isLikelyRetroAchievementsTarget(game, source as AchievementSource);
    });
    if (!targets.length) {
      toaster.toast({ title: t("pluginName"), body: t("retroBulkNothing") });
      return;
    }
    setRaBulkBusy(true);
    setRaBulkMessage(`${t("retroBulkScanning")}: 0/${targets.length}`);
    let assigned = 0;
    let skipped = 0;
    try {
      for (let index = 0; index < targets.length; index += 1) {
        const game = targets[index];
        const prefix = `${index + 1}/${targets.length} - ${game.name}`;
        setBulkProgress({ completed: index, total: targets.length });
        setRaBulkMessage(`${prefix}: ${t("retroBulkDetecting")}`);
        try {
          const payload = await resolveRetroAchievementsFromPath(
            game.appid,
            retroAchievementLaunchText(game),
            game.name
          );
          if (payload?.steam?.nTotal) {
            applyAchievementPayload(game.appid, payload);
            assigned += 1;
            setRaBulkMessage(`${prefix}: ${t("retroBulkAppliedOne")}`);
          } else {
            skipped += 1;
            setRaBulkMessage(`${prefix}: ${t("retroBulkSkippedOne")}`);
          }
        } catch (_error) {
          skipped += 1;
          setRaBulkMessage(`${prefix}: ${t("retroBulkSkippedOne")}`);
        }
      }
      const refreshed = await getAchievementSettings();
      setRa(refreshed.retroachievements);
      await refreshRaSettings();
      setRaBulkMessage(`${t("retroBulkDone")}: ${assigned} ${t("retroBulkApplied")}, ${skipped} ${t("retroBulkSkipped")}`);
      toaster.toast({
        title: t("pluginName"),
        body: `${t("retroBulkDone")}: ${assigned} ${t("retroBulkApplied")}, ${skipped} ${t("retroBulkSkipped")}`,
      });
    } finally {
      setRaBulkBusy(false);
    }
  };

  const syncMatchedRetroAchievementsProgress = async () => {
    if (raBulkBusy || xboxBulkBusy || busy) return;
    if (!ra.enabled || !ra.api_key.trim()) {
      toaster.toast({ title: t("pluginName"), body: t("retroLoginFailed") });
      return;
    }
    const settings = await getAchievementSettings();
    const sources = settings.achievement_sources || {};
    const existingIds = settings.retroachievements.game_ids || {};
    const targets = games.filter((game) => {
      const key = String(game.appid);
      const source = sources[key] || "auto";
      if (source === "disabled" || source === "xbox") return false;
      if (isExcludedRetroAchievementsPlatform(game)) return false;
      return Boolean(existingIds[key]);
    });
    if (!targets.length) {
      toaster.toast({ title: t("pluginName"), body: t("retroSyncNothing") });
      return;
    }
    setRaBulkBusy(true);
    setRaBulkMessage(`${t("retroSyncProgress")}: 0/${targets.length}`);
    let synced = 0;
    let skipped = 0;
    try {
      for (let index = 0; index < targets.length; index += 1) {
        const game = targets[index];
        const prefix = `${index + 1}/${targets.length} - ${game.name}`;
        setBulkProgress({ completed: index, total: targets.length });
        setRaBulkMessage(`${prefix}: ${t("retroSyncingProgress")}`);
        try {
          const payload = await syncRetroAchievementsProgress(game.appid);
          if (payload?.steam?.nTotal) {
            applyAchievementPayload(game.appid, payload);
            synced += 1;
            setRaBulkMessage(`${prefix}: ${t("retroBulkAppliedOne")}`);
          } else {
            skipped += 1;
            setRaBulkMessage(`${prefix}: ${t("retroBulkSkippedOne")}`);
          }
        } catch (_error) {
          skipped += 1;
          setRaBulkMessage(`${prefix}: ${t("retroBulkSkippedOne")}`);
        }
      }
      await refreshRaSettings();
      setRaBulkMessage(`${t("retroSyncDone")}: ${synced} ${t("retroBulkApplied")}, ${skipped} ${t("retroBulkSkipped")}`);
      toaster.toast({
        title: t("pluginName"),
        body: `${t("retroSyncDone")}: ${synced} ${t("retroBulkApplied")}, ${skipped} ${t("retroBulkSkipped")}`,
      });
    } finally {
      setRaBulkBusy(false);
    }
  };


  const saveRaSettings = async (next: Partial<RetroAchievementsSettings>) => {
    const merged = { ...ra, ...next };
    setRa(merged);
    const saved = await setRetroAchievementsSettings(
      merged.enabled,
      merged.username,
      merged.api_key
    );
    setRa(saved);
    await refreshRaSettings();
  };

  const testRaLogin = async () => {
    const saved = await setRetroAchievementsSettings(
      true,
      ra.username,
      ra.api_key
    );
    setRa(saved);
    await refreshRaSettings();
    const result = await testRetroAchievementsCredentials(
      saved.username,
      saved.api_key
    );
    toaster.toast({
      title: t("pluginName"),
      body: result.ok ? t("retroLoginOk") : result.message || t("retroLoginFailed"),
    });
  };

  const saveXboxSettings = async (next: Partial<XboxSettings>) => {
    const merged = { ...xbox, ...next };
    setXbox(merged);
    const saved = await setXboxSettings(merged.enabled, merged.api_key || "");
    setXbox(saved);
    await refreshRaSettings();
  };

  const saveAchievementCachePolicy = async (
    provider: "retroachievements" | "xbox" | "rpcs3",
    policy: AchievementCachePolicy
  ) => {
    if (provider === "retroachievements") setRetroAchievementCachePolicyState(policy);
    else if (provider === "xbox") setXboxAchievementCachePolicyState(policy);
    else setRpcs3AchievementCachePolicyState(policy);
    const saved = await setAchievementCachePolicy(provider, policy);
    // Reflect exactly what the backend persisted.
    setRetroAchievementCachePolicyState(
      (saved.retroachievements_policy as AchievementCachePolicy) || policy
    );
    setXboxAchievementCachePolicyState(
      (saved.xbox_policy as AchievementCachePolicy) || policy
    );
    setRpcs3AchievementCachePolicyState(
      (saved.rpcs3_policy as AchievementCachePolicy) || policy
    );
    const settings = await getAchievementSettings();
    const sources = settings.achievement_sources || {};
    const raIds = settings.retroachievements.game_ids || {};
    const xboxIds = settings.xbox.title_ids || {};
    const rpcs3Ids = settings.rpcs3?.trophy_ids || {};
    clearAchievementsForApps(
      games
        .filter((game) => {
          const key = String(game.appid);
          const source = sources[key] || "auto";
          if (source === "disabled") return false;
          if (provider === "retroachievements") {
            return Boolean(raIds[key]) && source !== "xbox" && source !== "rpcs3";
          }
          if (provider === "xbox") {
            return Boolean(xboxIds[key]) && source !== "retroachievements" && source !== "rpcs3";
          }
          return Boolean(rpcs3Ids[key]) && source !== "retroachievements" && source !== "xbox";
        })
        .map((game) => game.appid)
    );
    await refreshRaSettings();
    window.dispatchEvent(new Event("playhub-metadata:achievement-cache-policy-changed"));
  };

  const testXboxLogin = async () => {
    if (!xbox.api_key.trim()) {
      const saved = await setXboxSettings(true, xbox.api_key || "");
      setXbox(saved);
      await refreshRaSettings();
      toaster.toast({ title: t("pluginName"), body: t("xboxLoginNeedsProfile") });
      return;
    }
    const result = await testOpenXblCredentials(xbox.api_key || "");
    const refreshed = await getAchievementSettings();
    setXbox(refreshed.xbox);
    await refreshRaSettings();
    toaster.toast({ title: t("pluginName"), body: result.ok ? t("xboxLoginOk") : result.message || t("xboxLoginFailed") });
  };

  const openExternalUrl = (url: string) => {
    try {
      const steamClient = (window as any)?.SteamClient;
      if (steamClient?.System?.OpenInSystemBrowser) {
        steamClient.System.OpenInSystemBrowser(url);
        return;
      }
      if (steamClient?.Overlay?.OpenExternalBrowserURL) {
        steamClient.Overlay.OpenExternalBrowserURL(url);
        return;
      }
    } catch (_error) {
      // Fall back to the browser below.
    }
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const openRetroAchievements = () => openExternalUrl("https://retroachievements.org/");
  const openOpenXbl = () => openExternalUrl("https://xbl.io/");

  const clearAllXboxMatches = async () => {
    if (xboxBulkBusy || busy) return;
    setXboxBulkBusy(true);
    try {
      const saved = await clearXboxAssociations();
      setXbox(saved);
      clearAchievementsForApps(games.map((game) => game.appid));
      await refreshRaSettings();
      setXboxBulkMessage(t("xboxClearAllDone"));
      toaster.toast({ title: t("pluginName"), body: t("xboxClearAllDone") });
    } finally {
      setXboxBulkBusy(false);
    }
  };

  const clearAllRetroAchievementsMatches = async () => {
    if (raBulkBusy || busy) return;
    setRaBulkBusy(true);
    try {
      const saved = await clearRetroAchievementsAssociations();
      setRa(saved);
      clearAchievementsForApps(games.map((game) => game.appid));
      await refreshRaSettings();
      setRaBulkMessage(t("retroClearAllDone"));
      toaster.toast({ title: t("pluginName"), body: t("retroClearAllDone") });
    } finally {
      setRaBulkBusy(false);
    }
  };

  const bulkApplyXboxAchievements = async () => {
    if (xboxBulkBusy || busy) return;
    if (!xbox.enabled) {
      toaster.toast({ title: t("pluginName"), body: t("xboxLoginFailed") });
      return;
    }
    const targets = games.filter((game) => isUwphookGameOption(game) && !xbox.title_ids[String(game.appid)]);
    if (!targets.length) {
      toaster.toast({ title: t("pluginName"), body: t("xboxBulkNothing") });
      return;
    }
    setXboxBulkBusy(true);
    setXboxBulkMessage(`${t("xboxBulkScanning")}: 0/${targets.length}`);
    let assigned = 0;
    let skipped = 0;
    try {
      for (let index = 0; index < targets.length; index += 1) {
        const game = targets[index];
        const prefix = `${index + 1}/${targets.length} - ${game.name}`;
        setBulkProgress({ completed: index, total: targets.length });
        setXboxBulkMessage(`${prefix}: ${t("xboxBulkSearching")}`);
        try {
          const results = await searchXboxTitles(game.name, 5, game.appid, false);
          const best = results.find((item) => item.total == null || item.total > 0) || results[0];
          if (!best || best.score < 0.82) {
            skipped += 1;
            setXboxBulkMessage(`${prefix}: ${t("xboxBulkSkippedOne")}`);
            continue;
          }
          setXboxBulkMessage(`${prefix}: ${t("xboxBulkApplying")}`);
          await setXboxTitleId(game.appid, best.id);
          await setAchievementSource(game.appid, "xbox");
          clearAchievementsForApp(game.appid);
          const payload = await fetchAchievements(game.appid);
          if (payload?.steam?.nTotal) {
            applyAchievementPayload(game.appid, payload);
            assigned += 1;
            setXboxBulkMessage(`${prefix}: ${t("xboxBulkAppliedOne")}`);
          } else {
            skipped += 1;
            setXboxBulkMessage(`${prefix}: ${t("xboxBulkSkippedOne")}`);
          }
        } catch (_error) {
          skipped += 1;
          setXboxBulkMessage(`${prefix}: ${t("xboxBulkSkippedOne")}`);
        }
      }
      const refreshed = await getAchievementSettings();
      setXbox(refreshed.xbox);
      await refreshRaSettings();
      setXboxBulkMessage(`${t("xboxBulkDone")}: ${assigned} ${t("xboxBulkApplied")}, ${skipped} ${t("xboxBulkSkipped")}`);
      toaster.toast({
        title: t("pluginName"),
        body: `${t("xboxBulkDone")}: ${assigned} ${t("xboxBulkApplied")}, ${skipped} ${t("xboxBulkSkipped")}`,
      });
    } finally {
      setXboxBulkBusy(false);
    }
  };

  const syncMatchedTrueAchievementsProgress = async () => {
    if (xboxBulkBusy || busy) return;
    if (!xbox.enabled || !xbox.api_key.trim()) {
      toaster.toast({ title: t("pluginName"), body: t("xboxSyncProgressFailed") });
      return;
    }
    const targets = games.filter((game) => isUwphookGameOption(game) && !!xbox.title_ids[String(game.appid)]);
    if (!targets.length) {
      toaster.toast({ title: t("pluginName"), body: t("xboxBulkNothing") });
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
        setXboxBulkMessage(`${prefix}: ${t("xboxSyncingProgress")}`);
        try {
          const payload = await syncTrueAchievementsProgress(game.appid);
          if (payload?.steam?.nTotal) {
            applyAchievementPayload(game.appid, payload);
            synced += 1;
            setXboxBulkMessage(`${prefix}: ${t("xboxBulkAppliedOne")}`);
          } else {
            skipped += 1;
            setXboxBulkMessage(`${prefix}: ${t("xboxBulkSkippedOne")}`);
          }
        } catch (_error) {
          skipped += 1;
          setXboxBulkMessage(`${prefix}: ${t("xboxBulkSkippedOne")}`);
        }
      }
      await refreshRaSettings();
      setXboxBulkMessage(`${t("xboxSyncProgressOk")}: ${synced}, ${t("xboxBulkSkipped")}: ${skipped}`);
      toaster.toast({ title: t("pluginName"), body: `${t("xboxSyncProgressOk")}: ${synced}` });
    } finally {
      setXboxBulkBusy(false);
    }
  };

  const scanRpcs3Trophies = async () => {
    if (rpcs3BulkBusy || raBulkBusy || xboxBulkBusy || busy) return;
    const settings = await getAchievementSettings();
    const sources = settings.achievement_sources || {};
    const existingIds = settings.rpcs3?.trophy_ids || {};
    const targets = games.filter((game) => {
      const key = String(game.appid);
      const source = sources[key] || "auto";
      if (source === "disabled" || source === "xbox" || source === "retroachievements") {
        return false;
      }
      if (existingIds[key]) return false;
      return isLikelyRpcs3GameOption(game);
    });
    if (!targets.length) {
      toaster.toast({ title: t("pluginName"), body: t("rpcs3BulkNothing") });
      return;
    }
    setRpcs3BulkBusy(true);
    setRpcs3BulkMessage(`${t("rpcs3BulkScanning")}: 0/${targets.length}`);
    let assigned = 0;
    let skipped = 0;
    try {
      for (let index = 0; index < targets.length; index += 1) {
        const game = targets[index];
        const prefix = `${index + 1}/${targets.length} - ${game.name}`;
        setBulkProgress({ completed: index, total: targets.length });
        setRpcs3BulkMessage(`${prefix}: ${t("rpcs3BulkDetecting")}`);
        try {
          const payload = await resolveRpcs3FromShortcut(
            game.appid,
            game.name,
            retroAchievementLaunchText(game)
          );
          if (payload?.steam?.nTotal) {
            await setAchievementSource(game.appid, "rpcs3");
            applyAchievementPayload(game.appid, payload);
            assigned += 1;
            setRpcs3BulkMessage(`${prefix}: ${t("rpcs3BulkAppliedOne")}`);
          } else {
            skipped += 1;
            setRpcs3BulkMessage(`${prefix}: ${t("rpcs3BulkSkippedOne")}`);
          }
        } catch (_error) {
          skipped += 1;
          setRpcs3BulkMessage(`${prefix}: ${t("rpcs3BulkSkippedOne")}`);
        }
      }
      await refreshRaSettings();
      setRpcs3BulkMessage(`${t("rpcs3BulkDone")}: ${assigned} ${t("retroBulkApplied")}, ${skipped} ${t("retroBulkSkipped")}`);
      toaster.toast({
        title: t("pluginName"),
        body: `${t("rpcs3BulkDone")}: ${assigned} ${t("retroBulkApplied")}, ${skipped} ${t("retroBulkSkipped")}`,
      });
    } finally {
      setRpcs3BulkBusy(false);
    }
  };

  const applyRpcs3DataPath = async (path: string) => {
    if (rpcs3PathBusy || rpcs3BulkBusy || busy) return;
    setRpcs3PathBusy(true);
    try {
      const saved = await setRpcs3DataPath(path.trim());
      setRpcs3SettingsState(saved);
      if (saved.ok === false) {
        toaster.toast({ title: t("pluginName"), body: t("rpcs3PathInvalid") });
        return;
      }
      setRpcs3PathDraft(saved.data_path || "");
      setRpcs3BulkMessage("");
      toaster.toast({
        title: t("pluginName"),
        body: saved.automatic
          ? t("rpcs3PathAutomatic")
          : saved.data_path_ready
            ? `${saved.trophy_set_count || 0} ${t("rpcs3PathSetsFound")}`
            : t("rpcs3PathSavedNoTrophies"),
      });
    } catch (error) {
      toaster.toast({ title: t("pluginName"), body: String(error) });
    } finally {
      setRpcs3PathBusy(false);
    }
  };

  const chooseRpcs3DataPath = async () => {
    if (rpcs3PathBusy || rpcs3BulkBusy || busy) return;
    try {
      const selected = await openFilePicker(
        1,
        rpcs3Settings.data_path || "C:\\",
        false,
        true
      );
      const path = selected?.realpath || selected?.path || "";
      if (path) {
        setRpcs3PathDraft(path);
        await applyRpcs3DataPath(path);
      }
    } catch (_error) {
      // Closing the picker is not an error.
    }
  };

  const syncMatchedRpcs3Progress = async () => {
    if (rpcs3BulkBusy || raBulkBusy || xboxBulkBusy || busy) return;
    const settings = await getAchievementSettings();
    const sources = settings.achievement_sources || {};
    const existingIds = settings.rpcs3?.trophy_ids || {};
    const targets = games.filter((game) => {
      const key = String(game.appid);
      const source = sources[key] || "auto";
      if (source === "disabled") return false;
      return Boolean(existingIds[key]);
    });
    if (!targets.length) {
      toaster.toast({ title: t("pluginName"), body: t("rpcs3BulkNothing") });
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
        setRpcs3BulkMessage(`${prefix}: ${t("rpcs3SyncingProgress")}`);
        try {
          const payload = await syncRpcs3Progress(game.appid);
          if (payload?.steam?.nTotal) {
            applyAchievementPayload(game.appid, payload);
            synced += 1;
            setRpcs3BulkMessage(`${prefix}: ${t("rpcs3BulkAppliedOne")}`);
          } else {
            skipped += 1;
            setRpcs3BulkMessage(`${prefix}: ${t("rpcs3BulkSkippedOne")}`);
          }
        } catch (_error) {
          skipped += 1;
          setRpcs3BulkMessage(`${prefix}: ${t("rpcs3BulkSkippedOne")}`);
        }
      }
      await refreshRaSettings();
      setRpcs3BulkMessage(`${t("rpcs3SyncDone")}: ${synced} ${t("retroBulkApplied")}, ${skipped} ${t("retroBulkSkipped")}`);
      toaster.toast({
        title: t("pluginName"),
        body: `${t("rpcs3SyncDone")}: ${synced} ${t("retroBulkApplied")}, ${skipped} ${t("retroBulkSkipped")}`,
      });
    } finally {
      setRpcs3BulkBusy(false);
    }
  };

  const clearAllRpcs3Matches = async () => {
    if (rpcs3BulkBusy || busy) return;
    setRpcs3BulkBusy(true);
    try {
      await clearRpcs3Associations();
      clearAchievementsForApps(games.map((game) => game.appid));
      await refreshRaSettings();
      setRpcs3BulkMessage(t("rpcs3ClearAllDone"));
      toaster.toast({ title: t("pluginName"), body: t("rpcs3ClearAllDone") });
    } finally {
      setRpcs3BulkBusy(false);
    }
  };

  return (
    <PanelSection>
      <style>{`
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
      `}</style>
      <PanelSectionRow>
        <PlayhubCard icon={<FaDatabase size={13} />} accent={PLAYHUB_ACCENTS.library} title={t("qamLibraryTitle")} style={qamCardSpacingStyle}>
          <div style={statChipRowStyle}>
            <StatChip label={t("detected")} value={games.length} />
            <StatChip label={t("saved")} value={metadataCount} accent="#7cc46f" />
            <StatChip label={t("missing")} value={missing} accent={missing ? "#f2a33c" : undefined} />
          </div>
          <FocusableButton className="DialogButton" disabled={busy || !games.length} onClick={scanMissing}>
            {busy ? t("scanning") : t("scanMissing")}
          </FocusableButton>
          <FocusableButton className="DialogButton" disabled={busy || !metadataCount} onClick={deleteAllMetadata}>
            {t("deleteAllMetadata")}
          </FocusableButton>
          {busy ? (
            <PlayhubProgressBar
              label={scanMessage || t("scanning")}
              completed={scanProgress.completed}
              total={scanProgress.total}
              busy={busy}
              accent={PLAYHUB_ACCENTS.library}
            />
          ) : scanMessage ? (
            <div style={inlineStatusStyle}>{scanMessage}</div>
          ) : null}
        </PlayhubCard>
      </PanelSectionRow>

      <PanelSectionRow>
        <PlayhubCard icon={<FaSearch size={13} />} accent={PLAYHUB_ACCENTS.search} title={t("scraperTitle")} hint={t("scraperHint")} style={qamCardSpacingStyle}>
          <div style={cardSubheadingStyle}>{t("scraperSourceIgn")}</div>
          <div style={fieldLabelStyle}>{t("scraperLanguage")}</div>
          <QamDropdown
            rgOptions={(scraper?.languages ?? ["en"]).map((code) => ({
              data: code,
              label: scraper?.language_labels?.[code] || code,
            }))}
            selectedOption={scraper?.language ?? "en"}
            onChange={(option: any) => void saveScraperSettings({ language: option.data })}
          />
          <ToggleField
            bottomSeparator="none"
            label={t("scraperTranslateIgn")}
            description={t("scraperTranslateIgnHint")}
            checked={scraper?.translate_ign ?? true}
            onChange={(checked) => void saveScraperSettings({ translate_ign: checked })}
          />
          <div style={cardHintStyle}>{t("scraperRescanHint")}</div>
        </PlayhubCard>
      </PanelSectionRow>

      <PanelSectionRow>
        <PlayhubCard icon={<FaNewspaper size={13} />} accent={PLAYHUB_ACCENTS.activity} title={t("steamActivityTitle")} style={qamCardSpacingStyle}>
          <FocusableButton className="DialogButton" disabled={activityBusy || busy || !games.length} onClick={refreshActivities}>
            {activityBusy ? t("refreshingActivities") : t("refreshActivities")}
          </FocusableButton>
          {activityBusy ? (
            <PlayhubProgressBar
              label={activityMessage || t("refreshingActivities")}
              completed={activityProgress.completed}
              total={activityProgress.total}
              busy={activityBusy}
              accent={PLAYHUB_ACCENTS.activity}
            />
          ) : activityMessage ? (
            <div style={inlineStatusStyle}>{activityMessage}</div>
          ) : null}
          <ToggleField
            bottomSeparator="none"
            label={t("showActivitiesInHome")}
            checked={showActivitiesInHome}
            onChange={(checked) => {
              setShowActivitiesInHome(checked);
              setShowActivitiesInHomeSetting(checked);
            }}
          />
          <DropdownItem
            bottomSeparator="none"
            label={t("homeActivityCount")}
            rgOptions={Array.from(
              { length: PLAYHUB_HOME_ACTIVITY_MAX_LIMIT },
              (_, index) => ({ data: index + 1, label: String(index + 1) })
            )}
            selectedOption={homeActivityCount}
            onChange={(option: any) => {
              const clamped = setHomeActivityCountSetting(Number(option.data));
              setHomeActivityCount(clamped);
            }}
          />
          <div style={cardHintStyle}>{t("homeActivityCountHint")}</div>
          <FocusableButton className="DialogButton" onClick={resetHomeActivitiesToMostRecentSetting}>
            {t("homeActivityMostRecent")}
          </FocusableButton>
          <FocusableButton className="DialogButton" onClick={shuffleHomeActivitiesSetting}>
            {t("homeActivityShuffle")}
          </FocusableButton>
        </PlayhubCard>
      </PanelSectionRow>

      <PanelSectionRow>
        <PlayhubCard icon={<FaBolt size={13} />} accent={PLAYHUB_ACCENTS.achievements} title={t("qamAchievementsTitle")} hint={t("achievementAutoSyncHint")} style={qamCardSpacingStyle}>
          <ToggleField
            bottomSeparator="none"
            label={t("postPlayAchievementSyncEnabled")}
            description={t("postPlayAchievementSyncHint")}
            checked={postPlayAchievementSyncEnabled}
            onChange={(checked) => {
              setPostPlayAchievementSyncEnabled(checked);
              setPostPlayAchievementSyncEnabledSetting(checked);
            }}
          />
        </PlayhubCard>
      </PanelSectionRow>

      <PanelSectionRow>
        <PlayhubCard icon={<FaTrophy size={13} />} accent={PLAYHUB_ACCENTS.ra} title="RetroAchievements" hint={t("retroLoginHint")} style={qamCardSpacingStyle}>
          <ToggleField
            bottomSeparator="none"
            label={t("retroEnabled")}
            checked={ra.enabled}
            onChange={(checked) => void saveRaSettings({ enabled: checked })}
          />
          <div style={fieldLabelStyle}>{t("retroUser")}</div>
          <TextField
            value={ra.username}
            onChange={(e) => setRa((prev) => ({ ...prev, username: e.target.value }))}
            onBlur={() => void saveRaSettings({ username: ra.username })}
            style={fieldStyle}
          />
          <div style={fieldLabelStyle}>{t("retroKey")}</div>
          <TextField
            value={ra.api_key}
            onChange={(e) => setRa((prev) => ({ ...prev, api_key: e.target.value }))}
            onBlur={() => void saveRaSettings({ api_key: ra.api_key })}
            style={fieldStyle}
          />
          <FocusableButton className="DialogButton" onClick={testRaLogin}>
            {t("retroLogin")}
          </FocusableButton>
          <FocusableButton className="DialogButton" onClick={openRetroAchievements}>
            {t("retroCreateAccount")}
          </FocusableButton>
          <FocusableButton
            className="DialogButton"
            disabled={busy || xboxBulkBusy || raBulkBusy || rpcs3BulkBusy || !games.length || !ra.enabled || !ra.api_key.trim()}
            onClick={scanRetroAchievements}
          >
            {raBulkBusy ? t("retroBulkScanning") : t("retroBulkScan")}
          </FocusableButton>
          <FocusableButton
            className="DialogButton"
            disabled={busy || xboxBulkBusy || raBulkBusy || rpcs3BulkBusy || !games.length || !ra.enabled || !ra.api_key.trim()}
            onClick={syncMatchedRetroAchievementsProgress}
          >
            {t("retroSyncProgress")}
          </FocusableButton>
          <FocusableButton
            className="DialogButton"
            disabled={busy || xboxBulkBusy || raBulkBusy || rpcs3BulkBusy || !games.length}
            onClick={clearAllRetroAchievementsMatches}
          >
            {t("retroClearAll")}
          </FocusableButton>
          {raBulkBusy ? (
            <PlayhubProgressBar
              label={raBulkMessage || t("retroBulkScanning")}
              completed={bulkProgress.completed}
              total={bulkProgress.total}
              busy={raBulkBusy}
              accent={PLAYHUB_ACCENTS.ra}
            />
          ) : raBulkMessage ? (
            <div style={inlineStatusStyle}>{raBulkMessage}</div>
          ) : null}
          <div style={fieldLabelStyle}>{t("achievementCacheRetroTitle")}</div>
          <QamDropdown
            rgOptions={achievementCachePolicies.map((policy) => ({
              data: policy,
              label: t(`achievementCache_${policy}` as any),
            }))}
            selectedOption={retroAchievementCachePolicy}
            onChange={(option: any) =>
              void saveAchievementCachePolicy("retroachievements", option.data)
            }
          />
        </PlayhubCard>
      </PanelSectionRow>

      <PanelSectionRow>
        <PlayhubCard icon={<FaXbox size={13} />} accent={PLAYHUB_ACCENTS.xbox} title={t("xboxTitle")} style={qamCardSpacingStyle}>
          <ToggleField
            bottomSeparator="none"
            label={t("xboxEnabled")}
            checked={xbox.enabled}
            onChange={(checked) => void saveXboxSettings({ enabled: checked })}
          />
          <div style={fieldLabelStyle}>{t("xboxProfile")}</div>
          <TextField
            value={xbox.api_key}
            onChange={(e) => setXbox((prev) => ({ ...prev, api_key: e.target.value }))}
            onBlur={() => void saveXboxSettings({ api_key: xbox.api_key })}
            style={fieldStyle}
          />
          {xbox.ta_logged_in ? (
            <div style={cardHintStyle}>
              {xbox.gamertag ? `${t("xboxLoggedIn")}: ${xbox.gamertag}` : t("xboxLoggedIn")}
            </div>
          ) : null}
          <FocusableButton className="DialogButton" onClick={testXboxLogin}>
            {t("xboxLogin")}
          </FocusableButton>
          <FocusableButton className="DialogButton" onClick={openOpenXbl}>
            {t("xboxOpenOpenXbl")}
          </FocusableButton>
          <FocusableButton
            className="DialogButton"
            disabled={busy || xboxBulkBusy || raBulkBusy || rpcs3BulkBusy || !games.length}
            onClick={bulkApplyXboxAchievements}
          >
            {xboxBulkBusy ? t("xboxBulkScanning") : t("xboxBulkScan")}
          </FocusableButton>
          <FocusableButton
            className="DialogButton"
            disabled={busy || xboxBulkBusy || raBulkBusy || rpcs3BulkBusy || !games.length || !xbox.api_key.trim()}
            onClick={syncMatchedTrueAchievementsProgress}
          >
            {t("xboxSyncAllProgress")}
          </FocusableButton>
          <FocusableButton
            className="DialogButton"
            disabled={busy || xboxBulkBusy || raBulkBusy || rpcs3BulkBusy || !games.length}
            onClick={clearAllXboxMatches}
          >
            {t("xboxClearAll")}
          </FocusableButton>
          {xboxBulkBusy ? (
            <PlayhubProgressBar
              label={xboxBulkMessage || t("xboxBulkScanning")}
              completed={bulkProgress.completed}
              total={bulkProgress.total}
              busy={xboxBulkBusy}
              accent={PLAYHUB_ACCENTS.xbox}
            />
          ) : xboxBulkMessage ? (
            <div style={inlineStatusStyle}>{xboxBulkMessage}</div>
          ) : null}
          <div style={fieldLabelStyle}>{t("achievementCacheXboxTitle")}</div>
          <QamDropdown
            rgOptions={achievementCachePolicies.map((policy) => ({
              data: policy,
              label: t(`achievementCache_${policy}` as any),
            }))}
            selectedOption={xboxAchievementCachePolicy}
            onChange={(option: any) => void saveAchievementCachePolicy("xbox", option.data)}
          />
        </PlayhubCard>
      </PanelSectionRow>

      <PanelSectionRow>
        <PlayhubCard icon={<FaPlaystation size={13} />} accent={PLAYHUB_ACCENTS.ps3} title={t("rpcs3Title")} hint={t("rpcs3SettingsHint")} style={qamCardSpacingStyle}>
          <div style={fieldLabelStyle}>{t("rpcs3DataPath")}</div>
          <div style={cardHintStyle}>{t("rpcs3DataPathHint")}</div>
          <TextField
            value={rpcs3PathDraft}
            disabled={rpcs3PathBusy || rpcs3BulkBusy || busy}
            onChange={(event) => setRpcs3PathDraft(event.target.value)}
          />
          <FocusableButton
            className="DialogButton"
            disabled={rpcs3PathBusy || rpcs3BulkBusy || busy}
            onClick={chooseRpcs3DataPath}
          >
            {t("rpcs3ChooseDataPath")}
          </FocusableButton>
          <FocusableButton
            className="DialogButton"
            disabled={
              rpcs3PathBusy ||
              rpcs3BulkBusy ||
              busy ||
              rpcs3PathDraft.trim() === (rpcs3Settings.data_path || "")
            }
            onClick={() => void applyRpcs3DataPath(rpcs3PathDraft)}
          >
            {t("rpcs3SaveDataPath")}
          </FocusableButton>
          {rpcs3Settings.data_path ? (
            <FocusableButton
              className="DialogButton"
              disabled={rpcs3PathBusy || rpcs3BulkBusy || busy}
              onClick={() => void applyRpcs3DataPath("")}
            >
              {t("rpcs3ResetDataPath")}
            </FocusableButton>
          ) : null}
          <div style={inlineStatusStyle}>
            {rpcs3Settings.automatic
              ? t("rpcs3PathAutomatic")
              : !rpcs3Settings.data_path_valid
                ? t("rpcs3PathInvalid")
                : rpcs3Settings.data_path_ready
                  ? `${rpcs3Settings.trophy_set_count || 0} ${t("rpcs3PathSetsFound")}`
                  : t("rpcs3PathSavedNoTrophies")}
          </div>
          <FocusableButton
            className="DialogButton"
            disabled={busy || rpcs3BulkBusy || xboxBulkBusy || raBulkBusy || !games.length}
            onClick={scanRpcs3Trophies}
          >
            {rpcs3BulkBusy ? t("rpcs3BulkScanning") : t("rpcs3BulkScan")}
          </FocusableButton>
          <FocusableButton
            className="DialogButton"
            disabled={busy || rpcs3BulkBusy || xboxBulkBusy || raBulkBusy || !games.length}
            onClick={syncMatchedRpcs3Progress}
          >
            {t("rpcs3SyncAllProgress")}
          </FocusableButton>
          <FocusableButton
            className="DialogButton"
            disabled={busy || rpcs3BulkBusy || !games.length}
            onClick={clearAllRpcs3Matches}
          >
            {t("rpcs3ClearAll")}
          </FocusableButton>
          {rpcs3BulkBusy ? (
            <PlayhubProgressBar
              label={rpcs3BulkMessage || t("rpcs3BulkScanning")}
              completed={bulkProgress.completed}
              total={bulkProgress.total}
              busy={rpcs3BulkBusy}
              accent={PLAYHUB_ACCENTS.ps3}
            />
          ) : rpcs3BulkMessage ? (
            <div style={inlineStatusStyle}>{rpcs3BulkMessage}</div>
          ) : null}
          <div style={fieldLabelStyle}>{t("achievementCacheRpcs3Title")}</div>
          <QamDropdown
            rgOptions={achievementCachePolicies.map((policy) => ({
              data: policy,
              label: t(`achievementCache_${policy}` as any),
            }))}
            selectedOption={rpcs3AchievementCachePolicy}
            onChange={(option: any) => void saveAchievementCachePolicy("rpcs3", option.data)}
          />
        </PlayhubCard>
      </PanelSectionRow>


    </PanelSection>
  );
};

export const MetadataPage = () => {
  const { appid } = useParams<{ appid: string }>();
  const appId = Number(appid);
  const overview = getOverview(appId);
  const nonSteam = isNonSteamApp(overview);
  const [metadata, setMetadata] = useState<MetadataData>(
    metadataTemplate(appName(appId))
  );
  const [developerText, setDeveloperText] = useState("");
  const [publisherText, setPublisherText] = useState("");
  const [releaseText, setReleaseText] = useState("");
  const [ratingText, setRatingText] = useState("");
  const [query, setQuery] = useState(appName(appId));
  const [results, setResults] = useState<MetadataSearchResult[]>([]);
  const [busy, setBusy] = useState(false);
  const [raSettings, setRaSettings] = useState<RetroAchievementsSettings | null>(
    null
  );
  const [raGameId, setRaGameId] = useState("");
  const [raQuery, setRaQuery] = useState(appName(appId));
  const [raResults, setRaResults] = useState<RetroAchievementsGameResult[]>([]);
  const [raSearching, setRaSearching] = useState(false);
  const [achievementSource, setAchievementSourceState] =
    useState<AchievementSource>("auto");
  const [xboxTitleId, setXboxTitleIdState] = useState("");
  const [xboxQuery, setXboxQuery] = useState(appName(appId));
  const [xboxResults, setXboxResults] = useState<XboxTitleResult[]>([]);
  const [xboxSearching, setXboxSearching] = useState(false);
  const [rpcs3TrophyId, setRpcs3TrophyIdState] = useState("");
  const [scraperLanguageOverride, setScraperLanguageOverrideState] = useState<string>("auto");
  const [gameScraperSettings, setGameScraperSettings] = useState<ScraperSettings | null>(null);
  const [rpcs3Query, setRpcs3Query] = useState(appName(appId));
  const [rpcs3Results, setRpcs3Results] = useState<Rpcs3TrophySetResult[]>([]);
  const [rpcs3Searching, setRpcs3Searching] = useState(false);
  const [steamActivityQuery, setSteamActivityQuery] = useState(appName(appId));
  const [steamActivityBusy, setSteamActivityBusy] = useState(false);

  const setFormMetadata = useCallback((next: MetadataData) => {
    setMetadata(next);
    setDeveloperText(personsToText(next.developers));
    setPublisherText(personsToText(next.publishers));
    setReleaseText(epochToDate(next.release_date));
    setRatingText(next.rating == null ? "" : String(next.rating));
    setSteamActivityQuery(next.steam_activity_title || next.title || appName(appId));
  }, [appId]);

  const load = useCallback(async () => {
    const saved = await getMetadata(appId);
    setFormMetadata(saved || metadataTemplate(appName(appId)));
    const settings = await getAchievementSettings();
    setRaSettings(settings.retroachievements);
    setRaGameId(settings.retroachievements.game_ids[String(appId)]?.toString() || "");
    setAchievementSourceState(
      settings.achievement_sources[String(appId)] || "auto"
    );
    setXboxTitleIdState(settings.xbox.title_ids[String(appId)] || "");
    setRpcs3TrophyIdState(settings.rpcs3?.trophy_ids?.[String(appId)] || "");
    try {
      const scraperSettings = await getScraperSettings();
      setGameScraperSettings(scraperSettings);
      setScraperLanguageOverrideState(
        scraperSettings.language_overrides?.[String(appId)] || "auto"
      );
    } catch (_error) {
      // Keep the defaults when settings are temporarily unavailable.
    }
  }, [appId, setFormMetadata]);

  useEffect(() => {
    void load();
  }, [load]);

  const normalizedMetadata = useMemo<MetadataData>(
    () => ({
      ...metadata,
      title: cleanTitle(metadata.title),
      developers: textToPersons(developerText),
      publishers: textToPersons(publisherText),
      release_date: dateToEpoch(releaseText),
      rating: parseRating(ratingText),
      store_categories: metadata.store_categories || [],
    }),
    [developerText, metadata, publisherText, ratingText, releaseText]
  );

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

  const saveScraperLanguageOverride = async (value: string) => {
    try {
      const overrides = await setScraperLanguageOverride(
        appId,
        value === "auto" ? "" : value
      );
      setScraperLanguageOverrideState(overrides[String(appId)] || "auto");
      toaster.toast({ title: t("pluginName"), body: t("saved") });
    } catch (error) {
      toaster.toast({ title: t("pluginName"), body: String(error) });
    }
  };

  const refreshMetadataForGame = async () => {
    setBusy(true);
    try {
      await setScraperLanguageOverride(
        appId,
        scraperLanguageOverride === "auto" ? "" : scraperLanguageOverride
      );
      const latestScraperSettings = await getScraperSettings();
      setGameScraperSettings(latestScraperSettings);
      const fetched = await autoFetchMetadata(
        appId,
        query || metadata.title || appName(appId)
      );
      if (!fetched) {
        toaster.toast({ title: t("pluginName"), body: t("noResults") });
        return;
      }
      metadataCache[String(appId)] = fetched;
      applyMetadata(appId);
      setFormMetadata(fetched);
      toaster.toast({ title: t("pluginName"), body: t("scraperGameRefreshDone") });
    } catch (error) {
      toaster.toast({ title: t("pluginName"), body: String(error) });
    } finally {
      setBusy(false);
    }
  };

  const search = async () => {
    setBusy(true);
    try {
      setResults(await searchMetadata(query, 8, appId));
    } catch (error) {
      toaster.toast({ title: t("pluginName"), body: String(error) });
    } finally {
      setBusy(false);
    }
  };

  const applyResult = async (result: MetadataSearchResult) => {
    setBusy(true);
    try {
      const fetched = await fetchMetadata(result.slug || result.url, appId);
      if (!fetched) return;
      const saved = await saveMetadata(appId, fetched);
      metadataCache[String(appId)] = saved;
      applyMetadata(appId);
      setFormMetadata(saved);
      toaster.toast({ title: t("pluginName"), body: t("saved") });
    } finally {
      setBusy(false);
    }
  };

  const performRemoveCurrent = async () => {
    if (busy) return;
    setBusy(true);
    try {
      const currentMetadata = metadataCache[String(appId)] || metadata;
      await removeMetadata(appId);
      clearAppliedMetadata(appId, currentMetadata);
      delete metadataCache[String(appId)];
      setFormMetadata(metadataTemplate(appName(appId)));
      window.dispatchEvent(new Event("playhub-metadata:updated"));
      toaster.toast({ title: t("pluginName"), body: t("removeToast") });
    } catch (error) {
      toaster.toast({ title: t("pluginName"), body: String(error) });
    } finally {
      setBusy(false);
    }
  };

  const removeCurrent = () => {
    showModal(
      <ConfirmModal
        strTitle={t("deleteMetadataConfirmTitle")}
        strDescription={t("deleteCurrentMetadataConfirm")}
        strOKButtonText={t("confirmYes")}
        strCancelButtonText={t("confirmNo")}
        bDestructiveWarning
        onOK={() => void performRemoveCurrent()}
      />
    );
  };

  const saveAchievementSource = async (source: AchievementSource) => {
    await setAchievementSource(appId, source);
    setAchievementSourceState(source);
    await refreshRaSettings();
  };

  const saveRaGameId = async () => {
    const parsed = Number.parseInt(raGameId, 10);
    const ids = await setRetroAchievementsGameId(
      appId,
      Number.isFinite(parsed) && parsed > 0 ? parsed : null
    );
    if (Number.isFinite(parsed) && parsed > 0) {
      setAchievementSourceState("retroachievements");
    }
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
    setAchievementSourceState("retroachievements");
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
    const launchPath = `${details?.strShortcutExe || ""} ${
      details?.strShortcutLaunchOptions || ""
    }`;
    if (!launchPath.trim()) {
      toaster.toast({ title: t("pluginName"), body: t("retroDetectFailed") });
      return;
    }
    const payload = await resolveRetroAchievementsFromPath(
      appId,
      launchPath,
      appName(appId)
    );
    applyAchievementPayload(appId, payload);
    if (payload?.steam?.nTotal) {
      setRaGameId(String(payload.game_id));
      setAchievementSourceState("retroachievements");
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
      setRaResults(
        await searchRetroAchievementsGames(raQuery || appName(appId), 8, appId)
      );
    } catch (error) {
      toaster.toast({ title: t("pluginName"), body: String(error) });
    } finally {
      setRaSearching(false);
    }
  };

  const useAchievementResult = async (result: RetroAchievementsGameResult) => {
    setRaGameId(String(result.id));
    const ids = await setRetroAchievementsGameId(appId, result.id);
    setAchievementSourceState("retroachievements");
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

  const saveXboxMatchManual = async () => {
    const manual = xboxTitleId.trim();
    if (!manual) {
      await clearXboxMatch();
      return;
    }
    const currentSettings = await getAchievementSettings();
    await setXboxSettings(true, currentSettings.xbox.api_key || "");
    const ids = await setXboxTitleId(appId, manual);
    const nextId = ids[String(appId)] || manual;
    setXboxTitleIdState(nextId);
    await saveAchievementSource("xbox");
    await refreshRaSettings();
    const payload = await fetchAchievements(appId);
    applyAchievementPayload(appId, payload);
    toaster.toast({
      title: t("pluginName"),
      body: payload?.steam?.nTotal
        ? `${t("xboxGameOk")}: ${payload.steam.nAchieved}/${payload.steam.nTotal}`
        : t("xboxGameFailed"),
    });
  };

  const autoDetectXboxAchievements = async () => {
    const currentSettings = await getAchievementSettings();
    await setXboxSettings(true, currentSettings.xbox.api_key || "");
    const details = await getAppDetails(appId);
    const launchPath = `${details?.strShortcutExe || ""} ${
      details?.strShortcutLaunchOptions || ""
    }`;
    const payload = await resolveXboxFromShortcut(
      appId,
      appName(appId),
      launchPath
    );
    applyAchievementPayload(appId, payload);
    if (payload?.steam?.nTotal) {
      await saveAchievementSource("xbox");
      const settings = await getAchievementSettings();
      setXboxTitleIdState(settings.xbox.title_ids[String(appId)] || "");
      await refreshRaSettings();
    }
    toaster.toast({
      title: t("pluginName"),
      body: payload?.steam?.nTotal
        ? `${t("xboxGameOk")}: ${payload.steam.nAchieved}/${payload.steam.nTotal}`
        : t("xboxDetectFailed"),
    });
  };

  const clearXboxMatch = async () => {
    const ids = await setXboxTitleId(appId, null);
    setXboxTitleIdState(ids[String(appId)] || "");
    clearAchievementsForApp(appId);
    if (achievementSource === "xbox") {
      await saveAchievementSource("auto");
    }
    await refreshRaSettings();
    toaster.toast({ title: t("pluginName"), body: t("saved") });
  };

  const searchXbox = async () => {
    setXboxSearching(true);
    try {
      const results = await searchXboxTitles(xboxQuery || appName(appId), 12, appId, true);
      setXboxResults(results);
    } catch (error) {
      toaster.toast({ title: t("pluginName"), body: String(error) });
    } finally {
      setXboxSearching(false);
    }
  };

  const useXboxResult = async (result: XboxTitleResult) => {
    const currentSettings = await getAchievementSettings();
    await setXboxSettings(true, currentSettings.xbox.api_key || "");
    const ids = await setXboxTitleId(appId, result.id);
    setXboxTitleIdState(ids[String(appId)] || result.id);
    await saveAchievementSource("xbox");
    await refreshRaSettings();
    const payload = await fetchAchievements(appId);
    applyAchievementPayload(appId, payload);
    if (!payload?.steam?.nTotal) {
      const cleared = await setXboxTitleId(appId, null);
      setXboxTitleIdState(cleared[String(appId)] || "");
      await saveAchievementSource("auto");
    }
    toaster.toast({
      title: t("pluginName"),
      body: payload?.steam?.nTotal
        ? `${t("xboxGameOk")}: ${payload.steam.nAchieved}/${payload.steam.nTotal}`
        : t("xboxGameFailed"),
    });
  };

  const autoDetectRpcs3Trophies = async () => {
    const details = await getAppDetails(appId);
    const launchPath = `${details?.strShortcutExe || ""} ${
      details?.strShortcutLaunchOptions || ""
    } ${details?.strShortcutStartDir || ""}`;
    const payload = await resolveRpcs3FromShortcut(
      appId,
      appName(appId),
      launchPath
    );
    applyAchievementPayload(appId, payload);
    if (payload?.steam?.nTotal) {
      await saveAchievementSource("rpcs3");
      const settings = await getAchievementSettings();
      setRpcs3TrophyIdState(settings.rpcs3?.trophy_ids?.[String(appId)] || "");
      await refreshRaSettings();
    }
    toaster.toast({
      title: t("pluginName"),
      body: payload?.steam?.nTotal
        ? `${t("rpcs3GameOk")}: ${payload.steam.nAchieved}/${payload.steam.nTotal}`
        : t("rpcs3DetectFailed"),
    });
  };

  const searchRpcs3 = async () => {
    setRpcs3Searching(true);
    try {
      setRpcs3Results(
        await searchRpcs3TrophySets(rpcs3Query || appName(appId), 10, appId)
      );
    } catch (error) {
      toaster.toast({ title: t("pluginName"), body: String(error) });
    } finally {
      setRpcs3Searching(false);
    }
  };

  const useRpcs3Result = async (result: Rpcs3TrophySetResult) => {
    const ids = await setRpcs3TrophyId(appId, result.id, result.path);
    setRpcs3TrophyIdState(ids[String(appId)] || result.id);
    await saveAchievementSource("rpcs3");
    await refreshRaSettings();
    clearAchievementsForApp(appId);
    const payload = await fetchAchievements(appId);
    applyAchievementPayload(appId, payload);
    toaster.toast({
      title: t("pluginName"),
      body: payload?.steam?.nTotal
        ? `${t("rpcs3GameOk")}: ${payload.steam.nAchieved}/${payload.steam.nTotal}`
        : t("rpcs3GameFailed"),
    });
  };

  const clearRpcs3Match = async () => {
    const ids = await setRpcs3TrophyId(appId, "");
    setRpcs3TrophyIdState(ids[String(appId)] || "");
    clearAchievementsForApp(appId);
    if (achievementSource === "rpcs3") {
      await saveAchievementSource("auto");
    }
    await refreshRaSettings();
    toaster.toast({ title: t("pluginName"), body: t("saved") });
  };

  const syncRpcs3ProgressForApp = async () => {
    const payload = await syncRpcs3Progress(appId);
    applyAchievementPayload(appId, payload);
    toaster.toast({
      title: t("pluginName"),
      body: payload?.steam?.nTotal
        ? `${t("rpcs3SyncProgressOk")}: ${payload.steam.nAchieved}/${payload.steam.nTotal}`
        : t("rpcs3SyncProgressFailed"),
    });
  };

  const syncXboxProgress = async () => {
    const payload = await syncTrueAchievementsProgress(appId);
    applyAchievementPayload(appId, payload);
    toaster.toast({
      title: t("pluginName"),
      body: payload?.steam?.nTotal
        ? `${t("xboxSyncProgressOk")}: ${payload.steam.nAchieved}/${payload.steam.nTotal}`
        : t("xboxSyncProgressFailed"),
    });
  };

  const refetchSteamActivityMatch = async () => {
    if (steamActivityBusy) return;
    setSteamActivityBusy(true);
    try {
      const saved = await refetchSteamActivityAssociation(
        appId,
        steamActivityQuery || metadata.title || appName(appId)
      );
      if (saved) {
        metadataCache[String(appId)] = saved;
        setFormMetadata(saved);
        window.dispatchEvent(new Event("playhub-metadata:activity-refreshed"));
        window.dispatchEvent(new Event("playhub-metadata:updated"));
        toaster.toast({
          title: t("pluginName"),
          body: saved.steam_news?.length ? t("steamActivityRefetchDone") : t("steamActivityNoMatch"),
        });
      } else {
        toaster.toast({ title: t("pluginName"), body: t("steamActivityNoMatch") });
      }
    } catch (error) {
      toaster.toast({ title: t("pluginName"), body: String(error) });
    } finally {
      setSteamActivityBusy(false);
    }
  };

  const clearSteamActivityMatch = async () => {
    if (steamActivityBusy) return;
    setSteamActivityBusy(true);
    try {
      const saved = await clearSteamActivityAssociation(appId);
      if (saved) {
        metadataCache[String(appId)] = saved;
        setFormMetadata(saved);
        window.dispatchEvent(new Event("playhub-metadata:activity-refreshed"));
        window.dispatchEvent(new Event("playhub-metadata:updated"));
      }
      toaster.toast({ title: t("pluginName"), body: t("steamActivityClearDone") });
    } catch (error) {
      toaster.toast({ title: t("pluginName"), body: String(error) });
    } finally {
      setSteamActivityBusy(false);
    }
  };

  const toggleSteamActivityEnabled = async (enabled: boolean) => {
    if (steamActivityBusy) return;
    setSteamActivityBusy(true);
    try {
      const saved = await setSteamActivityEnabled(
        appId,
        enabled,
        steamActivityQuery || metadata.title || appName(appId)
      );
      if (saved) {
        metadataCache[String(appId)] = saved;
        setFormMetadata(saved);
        window.dispatchEvent(new Event("playhub-metadata:activity-refreshed"));
        window.dispatchEvent(new Event("playhub-metadata:updated"));
      }
      toaster.toast({
        title: t("pluginName"),
        body: enabled ? t("steamActivityEnabledDone") : t("steamActivityDisabledDone"),
      });
    } catch (error) {
      toaster.toast({ title: t("pluginName"), body: String(error) });
    } finally {
      setSteamActivityBusy(false);
    }
  };

  const toggleCategory = (category: number, checked: boolean) => {
    setMetadata((prev) => {
      const next = new Set(prev.store_categories || []);
      if (checked) next.add(category);
      else next.delete(category);
      return { ...prev, store_categories: Array.from(next) };
    });
  };

  return (
    <ScrollPanel>
      <div style={pageStyle}>
        <style>{`
          .phShell{width:min(1560px,100%);margin:0 auto}
          .phGrid{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:16px;align-items:start;width:100%}
          .phCol{display:flex;flex-direction:column;gap:16px;min-width:0;width:100%}
          @media(max-width:1120px){.phGrid{grid-template-columns:1fr}}
        `}</style>
        <div className="phShell">
          <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "6px", minWidth: 0 }}>
            <span
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "46px",
                height: "46px",
                borderRadius: "12px",
                flex: "0 0 auto",
                background: "color-mix(in srgb, #66c0f4 20%, transparent)",
                color: "#66c0f4",
              }}
            >
              <FaIdCard size={22} />
            </span>
            <div style={{ minWidth: 0 }}>
              <h1 style={{ margin: 0, fontSize: "28px", letterSpacing: "-.02em", lineHeight: 1.15 }}>
                {cleanTitle(metadata.title) || appName(appId)}
              </h1>
              <div style={{ marginTop: 3, opacity: 0.55, fontSize: "0.95em" }}>
                {[developerText, releaseText, ratingText ? `${ratingText}%` : ""].filter(Boolean).join("  •  ") || t("pluginName")}
              </div>
            </div>
          </div>
          {!nonSteam ? <div style={{ ...cardHintStyle, marginBottom: "8px" }}>{t("notNonSteam")}</div> : null}
          <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", margin: "10px 0 18px" }}>
            <FocusableButton className="DialogButton" onClick={saveCurrent}>
              {t("save")}
            </FocusableButton>
            <FocusableButton className="DialogButton" disabled={busy} onClick={removeCurrent}>
              {t("remove")}
            </FocusableButton>
            <FocusableButton className="DialogButton" onClick={() => Navigation.NavigateBack()}>
              {t("done")}
            </FocusableButton>
          </div>

          <Focusable className="phGrid" flow-children="grid">
            <Focusable className="phCol" flow-children="vertical">
              <PlayhubCard icon={<FaIdCard size={13} />} accent={PLAYHUB_ACCENTS.identity} title={t("metadataFieldsTitle")}>
                <div style={fieldLabelStyle}>{t("title")}</div>
                <TextField
                  value={metadata.title}
                  onChange={(e) => setMetadata((prev) => ({ ...prev, title: e.target.value }))}
                  style={fieldStyle}
                />
                <div style={fieldLabelStyle}>{t("description")}</div>
                <TextField
                  value={metadata.description}
                  onChange={(e) =>
                    setMetadata((prev) => ({
                      ...prev,
                      description: e.target.value,
                      short_description: e.target.value,
                    }))
                  }
                  style={fieldStyle}
                />
                <div style={fieldLabelStyle}>{t("developers")}</div>
                <TextField
                  value={developerText}
                  onChange={(e) => setDeveloperText(e.target.value)}
                  style={fieldStyle}
                />
                <div style={fieldLabelStyle}>{t("publishers")}</div>
                <TextField
                  value={publisherText}
                  onChange={(e) => setPublisherText(e.target.value)}
                  style={fieldStyle}
                />
                <div style={buttonRowStyle}>
                  <div style={{ ...flexFieldStyle, minWidth: "8rem" }}>
                    <div style={fieldLabelStyle}>{t("releaseDate")}</div>
                    <TextField
                      value={releaseText}
                      onChange={(e) => setReleaseText(e.target.value)}
                      style={fieldStyle}
                    />
                  </div>
                  <div style={{ ...flexFieldStyle, minWidth: "7rem" }}>
                    <div style={fieldLabelStyle}>{t("rating")}</div>
                    <TextField
                      value={ratingText}
                      onChange={(e) => setRatingText(e.target.value)}
                      style={fieldStyle}
                    />
                  </div>
                </div>
              </PlayhubCard>

              <PlayhubCard icon={<FaSearch size={13} />} accent={PLAYHUB_ACCENTS.search} title={t("searchTitle")}>
                <div style={fieldLabelStyle}>{t("scraperGameLanguage")}</div>
                <DropdownItem
                  bottomSeparator="none"
                  childrenContainerWidth="max"
                  layout="below"
                  rgOptions={[
                    { data: "auto", label: `${t("scraperLanguageAuto")} (${gameScraperSettings?.language_labels?.[gameScraperSettings?.language || "en"] || (gameScraperSettings?.language || "en")})` },
                    ...(gameScraperSettings?.languages ?? ["en"]).map((code) => ({
                      data: code,
                      label: gameScraperSettings?.language_labels?.[code] || code,
                    })),
                  ]}
                  selectedOption={scraperLanguageOverride}
                  onChange={(option: any) => void saveScraperLanguageOverride(option.data)}
                />
                <div style={cardHintStyle}>
                  {gameScraperSettings?.translate_ign
                    ? t("scraperGameTranslationEnabled")
                    : t("scraperGameTranslationDisabled")}
                </div>
                <FocusableButton
                  className="DialogButton"
                  disabled={busy}
                  onClick={refreshMetadataForGame}
                >
                  {busy ? t("searching") : t("scraperGameRefresh")}
                </FocusableButton>
                <div style={buttonRowStyle}>
                  <TextField
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    style={{ ...flexFieldStyle, minWidth: "10rem" }}
                  />
                  <FocusableButton className="DialogButton" disabled={busy} onClick={search}>
                    {busy ? t("searching") : t("search")}
                  </FocusableButton>
                </div>
                <div style={rowStackStyle}>
                  {busy ? <div style={cardHintStyle}>{t("searching")}</div> : null}
                  {!busy && !results.length ? <div style={cardHintStyle}>{t("noResults")}</div> : null}
                  {results.map((result) => (
                    <FocusableButton
                      key={result.slug || result.url}
                      className="DialogButton"
                      onClick={() => void applyResult(result)}
                      style={{ justifyContent: "flex-start", textAlign: "left" }}
                    >
                      <div style={rowStackStyle}>
                        <b>{result.title}</b>
                        <span style={compactTextStyle}>{result.description}</span>
                      </div>
                    </FocusableButton>
                  ))}
                </div>
              </PlayhubCard>

              <PlayhubCard icon={<FaTags size={13} />} accent={PLAYHUB_ACCENTS.categories} title={t("categories")}>
                {Object.entries(CATEGORY_LABELS).map(([category, label]) => (
                  <ToggleField
            bottomSeparator="none"
                    key={category}
                    label={label}
                    checked={(metadata.store_categories || []).includes(Number(category))}
                    onChange={(checked) => toggleCategory(Number(category), checked)}
                  />
                ))}
              </PlayhubCard>

              <PlayhubCard icon={<FaNewspaper size={13} />} accent={PLAYHUB_ACCENTS.activity} title={t("steamActivityTitle")} hint={t("steamActivityHint")}>
                <ToggleField
                  bottomSeparator="none"
                  label={t("steamActivityEnabledForGame")}
                  description={t("steamActivityEnabledForGameHint")}
                  checked={!metadata.steam_activity_disabled}
                  disabled={steamActivityBusy}
                  onChange={(checked) => void toggleSteamActivityEnabled(checked)}
                />
                <div style={cardSubheadingStyle}>
                  {metadata.steam_activity_disabled
                    ? t("steamActivityDisabled")
                    : metadata.steam_appid
                      ? `${t("steamActivityCurrentMatch")}: ${metadata.steam_appid}${metadata.steam_news?.length ? ` - ${metadata.steam_news.length} ${t("steamActivityItems")}` : ""}`
                      : t("steamActivityNoCurrentMatch")}
                </div>
                <div style={fieldLabelStyle}>{t("steamActivitySearchTitle")}</div>
                <div style={buttonRowStyle}>
                  <TextField
                    value={steamActivityQuery}
                    onChange={(e) => setSteamActivityQuery(e.target.value)}
                    style={{ ...flexFieldStyle, minWidth: "12rem" }}
                  />
                  <FocusableButton
                    className="DialogButton"
                    disabled={steamActivityBusy}
                    onClick={refetchSteamActivityMatch}
                  >
                    {steamActivityBusy ? t("refreshingActivities") : t("steamActivityRefetch")}
                  </FocusableButton>
                  <FocusableButton
                    className="DialogButton"
                    disabled={steamActivityBusy || (!metadata.steam_appid && !metadata.steam_news?.length && !!metadata.steam_activity_disabled)}
                    onClick={clearSteamActivityMatch}
                  >
                    {t("steamActivityClear")}
                  </FocusableButton>
                </div>
              </PlayhubCard>
            </Focusable>

            <Focusable className="phCol" flow-children="vertical">
              <PlayhubCard icon={<FaBolt size={13} />} accent={PLAYHUB_ACCENTS.achievements} title={t("achievementSourceTitle")} hint={t("achievementSourceHint")}>
                {(["auto", "retroachievements", "xbox", "rpcs3", "disabled"] as AchievementSource[]).map((source) => (
                  <FocusableButton
                    key={source}
                    className="DialogButton"
                    onClick={() => void saveAchievementSource(source)}
                    style={{ ...optionButtonStyle, opacity: achievementSource === source ? 1 : 0.6 }}
                  >
                    <span style={optionContentStyle}>
                      <span>{t(`achievementSource_${source}` as any)}</span>
                      <span style={{ marginLeft: "auto" }}>
                        {achievementSource === source ? <FaCheck /> : null}
                      </span>
                    </span>
                  </FocusableButton>
                ))}
              </PlayhubCard>

              <PlayhubCard icon={<FaTrophy size={13} />} accent={PLAYHUB_ACCENTS.ra} title="RetroAchievements" hint={t("retroHint")}>
                {raSettings && !raSettings.enabled ? (
                  <div style={cardHintStyle}>{t("retroEnabled")}: Off</div>
                ) : null}
                <div style={fieldLabelStyle}>{t("retroGameId")}</div>
                <div style={buttonRowStyle}>
                  <TextField
                    value={raGameId}
                    onChange={(e) => setRaGameId(e.target.value)}
                    style={{ ...flexFieldStyle, minWidth: "8rem" }}
                  />
                  <FocusableButton className="DialogButton" onClick={saveRaGameId}>
                    {t("save")}
                  </FocusableButton>
                </div>
                <div style={buttonRowStyle}>
                  <FocusableButton className="DialogButton" onClick={autoDetectAchievements}>
                    {t("retroGameDetect")}
                  </FocusableButton>
                  <FocusableButton className="DialogButton" onClick={testAchievements}>
                    {t("retroGameTest")}
                  </FocusableButton>
                </div>
                <div style={fieldLabelStyle}>{t("retroGameSearchHint")}</div>
                <div style={buttonRowStyle}>
                  <TextField
                    value={raQuery}
                    onChange={(e) => setRaQuery(e.target.value)}
                    style={{ ...flexFieldStyle, minWidth: "10rem" }}
                  />
                  <FocusableButton className="DialogButton" disabled={raSearching} onClick={searchAchievements}>
                    {raSearching ? t("searching") : t("retroGameSearch")}
                  </FocusableButton>
                </div>
                <div style={rowStackStyle}>
                  {raSearching ? <Spinner /> : null}
                  {!raSearching && !raResults.length ? (
                    <div style={cardHintStyle}>{t("retroGameNoMatches")}</div>
                  ) : null}
                  {raResults.map((result) => (
                    <FocusableButton
                      key={result.id}
                      className="DialogButton"
                      onClick={() => void useAchievementResult(result)}
                      style={{ justifyContent: "flex-start", textAlign: "left" }}
                    >
                      <div style={rowStackStyle}>
                        <b>{result.title}</b>
                        <span style={compactTextStyle}>
                          {result.console ? `${result.console} - ` : ""}
                          {Math.round(result.score * 100)}% match
                        </span>
                      </div>
                    </FocusableButton>
                  ))}
                </div>
              </PlayhubCard>

              <PlayhubCard icon={<FaXbox size={13} />} accent={PLAYHUB_ACCENTS.xbox} title={t("xboxPerGameTitle")} hint={t("xboxHint")}>
                <div style={fieldLabelStyle}>{t("xboxCurrentMatch")}</div>
                <div style={buttonRowStyle}>
                  <TextField
                    value={xboxTitleId}
                    onChange={(e) => setXboxTitleIdState(e.target.value)}
                    style={{ ...flexFieldStyle, minWidth: "12rem" }}
                  />
                  <FocusableButton className="DialogButton" onClick={saveXboxMatchManual}>
                    {t("save")}
                  </FocusableButton>
                </div>
                <div style={buttonRowStyle}>
                  <FocusableButton className="DialogButton" onClick={autoDetectXboxAchievements}>
                    {t("xboxGameDetect")}
                  </FocusableButton>
                  <FocusableButton
                    className="DialogButton"
                    disabled={!xboxTitleId}
                    onClick={syncXboxProgress}
                  >
                    {t("xboxSyncProgress")}
                  </FocusableButton>
                  <FocusableButton className="DialogButton" onClick={clearXboxMatch}>
                    {t("xboxClearMatch")}
                  </FocusableButton>
                </div>
                <div style={fieldLabelStyle}>{t("xboxGameSearchHint")}</div>
                <div style={buttonRowStyle}>
                  <TextField
                    value={xboxQuery}
                    onChange={(e) => setXboxQuery(e.target.value)}
                    style={{ ...flexFieldStyle, minWidth: "10rem" }}
                  />
                  <FocusableButton className="DialogButton" disabled={xboxSearching} onClick={searchXbox}>
                    {xboxSearching ? t("searching") : t("xboxGameSearch")}
                  </FocusableButton>
                </div>
                <div style={rowStackStyle}>
                  {xboxSearching ? <Spinner /> : null}
                  {!xboxSearching && !xboxResults.length ? (
                    <div style={cardHintStyle}>{t("xboxGameNoMatches")}</div>
                  ) : null}
                  {xboxResults.map((result) => (
                    <FocusableButton
                      key={result.id}
                      className="DialogButton"
                      onClick={() => void useXboxResult(result)}
                      style={{ justifyContent: "flex-start", textAlign: "left" }}
                    >
                      <div style={rowStackStyle}>
                        <b>{result.title}</b>
                        <span style={compactTextStyle}>
                          {Math.round(result.score * 100)}% match
                          {result.unlocked != null && result.total != null
                            ? ` - ${result.unlocked}/${result.total}`
                            : ""}
                          {result.gamerscore != null ? ` - ${result.gamerscore}G` : ""}
                          {` - ${result.source || "TrueAchievements"} - ${result.id}`}
                        </span>
                      </div>
                    </FocusableButton>
                  ))}
                </div>
              </PlayhubCard>

              <PlayhubCard icon={<FaPlaystation size={13} />} accent={PLAYHUB_ACCENTS.ps3} title={t("rpcs3PerGameTitle")} hint={t("rpcs3Hint")}>
                <div style={cardSubheadingStyle}>
                  {t("rpcs3CurrentMatch")}: {rpcs3TrophyId || t("none")}
                </div>
                <div style={buttonRowStyle}>
                  <FocusableButton className="DialogButton" onClick={autoDetectRpcs3Trophies}>
                    {t("rpcs3GameDetect")}
                  </FocusableButton>
                  <FocusableButton
                    className="DialogButton"
                    disabled={!rpcs3TrophyId}
                    onClick={syncRpcs3ProgressForApp}
                  >
                    {t("rpcs3SyncProgress")}
                  </FocusableButton>
                  <FocusableButton className="DialogButton" onClick={clearRpcs3Match}>
                    {t("rpcs3ClearMatch")}
                  </FocusableButton>
                </div>
                <div style={fieldLabelStyle}>{t("rpcs3GameSearchHint")}</div>
                <div style={buttonRowStyle}>
                  <TextField
                    value={rpcs3Query}
                    onChange={(e) => setRpcs3Query(e.target.value)}
                    style={{ ...flexFieldStyle, minWidth: "10rem" }}
                  />
                  <FocusableButton className="DialogButton" disabled={rpcs3Searching} onClick={searchRpcs3}>
                    {rpcs3Searching ? t("searching") : t("rpcs3GameSearch")}
                  </FocusableButton>
                </div>
                <div style={rowStackStyle}>
                  {rpcs3Searching ? <Spinner /> : null}
                  {!rpcs3Searching && !rpcs3Results.length ? (
                    <div style={cardHintStyle}>{t("rpcs3GameNoMatches")}</div>
                  ) : null}
                  {rpcs3Results.map((result) => (
                    <FocusableButton
                      key={result.path}
                      className="DialogButton"
                      onClick={() => void useRpcs3Result(result)}
                      style={{ justifyContent: "flex-start", textAlign: "left" }}
                    >
                      <div style={rowStackStyle}>
                        <b>{result.title}</b>
                        <span style={compactTextStyle}>
                          {Math.round(result.score * 100)}% match
                          {` - ${result.unlocked}/${result.total}`}
                          {` - ${result.id}`}
                        </span>
                      </div>
                    </FocusableButton>
                  ))}
                </div>
              </PlayhubCard>
            </Focusable>
          </Focusable>
        </div>
      </div>
    </ScrollPanel>
  );
};
