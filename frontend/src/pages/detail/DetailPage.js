import React, { useState } from 'react';
import Header from '../../components/commons/Header';
import Footer from '../../components/commons/Footer';
import './DetailPage.css';

const DetailPage = () => {
  const [isLiked, setIsLiked] = useState(false);

  const restaurantData = {
    name: "여기는 디테일 페이지입니다",
    description: "귀엽고 영리하며, 독립적인 성격과 부드러운 털을 가진 매력적인 반려동물입니다.",
    longDescription: "고양이최고고양이최고고양이최고고양이최고고양이최고고양이최고고양이최고고양이최고고양이최고고양이최고고양이최고고양이최고고양이최고고양이최고고양이최고고양이최고고양이최고고양이최고고양이최고고양이최고고양이최고고양이최고고양이최고고양이최고고양이최고고양이최고고양이최고고양이최고고양이최고고양이최고고양이최고고양이최고고양이최고고양이최고고양이최고고양이최고고양이최고고양이최고고양이최고고양이최고고양이최고고양이최고고양이최고고양이최고고양이최고고양이최고고양이최고고양이최고고양이최고고양이최고",

    // ✅ 캡처된 폴더 구조(images/hero)에 맞게 경로 수정
    images: [
      "/images/list_array/cat.jpg",
      "/images/list_array/dog.jpg"
    ],

    // ✅ 캡처된 폴더 구조(images/history) 및 음식 사진에 맞게 수정
    menus: [
      {
        id: 1,
        name: "러시안 블루",
        price: "기모띠",
        img: "/images/list_array/cat1.jpg",
        desc: "은은한 회색 털이랑 초록 눈, 조용하고 신중한 타입입니다."
      },
      {
        id: 2,
        name: "코리안 숏헤어",
        price: "기모띠띠",
        img: "/images/list_array/cat2.jpg",
        desc: "성격 스펙트럼 넓고 사람 잘 따르는 현실 친구 같은 고양이입니다."
      },
      {
        id: 3,
        name: "브리티시 숏헤어",
        price: "기모띠띠띠",
        img: "/images/list_array/cat3.jpg",
        desc: "통통한 얼굴에 짧은 털, 느긋하고 안정적인 성격입니다."
      },
    ],
    info: {
      address: "비밀",
      phone: "나이쇼",
      hours: "시크릿",
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
                <h4 className="fw-bold mb-4">고양이 상세 정보</h4>
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