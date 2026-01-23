import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// 페이지 임포트
import MainPage from './pages/main/MainPage';
import ListPage from './pages/list_array/ListPage'; // 리스트 페이지 추가
import DetailPage from './pages/detail/DetailPage';
// main 카드9개 임포트
import KantoPage from './pages/list_array/components/KantoPage';
import TohokuPage from './pages/list_array/components/TohokuPage';
import HokkaidoPage from './pages/list_array/components/HokkaidoPage';
import ChugokuPage from './pages/list_array/components/ChugokuPage';
import KansaiPage from './pages/list_array/components/KansaiPage';
import KyushuPage from './pages/list_array/components/KyushuPage';
import ShikokuPage from './pages/list_array/components/ShikokuPage';
import OkinawaPage from './pages/list_array/components/OkinawaPage';
import ChubuPage from './pages/list_array/components/ChubuPage';
import MatsuriPage from './pages/detail/components/MatsuriPage';
import TraditionPage from './pages/detail/components/TraditionPage';
import ArtsPage from './pages/detail/components/ArtsPage';
import BuildPage from './pages/detail/components/BuildPage';
// 스타일 임포트
import './styles/layout/footer.css';
import './styles/layout/header.css';
import './styles/layout/searchbar.css';
import './styles/layout/sidebar.css';



function App() {
  return (
    //  반드시 전체를 <Router>로 감싸야 합니다.
    <Router>
      <div className="App">
        <Routes>
          {/*  각 주소(path)에 맞는 페이지를 설정합니다. */}
          <Route path="/" element={<MainPage />} />
          <Route path="/kanto" element={<KantoPage />} />
          <Route path="/tohoku" element={<TohokuPage />} />
          <Route path="/hokkaido" element={<HokkaidoPage />} />
          <Route path="/chugoku" element={<ChugokuPage />} />
          <Route path="/kansai" element={<KansaiPage />} />
          <Route path="/kyushu" element={<KyushuPage />} />
          <Route path="/shikoku" element={<ShikokuPage />} />
          <Route path="/okinawa" element={<OkinawaPage />} />
          <Route path="/chubu" element={<ChubuPage />} />
          <Route path="/matsuri" element={<MatsuriPage />} />
          <Route path="/tradition" element={<TraditionPage />} />
          <Route path="/arts" element={<ArtsPage />} />
          <Route path="/build" element={<BuildPage />} />
          <Route path=":anything/cat" element={<DetailPage />} />
          <Route path=":anything/dog" element={<DetailPage />} />
          {/* 나중에 검색 페이지를 만드시면 아래 줄의 주석을 푸세요 */}
          {/* <Route path="/destinations" element={<SearchPage />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;