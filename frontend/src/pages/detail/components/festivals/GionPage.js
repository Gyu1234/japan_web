import DetailPage from "../../DetailPage";

const region = {
    name: "기온 마츠리",
    images: [
        "/images/detailpage/festivals/gion.jpg",
        "/images/detailpage/festivals/gion2.jpg",
        "/images/detailpage/festivals/gion3.jpg"
    ],
    description: "천년의 역사를 이어온 교토 최대의 여름 축제",
    longDescription: "교토를 상징하는 기온 마츠리는 1,100년 이상의 역사를 지닌 일본의 대표적인 여름 축제로, 액운을 물리치고 도시의 안녕을 기원하는 의미를 담고 있습니다. 7월 한 달간 도시 전역이 축제 분위기로 물들며, 특히 거대한 수레인 '야마보코'가 거리를 행진하는 화려한 순행은 축제의 정점이자 놓칠 수 없는 장관입니다.",
    menus: [
        {
            id: 1,
            name: "간다 마츠리",
            extra: "에도 3대 축제",
            img: "/images/detailpage/festivals/ganda.jpg",
            desc: "도심 속 박력 넘치는 가마 행진이 펼쳐지는 축제입니다.",
            slug: "ganda"
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
        location: "교토부 교토시 히가시야마구 기온 일대",
        site: "https://gionmatsuri.or.jp",
        period: "7월 1일 ~ 7월 31일 (매년)"
    },
    category: "축제"
};

const GionPage = () => {
    return <DetailPage region={region} />;
};

export default GionPage;