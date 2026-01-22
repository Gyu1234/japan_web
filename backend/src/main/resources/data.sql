-- 기존 데이터 삭제 (테스트 반복을 위함)
DELETE FROM spots;

-- 1. 간토 (음식)
INSERT INTO spots (name, region, category, theme, description, address, like_count, rating, latitude, longitude, image_url)
VALUES ('스키야바시 지로', '간토', '음식점', '음식', '전설적인 스시 장인의 손길을 느낄 수 있는 긴자의 명소입니다.', '도쿄도 주오구 긴자 4-2-15', 1500, 4.8, 35.6723, 139.7645, 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c');

-- 2. 홋카이도 (자연) - 좋아요 높음
INSERT INTO spots (name, region, category, theme, description, address, like_count, rating, latitude, longitude, image_url)
VALUES ('오타루 운하', '홋카이도', '관광지', '자연', '가스등 아래 흐르는 운하와 붉은 벽돌 창고가 만드는 낭만적인 풍경입니다.', '홋카이도 오타루시 미나토마치 5', 2500, 4.7, 43.1907, 141.0064, 'https://images.unsplash.com/photo-1509023467864-1ecbb3f6354b');

-- 3. 규슈 (문화컨텐츠)
INSERT INTO spots (name, region, category, theme, description, address, like_count, rating, latitude, longitude, image_url)
VALUES ('캐널시티 하카타', '규슈', '쇼핑몰', '문화컨텐츠', '다양한 쇼핑과 분수쇼, 애니메이션 굿즈를 즐길 수 있는 복합 시설입니다.', '후쿠오카현 후쿠오카시 하카타구', 980, 4.4, 33.5898, 130.4115, 'https://images.unsplash.com/photo-1549924231-f129b911e442');
