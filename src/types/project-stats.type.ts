export interface Stats {
    projectStats: ProjectStats;
    localeStats: {
        [code: string]: LocaleStats;
    };
}

interface BaseStats {
    progress: number;
    translated: number;
    total: number;
}

export interface ProjectStats extends BaseStats {
    terms: number;
    locales: number;
}

export type LocaleStats = BaseStats
