$ErrorActionPreference = 'Stop'
$projectRoot = $PSScriptRoot
$nodeDirectory = Join-Path $projectRoot '.tools/node-v22.16.0-win-x64'
if (Test-Path -LiteralPath (Join-Path $nodeDirectory 'node.exe')) {
    $env:PATH = $nodeDirectory + ';' + $env:PATH
}
Push-Location $projectRoot
try { npm.cmd run dev -- --port 5173 --strictPort } finally { Pop-Location }
