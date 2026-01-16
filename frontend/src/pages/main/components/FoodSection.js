import React, { useState } from 'react'; 

const FoodSection = () => {
  
  const [activeIndex, setActiveIndex] = useState(1);

  const foodItems = [
    { id: 1, name: 'Sushi', img: '/images/mainpage/food/sushi.jpg', desc: '신선한 해산물과 장인의 기술이 만나는 일본 미식의 정점입니다.' },
    { id: 2, name: 'Ramen', img: '/images/mainpage/food/ramen.jpg', desc: '일본의 대표적인 라면으로, 다양한 종류와 맛이 있습니다.' },
    { id: 3, name: 'Udon', img: '/images/mainpage/food/udon.jpg', desc: '두꺼운 면으로 만든 일본의 전통 라면입니다.' },
    { id: 4, name: 'Gyukatsu', img: '/images/mainpage/food/Gyukatsu.jpg', desc: '고기로 만든 조리법으로, 바삭하고 달콤한 맛이 특징입니다.' },
    { id: 5, name: 'Yakiniku', img: '/images/mainpage/food/yakiniku.jpg', desc: '직접 구워 먹는 고기 요리로, 다양한 고기를 사용합니다.' },
    { id: 6, name: 'Izakaya', img: '/images/mainpage/food/Izakaya.jpg', desc: '일본의 전통적인 술집으로, 다양한 간식과 음료를 즐길 수 있습니다.' },
    { id: 7, name: 'Others', img: '/images/mainpage/culture/others.jpg', desc: '기타 다양한 일본 음식들을 소개합니다.' },
  ];

  return (
    <section className="food-section">
      <h2 className="section-title">Food Journey in Japan</h2>
      <div className="item-list">
        {foodItems.map((item) => (
          <div 
            key={item.id}
            // 현재 클릭된 번호(activeIndex)와 내 번호(item.id)가 같으면 active 클래스를 붙입니다.
            className={`item ${activeIndex === item.id ? 'active' : ''}`}
            style={{ backgroundImage: `url(${item.img})` }}
            // 클릭하면 내 번호를 activeIndex로 바꿔라! 라고 명령합니다.
            onClick={() => setActiveIndex(item.id)}
          >
            <div className="item-desc">
              <h3>{item.name}</h3>
              {activeIndex === item.id && <p>{item.desc}</p>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FoodSection;