import React from 'react';
// 공통 레이아웃
import Header from '../../components/commons/Header';
import Footer from '../../components/commons/Footer';
import SearchBar from '../../components/commons/SearchBar';
import Sidebar from '../../components/commons/SideBar'; 
// 데이터 및 카드 컴포넌트
import { items } from './list_array'; 
import ResultCard from './components/ResultCard';
// 스타일
import './ListPage.css';

const ListPage = () => {
  // 에러 방지를 위한 배경 이미지 인라인 스타일
  const heroStyle = {
    // 배경을 약간 어둡게 처리(linear-gradient)해야 검색창이 더 잘 보입니다.
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)), url('/month/1month.jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '380px',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };

  return (
    <div className="list-page-wrapper">
      <Header />

      {/* 1. 이미지 배경 검색 영역 (Hero Section) */}
      <div style={heroStyle} className="search-hero-section">
        <div className="search-content text-center text-white w-100">
          <h2 className="search-title">어디로 떠나고 싶으신가요?</h2>
          <p className="search-subtitle">일본의 숨은 명소를 찾아보세요</p>
          <div className="search-bar-container">
            <SearchBar />
          </div>
        </div>
      </div>

      {/* 2. 메인 콘텐츠 영역 */}
      <main className="container mt-5">
        <div className="row">
          {/* 왼쪽: 사이드바 (3칸) */}
          <aside className="col-md-3 mb-4">
            <div className="sidebar-sticky">
              <Sidebar />
            </div>
          </aside>

          {/* 오른쪽: 리스트 영역 (9칸) */}
          <section className="col-md-9">
            <div className="list-header mb-4 d-flex justify-content-between align-items-end">
              <h4 className="m-0">총 <strong>{items.length}</strong>개의 결과가 있습니다.</h4>
              <div className="sort-options text-muted small">
                추천순 | 최신순 | 별점순
              </div>
            </div>

            <div id="card-list">
              {items && items.length > 0 ? (
                items.map((item) => (
                  <ResultCard key={item.id} data={item} />
                ))
              ) : (
                <div className="text-center py-5">
                  <p className="text-muted">찾으시는 결과가 없습니다.</p>
                </div>
              )}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ListPage;