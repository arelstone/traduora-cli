import { get, post } from '../helpers/fetch'
import { config } from '../helpers/config'
import { Label, AddLabel } from '../types/label.type';
import { Error } from '../types/error.type';

export interface TermResponse extends Error, Label { }

export class LabelService {
    get = async (): Promise<Label[]> => {
        return await get(`projects/${config('projectId')}/labels`);
    }

    add = async (body: AddLabel): Promise<TermResponse> => {
        return await post(`projects/${config('projectId')}/labels`, body);
    }

    findBy = async (key: keyof Label, value: string): Promise<Label | undefined> => {
        const labels = await this.get();

        return labels.find((label: Label) => label[key] === value);
    }
}
