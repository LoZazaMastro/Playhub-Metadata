$ErrorActionPreference = "Stop"

$PluginFolderName = "Playhub Metadata"
$Root = Split-Path -Parent $MyInvocation.MyCommand.Path
$StagingRoot = Join-Path $Root "build-package"
$StagingPlugin = Join-Path $StagingRoot $PluginFolderName
$OutputZip = Join-Path $Root "Playhub-Metadata-decky-installable.zip"

if (Test-Path $StagingRoot) { Remove-Item $StagingRoot -Recurse -Force }
if (Test-Path $OutputZip) { Remove-Item $OutputZip -Force }

New-Item -ItemType Directory -Path $StagingPlugin | Out-Null
New-Item -ItemType Directory -Path (Join-Path $StagingPlugin "dist") | Out-Null

Copy-Item (Join-Path $Root "main.py") $StagingPlugin
Copy-Item (Join-Path $Root "package.json") $StagingPlugin
Copy-Item (Join-Path $Root "plugin.json") $StagingPlugin
Copy-Item (Join-Path $Root "dist\index.js") (Join-Path $StagingPlugin "dist")
if (Test-Path (Join-Path $Root "dist\index.js.map")) {
  Copy-Item (Join-Path $Root "dist\index.js.map") (Join-Path $StagingPlugin "dist")
}

Compress-Archive -Path (Join-Path $StagingRoot $PluginFolderName) -DestinationPath $OutputZip -Force
Remove-Item $StagingRoot -Recurse -Force

Write-Host "Created $OutputZip"
