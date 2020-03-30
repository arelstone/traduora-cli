import { Label } from './label.type';
import { Date } from './date.type';

export interface Term {
    id: string;
    value: string;
    labels: Label[];
    date: Date;
}
