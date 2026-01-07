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
}