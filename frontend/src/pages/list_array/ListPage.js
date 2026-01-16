import React from 'react';
// 공통 레이아웃 - (스크린샷 기준)
import Header from '../../components/commons/Header';
import Footer from '../../components/commons/Footer';
import SearchBar from '../../components/commons/SearchBar';
import Sidebar from '../../components/commons/SideBar'; 
// 데이터 및 카드 컴포넌트
import { items } from './list_array'; 
// 스크린샷 0488ac.png를 보니 ResultCard가 list_array/components 안에 있네요!
import ResultCard from './components/ResultCard';
// 스타일
import './ListPage.css';

const ListPage = () => {
  return (
    <div className="list-page-wrapper">
      <Header />

      <main className="container mt-4">
        <div className="search-section mb-4">
          <SearchBar />
        </div>

        <div className="row">
          {/* 왼쪽: 사이드바 (3칸 차지) */}
          <div className="col-md-3">
            <Sidebar />
          </div>

          {/* 오른쪽: 리스트 영역 (9칸 차지) */}
          <div className="col-md-9">
            <div id="card-list">
              {items && items.map((item) => (
                <ResultCard key={item.id} data={item} />
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ListPage;