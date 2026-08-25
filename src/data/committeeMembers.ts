import uck26Logo from "@assets/logo.svg";
import euiseoProfile from "@assets/committiee/euiseo.jpg";
import type { TranslationKey } from "../i18n/utils.ts";

type CommitteeMember = {
    name: string;
    team: string;
    role: TranslationKey[];
    profileImageUrl: string;
};

export const committeeMembers: CommitteeMember[] = [
    {
        name: "임한",
        team: "우분투한국커뮤니티",
        role: [
            "role_general",
            "role_sponsorship_finances",
            "role_venue_safety",
        ],
        profileImageUrl: uck26Logo.src
    },
    {
        name: "차의서",
        team: "Debian, 우분투한국커뮤니티",
        role: [
            "role_mdc",
            "role_sponsorship_finances",
            "role_contents"
        ],
        profileImageUrl: euiseoProfile.src
    },
    {
        name: "방기연",
        team: "Debian, C++ Korea",
        role: [
            "role_web_video",
            "role_venue_safety",
            "role_marketing_design",
            "role_mdc"
        ],
        profileImageUrl: "https://2022.ubucon.asia/about/giyeon_bang.jpg"
    },
    {
        name: "정규석",
        team: "우분투한국커뮤니티",
        role: [
            "role_general",
            "role_contents",
            "role_marketing_design"
        ],
        profileImageUrl: "https://avatars.githubusercontent.com/u/9061758?v=4"
    },
    {
        name: "한영빈",
        team: "우분투한국커뮤니티, Ubuntu LoCo Council",
        role: [
            "role_sponsorship_finances",
            "role_general",
            "role_contents",
            "role_web_video",
            "role_venue_safety"
        ],
        profileImageUrl: "https://avatars.githubusercontent.com/u/1916739?v=4",
    },
    {
        name: "김세진",
        team: "우분투한국커뮤니티",
        role: [
            "role_general",
            "role_sponsorship_finances",
            "role_venue_safety",
        ],
        profileImageUrl: uck26Logo.src
    },
    {
        name: "임상빈",
        team: "우분투한국커뮤니티",
        role: [
            "role_marketing_design",
            "role_web_video",
            "role_venue_safety"
        ],
        profileImageUrl: "https://avatars.githubusercontent.com/u/125565943?v=4"
    },
    {
        name: "윤정민",
        team: "우분투한국커뮤니티",
        role: [
            "role_web_video",
            "role_marketing_design"
        ],
        profileImageUrl: "https://avatars.githubusercontent.com/u/7126454?v=4"
    },
    {
        name: "한상곤",
        team: "우분투한국커뮤니티",
        role: [
            "role_contents"
        ],
        profileImageUrl: "https://2022.ubucon.asia/about/sangkon_han.jpg"
    },
    {
        name: "추영욱",
        team: "우분투한국커뮤니티",
        role: [
            "role_venue_safety",
        ],
        profileImageUrl: "https://discourse.ubuntu-kr.org/user_avatar/discourse.ubuntu-kr.org/choo121600/144/12050_2.png"
    },
    {
        name: "장민석",
        team: "우분투한국커뮤니티",
        role: [
            "role_contents",
            "role_venue_safety",
            "role_web_video"
        ],
        profileImageUrl: uck26Logo.src
    },
    {
        name: "권형준",
        team: "우분투한국커뮤니티",
        role: [
            "role_sponsorship_finances",
            "role_venue_safety",
        ],
        profileImageUrl: uck26Logo.src
    },
    {
        name: "안진석",
        team: "우분투한국커뮤니티",
        role: [
            "role_marketing_design",
            "role_venue_safety"
        ],
        profileImageUrl: uck26Logo.src
    },
    {
        name: "이호준",
        team: "Debian",
        role: [
            "role_mdc",
            "role_venue_safety"
        ],
        profileImageUrl: uck26Logo.src
    },
    {
        name: "신도윤",
        team: "Debian",
        role: [
            "role_mdc",
            "role_venue_safety"
        ],
        profileImageUrl: "https://avatars.githubusercontent.com/u/60532811?v=4"
    },
    {
        name: "김종민",
        team: "Debian, DebConf Committee",
        role: [
            "role_mdc",
            "role_venue_safety"
        ],
        profileImageUrl: "https://avatars.githubusercontent.com/u/3622008?v=4"
    },
    {
        name: "류창우",
        team: "Debian",
        role: [
            "role_mdc",
            "role_venue_safety"
        ],
        profileImageUrl: uck26Logo.src
    },
    {
        name: "박세용",
        team: "",
        role: [
            "role_venue_safety",
        ],
        profileImageUrl: uck26Logo.src
    },
]
