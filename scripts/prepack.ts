import { exec } from 'shelljs';

exec('cat ./docs/changelog.md > CHANGELOG.md')
exec('git add . && git commit --amend --no-edit')
exec('rm -rf lib && tsc -b')
exec('oclif-dev manifest')
exec('oclif-dev readme')
