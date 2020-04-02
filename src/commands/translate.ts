import Command from '../command'
import { helpFlag } from '../helpers/flags'
import { flags } from '@oclif/command'
import { get, post } from '../helpers/fetch'
import { Term } from '../types/term.type'
import { Locale } from '../types/language.type'

export default class Translate extends Command {
    static description = 'Translate a term to a given locale'

    // static hidden = true;

    static flags = {
        help: helpFlag(),
        term: flags.string({
            char: 't',
            required: true,
        }),
        code: flags.string({
            char: 'c',
            required: true,
        })
    }

    static args = [
        {
            name: 'value',
            required: true,
        },
    ]

    async run() {
        const {
            args: { value },
            flags: { term, code }
        } = this.parse(Translate)

        const localeIsAdded = await this.locale(code)

        if (!localeIsAdded) {
            this.warn(`Language (${code}) is not added to the project`)
            this.exit(2)
        }

        const result = await post(
            `projects/${(await this.project()).id}/translations/${code}`,
            {
                termId: (await this.term(term)).id,
                value,
            },
            'PATCH'
        )

        if (result.code) {
            return this.log(result)

        }

        this.log(`Term: ${term} is translated to '${result.value}' for locale: ${code}`)
    }

    private term = async (input: string): Promise<Term> => {
        const terms = await get(`projects/${(await this.project()).id}/terms`)
        const found = await terms.find((t: Term) => t.value === input)

        if (!found) {
            this.warn('Term does not exist')
            this.exit()
        }

        return found;
    }

    private locale = async (code: string) => {
        const res: Locale[] = await get(`projects/${(await this.project()).id}/translations`)

        const found = res.find(({ locale }) => locale.code === code)
        return Boolean(found)
    }

}

