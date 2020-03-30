import {
    Command,
    flags,
} from '@oclif/command'
import fetch from 'node-fetch'
import {
    BASE_URL,
    headers,
} from '../../helpers/fetch'

export default class ProjectCreate extends Command {
    static description = 'Create a new project'

    static flags = {
        help: flags.help({
            char: 'h',
        }),
        name: flags.string({
            char: 'n',
            required: true,
            helpValue: 'The name of the project',
        }),
        description: flags.string({
            char: 'd',
            helpValue: 'The description of the project',
        }),
    }

    static examples = [
        '$ tradoura project:create -n=<name> -d=<decription>',
        '$ tradoura project:create --name="My Project"',
        '$ tradoura project:create --name="My Project" --description="My cool translation project"',
    ]

    async run() {
        const {
            flags: {
                name, description,
            },
        } = this.parse(ProjectCreate)

        const response: any = await fetch(`${BASE_URL}/projects`, {
            method: 'POST',
            body: JSON.stringify({
                name,
                description,
            }),
            headers,
        })
            .then(r => r.json())
            .catch(error => this.error(error))

        this.log(`Project ${response.data.name} was created (id: ${response.data.id})`)
    }
}
