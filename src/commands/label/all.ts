import { helpFlag } from '../../helpers/flags'
import { get } from '../../helpers/fetch'
import Command from '../../command'
import { labelWithBackground } from '../../helpers/color'
import { Label } from '../../types/label.type'

export default class LabelAll extends Command {
    static description = 'Get a list of all labels'

    static flags = {
        help: helpFlag(),
    }

    async run() {
        const result: Label[] = await get(`projects/${(await this.project()).id}/labels`)

        result.map((label: Label) => {
            this.log(labelWithBackground(label))
        })
    }
}
