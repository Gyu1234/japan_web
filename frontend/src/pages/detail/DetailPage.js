import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Header from '../../components/commons/Header';
import Footer from '../../components/commons/Footer';
import './DetailPage.css';

const DetailPage = ({ region }) => {
  const [isLiked, setIsLiked] = useState(false);
  const detailLabels = {
    location: "📍 위치",
    site: "🔗 공식 사이트",
    period: "📅 기간",
    era: "🕰 시대",
    form: "🎨 형식",
    theme: "✨ 주제",
    duration: "⏱ 소요 시간",
    price: "💰 체험 비용",
    reservation: "📝 예약",
    year: "🏗 완공 연도",
    architect: "👤 건축가"
  };
  const detailClasses = [
    'fw-medium',
    'fw-bold text-dark',
    'badge bg-warning text-dark fs-6'
  ];
  return (
    <div className="detail-page-wrapper">
      <Header />
      {/* Hero Section */}
      <section className="main-visual">
        <div id="detailCarousel" className="carousel slide shadow" data-bs-ride="carousel">
          <div className="carousel-inner">
            {region.images.map((img, index) => (
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
      {/* Content Container  */}
      <main className="container py-5">
        <div className="row g-5">
          {/* Main Column */}
          <div className="col-lg-8">
            <div className="mb-5">
              <h1 className="display-4 fw-bold mb-3">{region.name}</h1>
              <p className="lead text-primary fw-bold">{region.description}</p>
              <p className="text-secondary fs-5 lh-base" style={{ whiteSpace: "pre-wrap" }}>{region.longDescription}</p>
            </div>
            <hr className="my-5" />
            <h3 className="fw-bold mb-4">주요 볼거리</h3>
            <div className="row g-4">
              {region.menus.map(menu => (
                <div key={menu.id} className="col-md-4">
                  <Link to={`/${menu.slug}`} className="travel-card-link">
                    <div className="card h-100 border-0 shadow-sm">
                      <div className="menu-card-image">
                        <img src={menu.img} className="card-img-top" alt={menu.name} />
                      </div>
                      <div className="card-body p-3">
                        <h5 className="fw-bold fs-6 mb-1">{menu.name}</h5>
                        <p className="small text-muted mb-2 menu-desc">{menu.desc}</p>
                        <p className="text-danger fw-bold mb-0 small">{menu.extra}</p>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
          {/* Sidebar */}
          <div className="col-lg-4">
            <div className="sticky-top" style={{ top: '100px', zIndex: '10' }}>
              <div className="card border-0 shadow-sm p-4 bg-white rounded-4 border detail-card">
                <h4 className="fw-bold mb-4">{region.category} 상세 정보</h4>
                {Object.entries(region.details).map(([key, value], index) => (
                  <div className="mb-3" key={key}>
                    <label className="text-muted small d-block mb-1">{detailLabels[key]}</label>
                    <span className={detailClasses[index]}>
                      {key === "site" ? <a href={value}>{value}</a> : value}
                    </span>
                    {[0, 1].includes(index) && <hr className="my-3 opacity-10" />}
                  </div>
                ))}
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