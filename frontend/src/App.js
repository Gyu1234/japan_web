import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/main/MainPage';
import './styles/layout/footer.css';
import './styles/layout/header.css';
import './styles/layout/searchbar.css';


function App() {
  return (
    //  반드시 전체를 <Router>로 감싸야 합니다.
    <Router>
      <div className="App">
        <Routes>
          {/*  각 주소(path)에 맞는 페이지를 설정합니다. */}
          <Route path="/" element={<MainPage />} />
          
          {/* 나중에 검색 페이지를 만드시면 아래 줄의 주석을 푸세요 */}
          {/* <Route path="/destinations" element={<SearchPage />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;