import { Error } from '../types/error.type';
import { Term } from '../types/term.type';
import { post } from '../helpers/fetch';
import { config } from '../helpers/config';

export interface TermResponse extends Error, Term { }

export class TermService {
    add = async (term: string): Promise<TermResponse> => {
        return await post(`projects/${config('projectId')}/terms`, {
            value: term,
        });
    }
}
