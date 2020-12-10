import { Locale } from '../types/language.type';
import { post, get } from '../helpers/fetch';
import { config } from '../helpers/config';

export class LanguageService {
    add = async (code: string): Promise<Locale> => {
        return await post(`projects/${config('projectId')}/translations`, { code })
    }

    find = async (code: string): Promise<Locale | undefined> => {
        const result: Locale[] = await get(`projects/${config('projectId')}/translations`);

        return result.find((locale: Locale) => locale.locale.code === code);
    }
}
