import Command from '../command'
import { get } from '../helpers/fetch'
import { Stats as ProjectStats } from '../types/project-stats.type'
import { helpFlag } from '../helpers/flags'
import { config } from '../helpers/config'

export default class Stats extends Command {
    static description = 'Project stats'

    static flags = {
        help: helpFlag(),
    }

    async run() {

        const response: ProjectStats = await get(`projects/${config('projectId')}/stats`);

        this.log(`Project stats for: ${(await this.project()).name}`)
        this.log(`Progress: ${Number(response.projectStats.progress * 100).toFixed(0)}%`)
        this.log(`Translated: ${response.projectStats.translated}`)
        this.log(`Number of terms: ${response.projectStats.terms}`)
        this.log(`Number of locales: ${response.projectStats.locales}`)

        this.log('\n')
        this.log('Code  - Progress')

        Object.keys(response.localeStats).map((langCode: string) => {
            const { progress } = response.localeStats[langCode];
            const code = langCode.length === 2 ? `${langCode}   ` : langCode
            this.log(`${code} - ${progress * 100}%`)
        })
    }
}
