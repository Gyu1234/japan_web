import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// 페이지 임포트
import MainPage from './pages/main/MainPage';
import ListPage from './pages/list_array/ListPage'; // 리스트 페이지 추가
import DetailPage from './pages/detail/DetailPage';
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
          <Route path="/" element={<DetailPage />} />
          
          {/* 나중에 검색 페이지를 만드시면 아래 줄의 주석을 푸세요 */}
          {/* <Route path="/destinations" element={<SearchPage />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;