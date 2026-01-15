import React from 'react';
// 공통 레이아웃
import Header from '../../components/layouts/Header';
import Footer from '../../components/layouts/Footer';
import SearchBar from '../../components/layouts/SearchBar';
// 메인 전용 컴포넌트
import MainHero from './components/MainHero';
import RegionGrid from './components/RegionGrid';
import FoodSection from './components/FoodSection';
import CultureSection from './components/CultureSection';
// 스타일
import './MainPage.css';

const MainPage = () => {
  return (
    <div className="main-page-wrapper">
      <Header />
      
      
      <main>
        <MainHero />
        <SearchBar/>
        <RegionGrid />
        <CultureSection />
        <FoodSection />
      </main>

      <Footer />
    </div>
  );
};

export default MainPage;