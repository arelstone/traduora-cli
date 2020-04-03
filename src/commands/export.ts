import { flags } from '@oclif/command'
import Command from '../command'
import { helpFlag } from '../helpers/flags'
import { headersWithToken } from '../helpers/fetch'
import fetch from 'node-fetch'
import { config } from '../helpers/config';

export default class Export extends Command {
    static description = 'Exports all translations based on a locale'

    static flags = {
        help: helpFlag(),
        code: flags.string({
            char: 'c',
            required: true
        }),
        format: flags.string({
            char: 'f',
            default: 'jsonflat',
            options: ['jsonflat', 'jsonnested', 'js'],
        }),
    }


    static usage = [
        'export --code=en_GB > ./locale/gb_DB.json',
    ]

    async run() {
        const { flags: { code, format } } = this.parse(Export)

        const useFormat = format === 'js' ? 'jsonnested' : format;

        const url = `${config().baseUrl}/projects/${(await this.project()).id}/exports?locale=${code}&format=${useFormat}`;

        const response: any = await fetch(url, {
            headers: await headersWithToken()
        }).then(r => r.json())

        if (format === 'js') {
            this.log('module.exports = {' + JSON.stringify(response) + '}')
        }

        this.log(JSON.stringify(response))
    }
}
