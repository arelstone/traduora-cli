import { helpFlag } from '../../helpers/flags'
import Command from '../../command'
import { labelWithBackground } from '../../helpers/color'
import { Label } from '../../types/label.type'

export default class LabelAll extends Command {
    static description = 'Get a list of all labels'

    static flags = {
        help: helpFlag(),
    }

    async run() {
        const result: Label[] = await this.labelService.get();

        result.map((label: Label) => {
            this.log(labelWithBackground(label))
        })
    }
}
