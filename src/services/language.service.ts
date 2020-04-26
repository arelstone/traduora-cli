import { Locale } from '../types/language.type';
import { post, get } from '../helpers/fetch';
import { config } from '../helpers/config';
import { ErrorResponse } from './label.service';

export class LanguageService {
    add = async (code: string): Promise<Locale | ErrorResponse> => {
        return await post(`projects/${config('projectId')}/translations`, { code })
    }

    find = async (code: string): Promise<Locale | undefined> => {
        const result: Locale[] = await get(`projects/${config('projectId')}/translations`);

        return result.find((locale: Locale) => locale.locale.code === code);
    }
}
