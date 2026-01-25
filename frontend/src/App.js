import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// 페이지 임포트
import ScrollTop from './components/commons/ScrollTop';
import MainPage from './pages/main/MainPage';
import ListPage from './pages/list_array/ListPage'; // 리스트 페이지 추가
import Detail_array from './pages/detail/detail_array';
// main 카드(9개) 임포트
import KantoPage from './pages/list_array/components/KantoPage';
import TohokuPage from './pages/list_array/components/TohokuPage';
import HokkaidoPage from './pages/list_array/components/HokkaidoPage';
import ChugokuPage from './pages/list_array/components/ChugokuPage';
import KansaiPage from './pages/list_array/components/KansaiPage';
import KyushuPage from './pages/list_array/components/KyushuPage';
import ShikokuPage from './pages/list_array/components/ShikokuPage';
import OkinawaPage from './pages/list_array/components/OkinawaPage';
import ChubuPage from './pages/list_array/components/ChubuPage';
// 문화 카드(16개) 임포트
import GionPage from './pages/detail/components/festivals/GionPage';
import GandaPage from './pages/detail/components/festivals/GandaPage';
import TenzinPage from './pages/detail/components/festivals/TenzinPage';
import OdoriPage from './pages/detail/components/festivals/OdoriPage';
import TeaPage from './pages/detail/components/tradition/TeaPage';
import KimonoPage from './pages/detail/components/tradition/KimonoPage';
import KabukiPage from './pages/detail/components/tradition/KabukiPage';
import OnsenPage from './pages/detail/components/tradition/OnsenPage';
import NohPage from './pages/detail/components/arts/NohPage';
import UkiyoePage from './pages/detail/components/arts/UkiyoePage';
import AnimePage from './pages/detail/components/arts/AnimePage';
import SumiePage from './pages/detail/components/arts/SumiePage';
import AsakusaPage from './pages/detail/components/architecture/AsakusaPage';
import NezuMuseumPage from './pages/detail/components/architecture/NezuMuseumPage';
import KyotoStationPage from './pages/detail/components/architecture/KyotoStationPage';
import HoshinoyaPage from './pages/detail/components/architecture/HoshinoyaPage';
// 스타일 임포트
import './styles/layout/footer.css';
import './styles/layout/header.css';
import './styles/layout/searchbar.css';
import './styles/layout/sidebar.css';



function App() {
  return (
    //  반드시 전체를 <Router>로 감싸야 합니다.
    <Router>
      <ScrollTop />
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
          <Route path=":anything/cat" element={<Detail_array />} />
          <Route path=":anything/dog" element={<Detail_array />} />
          <Route path="/gion" element={<GionPage />} />
          <Route path="/ganda" element={<GandaPage />} />
          <Route path="/tenzin" element={<TenzinPage />} />
          <Route path="/odori" element={<OdoriPage />} />
          <Route path="/tea" element={<TeaPage />} />
          <Route path="/kimono" element={<KimonoPage />} />
          <Route path="/kabuki" element={<KabukiPage />} />
          <Route path="/onsen" element={<OnsenPage />} />
          <Route path="/noh" element={<NohPage />} />
          <Route path="/ukiyoe" element={<UkiyoePage />} />
          <Route path="/anime" element={<AnimePage />} />
          <Route path="/sumie" element={<SumiePage />} />
          <Route path="/asakusa" element={<AsakusaPage />} />
          <Route path="/nezumuseum" element={<NezuMuseumPage />} />
          <Route path="/kyoto-station" element={<KyotoStationPage />} />
          <Route path="/hoshinoya" element={<HoshinoyaPage />} />
          {/* 나중에 검색 페이지를 만드시면 아래 줄의 주석을 푸세요 */}
          {/* <Route path="/destinations" element={<SearchPage />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;