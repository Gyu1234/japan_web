import DetailPage from "../../DetailPage";

const region = {
    name: "간다 마츠리",
    images: [
        "/images/detailpage/festivals/ganda.jpg"
    ],
    description: "도심 속 박력 넘치는 가마 행진이 펼쳐지는 축제입니다.",
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
            name: "텐진 마츠리",
            extra: "강 위의 불꽃",
            img: "/images/detailpage/festivals/tenzin.jpg",
            desc: "화려한 선상 퍼레이드와 불꽃놀이가 어우러진 축제입니다.",
            slug: "tenzin"
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
        location: "도쿄도 치요다구 간다 일대",
        site: "https://kandamatsuri.com",
        period: "5월 중순 (격년 개최)"
    },
    category: "축제"
};

const GandaPage = () => {
    return <DetailPage region={region} />;
};

export default GandaPage;