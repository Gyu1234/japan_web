import React from 'react';
import { Link } from "react-router-dom";

const CultureSection = () => {
    const cultures = [
        { id: 'festivals', name: '축제', slug: 'matsuri', img: '/images/mainpage/culture/matsuri.jpg', desc: '일본의 다채로운 축제들' },
        { id: 'traditions', name: '전통', slug: 'tradition', img: '/images/mainpage/culture/tradition.jpg', desc: '오랜 역사와 전통 문화' },
        { id: 'arts', name: '예술', slug: 'arts', img: '/images/mainpage/culture/arts.jpg', desc: '독특한 일본 예술 세계' },
        { id: 'architecture', name: '건축', slug: 'build', img: '/images/mainpage/culture/build.jpg', desc: '현대와 전통이 어우러진 건축물' },   
    ];

    return (
        <section className="culture-section">
            <h2 className="section-title">일본의 문화</h2>
            <div className="item-list">
                {cultures.map((culture) => (
                    <Link to={`/${culture.slug}`} key={culture.id}>
                        <div key={culture.id} className="item" style={{ backgroundImage: `url(${culture.img})` }}>
                            <div className="item-desc">
                                <h3>{culture.name}</h3>
                                <p>{culture.desc}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}

export default CultureSection;