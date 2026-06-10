import { callable } from "@decky/api";
import {
  AchievementsResponse,
  GameOption,
  MetadataData,
  MetadataSearchResult,
  RetroAchievementsLoginResult,
  RetroAchievementsGameResult,
  RetroAchievementsSettings,
  ScanProgress,
} from "./types";

export const getAllMetadata = callable<[], Record<string, MetadataData>>(
  "get_all_metadata"
);
export const getMetadata = callable<[appId: number], MetadataData | null>(
  "get_metadata"
);
export const saveMetadata = callable<
  [appId: number, metadata: MetadataData],
  MetadataData
>("save_metadata");
export const removeMetadata = callable<
  [appId: number],
  Record<string, MetadataData>
>("remove_metadata");
export const searchMetadata = callable<
  [query: string, limit?: number],
  MetadataSearchResult[]
>("search_metadata");
export const fetchMetadata = callable<[slugOrUrl: string], MetadataData | null>(
  "fetch_metadata"
);
export const autoFetchMetadata = callable<
  [appId: number, title: string],
  MetadataData | null
>("auto_fetch_metadata");
export const enrichCommunityMedia = callable<
  [appId: number, title?: string, sourceUrl?: string],
  MetadataData | null
>("enrich_community_media");
export const startScanMissing = callable<
  [games: GameOption[]],
  ScanProgress
>("start_scan_missing");
export const getScanProgress = callable<[], ScanProgress>(
  "get_scan_progress"
);
export const getLocalShortcuts = callable<[], GameOption[]>(
  "get_local_shortcuts"
);
export const getRetroAchievementsSettings = callable<
  [],
  RetroAchievementsSettings
>("get_retroachievements_settings");
export const setRetroAchievementsSettings = callable<
  [enabled: boolean, username: string, apiKey: string],
  RetroAchievementsSettings
>("set_retroachievements_settings");
export const testRetroAchievementsCredentials = callable<
  [username?: string, apiKey?: string],
  RetroAchievementsLoginResult
>("test_retroachievements_credentials");
export const setRetroAchievementsGameId = callable<
  [appId: number, gameId: number | null],
  Record<string, number>
>("set_retroachievements_game_id");
export const fetchAchievements = callable<
  [appId: number],
  AchievementsResponse | null
>("fetch_achievements");
export const resolveRetroAchievementsFromPath = callable<
  [appId: number, path: string, title?: string],
  AchievementsResponse | null
>("resolve_retroachievements_from_path");
export const searchRetroAchievementsGames = callable<
  [query: string, limit?: number, appId?: number],
  RetroAchievementsGameResult[]
>("search_retroachievements_games");
