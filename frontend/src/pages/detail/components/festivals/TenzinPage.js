import DetailPage from "../../DetailPage";

const region = {
    name: "텐진 마츠리",
    images: [
        "/images/detailpage/festivals/tenzin.jpg"
    ],
    description: "화려한 선상 퍼레이드와 불꽃놀이가 어우러진 축제입니다.",
    longDescription: "설명",
    menus: [
        {
            id: 1,
            name: "기온 마츠리",
            extra: "교토 여름의 상징",
            img: "/images/detailpage/festivals/gion.jpg",
            desc: "천년의 역사를 이어온 교토 최대의 여름 축제",
            slug: "gion"
        },
        {
            id: 2,
            name: "간다 마츠리",
            extra: "에도 3대 축제",
            img: "/images/detailpage/festivals/ganda.jpg",
            desc: "도심 속 박력 넘치는 가마 행진이 펼쳐지는 축제입니다.",
            slug: "ganda"
        },
        {
            id: 3,
            name: "오도리 마츠리",
            extra: "춤의 향연",
            img: "/images/detailpage/festivals/odori.jpg",
            desc: "일본 북해도의 상징적인 축제입니다",
            slug: "odori"
        }
    ],
    details: {
        location: "오사카부 오사카시 오카와강 일대",
        site: "https://www.tenjinmatsuri.com",
        period: "7월 24일 ~ 7월 25일"
    },
    category: "축제"
};

const TenzinPage = () => {
    return <DetailPage region={region} />;
};

export default TenzinPage;