import { flags } from '@oclif/command'
import Command from '../command'
import { config } from '../helpers/config'
import { headersWithToken } from '../helpers/fetch'
import { helpFlag } from '../helpers/flags'

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
        'export --code=en_GB > ./locale/gb_GB.json',
    ]

    async run() {
        const { flags: { code, format } } = this.parse(Export)

        const url = `${config('baseUrl')}/projects/${config('projectId')}/exports?locale=${code}&format=${format}`

        const response: any = await fetch(url, { headers: await headersWithToken() });
        const json = await response.json();
        if (response.status !== 200) {
            this.warn('An error occured');
            this.log(json);

            return this.exit(0);
        }


        if (format === 'js') {
            return 'module.exports = {' + JSON.stringify(json) + '}'
        }

        this.log(response);
    }
}
