export type Person = {
  name: string;
  url: string;
};

export type MetadataData = {
  title: string;
  id: string | number;
  source?: string;
  scraper_source?: "ign" | string;
  language?: string;
  content_language?: string;
  translated?: boolean;
  source_url?: string;
  description: string;
  short_description?: string;
  developers?: Person[];
  publishers?: Person[];
  release_date?: number | null;
  rating?: number | null;
  store_categories: number[];
  genres?: string[];
  features?: string[];
  screenshots?: MetadataScreenshot[];
  community_images?: MetadataScreenshot[];
  community_videos?: MetadataVideo[];
  steam_appid?: number | null;
  steam_store_url?: string;
  steam_news?: MetadataNews[];
  steam_news_enriched_at?: number;
  steam_activity_disabled?: boolean;
  steam_activity_title?: string;
  steam_activity_blocked_appids?: number[];
  steam_activity_blocked_titles?: string[];
  community_enriched_at?: number;
  updated_at?: number;
};

export type MetadataScreenshot = {
  id?: string;
  url: string;
  caption?: string;
  width?: number;
  height?: number;
};

export type MetadataSearchResult = {
  id?: string;
  slug: string;
  url: string;
  title: string;
  description: string;
  rating?: number | null;
};

export type MetadataVideo = {
  id: string;
  title?: string;
  url?: string;
  thumbnail?: string;
  source?: string;
};

export type MetadataNews = {
  id: string;
  title: string;
  url: string;
  summary?: string;
  image?: string;
  author?: string;
  feedLabel?: string;
  event_type?: number;
  type?: number;
  gid?: string;
  news_id?: string;
  announcement_gid?: string;
  event_gid?: string;
  body?: string;
  raw_body?: string;
  date?: number;
};

export type GameOption = {
  appid: number;
  name: string;
  exe?: string;
  start_dir?: string;
  launch_options?: string;
  shortcut_path?: string;
  icon?: string;
  isNonSteam?: boolean;
};

export type ScanProgress = {
  running: boolean;
  status: string;
  total: number;
  completed: number;
  assigned: number;
  failed: number;
  current: string;
  current_title?: string;
  phase?: string;
  message: string;
  error?: string;
};

export type RetroAchievementsSettings = {
  enabled: boolean;
  username: string;
  api_key: string;
  game_ids: Record<string, number>;
};

export type XboxSettings = {
  enabled: boolean;
  api_key: string;
  xuid: string;
  gamertag: string;
  ta_logged_in?: boolean;
  title_ids: Record<string, string>;
};

export type AchievementSource = "auto" | "retroachievements" | "xbox" | "rpcs3" | "disabled";
export type AchievementCachePolicy = "hourly" | "daily" | "weekly" | "pc_session" | "manual";

export type ScraperSettings = {
  language: string;
  translate_ign: boolean;
  languages: string[];
  language_labels?: Record<string, string>;
  language_overrides?: Record<string, string>;
};


export type Rpcs3Settings = {
  enabled: boolean;
  trophy_ids: Record<string, string>;
  data_path: string;
  automatic?: boolean;
  data_path_valid?: boolean;
  data_path_ready?: boolean;
  trophy_set_count?: number;
  resolved_trophy_paths?: string[];
  ok?: boolean;
  error?: string;
};

export type AchievementSettings = {
  retroachievements: RetroAchievementsSettings;
  xbox: XboxSettings;
  rpcs3?: Rpcs3Settings;
  achievement_sources: Record<string, AchievementSource>;
  achievement_cache: {
    policy?: AchievementCachePolicy;
    retroachievements_policy: AchievementCachePolicy;
    xbox_policy: AchievementCachePolicy;
    rpcs3_policy?: AchievementCachePolicy;
  };
};

export type RetroAchievementsLoginResult = {
  ok: boolean;
  message: string;
};

export type RetroAchievementsGameResult = {
  id: number;
  title: string;
  console: string;
  score: number;
};

export type XboxTitleResult = {
  id: string;
  title: string;
  source: string;
  score: number;
  unlocked?: number | null;
  total?: number | null;
  gamerscore?: number | null;
};

export type Rpcs3TrophySetResult = {
  id: string;
  title: string;
  path: string;
  unlocked: number;
  total: number;
  score: number;
};

export type SteamAchievement = {
  strID: string;
  strName: string;
  strDescription: string;
  bAchieved: boolean;
  rtUnlocked: number;
  strImage: string;
  strImageURL?: string;
  strImageUrl?: string;
  strIcon?: string;
  strIconURL?: string;
  iconUrl?: string;
  imageUrl?: string;
  playhubImage?: string;
  bHidden: boolean;
  flMinProgress: number;
  flCurrentProgress: number;
  flMaxProgress: number;
  flAchieved: number;
};

export type SteamAchievementsPayload = {
  nAchieved: number;
  nTotal: number;
  vecAchievedHidden: SteamAchievement[];
  vecHighlight: SteamAchievement[];
  vecUnachieved: SteamAchievement[];
};

export type AchievementsResponse = {
  game_id: number | string;
  provider?: "retroachievements" | "xbox" | "rpcs3";
  title: string;
  steam: SteamAchievementsPayload;
  user?: {
    loading: boolean;
    data?: {
      achieved: Record<string, SteamAchievement>;
      hidden: Record<string, SteamAchievement>;
      unachieved: Record<string, SteamAchievement>;
    };
  };
  global?: {
    loading: boolean;
    data?: Record<string, number>;
  };
  progress: {
    achieved: number;
    total: number;
    percentage: number;
  };
};

export enum StoreCategory {
  MultiPlayer = 1,
  SinglePlayer = 2,
  CoOp = 9,
  MMO = 20,
  Achievements = 22,
  SplitScreen = 24,
  FullController = 28,
  OnlineMultiPlayer = 36,
  LocalMultiPlayer = 37,
  OnlineCoOp = 38,
  LocalCoOp = 392,
}

export const CATEGORY_LABELS: Record<number, string> = {
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
