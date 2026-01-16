$(document).ready(function () {
        // 1. Owl Carousel 초기화
        $(".custom-carousel").owlCarousel({
            // autoWidth: true 옵션은 각 아이템에 명시적인 CSS width가 필요합니다.
            autoWidth: true,
            loop: true,
            // 네비게이션 버튼을 표시하도록 설정 (이미지에서 보았던 좌우 화살표)
            nav: true,
            // 버튼 아이콘을 원하는 형태로 커스터마이징 (CSS로 스타일링 필요)
            navText: ["<", ">"],
            dots: false, // 하단 점 탐색기는 제거
            margin: 15 // 카드 사이의 간격 (CSS와 일치해야 함)
        });

        // 2. 아이템 클릭 이벤트 핸들러 (확대/축소 효과)
        $(".custom-carousel .item").click(function () {
            // 클릭된 요소를 제외한 모든 .item에서 'active' 클래스 제거
            $(".custom-carousel .item").not($(this)).removeClass("active");

            // 클릭된 요소에 'active' 클래스를 추가하거나 제거 (토글)
            $(this).toggleClass("active");
        });
    });