import React, { useState } from 'react';

const DetailPage = () => {
    const [isLiked, setIsLiked] = useState(false);

    // 나중에는 이 데이터를 DB(API)에서 받아오게 됩니다.
    const restaurantData = {
        name: "축제",
        description: "축제가 아니라 장례식입니다",
        longDescription: "끝을 기리는 자리이지만 동시에 새로운 시작을 준비하는 조용한 의식이 된다.",
        images: [
            "/images/mainpage/culture/matsuri.jpg",
            "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSy0XVjg7gyUuhqw71Vcem3Mp847qP8ewF4VxNRz8OcWWNmBC5QuScNV8xsnQmVK9hGTIlmg9K_7RartVvcoKSK4uZZ9t0JjCXAbS-Dd6driGqHFwOeHkmLxPeiOGq9AVZoCSysM=w243-h304-n-k-no-nu",
            "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSyjfoKaGNVIwe7BLGaASFRUZyjJu0zR_3fWuneXpyKJk9zH4-yA4W_bEtcqJ9zSf446Oy4h5fsOISmpWzIRzT_Xq2xsEbL01nLeHsk15YDQb79CiMx3Znt0hJTEVJypjJeEHC-sDcTeekcM=s1360-w1360-h1020-rw",
            "https://static.wixstatic.com/media/01343f_d04b959d985545c985a5e3cbaf4c1289~mv2.jpg/v1/fill/w_466,h_284,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/11_%E3%81%9F%E3%81%93.jpg",
        ],
        menus: [
            { id: 1, name: "오마카세 코스", price: "가격 변동", img: "https://i3.ruliweb.com/img/20/05/07/171edfdd70b9c38.jpg", desc: "계절 재료로 구성되는 코스입니다." },
            { id: 2, name: "참치 초밥", price: "코스 포함", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfkqpe9pmavUWAraA7-OfeiabvqQvRst0O0A&s", desc: "부위별로 다른 맛의 참치 초밥" },
        ],
        info: {
            address: "東京都中央区銀座4-2-15　塚本総業ビルB1階",
            phone: "03-3535-3600",
            hours: "11:30–14:00 / 17:30–20:30",
            holiday: "일요일, 공휴일 등",
            seats: "10석",
        }
    };

    return (
        <div className="detail-page">

            <main className="container my-5">
                <h1 className="h2 mb-4 fw-bold">{restaurantData.name}</h1>

                {/* 1. 캐러셀 영역 (부트스트랩 클래스 활용) */}
                <div id="detailCarousel" className="carousel slide mb-4 shadow" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        {restaurantData.images.map((img, index) => (
                            <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                                <img src={img} className="d-block w-100 detail-carousel-img" alt="매장 이미지" />
                            </div>
                        ))}
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#detailCarousel" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon"></span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#detailCarousel" data-bs-slide="next">
                        <span className="carousel-control-next-icon"></span>
                    </button>
                </div>

                {/* 2. 설명 카드 */}
                <div className="card shadow-sm mb-4 border-0">
                    <div className="card-body">
                        <h5 className="text-primary fw-bold">{restaurantData.description}</h5>
                        <p className="card-text text-secondary">{restaurantData.longDescription}</p>
                    </div>
                </div>

                {/* 3. 대표 메뉴 섹션 */}
                <h3 className="h5 mb-3 fw-bold">대표 메뉴</h3>
                <div className="row g-3 mb-5">
                    {restaurantData.menus.map(menu => (
                        <div key={menu.id} className="col-12 col-md-4">
                            <div className="card h-100 border-0 shadow-sm">
                                <img src={menu.img} className="card-img-top" alt={menu.name} style={{ height: '200px', objectFit: 'cover' }} />
                                <div className="card-body">
                                    <h6 className="fw-bold">{menu.name}</h6>
                                    <p className="small text-muted">{menu.desc}</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <span className="badge bg-dark">추천</span>
                                        <span className="fw-bold text-danger">{menu.price}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* 4. 세부 정보 섹션 */}
                <div className="card shadow-sm border-0 mb-5">
                    <div className="card-body">
                        <h3 className="h5 mb-4 fw-bold">상세 정보</h3>
                        <dl className="row mb-0">
                            <dt className="col-sm-3 text-muted">주소</dt>
                            <dd className="col-sm-9">{restaurantData.info.address}</dd>
                            <hr />
                            <dt className="col-sm-3 text-muted">전화번호</dt>
                            <dd className="col-sm-9">{restaurantData.info.phone}</dd>
                            <hr />
                            <dt className="col-sm-3 text-muted">영업시간</dt>
                            <dd className="col-sm-9">{restaurantData.info.hours}</dd>
                        </dl>

                        {/* 좋아요 버튼 */}
                        <div className="text-center mt-4">
                            <button
                                className={`btn ${isLiked ? 'btn-danger' : 'btn-outline-danger'} rounded-pill px-4`}
                                onClick={() => setIsLiked(!isLiked)}
                            >
                                <i className={`bi ${isLiked ? 'bi-heart-fill' : 'bi-heart'} me-2`}></i>
                                {isLiked ? '좋아요 취소' : '가보고 싶어요'}
                            </button>
                        </div>
                    </div>
                </div>
            </main>

        </div>
    );
};

export default DetailPage;