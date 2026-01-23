import React, { useState } from 'react';
import Header from '../../../components/commons/Header';
import Footer from '../../../components/commons/Footer';
import '../DetailPage.css';

const DetailPage = () => {
    const [isLiked, setIsLiked] = useState(false);

    const restaurantData = {
        name: "기온 마츠리",
        description: "천년의 역사를 이어온 교토 최대의 여름 축제",
        longDescription: "교토를 상징하는 기온 마츠리는 1,100년 이상의 역사를 지닌 일본의 대표적인 여름 축제로, 액운을 물리치고 도시의 안녕을 기원하는 의미를 담고 있습니다. 7월 한 달간 도시 전역이 축제 분위기로 물들며, 특히 거대한 수레인 '야마보코'가 거리를 행진하는 화려한 순행은 축제의 정점이자 놓칠 수 없는 장관입니다.",

        // ✅ 캡처된 폴더 구조(images/hero)에 맞게 경로 수정
        images: [
            "/images/mainpage/culture/gion2.jpg",
            "/images/mainpage/culture/gion3.jpg",
            "/images/mainpage/culture/gion4.jpg"
        ],

        // ✅ 캡처된 폴더 구조(images/history) 및 음식 사진에 맞게 수정
        menus: [
            {
                id: 1,
                name: "간다 마츠리",
                price: "관람 무료",
                img: "/images/mainpage/culture/ganda.jpg",
                desc: "축제의 하이라이트인 거대 수레 행진입니다."
            },
            {
                id: 2,
                name: "텐진 마츠리",
                price: "관람 무료",
                img: "/images/mainpage/culture/tenzin.jpg",
                desc: "축제 전야제인 밤의 등불 축제입니다."
            },
            {
                id: 3,
                name: "오도리 마츠리",
                price: "관람 무료",
                img: "/images/mainpage/culture/odori.jpg",
                desc: "일본 북해도의 상징적인 축제입니다"
            },
        ],
        info: {
            address: "교토부 교토시 히가시야마구 (기온 거리 일대)",
            phone: "075-561-6155",
            hours: "7월 1일 ~ 7월 31일 (매년)",
        }
    };

    return (
        <div className="detail-page-wrapper">
            <Header />

            {/* 1. 상단 와이드 캐러셀 */}
            <section className="main-visual">
                <div id="detailCarousel" className="carousel slide shadow" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        {restaurantData.images.map((img, index) => (
                            <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                                <img src={img} className="d-block w-100 main-carousel-img" alt="축제 전경" />
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
            </section>

            {/* 2. 본문 컨테이너 */}
            <main className="container py-5">
                <div className="row g-5">
                    {/* 왼쪽 컬럼 */}
                    <div className="col-lg-8">
                        <div className="mb-5">
                            <h1 className="display-4 fw-bold mb-3">{restaurantData.name}</h1>
                            <p className="lead text-primary fw-bold">{restaurantData.description}</p>
                            <p className="text-secondary fs-5 lh-base">{restaurantData.longDescription}</p>
                        </div>

                        <hr className="my-5" />

                        <h3 className="fw-bold mb-4">주요 볼거리</h3>
                        <div className="row g-4">
                            {restaurantData.menus.map(menu => (
                                <div key={menu.id} className="col-md-4">
                                    <div className="card h-100 border-0 shadow-sm menu-card">
                                        <img src={menu.img} className="card-img-top menu-img" alt={menu.name} />
                                        <div className="card-body p-3">
                                            <h5 className="fw-bold fs-6 mb-1">{menu.name}</h5>
                                            <p className="small text-muted mb-2">{menu.desc}</p>
                                            <p className="text-danger fw-bold mb-0 small">{menu.price}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* 오른쪽 사이드바 */}
                    <div className="col-lg-4">
                        <div className="sticky-top" style={{ top: '100px', zIndex: '10' }}>
                            <div className="card border-0 shadow-sm p-4 bg-white rounded-4 border">
                                <h4 className="fw-bold mb-4">축제 상세 정보</h4>
                                <div className="mb-3">
                                    <label className="text-muted small d-block mb-1">장소</label>
                                    <span className="fw-medium">{restaurantData.info.address}</span>
                                </div>
                                <hr className="my-3 opacity-10" />
                                <div className="mb-3">
                                    <label className="text-muted small d-block mb-1">문의처</label>
                                    <span className="fw-bold text-dark">{restaurantData.info.phone}</span>
                                </div>
                                <hr className="my-3 opacity-10" />
                                <div className="mb-4">
                                    <label className="text-muted small d-block mb-1">기간</label>
                                    <span className="badge bg-warning text-dark fs-6">{restaurantData.info.hours}</span>
                                </div>
                                <button
                                    className={`btn ${isLiked ? 'btn-danger' : 'btn-outline-danger'} w-100 py-3 rounded-pill fw-bold transition-all`}
                                    onClick={() => setIsLiked(!isLiked)}
                                >
                                    <i className={`bi ${isLiked ? 'bi-heart-fill' : 'bi-heart'} me-2`}></i>
                                    {isLiked ? '좋아요 취소' : '가보고 싶어요'}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default DetailPage;