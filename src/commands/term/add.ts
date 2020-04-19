import Command from '../../command'
import { helpFlag } from '../../helpers/flags'
import { TermResponse } from '../../services/term.service';

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

        const result: TermResponse = await this.termService.add(name);

        if (result.code && result.message) {
            this.warn(result.message)
            this.exit()
        }

        this.log(`The term ${result.value} was added`)
    }
}
