const sync = require('rc-parser/sync')
const { NO_EXT } = require('rc-parser')

export interface Config {
    username: string;
    password: string;
    baseUrl: string;
    projectId: string;
}

export const config = (key?: keyof Config): Config => {
    const options = {
        path: process.cwd(),
        name: '.traduorarc',
        extensions: ['json', 'js', 'yaml', 'yml', NO_EXT],
    }
    const rc = sync(options)

    if (!rc) {
        throw `No .traduorarc file found in ${process.cwd()}`;
    }

    return key
        ? rc.value[key]
        : rc.value;
}
