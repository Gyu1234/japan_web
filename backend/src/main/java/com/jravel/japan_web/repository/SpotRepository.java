package com.jravel.japan_web.repository;

import com.jravel.japan_web.domain.Spot;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List; // Arrays 대신 List를 사용합니다.

@Repository
public interface SpotRepository extends JpaRepository<Spot, Long> {

    // 1. [검색] 이름에 키워드가 포함된 여행지 검색
    List<Spot> findByNameContaining(String keyword);

    // 2. [검색] 특정 지역 내에서 이름에 키워드가 포함된 여행지 검색
    List<Spot> findByRegionAndNameContaining(String region, String keyword);

    // 3. [추천/검색] 이름 검색 후 좋아요 순으로 정렬
    List<Spot> findByNameContainingOrderByLikeCountDesc(String keyword);

    // 4. [추천] 지역별로 좋아요가 많은 순서대로 정렬 (기존 Arrays를 List<Spot>으로 수정)
    List<Spot> findByRegionOrderByLikeCountDesc(String region);
}