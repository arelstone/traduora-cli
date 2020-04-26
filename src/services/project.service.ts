import { Project } from '../types/project.type';
import { get } from '../helpers/fetch';
import { config } from '../helpers/config';

// export const ProjectService = {
//     get: async (): Promise<Project> => await get(`projects/${config('projectId')}`)
// }

export class ProjectService {
    get = async (): Promise<Project> => {
        return await get(`projects/${config('projectId')}`);
    }
}
