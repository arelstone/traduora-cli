import { exec } from 'shelljs';

exec('rm -rf lib && tsc -b')