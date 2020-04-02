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
            options: ['jsonflat'],
        }),
    }


    static usage = [
        'export --code=en_GB > ./locale/gb_DB.json',
    ]

    async run() {
        const { flags: { code, format } } = this.parse(Export)
        const url = `${config().baseUrl}/projects/${(await this.project()).id}/exports?locale=${code}&format=${format}`;

        const response: any = await fetch(url, {
            headers: await headersWithToken()
        }).then(r => r.json())

        this.log(JSON.stringify(response))
    }
}
