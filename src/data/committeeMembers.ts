import uck25Logo from "@assets/logo.svg";
import hoehyeongProfile from "@assets/committiee/hoehyeong.jpg";
import inahProfile from "@assets/committiee/inahHwang.jpeg";
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
        name: "Junsang Mun",
        team: "Ubuntu Korea Community",
        role: [
            "role_venue_safety",
            "role_marketing_design"
        ],
        profileImageUrl: "https://discourse.ubuntu-kr.org/user_avatar/discourse.ubuntu-kr.org/junmoon/144/12427_2.png"
    },
    {
        name: "Youngbin Han",
        team: "Ubuntu Korea Community, Ubuntu LoCo Council",
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
        name: "Minseong Cho",
        team: "Ubuntu Korea Community",
        role: [
            "role_general",
            "role_venue_safety",
            "role_sponsorship_finances"
        ],
        profileImageUrl: "https://avatars.githubusercontent.com/u/52643858?v=4"
    },
    {
        name: "Sangbin Lim",
        team: "Ubuntu Korea Community",
        role: [
            "role_marketing_design",
            "role_web_video",
            "role_venue_safety"
        ],
        profileImageUrl: "https://avatars.githubusercontent.com/u/125565943?v=4"
    },
    {
        name: "Jungmin Yoon",
        team: "Ubuntu Korea Community",
        role: [
            "role_web_video",
            "role_marketing_design"
        ],
        profileImageUrl: "https://avatars.githubusercontent.com/u/7126454?v=4"
    },
    {
        name: "Giyeon Bang",
        team: "C++ Korea",
        role: [
            "role_web_video",
            "role_venue_safety"
        ],
        profileImageUrl: "https://2022.ubucon.asia/about/giyeon_bang.jpg"
    },
    {
        name: "Gyuseok Jung",
        team: "Ubuntu Korea Community",
        role: [
            "role_contents",
            "role_web_video"
        ],
        profileImageUrl: "https://avatars.githubusercontent.com/u/9061758?v=4"
    },
    {
        name: "Sangkon Han",
        team: "Ubuntu Korea Community",
        role: [
            "role_contents",
            "role_web_video"
        ],
        profileImageUrl: "https://2022.ubucon.asia/about/sangkon_han.jpg"
    },
    {
        name: "Yeonguk Choo",
        team: "Ubuntu Korea Community",
        role: [
            "role_venue_safety",
            "role_sponsorship_finances"
        ],
        profileImageUrl: "https://discourse.ubuntu-kr.org/user_avatar/discourse.ubuntu-kr.org/choo121600/144/12050_2.png"
    },
    {
        name: "Hoehyeong Jung",
        team: "Ubuntu Korea Community",
        role: [
            "role_web_video",
            "role_contents"
        ],
        profileImageUrl: hoehyeongProfile.src
    },
    {
        name: "Tae Yong Lee",
        team: "Ubuntu Korea Community",
        role: [
            "role_venue_safety",
            "role_contents",
            "role_sponsorship_finances"
        ],
        profileImageUrl: "https://2024.ubuntu-kr.org/avatars/taeyong.jpg"
    },
    {
        name: "Soyeon Kwon",
        team: "Ubuntu Korea Community",
        role: [
            "role_marketing_design",
            "role_web_video"
        ],
        profileImageUrl: "https://2024.ubuntu-kr.org/avatars/soyeon.png"
    },
    {
        name: "Euiseo Cha",
        team: "Ubuntu Korea Community",
        role: [
            "role_sponsorship_finances",
            "role_contents"
        ],
        profileImageUrl: euiseoProfile.src
    },
    {
        name: "Inah Hwang",
        team: "Ubuntu Korea Community",
        role: [
            "role_sponsorship_finances"
        ],
        profileImageUrl: inahProfile.src
    },
    {
        name: "Han Lim",
        team: "",
        role: [
            "role_sponsorship_finances"
        ],
        profileImageUrl: uck25Logo.src
    }
]
