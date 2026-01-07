package com.jravel.japan_web.service;

import com.jravel.japan_web.domain.Spot;
import com.jravel.japan_web.dto.SpotDto;
import com.jravel.japan_web.repository.SpotRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class SpotService {

    private final SpotRepository spotRepository;

    // 1. 통합 검색: 이름, 카테고리뿐만 아니라 '지역'까지 뒤지도록 수정
    public List<SpotDto.Response> search(String keyword) {
        return spotRepository.findByNameContainingOrCategoryContainingOrRegionContaining(keyword, keyword, keyword)
                .stream()
                .map(SpotDto.Response::new)
                .collect(Collectors.toList());
    }

    // 2. 좋아요 기능: 변경 감지(Dirty Checking)를 통해 DB에 자동 반영
    @Transactional
    public void addLike(Long id) {
        Spot spot = spotRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("해당 장소가 없습니다. id=" + id));

        spot.upLike();
    }

    // 3. 랭킹 조회 기능 추가: 인기 리스트 (지역별 혹은 전체)
    public List<SpotDto.Response> getRanking(String region) {
        List<Spot> spots;
        if (region == null || region.isEmpty()) {
            spots = spotRepository.findAllByOrderByLikeCountDesc(); // 전체 랭킹
        } else {
            spots = spotRepository.findByRegionOrderByLikeCountDesc(region); // 지역별 랭킹
        }
        return spots.stream()
                .map(SpotDto.Response::new)
                .collect(Collectors.toList());
    }

    // 상세 페이지 조회를 위한 메서드
    public SpotDto.Response getSpotDetail(Long id) {
        Spot spot = spotRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("해당 장소가 존재하지 않습니다. id=" + id));

        return new SpotDto.Response(spot); // 엔티티를 DTO로 변환하여 반환
    }
}