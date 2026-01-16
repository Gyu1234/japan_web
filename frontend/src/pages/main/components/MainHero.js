import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; 

const MainHero = () => {
  const heroImages = [
    {
      src: 'hero1.jpg', // 경로 앞에 /images/ 를 붙이는 것이 안전합니다 (public 폴더 기준)
      alt: '일본 길거리',
      text: '잊지 못할 일본 여행, 지금 계획해보세요!',
      subText: '아름다운 일본의 문화와 자연을 경험하세요'
    },
    {
      src: 'hero2.jpg',
      alt: '자연',
      text: '평화로운 자연 속에서 힐링의 시간을',
      subText: '숨겨진 보석 같은 장소들을 발견하세요'
    },
    {
      src: 'hero3.jpg',
      alt: '기모노',
      text: '문화가 살아 숨쉬는 곳',
      subText: '일본의 찬란한 과거를 만나보세요'
    },
    {
      src: 'hero4.jpg',
      alt: '토리이',
      text: '역사와 전통이 살아 숨 쉬는 곳',
      subText: '일본의 찬란한 과거를 만나보세요'
    }
  ];

  return (
    <section className="hero-section">
      <Carousel
        showArrows={true}      // 📍 true로 바꿔야 커스텀 화살표가 보입니다!
        showStatus={false} 
        showThumbs={false} 
        infiniteLoop={true} 
        autoPlay={true} 
        interval={4000} 
        transitionTime={600}
        // 📍 화살표 함수 인자 (onClickHandler, hasPrev)에 괄호 확인
        renderArrowPrev={(onClickHandler, hasPrev) =>
          hasPrev && (
            <button type="button" onClick={onClickHandler} className="arrow-btn left-arrow">
              &#10094;
            </button>
          )
        }
        renderArrowNext={(onClickHandler, hasNext) =>
          hasNext && (
            <button type="button" onClick={onClickHandler} className="arrow-btn right-arrow">
              &#10095;
            </button>
          )
        }
      >
        {heroImages.map((image, index) => (
          <div key={index} className="hero-slide">
            {/* 이미지 경로가 올바른지 꼭 확인하세요! */}
            <img src={image.src} alt={image.alt} />
            <div className="hero-overlay">
              <h1 className="hero-text">{image.text}</h1>
              <p className="hero-subtext">{image.subText}</p>
              {/* 📍 여기 있던 중복 버튼들을 삭제했습니다. */}
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default MainHero;