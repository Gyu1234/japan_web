import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // 페이지 이동을 위한 훅

const SearchBar = () => {
  const [keyword, setKeyword] = useState(''); // 검색어 상태 관리
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault(); // 폼 제출 시 페이지 새로고침 방지
    if (keyword.trim() === '') return; // 빈 검색어는 무시

    // 검색 결과 페이지로 이동하면서 쿼리 스트링으로 검색어 전달
    // 예: /search?q=도쿄
    navigate(`/search?q=${encodeURIComponent(keyword)}`);
  };

  return (
    <section className="search-section my-5">
      <div className="row justify-content-center mb-3">
        <div className="col-md-6">
          <form className="search-box d-flex g-0" onSubmit={handleSearch}>
            <input
              type="text"
              className="form-control"
              placeholder="검색어를 입력하세요 (예: 도쿄, 온천)"
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