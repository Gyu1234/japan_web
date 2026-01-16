import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-white border-bottom">
      <div className="container">
        {/* HOME 글자 대신 로고 이미지 적용 */}
        <Link className="navbar-brand" to="/">
          <img 
            src="/images/logo/Japan_logo.jpg" 
            alt="Japan Travel Logo" 
            style={{ height: '50px', width: 'auto' }} 
          />
        </Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto"> {/* 메뉴를 오른쪽으로 정렬(ms-auto) */}
            <li className="nav-item">
              <Link className="nav-link fs-5 mx-2" to="/destinations">Destinations</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fs-5 mx-2" to="/community">Community</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;