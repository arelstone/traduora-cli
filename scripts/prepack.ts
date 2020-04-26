import { exec } from 'shelljs';

exec('cat ./docs/changelog.md > CHANGELOG.md')
exec('rm -rf lib && tsc -b')
exec('oclif-dev manifest')
exec('oclif-dev readme')
