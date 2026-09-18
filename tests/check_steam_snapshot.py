"""Validate concrete hook signatures against a user-supplied SteamUI snapshot.
No Valve source is included in this project; pass the extracted steamui folder.
"""
import argparse
import hashlib
import json
from pathlib import Path
import re


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('steamui', type=Path)
    parser.add_argument('--output', type=Path)
    args = parser.parse_args()
    path = args.steamui / 'chunk~2dcc5aaf7.js'
    raw = path.read_bytes()
    text = raw.decode('utf-8')
    starts = list(re.finditer(r'(?:^|,)(\d+):\(\(Te,te,t\)=>', text))
    modules = {match.group(1): text[match.start():starts[i + 1].start() if i + 1 < len(starts) else len(text)]
               for i, match in enumerate(starts)}
    specs = [
        ('library-context-menu class', '43394', ['GetTargetApps(', 'BuildManageSubmenu(', '.LibraryContextMenu', 'navigator:', '.AppProperties(']),
        ('context-menu direct children', '43394', ['children:[', 'render(){']),
        ('details-store native API', '32558', ['GetAppData(', 'GetDescriptions(', 'GetAssociations(', 'GetAchievements(', 'RequestAchievements(']),
        ('details-store global', '32558', ['window.appDetailsStore']),
        ('achievement-store maps', '78158', ['m_mapMyAchievements', 'm_mapGlobalAchievements', 'm_mapInflightMyAchievementsRequests']),
        ('shared my/global achievement loader', '78158', ['LoadMyAchievements(', 'GetGlobalAchievements(', 'GetMyAchievements(']),
        ('activity-store methods', '38364', ['GetAppActivity(', 'RequestRestoreActivity(', 'RestoreActivity(', 'FetchLatestActivity(', 'FetchActivityHistory(']),
        ('activity-store global', '38364', ['window.appActivityStore']),
        ('Home native hook exports', '28799', ['dm:()=>', 'IB:()=>', 'yX:()=>']),
        ('Home native observable list', '28799', ['window.libraryEventStore', 'm_vecHomeBestEventsForUser', 'm_bEventsLoaded', 'm_bInitialLoadPending']),
        ('community vote exports', '43679', ['bJ:()=>', 'dK:()=>', 'GetUserVoteSummary']),
    ]
    checks = []
    for title, module_id, needles in specs:
        module = modules.get(module_id, '')
        missing = [needle for needle in needles if needle not in module]
        checks.append({'check': title, 'snapshot_module_id': int(module_id), 'passed': not missing, 'missing': missing})
    checks.append({'check':'per-game section builder uses overview/detail arguments',
                   'passed':bool(re.search(r'GetSections\([^,()]+,[^,()]+\)',text)) and '"achievements"' in text})
    checks.append({'check':'Steam game-session lifetime notifications',
                   'passed':'.GameSessions.RegisterForAppLifetimeNotifications(' in text})
    report = {'version':'1.8.1', 'basis':'User-supplied SteamUI snapshot (not a live Steam runtime test)',
              'file':path.name, 'bytes':len(raw), 'sha256':hashlib.sha256(raw).hexdigest(),
              'checks':checks, 'passed':sum(c['passed'] for c in checks), 'total':len(checks)}
    for check in checks:
        print(('PASS' if check['passed'] else 'FAIL')+' '+check['check']+
              (f" (missing: {check['missing']})" if check.get('missing') else ''))
    print(f"{report['passed']}/{report['total']} supplied-snapshot signatures matched.")
    if args.output:
        args.output.write_text(json.dumps(report, indent=2)+'\n', encoding='utf-8')
    if report['passed'] != report['total']:
        raise SystemExit(1)

if __name__ == '__main__':
    main()
