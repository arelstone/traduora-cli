import Command from '../../command'
import { post } from '../../helpers/fetch'
import { Term } from '../../types/term.type'
import { Error } from '../../types/error.type'
import { helpFlag } from '../../helpers/flags'

interface TermResponse extends Term, Error { }

export default class TermAdd extends Command {
    static description = 'Create a term'

    static flags = {
        help: helpFlag(),
    }

    static args = [{
        name: 'name',
        required: true,
    }]

    async run() {
        const { args: { name } } = this.parse(TermAdd)

        const result: TermResponse = await post(`projects/${(await this.project()).id}/terms`, { value: name.toUpperCase() })

        if (result.code && result.message) {
            this.warn(result.message)
            this.exit()
        }

        this.log(`The term ${result.value} was created for ${(await this.project()).name}`)
    }
}
