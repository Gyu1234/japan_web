import DetailPage from "../../DetailPage";

const region = {
    name: "아사쿠사 문화관광센터",
    images: [
        "/images/detailpage/architecture/asakusa.jpg"
    ],
    description: "거대한 등불이 반겨주는 에도 시대의 정취를 품은 사찰입니다.",
    longDescription: "아사쿠사라고 하면 센소지(浅草寺)의 카미나리몬(雷門) 그 카미나리몬 도로에 낀 건너편에 눈에 띄는 일본의 현대풍 외관의 빌딩이 있습니다. 바로 타이토(台東)구에서 운영하는 '아사쿠사 문화관광센터'입니다.",
    menus: [
        {
            id: 1,
            name: "네즈 미술관",
            extra: "정원 미술관",
            img: "/images/detailpage/architecture/nezumuseum.jpg",
            desc: "현대적인 건축과 고요한 전통 정원이 조화를 이루는 곳입니다.",
            slug: "nezumuseum"
        },
        {
            id: 2,
            name: "교토역 빌딩",
            extra: "미래적 공간",
            img: "/images/detailpage/architecture/kyotostation.jpg",
            desc: "미래지향적 설계로 교토의 관문을 상징하는 현대 건축물입니다.",
            slug: "kyoto-station"
        },
        {
            id: 3,
            name: "호시노야 도쿄",
            extra: "럭셔리 료칸",
            img: "/images/detailpage/architecture/hoshinoya.jpg",
            desc: "전통 료칸의 미학을 현대적 감각으로 재해석한 공간입니다.",
            slug: "hoshinoya"
        }
    ],
    details: {
        location: "도쿄도 다이토구 아사쿠사",
        year: "645년",
        architect: "불명 (고대 사찰 건축)"
    },
    category: "건축"
};

const AsakusaPage = () => {
    return <DetailPage region={region} />;
};

export default AsakusaPage;