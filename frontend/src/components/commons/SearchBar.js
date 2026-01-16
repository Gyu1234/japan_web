import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // 페이지 이동을 위한 훅
import axios from 'axios';

const SearchBar = () => {
  const [keyword, setKeyword] = useState(''); // 검색어 상태 관리
  const navigate = useNavigate();

  const handleSearch = async (e) => {
  e.preventDefault();
  if (keyword.trim() === '') return;

  // 페이지 이동 대신 백엔드에 직접 요청 (메인 페이지에서 바로 결과를 볼 때)
  try {
    const response = await axios.get(`http://localhost:8080/api/search?q=${keyword}`);
    console.log("백엔드 검색 결과:", response.data);
    // 이 데이터를 부모(MainPage)에게 전달하여 화면을 갱신하게 만듭니다.
  } catch (error) {
    console.error("검색 연동 실패:", error);
  }
};

  return (
    <section className="search-section my-5">
      <div className="row justify-content-center mb-3">
        <div className="col-md-6">
          <form className="search-box d-flex g-0" onSubmit={handleSearch}>
            <input
              type="text"
              className="form-control"
              placeholder="검색어를 입력하세요"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)} // 입력할 때마다 상태 업데이트
            />
            <button className="btn btn-success rounded-0" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SearchBar;