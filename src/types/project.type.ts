import { Date } from './date.type'

export interface Project {
    id: string;
    name: string;
    description: string | null;
    localesCount: number;
    termsCount: number;
    role: 'admin';
    date: Date;
}
