import { config } from '../helpers/config'
import { headersWithToken } from '../helpers/fetch';
import fetch from 'node-fetch';

export type ExportFormat = 'js' | 'jsonnested' | 'jsonflat';

export class ExportService {
    get = async (code: string, format: ExportFormat): Promise<string> => {
        const url = `${config('baseUrl')}/projects/${config('projectId')}/exports?locale=${code}&format=${format}`

        const response: any = await fetch(url, {
            headers: await headersWithToken()
        }).then(r => r.json())

        if (format === 'js') {
            return 'module.exports = {' + JSON.stringify(response) + '}'
        }

        return JSON.stringify(response);


    }
}
