import { flags } from '@oclif/command'
import Command from '../command'
import { helpFlag } from '../helpers/flags'
import { ExportFormat } from '../services/export.service'
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

        const response = await this.exportService.get(code, format as ExportFormat);

        this.log(response);
    }
}
