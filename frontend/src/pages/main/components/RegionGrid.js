import React from 'react';

const RegionGrid = () => {
  const regions = [
    { id: 'kanto', name: '간토', img: '/tokyo.jpg', desc: '일본의 심장부 도쿄...' },
    { id: 'kansai', name: '간사이', img: '/osaka.jpg', desc: '맛있는 음식과 유쾌한 에너지...' },
    { id: 'hokkaido', name: '홋카이도', img: '/sapporo.jpg', desc: '자연의 아름다움과 신선한 해산물...' },
    { id: 'kyushu', name: '규슈', img: '/fukuoka.jpg', desc: '온천과 활화산의 매력...' },
    { id: 'chubu', name: '주부', img: '/nagoya.jpg', desc: '전통과 현대가 공존하는 지역...' },
    { id: 'tohoku', name: '도호쿠', img: '/sendai.jpg', desc: '사계절의 변화가 뚜렷한 자연...' },
    { id: 'shikoku', name: '시코쿠', img: '/matsuyama.jpg', desc: '작지만 매력적인 섬...' },
    { id: 'chugoku', name: '츄고쿠', img: '/hiroshima.jpg', desc: '역사와 평화의 상징...' },
    { id: 'okinawa', name: '오키나와', img: '/okinawa.jpg', desc: '열대의 낙원과 독특한 문화...' },
  ];

  return (
    <section className="card-section">
      <div className="card-grid">
        {regions.map(region => (
          <div className="travel-card" key={region.id}>
            <div className="card-image"><img src={region.img} alt={region.name} /></div>
            <div className="card-content">
              <h3>{region.name}</h3>
              <p>{region.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RegionGrid;