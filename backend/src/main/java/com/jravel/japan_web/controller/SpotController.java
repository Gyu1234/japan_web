package com.jravel.japan_web.controller;

import com.jravel.japan_web.dto.SpotDto;
import com.jravel.japan_web.service.SpotService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/spots")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000") // 리액트(3000포트) 접속 허용
public class SpotController {

    private final SpotService spotService;

    // 1. 메인 검색창 검색 (통합 필터링)
    @GetMapping("/search")
    public List<SpotDto.Response> search(
        @RequestParam(name = "keyword", defaultValue = "") String keyword,
        @RequestParam(name = "category", required = false) String category,
        @RequestParam(name = "region", required = false) String region) {  
        return spotService.getFilteredSpots(keyword, category, region);
    }
    
    // 2. 상세 페이지 조회
    @GetMapping("/{id}")
    public ResponseEntity<SpotDto.Response> getDetail(@PathVariable(name = "id") Long id) {
        SpotDto.Response response = spotService.getSpotDetail(id);
        return ResponseEntity.ok(response);
    }

    // 3. 전체/지역별 랭킹 조회
    @GetMapping("/all/ranking")
    public ResponseEntity<List<SpotDto.Response>> getRanking(@RequestParam(name = "region", required = false) String region) {
        return ResponseEntity.ok(spotService.getRanking(region));
    }

    // 4. 좋아요 클릭
    @PostMapping("/{id}/like")
    public ResponseEntity<Long> addLike(@PathVariable(name = "id") Long id) {
        spotService.addLike(id);
        return ResponseEntity.ok(id);
    }

    // 5. 지역별 명소 조회 (프론트 지역 페이지 연동용)
    @GetMapping("/destination")
    public ResponseEntity<List<SpotDto.Response>> getDestination(@RequestParam(required = false) String region) {
        List<SpotDto.Response> response = spotService.getRanking(region); 
        return ResponseEntity.ok(response);
    }
}