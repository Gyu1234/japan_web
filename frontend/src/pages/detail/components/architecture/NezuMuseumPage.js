import DetailPage from "../../DetailPage";

const region = {
    name: "네즈 미술관",
    images: [
        "/images/detailpage/architecture/nezumuseum.jpg",
        "/images/detailpage/architecture/nezumuseum2.jpg",
        "/images/detailpage/architecture/nezumuseum3.jpg"
    ],
    description: "현대적인 건축과 고요한 전통 정원이 조화를 이루는 곳입니다.",
    longDescription: "도부 철도 사장 등을 지낸 사업가 네즈 가이치로의 수집품을 바탕으로 1941년 개관한 사립 미술관입니다. 일본 및 동아시아의 국보와 중요문화재를 포함한 고미술품 약 7,600여 점을 소장하고 있으며, 쿠마 켄고가 설계한 현대적인 건물과 도심 속 숨겨진 17,000㎡ 규모의 아름다운 전통 정원으로 유명합니다. ",
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
        location: "도쿄도 미나토구",
        year: "2009년",
        architect: "안도 다다오"
    },
    category: "건축"
};

const NezuMuseumPage = () => {
    return <DetailPage region={region} />;
};

export default NezuMuseumPage;