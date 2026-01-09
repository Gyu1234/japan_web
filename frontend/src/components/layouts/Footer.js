import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="inner">
        <ul className="menu">
          <li><a href="#">개인정보처리방침</a></li>
          <li><a href="#">이용약관</a></li>
          <li><a href="#">위치정보 이용약관</a></li>
          <li><a href="#">여행상품 이용안내</a></li>
          <li><a href="#">고객센터</a></li>
          <li><a href="#">문의하기</a></li>
        </ul>
      </div>

      <div className="info">
        <span>운영사 : Japan Travel Guide</span>
        <span>대표자 : 엄준식</span>
        <span>TEL : 02-0000-0000</span>
        <span>Email : support@japantravel.com</span>
      </div>

      <p className="copyright">© Japan Travel Guide. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;