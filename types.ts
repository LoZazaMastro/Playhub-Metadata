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
    retroLoginHint:
      "Use your RetroAchievements web API key. You can find it in your RetroAchievements control panel.",
    retroLoginOk: "RetroAchievements login OK",
    retroLoginFailed: "RetroAchievements login failed",
    retroGameId: "RetroAchievements game ID",
    retroGameTest: "Test achievements",
    retroGameDetect: "Auto-detect achievements",
    retroGameSearch: "Search RetroAchievements",
    retroGameUse: "Use this game",
    retroGameSearchHint:
      "If auto-detect misses the game, search by title and pick the closest RetroAchievements entry.",
    retroGameNoMatches: "No RetroAchievements results yet.",
    retroGameOk: "Achievements loaded",
    retroGameFailed: "No achievements loaded. Check the RetroAchievements game ID.",
    retroDetectFailed:
      "No RetroAchievements match found from this game's shortcut path.",
    retroHint:
      "Paste the numeric RetroAchievements game ID from the game page URL. Leave empty to hide achievements for this game.",
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
    retroLoginHint:
      "Usa la tua web API key di RetroAchievements. La trovi nel pannello di controllo di RetroAchievements.",
    retroLoginOk: "Login RetroAchievements riuscito",
    retroLoginFailed: "Login RetroAchievements non riuscito",
    retroGameId: "ID gioco RetroAchievements",
    retroGameTest: "Testa obiettivi",
    retroGameDetect: "Rileva automaticamente",
    retroGameSearch: "Cerca su RetroAchievements",
    retroGameUse: "Usa questo gioco",
    retroGameSearchHint:
      "Se il rilevamento automatico sbaglia, cerca per titolo e scegli la voce RetroAchievements più vicina.",
    retroGameNoMatches: "Nessun risultato RetroAchievements per ora.",
    retroGameOk: "Obiettivi caricati",
    retroGameFailed: "Nessun obiettivo caricato. Controlla l'ID gioco RetroAchievements.",
    retroDetectFailed:
      "Nessun match RetroAchievements trovato dal percorso del collegamento.",
    retroHint:
      "Incolla l'ID numerico RetroAchievements dall'URL della pagina del gioco. Lascialo vuoto per nascondere gli obiettivi di questo gioco.",
    noResults: "Nessun risultato per ora.",
    source: "Fonte",
    fetchCurrent: "Scarica da IGN",
    removeToast: "Metadata rimossi",
    scanComplete: "Scansione completata",
    notNonSteam: "Questo plugin modifica solo i giochi non Steam.",
  },
} as const;

type Lang = keyof typeof STRINGS;
type Key = keyof typeof STRINGS.en;

const currentLang = (): Lang => {
  const raw =
    (window as any)?.SteamClient?.System?.GetCurrentLanguage?.() ||
    navigator.language ||
    "en";
  const code = String(raw).toLowerCase();
  if (code.startsWith("it")) return "it";
  return "en";
};

export const t = (key: Key): string => STRINGS[currentLang()][key] ?? STRINGS.en[key];
