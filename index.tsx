import {
  DialogButton,
  Focusable,
  Navigation,
  PanelSection,
  PanelSectionRow,
  ScrollPanel,
  Spinner,
  TextField,
  ToggleField,
  useParams,
} from "@decky/ui";
import { toaster } from "@decky/api";
import { useCallback, useEffect, useMemo, useState } from "react";
import {
  fetchAchievements,
  fetchMetadata,
  getMetadata,
  getRetroAchievementsSettings,
  removeMetadata,
  resolveRetroAchievementsFromPath,
  saveMetadata,
  searchRetroAchievementsGames,
  searchMetadata,
  setRetroAchievementsGameId,
  setRetroAchievementsSettings,
  startScanMissing,
  testRetroAchievementsCredentials,
  getScanProgress,
} from "./backend";
import { t } from "./i18n";
import {
  allNonSteamGames,
  appName,
  applyAchievementPayload,
  applyMetadata,
  cleanTitle,
  getAppDetails,
  getOverview,
  isNonSteamApp,
  metadataCache,
  refreshMetadataCache,
  refreshRaSettings,
} from "./steam";
import {
  CATEGORY_LABELS,
  GameOption,
  MetadataData,
  MetadataSearchResult,
  RetroAchievementsGameResult,
  RetroAchievementsSettings,
  StoreCategory,
} from "./types";

const FocusableButton = (props: any) => (
  <DialogButton focusable={true} {...props} />
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
  gap: "0.45rem",
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

const useNonSteamGames = () => {
  const [games, setGames] = useState<GameOption[]>([]);
  const loadGames = useCallback(async () => {
    setGames(await allNonSteamGames());
  }, []);
  useEffect(() => {
    void loadGames();
  }, [loadGames]);
  return { games, loadGames };
};

export const Content = () => {
  const { games, loadGames } = useNonSteamGames();
  const [metadataCount, setMetadataCount] = useState(0);
  const [busy, setBusy] = useState(false);
  const [scanMessage, setScanMessage] = useState("");
  const [ra, setRa] = useState<RetroAchievementsSettings>({
    enabled: false,
    username: "",
    api_key: "",
    game_ids: {},
  });

  const missing = Math.max(games.length - metadataCount, 0);

  const refresh = useCallback(async () => {
    await refreshMetadataCache();
    await loadGames();
    setMetadataCount(Object.keys(metadataCache).length);
    setRa(await getRetroAchievementsSettings());
  }, [loadGames]);

  useEffect(() => {
    void refresh();
  }, [refresh]);

  const scanMissing = async () => {
    if (busy) return;
    setBusy(true);
    setScanMessage("");
    try {
      await startScanMissing(games);
      const interval = window.setInterval(async () => {
        const progress = await getScanProgress();
        setScanMessage(
          progress.current ||
            progress.message ||
            `${progress.completed}/${progress.total}`
        );
        if (!progress.running) {
          window.clearInterval(interval);
          await refresh();
          setBusy(false);
          toaster.toast({ title: t("pluginName"), body: t("scanComplete") });
        }
      }, 800);
    } catch (error) {
      setBusy(false);
      toaster.toast({ title: t("pluginName"), body: String(error) });
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

  return (
    <PanelSection>
      <PanelSectionRow>
        <div style={rowStackStyle}>
          <div>
            <b>{t("detected")}:</b> {games.length}
          </div>
          <div>
            <b>{t("saved")}:</b> {metadataCount}
          </div>
          <div>
            <b>{t("missing")}:</b> {missing}
          </div>
          {scanMessage ? <div style={compactTextStyle}>{scanMessage}</div> : null}
        </div>
      </PanelSectionRow>
      <PanelSectionRow>
        <FocusableButton
          className="DialogButton"
          disabled={busy || !games.length}
          onClick={scanMissing}
        >
          {busy ? t("scanning") : t("scanMissing")}
        </FocusableButton>
      </PanelSectionRow>
      <PanelSectionRow>
        <div style={sectionHeadingStyle}>{t("retroTitle")}</div>
      </PanelSectionRow>
        <PanelSectionRow>
          <ToggleField
            label={t("retroEnabled")}
            checked={ra.enabled}
            onChange={(checked) => void saveRaSettings({ enabled: checked })}
          />
        </PanelSectionRow>
        <PanelSectionRow>
          <div style={compactTextStyle}>{t("retroLoginHint")}</div>
        </PanelSectionRow>
        <PanelSectionRow>
          <div style={rowStackStyle}>
            <label>{t("retroUser")}</label>
            <TextField
              value={ra.username}
              onChange={(e) =>
                setRa((prev) => ({ ...prev, username: e.target.value }))
              }
              onBlur={() => void saveRaSettings({ username: ra.username })}
              style={fieldStyle}
            />
          </div>
        </PanelSectionRow>
        <PanelSectionRow>
          <div style={rowStackStyle}>
            <label>{t("retroKey")}</label>
            <TextField
              value={ra.api_key}
              onChange={(e) =>
                setRa((prev) => ({ ...prev, api_key: e.target.value }))
              }
              onBlur={() => void saveRaSettings({ api_key: ra.api_key })}
              style={fieldStyle}
            />
          </div>
        </PanelSectionRow>
        <PanelSectionRow>
          <FocusableButton className="DialogButton" onClick={testRaLogin}>
            {t("retroLogin")}
          </FocusableButton>
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

  const setFormMetadata = useCallback((next: MetadataData) => {
    setMetadata(next);
    setDeveloperText(personsToText(next.developers));
    setPublisherText(personsToText(next.publishers));
    setReleaseText(epochToDate(next.release_date));
    setRatingText(next.rating == null ? "" : String(next.rating));
  }, []);

  const load = useCallback(async () => {
    const saved = await getMetadata(appId);
    setFormMetadata(saved || metadataTemplate(appName(appId)));
    const settings = await getRetroAchievementsSettings();
    setRaSettings(settings);
    setRaGameId(settings.game_ids[String(appId)]?.toString() || "");
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

  const search = async () => {
    setBusy(true);
    try {
      setResults(await searchMetadata(query, 8));
    } catch (error) {
      toaster.toast({ title: t("pluginName"), body: String(error) });
    } finally {
      setBusy(false);
    }
  };

  const applyResult = async (result: MetadataSearchResult) => {
    setBusy(true);
    try {
      const fetched = await fetchMetadata(result.slug || result.url);
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

  const removeCurrent = async () => {
    await removeMetadata(appId);
    delete metadataCache[String(appId)];
    setFormMetadata(metadataTemplate(appName(appId)));
    toaster.toast({ title: t("pluginName"), body: t("removeToast") });
  };

  const saveRaGameId = async () => {
    const parsed = Number.parseInt(raGameId, 10);
    const ids = await setRetroAchievementsGameId(
      appId,
      Number.isFinite(parsed) && parsed > 0 ? parsed : null
    );
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
        <PanelSection title={`${t("pluginName")} - ${appName(appId)}`}>
          {!nonSteam ? (
            <PanelSectionRow>
              <div style={compactTextStyle}>{t("notNonSteam")}</div>
            </PanelSectionRow>
          ) : null}
          <PanelSectionRow>
            <div style={buttonRowStyle}>
              <FocusableButton className="DialogButton" onClick={saveCurrent}>
                {t("save")}
              </FocusableButton>
              <FocusableButton className="DialogButton" onClick={removeCurrent}>
                {t("remove")}
              </FocusableButton>
              <FocusableButton
                className="DialogButton"
                onClick={() => Navigation.NavigateBack()}
              >
                {t("done")}
              </FocusableButton>
            </div>
          </PanelSectionRow>
        </PanelSection>

        <PanelSection title={t("searchTitle")}>
          <PanelSectionRow>
            <div style={buttonRowStyle}>
              <TextField
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                style={{ ...flexFieldStyle, minWidth: "10rem" }}
              />
              <FocusableButton
                className="DialogButton"
                disabled={busy}
                onClick={search}
              >
                {busy ? t("searching") : t("search")}
              </FocusableButton>
            </div>
          </PanelSectionRow>
          <PanelSectionRow>
            <div style={rowStackStyle}>
              {busy ? <Spinner /> : null}
              {!busy && !results.length ? (
                <div style={compactTextStyle}>{t("noResults")}</div>
              ) : null}
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
          </PanelSectionRow>
        </PanelSection>

        <PanelSection title={t("source")}>
          <PanelSectionRow>
            <div style={rowStackStyle}>
              <label>{t("title")}</label>
              <TextField
                value={metadata.title}
                onChange={(e) =>
                  setMetadata((prev) => ({ ...prev, title: e.target.value }))
                }
                style={fieldStyle}
              />
            </div>
          </PanelSectionRow>
          <PanelSectionRow>
            <div style={rowStackStyle}>
              <label>{t("description")}</label>
              <Focusable style={{ width: "100%" }}>
                <textarea
                  value={metadata.description}
                  onChange={(e) =>
                    setMetadata((prev) => ({
                      ...prev,
                      description: e.target.value,
                      short_description: e.target.value,
                    }))
                  }
                  style={{
                    width: "100%",
                    minHeight: "9rem",
                    boxSizing: "border-box",
                    resize: "vertical",
                    borderRadius: 4,
                    padding: 10,
                    color: "white",
                    background: "rgba(0,0,0,0.28)",
                    border: "1px solid rgba(255,255,255,0.18)",
                  }}
                />
              </Focusable>
            </div>
          </PanelSectionRow>
          <PanelSectionRow>
            <div style={rowStackStyle}>
              <label>{t("developers")}</label>
              <TextField
                value={developerText}
                onChange={(e) => setDeveloperText(e.target.value)}
                style={fieldStyle}
              />
            </div>
          </PanelSectionRow>
          <PanelSectionRow>
            <div style={rowStackStyle}>
              <label>{t("publishers")}</label>
              <TextField
                value={publisherText}
                onChange={(e) => setPublisherText(e.target.value)}
                style={fieldStyle}
              />
            </div>
          </PanelSectionRow>
          <PanelSectionRow>
            <div style={buttonRowStyle}>
              <div style={{ ...flexFieldStyle, minWidth: "8rem" }}>
                <label>{t("releaseDate")}</label>
                <TextField
                  value={releaseText}
                  onChange={(e) => setReleaseText(e.target.value)}
                  style={fieldStyle}
                />
              </div>
              <div style={{ ...flexFieldStyle, minWidth: "7rem" }}>
                <label>{t("rating")}</label>
                <TextField
                  value={ratingText}
                  onChange={(e) => setRatingText(e.target.value)}
                  style={fieldStyle}
                />
              </div>
            </div>
          </PanelSectionRow>
        </PanelSection>

        <PanelSection title={t("categories")}>
          {Object.entries(CATEGORY_LABELS).map(([category, label]) => (
            <PanelSectionRow key={category}>
              <ToggleField
                label={label}
                checked={(metadata.store_categories || []).includes(Number(category))}
                onChange={(checked) => toggleCategory(Number(category), checked)}
              />
            </PanelSectionRow>
          ))}
        </PanelSection>

        <PanelSection title={t("retroTitle")}>
          <PanelSectionRow>
            <div style={compactTextStyle}>{t("retroHint")}</div>
          </PanelSectionRow>
          <PanelSectionRow>
            <div style={buttonRowStyle}>
              <TextField
                value={raGameId}
                onChange={(e) => setRaGameId(e.target.value)}
                style={{ ...flexFieldStyle, minWidth: "8rem" }}
              />
              <FocusableButton className="DialogButton" onClick={saveRaGameId}>
                {t("save")}
              </FocusableButton>
              <FocusableButton
                className="DialogButton"
                onClick={autoDetectAchievements}
              >
                {t("retroGameDetect")}
              </FocusableButton>
              <FocusableButton className="DialogButton" onClick={testAchievements}>
                {t("retroGameTest")}
              </FocusableButton>
            </div>
          </PanelSectionRow>
          {raSettings && !raSettings.enabled ? (
            <PanelSectionRow>
              <div style={compactTextStyle}>{t("retroEnabled")}: Off</div>
            </PanelSectionRow>
          ) : null}
          <PanelSectionRow>
            <div style={rowStackStyle}>
              <div style={compactTextStyle}>{t("retroGameSearchHint")}</div>
              <div style={buttonRowStyle}>
                <TextField
                  value={raQuery}
                  onChange={(e) => setRaQuery(e.target.value)}
                  style={{ ...flexFieldStyle, minWidth: "10rem" }}
                />
                <FocusableButton
                  className="DialogButton"
                  disabled={raSearching}
                  onClick={searchAchievements}
                >
                  {raSearching ? t("searching") : t("retroGameSearch")}
                </FocusableButton>
              </div>
            </div>
          </PanelSectionRow>
          <PanelSectionRow>
            <div style={rowStackStyle}>
              {raSearching ? <Spinner /> : null}
              {!raSearching && !raResults.length ? (
                <div style={compactTextStyle}>{t("retroGameNoMatches")}</div>
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
          </PanelSectionRow>
        </PanelSection>
      </div>
    </ScrollPanel>
  );
};
