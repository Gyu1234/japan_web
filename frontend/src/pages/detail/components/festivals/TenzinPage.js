import DetailPage from "../../DetailPage";

const region = {
    name: "텐진 마츠리",
    images: [
        "/images/detailpage/festivals/tenzin.jpg",
        "/images/detailpage/festivals/tenzin2.jpg",
        "/images/detailpage/festivals/tenzin3.jpg"
    ],
    description: "화려한 선상 퍼레이드와 불꽃놀이가 어우러진 축제입니다.",
    longDescription: "텐진 마츠리(天神祭)는 1,000년 이상의 역사를 지닌 일본 3대 축제 중 하나로, 매년 6월 하순부터 7월 25일까지 오사카 텐만구 신사를 중심으로 열리는 대규모 여름 축제입니다. 학문의 신 스가와라노 미치자네를 기리며, 7월 25일 본행사에서 3,000명의 전통 의상 행렬과 100척의 배가 강을 건너는 후나토교, 5,000발 이상의 불꽃놀이가 장관을 이룹니다.",
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