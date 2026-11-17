## 1.8.13

- Preserve Steam’s native shortcut identity when Metadata and Digital Stores are loaded or reloaded together.
- Leave Digital Stores achievement presentation under its own runtime’s ownership.

## 1.8.12

- Move Xbox achievement accounts, scanning and progress ownership to Digital Stores; Metadata retains RetroAchievements and RPCS3 trophies.
- Preserve Digital Stores native Steam achievement data during Metadata refreshes.

## 1.8.11

- Keep Xbox achievements visible in Steam after closing a game, while clearing progress when its connected account changes.
- Preserve current Xbox Live progress during legacy achievement cache cleanup.

## 1.8.10

- Use Xbox Live's global unlock percentages independently of the player's own progress.

## 1.8.9

- Show connected Xbox achievements in the current Steam client's Your stuff tab and native achievement pages.

## 1.8.8

- Read Xbox achievements from the connected Digital Stores account, with progress updates and unlock notifications during play.
- Preserve Steam's native shortcut identity throughout active game sessions.

## 1.8.7

- Preserve native shortcut launch identities when opening games from Steam Home.

## 1.8.6

- Fix community content loading on non-Steam game pages with the latest Steam client.

## 1.8.5

- Fixed the Activity feed and news viewer for non-Steam games in Steam Big Picture.
- Fixed incorrect matches between numbered sequels and kept manual associations intact during refreshes.
- Added certificate and hostname verification to authenticated RetroAchievements and OpenXBL requests.

## 1.8.4

- Fix Playhub Metadata failing to load on Windows Decky builds without the difflib module.

## 1.8.3

- Fix duplicate non-Steam games in library collections by preserving each shortcut's own Steam identity when applying metadata.
- Refresh affected Steam collection caches during a hot upgrade from the old alias, preserving every collection membership without writing cloud or library files.
