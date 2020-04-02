import { Command } from '@oclif/command'
import { get } from './helpers/fetch'
import { Project } from './types/project.type'
import { config, Config } from './helpers/config';

export default abstract class extends Command {
    async project(): Promise<Project> {
        return await get(`projects/${process.env.TR_PROJECT_ID}`)
    }

    rc(): Config {
        try {
            return config()
        } catch (error) {
            this.warn(`No .traduorarc[.js|.json] file found in ${process.cwd()}`)
            this.exit(0)
        }
    }
}


