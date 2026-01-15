import React from 'react';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        {/* 리액트에서는 class 대신 className을 사용 */}
        <a className="navbar-brand fs-2" href="/">Japan travel</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul className="navbar-nav me-auto navbar-nav-scroll">
            <li className="nav-item">
              <a className="nav-link active fs-2" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fs-2" href="/destinations">Destinations</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle fs-2" href="#" role="button" data-bs-toggle="dropdown">
                Themes
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="/themes/food">미식 (グルメ)</a></li>
                <li><a className="dropdown-item" href="/themes/onsen">온천 (温泉)</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="/themes/culture">문화유산</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link fs-2" href="/community">Community</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;