import DetailPage from "../../DetailPage";

const region = {
    name: "일본 다도 문화",
    images: [
        "/images/detailpage/tradition/tea.jpg"
    ],
    description: "정성과 예법으로 마음을 나누는 일본의 다도 문화입니다.",
    longDescription: "다도는 향 감상(향도), 꽃꽂이(화도)와 함께 일본의 고전적인 세련미가 돋보이는 3대 예술의 하나로 꼽힙니다. 다도의 역사는 815년 선종으로 거슬러 올라갑니다. 그 해 에이추 선사가 중국에서 돌아왔습니다. 당시 중국은 이미 1,000년 이상 차를 즐겨온 곳이었습니다. 선사는 당시 일본의 사가 천황을 위해 직접 준비한 센차를 바쳤습니다. 이에 깊은 인상을 받은 천황은 서일본 긴키 지역에 차 재배지를 만들 것을 명했습니다. 뒤따라 귀족들이 차를 마시기 시작했습니다. 그러나 차 문화는 12세기가 되어서야 본격적으로 퍼지기 시작했습니다.",
    menus: [
        {
            id: 1,
            name: "기모노 문화",
            extra: "전통 미의식",
            img: "/images/detailpage/tradition/kimono.jpg",
            desc: "일본의 사계절과 섬세한 미학을 담은 전통 의상입니다.",
            slug: "kimono"
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
        duration: "약 60~90분",
        price: "3,000엔 ~ 5,000엔",
        reservation: "사전 예약 권장"
    },
    category: "전통"
};

const TeaPage = () => {
    return <DetailPage region={region} />;
};

export default TeaPage;