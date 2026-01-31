import DetailPage from "../../DetailPage";

const region = {
    name: "온천문화",
    images: [
        "/images/detailpage/tradition/onsen.jpg",
        "/images/detailpage/tradition/onsen2.jpg",
        "/images/detailpage/tradition/onsen3.jpg"
    ],
    description: "일상의 피로를 풀고 여유를 즐기는 일본의 온천 문화입니다.",
    longDescription: "온천(온센)은 일본 문화의 일부가 된지 오래입니다. 이동하는 네 개의 대륙판 위로 자리한 일본 특유의 위치와 수많은 활화산으로 인해 수천 곳의 천연 온천이 생겨났습니다. 온천은 지열로 데워지며 온천수의 미네랄 성분은 표면으로 올라올 때 자리한 주변 암석에 의해 결정됩니다. 미네랄이 풍부한 온천수로 목욕을 하면 피부가 진정되며, 혈액 순환이 촉진되고 뻣뻣한 관절이 이완되는 등 치료 효능이 있다고 알려져 있습니다.",
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
            name: "기모노 문화",
            extra: "전통 미의식",
            img: "/images/detailpage/tradition/kimono.jpg",
            desc: "일본의 사계절과 섬세한 미학을 담은 전통 의상입니다.",
            slug: "kimono"
        },
        {
            id: 3,
            name: "가부키 문화",
            extra: "고전 공연 예술",
            img: "/images/detailpage/tradition/kabuki.jpg",
            desc: "화려한 무대와 분장이 돋보이는 일본의 고전 연극입니다.",
            slug: "kabuki"
        }
    ],
    details: {
        duration: "자유 이용",
        price: "500엔 ~ 2,000엔",
        reservation: "불필요 (료칸 숙박 시 포함)"
    },
    category: "전통"
};

const OnsenPage = () => {
    return <DetailPage region={region} />;
};

export default OnsenPage;