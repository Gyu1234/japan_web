package com.jravel.japan_web.repository;

import com.jravel.japan_web.domain.Spot;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface SpotRepository extends JpaRepository<Spot, Long> {

    // 1. 통합 검색: 이름, 카테고리뿐만 아니라 '지역'으로도 검색 가능하게 확장
    List<Spot> findByNameContainingOrCategoryContainingOrRegionContaining(String name, String category, String region);

    // 2. 지역별 좋아요순 랭킹: 특정 지역(예: 후쿠오카) 내에서 인기순 정렬
    List<Spot> findByRegionOrderByLikeCountDesc(String region);

    // 3. 전체 랭킹: 지역 상관없이 현재 가장 인기 있는 '일본 전체 명소' Top 리스트용
    List<Spot> findAllByOrderByLikeCountDesc();

    // 4. 카테고리 및 지역별 필터링: 사용자가 특정 지역과 카테고리를 선택했을 때 해당 조건에 맞는 명소들을 반환
    List<Spot> findByRegion(String region);

    // 5. 카테고리별 필터링: 특정 카테고리에 속하는 명소들을 반환
    List<Spot> findByCategory(String category);

    // 6. 지역 및 카테고리 복합 필터링: 특정 지역 내에서 특정 카테고리에 속하는 명소들을 반환
    List<Spot> findByRegionAndCategory(String region, String category);

    // 7. 이름으로 명소 검색: 사용자가 입력한 이름과 일치하는 명소들을 반환(중간에 문자열 포함)
    List<Spot> findByNameContaining(String name);

    // 8. 카테고리로 명소 검색: 사용자가 선택한 카테고리에 속하는 명소들을 반환
    List<Spot> findByCategoryContaining(String category);
    
    // 9. 지역으로 명소 검색: 사용자가 선택한 지역에 속하는 명소들을 반환
    List<Spot> findByRegionContaining(String region);
}