<div align="center">

# Playhub Metadata

### Even non-Steam games can feel right at home in your library.

Descriptions, details, media, and achievements for PC games, Game Pass, and emulators, integrated directly into Steam Big Picture pages.

[![Release](https://img.shields.io/github/v/release/LoZazaMastro/Playhub-Metadata?style=for-the-badge&label=Release&labelColor=111111&color=ffffff)](https://github.com/LoZazaMastro/Playhub-Metadata/releases/latest)
[![Licenza GPL-3.0](https://img.shields.io/badge/Licenza-GPL--3.0-EA4335?style=for-the-badge&labelColor=111111)](LICENSE)

</div>

## A complete details page for every game

Playhub Metadata enriches non-Steam shortcuts without creating a parallel interface. Information appears within standard Big Picture pages, keeping PC games, Microsoft Store titles, and ROMs consistent with the rest of your library.

- automatic search for missing metadata;
- description, developer, publisher, release date, rating, and info fields;
- manual editing per individual game;
- community screenshots and content when available;
- IGN metadata with global or game-specific language options;
- automatic description translation via Google Translate with MyMemory fallback;
- Steam news in the Activity area for shortcuts that can be linked to a Store page.

## Achievements and trophies

The plugin can display three sources on non-Steam game pages:

- **RetroAchievements** for ROMs and emulator shortcuts;
- **Xbox / OpenXBL** for PC Xbox, Game Pass, and Microsoft Store games imported via UWPHook;
- **RPCS3** for PS3 trophies read directly from local emulator data.

For each title, you can choose automatic detection, select a specific source, or disable achievements entirely. The data is displayed within Steam but does not become official achievements on your Steam account.

## Source configuration

### RetroAchievements

Enter your username and Web API key from your RetroAchievements account settings, then log in via the QAM. The plugin attempts to automatically match the ROM and still allows for manual search.

### Xbox / OpenXBL

Create a key on [OpenXBL](https://xbl.io), enter it in the settings, and start the scan. OpenXBL limits are respected through caching and conservative updates. To properly recognize Microsoft games, they must be imported into Steam using UWPHook.

### RPCS3

Trophies are read from `dev_hdd0/home/<user>/trophy/<NPCOMMID>/`, including icons, grade, and unlock date. No accounts or APIs are required. Common RPCS3 folders, EmuDeck installations, and paths defined in `vfs.yml` are automatically detected; you can also specify the data folder manually.

Launch each game at least once in RPCS3, then use **Automatically detect trophies** on the title page or run a global scan from the QAM.

## Cache and updates

You can update achievements hourly, daily, weekly, per PC session, or strictly manually. The post-game update only affects the title that was just closed and does not trigger a full library scan.

## Installation

You can install and update Playhub Metadata from the [Playhub](https://github.com/LoZazaMastro/Playhub) Plugin Store, or download the ZIP from the [latest release](https://github.com/LoZazaMastro/Playhub-Metadata/releases/latest) and install it via **Decky → Settings → Developer → Install plugin from ZIP**.

## Development

```powershell
pnpm install
pnpm run build
python -m py_compile main.py
.\package-win.ps1
```

## License and credits

Playhub Metadata is distributed under the [GNU GPL-3.0-or-later](LICENSE) license. The project uses the Decky Plugin Template; the context menu integration in `src/contextMenuPatch.tsx` is derived from [decky-steamgriddb](https://github.com/SteamGridDB/decky-steamgriddb), which is also GPL-3.0. Details and attributions are collected in [NOTICE](NOTICE).

<div align="center">

Created and maintained by **[LoZazaMastro](https://github.com/LoZazaMastro)**.

</div>
