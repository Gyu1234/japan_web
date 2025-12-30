package com.jravel.japan_web.repository;

import com.jravel.japan_web.domain.Spot;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * [팀장 가이드]
 * JpaRepository<엔티티, ID유형>를 상속받으면
 * 기본적인 save(), findAll(), findById(), delete() 등을 바로 쓸 수 있습니다.
 */
@Repository
public interface SpotRepository extends JpaRepository<Spot, Long> {

    // 팀장님의 추천 알고리즘을 위한 기초 쿼리 메서드 예시
    // 1. 지역별로 찾되, 좋아요 순으로 정렬해서 가져오기
    List<Spot> findByRegionOrderByLikeCountDesc(String region);

    // 2. 이름에 특정 키워드가 포함된 여행지 찾기
    List<Spot> findByNameContaining(String keyword);
}