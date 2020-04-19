import Command from '../../command'
import { helpFlag } from '../../helpers/flags'
import { get } from '../../helpers/fetch'
import { Language } from '../../types/language.type'

export default class LanguageAdd extends Command {
    static description = 'describe the command here'

    static flags = {
        help: helpFlag()
    }

    static args = [{
        name: 'code',
        required: true,
    }]

    async run() {
        const { args: { code } } = this.parse(LanguageAdd)

        const languages: Language[] = await get('locales')

        if (!languages.find(language => language.code === code)) {
            this.warn(`Provided (${code}) code does not exist.`)
            this.exit()
        }

        const response = await this.languageService.add(code);

        this.log(response);
    }
}
