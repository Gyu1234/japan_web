import DetailPage from "../../DetailPage";

const region = {
    name: "교토역 빌딩",
    images: [
        "/images/detailpage/architecture/kyotostation.jpg",
        "/images/detailpage/architecture/kyotostation2.jpg",
        "/images/detailpage/architecture/kyotostation3.jpg"
    ],
    description: "미래지향적 설계로 교토의 관문을 상징하는 현대 건축물입니다.",
    longDescription: "교토역 빌딩은 하라 히로시가 설계한 지하 3층, 지상 16층의 현대적 복합 랜드마크입니다. 철골과 유리의 거대한 구조물로, 교토의 전통적인 풍경과 대비되는 웅장한 내부 공간을 자랑하며 쇼핑몰, 호텔, 극장, 레스토랑, 전망대 등을 갖춘 교통과 문화의 핵심지입니다. ",
    menus: [
        {
            id: 1,
            name: "아사쿠사 문화관광센터",
            extra: "전통 사원",
            img: "/images/detailpage/architecture/asakusa.jpg",
            desc: "거대한 등불이 반겨주는 에도 시대의 정취를 품은 사찰입니다.",
            slug: "asakusa"
        },
        {
            id: 2,
            name: "네즈 미술관",
            extra: "정원 미술관",
            img: "/images/detailpage/architecture/nezumuseum.jpg",
            desc: "현대적인 건축과 고요한 전통 정원이 조화를 이루는 곳입니다.",
            slug: "nezumuseum"
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
        location: "교토부 교토시 시모교구",
        year: "1997년",
        architect: "하라 히로시"
    },
    category: "건축"
};

const KyotoStationPage = () => {
    return <DetailPage region={region} />;
};

export default KyotoStationPage;