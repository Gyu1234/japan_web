package com.jravel.japan_web.service;

import com.jravel.japan_web.domain.Spot;
import com.jravel.japan_web.dto.SpotDto;
import org.springframework.transaction.annotation.Transactional;
import com.jravel.japan_web.repository.SpotRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true) // 기본적으로 읽기 전용으로 설정 (성능 최적화)
public class SpotService {

    private final SpotRepository spotRepository;
    private final MemberRepository memberRepository; // 사용자 취향 파악용

    /**
     * [비즈니스 로직] 지역별 인기 여행지 조회 (추천 알고리즘)
     * 설명: 단순 조회가 아니라, 좋아요 순서대로 정렬하여 '인기 리스트'를 생성합니다.
     */
    public List<SpotDto.Response> getPopularSpots(String region) {
        // 1. Repository를 통해 특정 지역의 데이터를 좋아요 순(Desc)으로 가져옴
        return spotRepository.findByRegionOrderByLikeCountDesc(region)
                .stream()
                .map(SpotDto.Response::new) // 2. 엔티티를 안전하게 DTO로 변환
                .collect(Collectors.toList());
    }

    /**
     * [비즈니스 로직] 여행지 좋아요 누르기
     * 설명: 사용자가 좋아요를 누르면 카운트를 올리고 DB에 반영합니다.
     */
    @Transactional // 데이터가 변하므로 쓰기 권한 부여
    public void addLike(Long spotId, String userEmail) {
        // 1. 존재하는 여행지인지 확인 (에러 처리)
        Spot spot = spotRepository.findById(spotId)
                .orElseThrow(() -> new IllegalArgumentException("존재하지 않는 여행지입니다."));

        // 2. (확장 포인트) 이미 좋아요를 눌렀는지 확인하는 로직이 들어갈 자리입니다.

        // 3. 좋아요 카운트 증가 (엔티티 내부 로직 호출)
        spot.upLike();

        // 4. 트랜잭션 종료 시 자동으로 DB에 반영됨 (Dirty Checking)
    }

    /**
     * [Admin 전용] 새로운 여행지 등록
     * 설명: 관리자가 입력한 정보를 바탕으로 새로운 여행지 컨텐츠를 생성합니다.
     */
    @Transactional
    public Long saveSpot(SpotDto.Request requestDto) {
        // DTO를 엔티티로 변환하여 저장
        return spotRepository.save(requestDto.toEntity()).getId();
    }
}