import { Command, flags } from '@oclif/command'
import axios from 'axios'
import { axiosOptions } from '../../get-auth-token'

export default class ProjectCreate extends Command {
  static description = 'Create a new project'

  static flags = {
    help: flags.help({ char: 'h' }),
    name: flags.string({ char: 'n', required: true }),
    description: flags.string({ char: 'd' }),
  }

  static examples = [
    '$ tradoura project:create -n=<name> -d=<decription>',
    '$ tradoura project:create --name=myNewUberCoolProject',
    '$ tradoura project:create --name=myNewUberCoolProject --description="My cool translation project"',
  ]

  async run() {
    const { flags: { name, description } } = this.parse(ProjectCreate)

    this.log(name, description)

    const body = { name, description }

    const { data, status, error } = await axios.post('/projects', body, axiosOptions())
    if (status <= 200 || status > 300) {
      this.log(`Project ${data.name} created (${data.id})`)
    } else {
      this.log(error)
      this.warn('Could not create project')
      this.log(error)
    }
  }
}
