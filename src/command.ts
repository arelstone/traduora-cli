import { Command } from '@oclif/command'
import { config, Config } from './helpers/config';
import { ProjectService } from './services/project.service';
import { LabelService } from './services/label.service';
import { LanguageService } from './services/language.service';
import { TermService } from './services/term.service';
import { ExportService } from './services/export.service';
import { Project } from './types/project.type';
import { get } from './helpers/fetch';

export default abstract class extends Command {

    public readonly projectService: ProjectService = new ProjectService();
    public readonly labelService: LabelService = new LabelService();
    public readonly languageService: LanguageService = new LanguageService();
    public readonly termService: TermService = new TermService();
    public readonly exportService: ExportService = new ExportService();

    async project(): Promise<Project> {
        return await get(`projects/${config('projectId')}`)
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


