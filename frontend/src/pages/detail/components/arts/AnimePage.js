import DetailPage from "../../DetailPage";

const region = {
    name: "일본 애니메이션",
    images: [
        "/images/detailpage/arts/anime.jpg"
    ],
    description: "풍부한 상상력으로 전 세계의 사랑을 받는 애니메이션입니다.",
    longDescription: "일본 애니메이션(Anime)은 일본에서 제작된 애니메이션 작품들을 총칭하며, 독특한 화풍, 다양한 장르, 깊이 있는 스토리텔링을 통해 전 세계적으로 큰 인기를 얻고 있습니다. 주로 나무위키(일본 애니메이션)와 위키백과에 따르면, 만화나 소설을 원작으로 하는 경우가 많으며 TV 시리즈(TV판), 극장판, OVA 등 다양한 형태로 유통됩니다. 1960년대 철완 아톰 이후 리미티드 애니메이션 기법을 발달시켜 캐릭터와 스토리를 강조하는 특유의 문화를 형성했습니다. ",
    menus: [
        {
            id: 1,
            name: "노(能)·교겐(狂言)",
            extra: "가면의 미학",
            img: "/images/detailpage/arts/noh.jpg",
            desc: "가면 뒤에 숨겨진 깊은 감정을 표현하는 신비로운 가면극입니다.",
            slug: "noh"
        },
        {
            id: 2,
            name: "우키요에(浮世絵)",
            extra: "에도 회화",
            img: "/images/detailpage/arts/ukioye.jpg",
            desc: "에도 시대의 서민적 삶을 강렬한 색채로 그려낸 목판화입니다.",
            slug: "ukiyoe"
        },
        {
            id: 3,
            name: "스미에",
            extra: "여백의 미",
            img: "/images/detailpage/arts/sumi-e.jpg",
            desc: "먹의 농담으로 자연의 본질을 담아낸 수묵화 예술입니다.",
            slug: "sumie"
        }
    ],
    details: {
        era: "20세기 중반 ~ 현대",
        form: "영상 애니메이션",
        theme: "상상력·스토리텔링·캐릭터 문화"
    },
    category: "예술"
};

const AnimePage = () => {
    return <DetailPage region={region} />;
};

export default AnimePage;