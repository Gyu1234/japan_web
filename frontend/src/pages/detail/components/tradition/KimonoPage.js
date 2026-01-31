import DetailPage from "../../DetailPage";

const region = {
    name: "기모노 문화",
    images: [
        "/images/detailpage/tradition/kimono.jpg",
        "/images/detailpage/tradition/kimono2.jpg",
        "/images/detailpage/tradition/kimono3.jpg"
    ],
    description: "일본의 사계절과 섬세한 미학을 담은 전통 의상입니다.",
    longDescription: "기모노(着物)는 '입는 것'이라는 뜻의 일본 전통 의상으로, 직선 재단된 천을 연결하여 오비(허리띠)로 고정하는 방식이 특징입니다. 현대에는 성인식, 결혼식 등 특별한 행사에 주로 입으며, 신분과 격식에 따라 종류가 나뉩니다. 최근에는 레트로 풍의 기모노를 현대적으로 재해석하여 젊은 층 사이에서 다시 인기를 얻고 있습니다.",
    menus: [
        {
            id: 1,
            name: "일본 다도 문화",
            extra: "일본 정신문화",
            img: "/images/detailpage/tradition/tea.jpg",
            desc: "정성과 예법으로 마음을 나누는 일본의 다도 문화입니다.",
            slug: "tea"
        },
        {
            id: 2,
            name: "가부키 문화",
            extra: "고전 공연 예술",
            img: "/images/detailpage/tradition/kabuki.jpg",
            desc: "화려한 무대와 분장이 돋보이는 일본의 고전 연극입니다.",
            slug: "kabuki"
        },
        {
            id: 3,
            name: "온천문화",
            extra: "치유의 문화",
            img: "/images/detailpage/tradition/onsen.jpg",
            desc: "일상의 피로를 풀고 여유를 즐기는 일본의 온천 문화입니다.",
            slug: "onsen"
        }
    ],
    details: {
        duration: "반나절 ~ 하루",
        price: "4,000엔 ~ 10,000엔",
        reservation: "당일 가능 (성수기 예약 추천)"
    },
    category: "전통"
};

const KimonoPage = () => {
    return <DetailPage region={region} />;
};

export default KimonoPage;