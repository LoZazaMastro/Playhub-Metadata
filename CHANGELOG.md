## 1.8.5

- Fixed the Activity feed and news viewer for non-Steam games in Steam Big Picture.
- Fixed incorrect matches between numbered sequels and kept manual associations intact during refreshes.
- Added certificate and hostname verification to authenticated RetroAchievements and OpenXBL requests.

## 1.8.4

- Fix Playhub Metadata failing to load on Windows Decky builds without the difflib module.

## 1.8.3

- Fix duplicate non-Steam games in library collections by preserving each shortcut's own Steam identity when applying metadata.
- Refresh affected Steam collection caches during a hot upgrade from the old alias, preserving every collection membership without writing cloud or library files.
