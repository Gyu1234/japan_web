import React from 'react';

const SeasonCarousel = () => {
    const seasons = [
        { id: 'spring', name: '봄', img: '/spring.jpg', desc: '벚꽃이 만개하는 계절...' },
        { id: 'summer', name: '여름', img: '/summer.jpg', desc: '축제와 해변의 계절...' },
        { id: 'autumn', name: '가을', img: '/autumn.jpg', desc: '단풍이 아름다운 계절...' },
        { id: 'winter', name: '겨울', img: '/winter.jpg', desc: '눈 내리는 풍경과 온천...' },   
    ];

    return (
        <section className="season-carousel">
            <h2 className="section-title">사계절의 일본</h2>
            <div className="carousel-container">
                {seasons.map(season => (
                    <div key={season.id} className="carousel-item">
                        <img src={season.img} alt={season.name} />
                        <div className="item-desc">
                            <h3>{season.name}</h3>
                            <p>{season.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}