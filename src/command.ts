import { Command } from '@oclif/command'
import { get } from './helpers/fetch'
import { Project } from './types/project.type'

export default abstract class extends Command {
    async project(): Promise<Project> {
        return await get(`projects/${process.env.TR_PROJECT_ID}`)
    }


}
