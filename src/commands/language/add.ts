import Command from '../../command'
import { helpFlag } from '../../helpers/flags'
import { get, post } from '../../helpers/fetch'
import { Language, Locale } from '../../types/language.type'

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

        const { locale }: Locale = await post(`projects/${(await this.project()).id}/translations`, { code })

        this.log(`The language ${locale.code} was created for ${(await this.project()).name}`)
    }
}
