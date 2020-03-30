import Command from '../command'
import { helpFlag } from '../helpers/flags'
import { flags } from '@oclif/command'
import { get, post } from '../helpers/fetch'
import { Term } from '../types/term.type'

export default class Translate extends Command {
    static description = 'Translate a term to a given locale'

    static hidden = true;

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

        this.warn('TODO: this does not work')

        const result = await post(
            `projects/${(await this.project()).id}/translations/${code}`,
            {
                termId: (await this.term(term)).id,
                value,
            },
            'PATCH'
        )

        this.log(result)


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

}
