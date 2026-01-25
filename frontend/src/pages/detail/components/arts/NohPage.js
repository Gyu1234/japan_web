import DetailPage from "../../DetailPage";

const region = {
    name: "노(能)·교겐(狂言)",
    images: [
        "/images/detailpage/arts/noh.jpg"
    ],
    description: "가면 뒤에 숨겨진 깊은 감정을 표현하는 신비로운 가면극입니다.",
    longDescription: "노와 교겐은 함께 발전했지만 매우 다른 특성을 가지고 있습니다. 노는 상징적인 연극으로, 난해한 미적 분위기 속에서 의식과 사고에 초점을 맞춘 작품입니다. 반면 교겐은 주로 사람들을 웃기는 데 초점을 맞춘 희극적 성격이 강합니다.",
    menus: [
        {
            id: 1,
            name: "우키요에(浮世絵)",
            extra: "에도 회화",
            img: "/images/detailpage/arts/ukioye.jpg",
            desc: "에도 시대의 서민적 삶을 강렬한 색채로 그려낸 목판화입니다.",
            slug: "ukiyoe"
        },
        {
            id: 2,
            name: "일본 애니메이션",
            extra: "글로벌 콘텐츠",
            img: "/images/detailpage/arts/anime.jpg",
            desc: "풍부한 상상력으로 전 세계의 사랑을 받는 애니메이션입니다.",
            slug: "anime"
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
        era: "14세기 무로마치 시대",
        form: "가면극 · 무용극",
        theme: "영혼·죽음·내면의 감정"
    },
    category: "예술"
};

const NohPage = () => {
    return <DetailPage region={region} />;
};

export default NohPage;