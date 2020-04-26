import { helpFlag } from '../../helpers/flags'
import Command from '../../command'
import { flags } from '@oclif/command'
import { labelWithBackground, isValidHex, randomHexColor } from '../../helpers/color'

export default class LabelAdd extends Command {
    static description = 'Create a label'

    static flags = {
        help: helpFlag(),
        color: flags.string({
            char: 'c',
            description: 'Color of the label',
            name: 'color',
        })
    }

    static args = [{
        name: 'name',
        required: true,
    }]

    async run() {
        const { args: { name }, flags: { color } } = this.parse(LabelAdd)

        const selectedColor = color ? color : randomHexColor()

        if (!isValidHex(selectedColor)) {
            this.warn('Color is not a hex color');
            this.exit();
        }

        const result = await this.labelService.add({
            value: name,
            color: selectedColor,
        });

        if (result.code) {
            this.warn(result.message || '');
            this.exit();
        }

        const label = labelWithBackground({
            color: result.color,
            value: result.value,
        })

        this.log(`The label ${label} was created`)
    }
}
