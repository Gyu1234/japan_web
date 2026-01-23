package com.jravel.japan_web.repository;

import com.jravel.japan_web.domain.Spot;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface SpotRepository extends JpaRepository<Spot, Long> {

    // [검색 및 필터링 관련]
    
    // 1. 통합 검색: 이름, 카테고리, 지역 중 하나라도 키워드를 포함하면 반환
    List<Spot> findByNameContainingOrCategoryContainingOrRegionContaining(String name, String category, String region);

    // 2. 개별 검색 (Containing 사용으로 부분 일치 허용)
    List<Spot> findByNameContaining(String name);
    List<Spot> findByCategoryContaining(String category);
    List<Spot> findByRegionContaining(String region);

    // 3. 정확한 일치 필터링
    List<Spot> findByRegion(String region);
    List<Spot> findByCategory(String category);
    List<Spot> findByRegionAndCategory(String region, String category);


    // [정렬 및 랭킹 관련]

    // 4. 지역별 좋아요순 랭킹: 특정 지역 내에서 인기순 정렬 (프론트 지역 페이지용 핵심 메서드)
    List<Spot> findByRegionOrderByLikeCountDesc(String region);

    // 5. 전체 랭킹: 지역 상관없이 전체 인기 리스트
    List<Spot> findAllByOrderByLikeCountDesc();
}