import { helpFlag } from '../../helpers/flags'
import Command from '../../command'
import { post } from '../../helpers/fetch'
import { flags } from '@oclif/command'
import { labelWithBackground, isValidHex } from '../../helpers/color'

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

        if (!isValidHex(this.selectedColor(color))) {
            this.warn('Color is not a hex color');
            this.exit();
        }

        const result = await post(`projects/${(await this.project()).id}/labels`, {
            value: name,
            color: this.selectedColor(color),
        });

        if (result.code) {
            this.warn(result.message);
            this.exit();
        }

        const label = labelWithBackground({
            color: this.selectedColor(color),
            value: name,
        })

        this.log(`The label ${label} was created`)
    }


    selectedColor = (color = '') => {
        return color ? color : '#' + (Math.random() * 0xFFFFFF << 0).toString(16)
    }
}
