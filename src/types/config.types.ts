import { type Locale } from "../i18n/utils.ts";

export interface SubMenuItem {
    link: string;
    label: string;
}

export type Speakers = Array<{
    db_id: number;
    user: number;
}>;

export type WebSiteConfig = {
    siteTitle: string;
    siteDescription: string;
    siteBaseUrl: string;
    socialMedia: { [key: string]: string };
    faviconPath: string;
    navigation: (locale: Locale) => Array<{
        label: string;
        link: string;
        childs?: SubMenuItem[];
    }>;
    subNavigation: Array<{
        label: string;
        link: string;
        childs?: SubMenuItem[];
    }>;
    footer: {
        copyright: string;
        contactUs: string;
        srcRepoUrl: string;
        organizers: Array<{
            name: string;
            logoImage: string;
            link: string;
            desc?: string;
        }>;
    };
    mainBanner: {
        showFootnote: boolean;
        buttons: (locale: Locale) => Array<{
            label: string;
            link: string;
            class?: string;
            target?: string;
        }>;
        logo: ImageMetadata | string;
    };
    featuredSpeakers: {
        indicoExportUrl: string;
        contributionIds: number[];
        speakerIds: Speakers;
        fullSchedulesUrl: string;
    };
    timetable: {
        halls: string[];
        indicoExportUrl: string;
        baseUrl: string;
        showDetails: string;
        difficulty: {
            beginner: number[];
            intermediate: number[];
            advanced: number[];
        };
    };
    cityBanner: {
        cityImage: ImageMetadata | string;
    };
    blog: {
        rssFeedUrl: string;
        viewMoreUrl: string;
        viewMoreUrlAlternative: string;
    };
}