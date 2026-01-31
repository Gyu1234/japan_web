import DetailPage from "../../DetailPage";

const region = {
    name: "스미에",
    images: [
        "/images/detailpage/arts/sumi-e.jpg",
        "/images/detailpage/arts/sumi-e2.jpg",
        "/images/detailpage/arts/sumi-e3.jpg"
    ],
    description: "먹의 농담으로 자연의 본질을 담아낸 수묵화 예술입니다.",
    longDescription: "스미에(墨絵, Sumi-e)는 검은 먹(Sumi)과 붓을 사용하여 흰 종이 위에 자연의 풍경, 새, 꽃, 인물 등을 그리는 일본의 전통 수묵화 문화입니다. 14세기 무렵 중국에서 건너와 일본의 선종(Zen) 불교와 결합하여 고유한 예술 형태로 발전했으며, 단순함과 여백의 미를 중시하는 것이 특징입니다. ",
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
            name: "일본 애니메이션",
            extra: "글로벌 콘텐츠",
            img: "/images/detailpage/arts/anime.jpg",
            desc: "풍부한 상상력으로 전 세계의 사랑을 받는 애니메이션입니다.",
            slug: "anime"
        }
    ],
    details: {
        era: "가마쿠라 시대 이후",
        form: "수묵 회화",
        theme: "여백과 본질의 미"
    },
    category: "예술"
};

const SumiePage = () => {
    return <DetailPage region={region} />;
};

export default SumiePage;