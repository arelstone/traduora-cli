export interface Language {
    code: string;
    language: string;
    region: string;
}


export interface Locale {
    id: string;
    locale: Language;
    date: Date;
}
