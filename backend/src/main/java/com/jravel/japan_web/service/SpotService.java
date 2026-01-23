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

    // 1. 통합 검색
    public List<SpotDto.Response> search(String keyword) {
        return spotRepository.findByNameContainingOrCategoryContainingOrRegionContaining(keyword, keyword, keyword)
                .stream()
                .map(SpotDto.Response::new)
                .collect(Collectors.toList());
    }

    // 2. 좋아요 기능 (Dirty Checking 반영)
    @Transactional
    public void addLike(Long id) {
        Spot spot = spotRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("해당 장소가 없습니다. id=" + id));
        spot.upLike();
    }

    // 3. 랭킹/지역별 리스트 조회 (중요!)
    public List<SpotDto.Response> getRanking(String region) {
        List<Spot> spots;
        // region이 없거나 'all'이면 전체 랭킹, 있으면 지역 필터링
        if (region == null || region.isEmpty() || region.equalsIgnoreCase("all")) {
            spots = spotRepository.findAllByOrderByLikeCountDesc();
        } else {
            spots = spotRepository.findByRegionOrderByLikeCountDesc(region);
        }
        return spots.stream()
                .map(SpotDto.Response::new)
                .collect(Collectors.toList());
    }

    // 4. 상세 정보
    public SpotDto.Response getSpotDetail(Long id) {
        Spot spot = spotRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("해당 장소가 존재하지 않습니다. id=" + id));
        return new SpotDto.Response(spot);
    }

    // 5. 복합 필터링
    public List<SpotDto.Response> getFilteredSpots(String keyword, String category, String region) {
        List<Spot> spots;
        boolean isKeywordEmpty = (keyword == null || keyword.isEmpty());
        boolean isCategoryEmpty = (category == null || category.isEmpty());
        boolean isRegionEmpty = (region == null || region.isEmpty());

        if (!isKeywordEmpty && isCategoryEmpty && isRegionEmpty) {
            spots = spotRepository.findByNameContaining(keyword);
        } else if (isKeywordEmpty && !isCategoryEmpty && isRegionEmpty) {
            spots = spotRepository.findByCategory(category);
        } else if (isKeywordEmpty && isCategoryEmpty && !isRegionEmpty) {
            spots = spotRepository.findByRegion(region);
        } else if (isKeywordEmpty && !isCategoryEmpty && !isRegionEmpty) {
            spots = spotRepository.findByRegionAndCategory(region, category);
        } else {
            spots = spotRepository.findByNameContainingOrCategoryContainingOrRegionContaining(
                    isKeywordEmpty ? "" : keyword,
                    isCategoryEmpty ? "" : category,
                    isRegionEmpty ? "" : region
            );
        }
        return spots.stream().map(SpotDto.Response::new).collect(Collectors.toList());
    }
}