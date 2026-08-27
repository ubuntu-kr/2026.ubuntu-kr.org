import * as m from "./paraglide/messages.js";
import { type Locale } from "./i18n/utils.ts";
import UCKLogo from './assets/logo.svg';
import DebianLogo from './assets/Debian.svg';
import MicrosoftKoreaVenueImage from './assets/hall.jpg';
import UbuntuKoreaLogo from "./assets/UbuntuKorea.svg";
import YangSooYoonProfile from "./assets/speakers/1332.png";
import FlorentianaYuwonoProfile from "./assets/speakers/1333.png";
import MinjinParkProfile from "./assets/speakers/1373.png";
import { baseLocale, setLocale } from "./paraglide/runtime.js";
import type { WebSiteConfig } from "./types/config.types.ts";

export const WebsiteConfig = {
    siteTitle: "UbuCon Korea 2026",
    siteDescription: "Microsoft Korea, Seoul | August 29th",
    socialMedia: {
        "twitter": "UbuntuKrOrg"
    },
    indicoBase: "https://events.canonical.com/event/153",
    faviconPath: UCKLogo.src,
    navigation: (currentLocale?: Locale) => {
        const locale = currentLocale ?? baseLocale;
        setLocale(locale);

        return [
            {
                label: m["nav_about"](),
                link: `/${locale}/about`,
                childs: []
            },
            {
                label: m["nav_venue_safety"](),
                link: `/${locale}/venue-and-safety`,
                childs: []
            },
            {
                label: m["nav_ticket"](),
                link: "#",
                childs: [
                    {
                        label: m["nav_register"](),
                        link: "https://2026.ubuntu-kr.org/tickets",
                    },
                    {
                        label: m["nav_check_ticket"](),
                        link: "https://event-us.kr/mypage/allevent",
                    },
                    {
                        label: m["nav_ticket_type"](),
                        link: `/${locale}/tickets/type`
                    }
                ]
            },
            {
                label: m["nav_programs"](),
                link: "#",
                childs: [
                    {
                        label: m["nav_programs_cfp"](),
                        link: "/cfp"
                    },
                    {
                        label: m["nav_programs_cfp_mdc"](),
                        link: "https://deb.li/kr26cfp"
                    },
                    {
                        label: m["nav_programs_topics"](),
                        link: `/${locale}/programs/topics`
                    },
                    {
                        label: m["nav_programs_timetable"](),
                        link: `/${locale}/programs/timetable`
                    },
                    {
                        label: m["nav_programs_speakers"](),
                        link: "https://events.canonical.com/event/153/contributions/speakers"
                    },
                    {
                        label: m["nav_programs_social"](),
                        link: "https://github.com/ubuntu-kr/ksp-toolkits/blob/master/ksp/ksp-20260829/readme.md"
                    },
                    {
                        label: m["nav_programs_lunch"](),
                        link: `/${locale}/programs/lunch`
                    }
                ]
            },
            {
                label: m["nav_sponsors"](),
                link: "#",
                childs: [
                    {
                        label: m["nav_sponsors_become"](),
                        link: `/${locale}/sponsors/become-a-sponsor/`
                    },
                    {
                        label: m["nav_sponsors_our"](),
                        link: `/${locale}/sponsors/our-sponsors/`
                    },
                    {
                        label: m["nav_sponsors_patrons"](),
                        link: `/${locale}/sponsors/patrons/`
                    }
                ]
            },
            {
                label: m["nav_links"](),
                link: "#",
                childs: [
                    {
                        label: m["nav_links_news"](),
                        link: "https://discourse.ubuntu-kr.org/c/notice/9",
                    },
                    {
                        label: m["nav_links_chat"](),
                        link: "https://ubuntu-kr.org/chat/",
                    }
                ]
            }
        ];
    },
    subNavigation: [
        {
            label: "MiniDebConf Korea",
            link: "https://korea2026.mini.debconf.org/",
            childs: []
        },
    ],
    footer: {
        copyright: "© 2025-Present Ubuntu Korea Community. Ubuntu and Canonical are registered trademarks of Canonical Ltd. Unless otherwise noted, content licensed under CC BY 4.0 source code under MIT.",
        contactUs: "mailto:contact@ubuntu-kr.org",
        srcRepoUrl: "https://github.com/ubuntu-kr/2026.ubuntu-kr.org",
        organizers: [
            { name: "Ubuntu Korea Community", logoImage: UbuntuKoreaLogo.src, link: "https://www.ubuntu-kr.org", desc: undefined },
            { name: "Debian", logoImage: DebianLogo.src, link: "https://wiki.debian.org/LocalGroups/DebianKorea?action=show&redirect=DebianKorea", desc: undefined }
        ]
    },
    mainBanner: {
        showFootnote: true,
        buttons: (currentLocale?: Locale) => {
            const locale = currentLocale ?? baseLocale;
            return [
                {
                    label: m["nav_check_ticket"](),
                    link: "https://event-us.kr/mypage/allevent",
                    class: "p-button--positive",
                    target: "_blank"
                },
                {
                    label: m["nav_programs_timetable"](),
                    link: `/${locale}/programs/timetable`,
                    class: "p-button"
                },
                {
                    label: m["mainBanner_lastyear"](),
                    link: `https://www.youtube.com/watch?v=Kd43K8vKK-U&list=PLumkkj1MBmYuX9KKrO_T5pnByF23keWCv`,
                    class: "p-button",
                    target: "_blank"
                },
            ]
        },
        logo: UCKLogo
    },
    featuredSpeakers: {
        indicoExportUrl: "https://events.canonical.com/export/event/153.json?detail=contributions&occ=yes&pretty=yes",
        contributionIds: [979, 948, 975],
        speakerPictures: {
            1373: MinjinParkProfile,
            1333: FlorentianaYuwonoProfile,
            1332: YangSooYoonProfile,
        } as Record<number, ImageMetadata>,
        fullSchedulesUrl: "https://events.canonical.com/event/153/contributions/"
    },
    topics: {
        last: {
            cont: "https://events.canonical.com/export/event/126.json?detail=contributions&occ=yes&pretty=yes",
            sessions: "https://events.canonical.com/event/126/contributions/",
        }
    },
    timetable: {
        halls: ["서원 | 집현전", "국자감", "빌더스룸", "이노베이션 룸"],
        indicoExportUrl: "https://events.canonical.com/export/timetable/153.json",
        baseUrl: "https://events.canonical.com",
        showDetails: "https://events.canonical.com/event/153/timetable/?layout=room",
        miniDebConf: "https://korea2026.mini.debconf.org/schedule/",
        difficulty: {
            beginner: [956, 976, 978, 975],
            intermediate: [980, 949, 977, 948, 981],
            advanced: [979]
        }
    },
    cityBanner: {
        cityImage: MicrosoftKoreaVenueImage
    },
    blog: {
        rssFeedUrl: "https://discourse.ubuntu-kr.org/tags/ubucon-kr-2026.rss",
        viewMoreUrl: "https://discourse.ubuntu-kr.org/tags/c/notice/9/ubucon-kr-2026",
        viewMoreUrlAlternative: "https://discourse.ubuntu-kr.org/tags/ubucon-kr-2026"
    },
} satisfies WebSiteConfig;
