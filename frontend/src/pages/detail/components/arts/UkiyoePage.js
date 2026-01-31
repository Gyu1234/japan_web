import DetailPage from "../../DetailPage";

const region = {
    name: "우키요에(浮世絵)",
    images: [
        "/images/detailpage/arts/ukioye.jpg",
        "/images/detailpage/arts/ukioye2.jpg",
        "/images/detailpage/arts/ukioye3.jpg"
    ],
    description: "에도 시대의 서민적 삶을 강렬한 색채로 그려낸 목판화입니다.",
    longDescription: "우키요에는 17세기에서 20세기 초 일본 에도 시대에 성립한 당대 사람들의 일상 생활이나 풍경, 풍물 등을 그린 풍속화의 형태를 말한다. 현재는 일반적으로 '우키요에'라고 하면 여러 가지 색상으로 찍힌 목판화인 니시키에를 말하는 예가 많으나 육필화도 이 범주에 들어간다.",
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
        era: "에도 시대 (17~19세기)",
        form: "목판화",
        theme: "서민의 삶과 유행 문화"
    },
    category: "예술"
};

const UkiyoePage = () => {
    return <DetailPage region={region} />;
};

export default UkiyoePage;