

import { getLangFromUrl, useTranslations } from "./i18n/utils.ts";
import UCKLogo from './assets/logo.svg';
import MicrosoftKoreaVenueImage from '@assets/hall.jpg';
import UbuntuKoreaLogo from "@assets/UbuntuKorea.svg";

const createTranslation = (locale: string) =>
    useTranslations(getLangFromUrl(new URL(`/${locale}`, "https://example.org")));

export interface SubMenuItem {
    link: string;
    label: string;
}

export const WebsiteConfig = {
    siteTitle: "UbuCon Korea 2026",
    siteDescription: "Microsoft Korea, Seoul | August 29th",
    socialMedia: {
        "twitter": "UbuntuKrOrg"
    },
    faviconPath: UCKLogo.src,
    navigation: (locale: string) => {
        const m = createTranslation(locale);
        return [
            {
                label: m("nav_about"),
                link: `/${locale}/about`,
                childs: []
            },
            {
                label: m("nav_venue_safety"),
                link: `/${locale}/venue-and-safety`,
                childs: []
            },
            // {
            //     label: m("nav_programs"),
            //     link: "#",
            //     childs: [
            //         {
            //             label: m("nav_programs_cfp"),
            //             link: "/cfp"
            //         },
            //         {
            //             label: m("nav_programs_timetable"),
            //             link: `/${locale}/programs/timetable`
            //         },
            //         {
            //             label: m("nav_programs_speakers"),
            //             link: "https://events.canonical.com/event/126/contributions/speakers"
            //         },
            //         {
            //             label: m("nav_programs_social"),
            //             link: "https://github.com/ubuntu-kr/ksp-toolkits/blob/master/ksp/ksp-20250809/readme.md"
            //         },
            //         {
            //             label: m("nav_programs_lunch"),
            //             link: `/${locale}/programs/lunch`
            //         }
            //     ]
            // },
            // {
            //     label: m("nav_sponsors"),
            //     link: "#",
            //     childs: [
            //         {
            //             label: m("nav_sponsors_become"),
            //             link: `/${locale}/sponsors/become-a-sponsor/`
            //         },
            //         {
            //             label: m("nav_sponsors_our"),
            //             link: `/${locale}/sponsors/our-sponsors/`
            //         },
            //         {
            //             label: m("nav_sponsors_patrons"),
            //             link: `/${locale}/sponsors/patrons/`
            //         }
            //     ]
            // },
            {
                label: m("nav_links"),
                link: "#",
                childs: [
                    {
                        label: m("nav_links_news"),
                        link: "https://discourse.ubuntu-kr.org/c/notice/9",
                    },
                    {
                        label: m("nav_links_chat"),
                        link: "https://ubuntu-kr.org/chat/",
                    }
                ]
            }
        ];
    },
    subNavigation: [
        // {
        //     label: "🎟️",
        //     link: "/tickets",
        //     childs: [

        //     ]
        // }
    ],
    footer: {
        copyright: "© 2025-Present Ubuntu Korea Community. Ubuntu and Canonical are registered trademarks of Canonical Ltd. Unless otherwise noted, content licensed under CC BY 4.0 source code under MIT.",
        contactUs: "mailto:contact@ubuntu-kr.org",
        srcRepoUrl: "https://github.com/ubuntu-kr/2026.ubuntu-kr.org",
        organizers: [
            { name: "Ubuntu Korea Community", logoImage: UbuntuKoreaLogo.src, link: "https://www.ubuntu-kr.org", desc: undefined },
        ]
    },
    mainBanner: {
        showFootnote: true,
        buttons: (locale: string) => {
            const m = createTranslation(locale);
            return [
                // {
                //     label: m("nav_register"),
                //     link: `/tickets`,
                //     class: "p-button--positive",
                //     target: "_blank"
                // },
                // {
                //     label: m("nav_check_ticket"),
                //     link: "https://event-us.kr/mypage/allevent",
                //     class: "p-button",
                //     target: "_blank"
                // },
                // {
                //     label: m("nav_programs_timetable"),
                //     link: `/${locale}/programs/timetable`,
                //     class: "p-button"
                // }
            ]
        },
        logo: UCKLogo
    },
    featuredSpeakers: {
        indicoExportUrl: "https://events.canonical.com/export/event/126.json?detail=contributions&occ=yes&pretty=yes",
        contributionIds: [],
        speakerIds: [],
    //     contributionIds: [27, 5, 16, 9, 2, 8],
    //     speakerIds: [
    //         { db_id: 981, user: 3035 }, { db_id: 979, user: 1123 }, { db_id: 978, user: 939 },
    //         { db_id: 986, user: 4167 }, { db_id: 952, user: 4181 }, { db_id: 532, user: 4182 },
    //         { db_id: 975, user: 4176 }, { db_id: 999, user: 836 },
    //     ],
        fullSchedulesUrl: "https://events.canonical.com/event/126/contributions/"
    },
    // timetable: {
    //     halls: ["jeju", "donghae", "dokdo"],
    //     indicoExportUrl: "https://events.canonical.com/export/timetable/126.json",
    //     baseUrl: "https://events.canonical.com",
    //     showDetails: "https://events.canonical.com/event/126/timetable/?layout=room",
    //     difficulty: {
    //         beginner: [4, 5, 6, 8, 10, 11, 13, 18, 19, 25, 30],
    //         intermediate: [9, 3, 12, 2, 1],
    //         advanced: [20, 16]
    //     }
    // },
    cityBanner: {
        cityImage: MicrosoftKoreaVenueImage
    },
    blog: {
        rssFeedUrl: "https://discourse.ubuntu-kr.org/tags/ubucon-kr-2026.rss",
        viewMoreUrl: "https://discourse.ubuntu-kr.org/tags/c/notice/9/ubucon-kr-2026",
        viewMoreUrlAlternative: "https://discourse.ubuntu-kr.org/tags/ubucon-kr-2026"
    },
}
