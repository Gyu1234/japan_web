import React, { useState } from 'react';

const Sidebar = ({ onFilterChange, onLocationChange }) => {
  // 아코디언의 열림/닫힘 상태 관리
  const [openSections, setOpenSections] = useState({
    history: true,
    culture: false,
    food: false,
    nature: false,
    location: false,
  });

  const toggleSection = (section) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const categories = [
    {
      id: 'history',
      title: '역사',
      items: [
        { id: 'shrine', label: '신사', cat: 'shrine' },
        { id: 'temple', label: '절', cat: 'temple' },
        { id: 'castle', label: '성', cat: 'castle' },
        { id: 'history_site', label: '유적지', cat: 'history' },
      ],
    },
    {
      id: 'culture',
      title: '문화',
      items: [
        { id: 'festival', label: '마츠리(축제)', cat: 'festival' },
        { id: 'gallery', label: '미술관', cat: 'gallery' },
        { id: 'museum', label: '박물관', cat: 'museum' },
        { id: 'anime', label: '애니메이션 성지', cat: 'anime' },
      ],
    },
    {
      id: 'nature',
      title: '자연',
      items: [
        { id: 'onsen', label: '온천', cat: 'onsen' },
        { id: 'park', label: '공원', cat: 'park' },
        { id: 'hiking', label: '등산로', cat: 'hiking' },
      ],
    },
    {
      id: 'food',
      title: '음식',
      items: [
        { id: 'sushi-ramen', label: '스시/라멘', cat: 'sushi-ramen' },
        { id: 'cafe-dessert', label: '카페/디저트', cat: 'cafe-dessert' },
        { id: 'izakaya', label: '이자카야', cat: 'izakaya' },
      ],
    }
    // ... 추가 카테고리 (food, nature 등) 동일한 형식으로 구성 가능
  ];

  const locations = ['도쿄', '요코하마', '하코네', '오사카', '교토', '나라', '홋카이도', '후쿠오카', '오키나와'];

  return (
    <div className="accordion sidebar">
      {/* 카테고리 섹션 렌더링 */}
      {categories.map((group) => (
        <div className="accordion-item" key={group.id}>
          <h2 className="accordion-header sidebar-section-header">
            <button
              className={`accordion-button sidebar-section-title ${!openSections[group.id] ? 'collapsed' : ''}`}
              type="button"
              onClick={() => toggleSection(group.id)}
            >
              {group.title}
            </button>
          </h2>
          <div className={`accordion-collapse collapse ${openSections[group.id] ? 'show' : ''}`}>
            <div className="accordion-body">
              {group.items.map((item) => (
                <label className="form-check" key={item.id}>
                  <input 
                    className="form-check-input" 
                    type="checkbox" 
                    onChange={(e) => onFilterChange(item.cat, e.target.checked)}
                  />
                  <span className="form-check-label">{item.label}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      ))}

      {/* 지역 섹션 */}
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className={`accordion-button sidebar-section-title ${!openSections.location ? 'collapsed' : ''}`}
            type="button"
            onClick={() => toggleSection('location')}
          >
            지역
          </button>
        </h2>
        <div className={`accordion-collapse collapse ${openSections.location ? 'show' : ''}`}>
          <div className="accordion-body location-body">
            <div className="list-group">
              {locations.map((loc) => (
                <button
                  key={loc}
                  className="list-group-item list-group-item-action border-0"
                  onClick={() => onLocationChange(loc)}
                >
                  {loc}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;