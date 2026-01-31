import DetailPage from "../../DetailPage";

const region = {
    name: "호시노야 도쿄",
    images: [
        "/images/detailpage/architecture/hoshinoya.jpg",
        "/images/detailpage/architecture/hoshinoya2.jpg",
        "/images/detailpage/architecture/hoshinoya3.jpg"
    ],
    description: "전통 료칸의 미학을 현대적 감각으로 재해석한 공간입니다.",
    longDescription: "호시노야 도쿄는 도쿄 오테마치 중심부에 위치한 고층 타워형 럭셔리 료칸으로, 에도 시대의 환대 문화를 현대적으로 재해석한 '탑의 일본 료칸'입니다. 17층 건물 전체에 다다미가 깔려 있고, 각 층마다 전용 오차노마(라운지)가 있어 도심 속에서 고요한 전통 휴식과 온천을 즐길 수 있는 특별한 숙소입니다. ",
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
            name: "교토역 빌딩",
            extra: "미래적 공간",
            img: "/images/detailpage/architecture/kyotostation.jpg",
            desc: "미래지향적 설계로 교토의 관문을 상징하는 현대 건축물입니다.",
            slug: "kyoto-station"
        }
    ],
    details: {
        location: "교토부 니시쿄구",
        year: "2009년",
        architect: "아즈마 다카시"
    },
    category: "건축"
};

const HoshinoyaPage = () => {
    return <DetailPage region={region} />;
};

export default HoshinoyaPage;