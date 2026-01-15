import React from 'react';

const FoodSection = () => (
  <section className="food-section">
    <h2 className="section-title">Food Journey in Japan</h2>
    <div className="item-list">
      <div className="item active" style={{ backgroundImage: 'url(/sushi.jpg)' }}>
        <div className="item-desc"><h3>Sushi</h3><p>신선한 해산물...</p></div>
      </div>
      {/* 나머지 아이템들 생략 */}
    </div>
  </section>
);

export default FoodSection;