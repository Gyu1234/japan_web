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
public class SpotController {

    private final SpotService spotService;

    // 1. 메인 검색창 검색
    @GetMapping("/search")
    public List<SpotDto.Response> search(@RequestParam(name = "keyword", defaultValue = "") String keyword) {
        return spotService.search(keyword);
    }

    // 2. 상세 페이지 조회 (ID 기반)
    @GetMapping("/{id}")
    public ResponseEntity<SpotDto.Response> getDetail(@PathVariable(name = "id") Long id) {
        // 서비스에 findById 로직이 있다고 가정하고 호출합니다.
        SpotDto.Response response = spotService.getSpotDetail(id);
        return ResponseEntity.ok(response);
    }

    // 3. 랭킹 조회 (경로 충돌 방지를 위해 /all 배치)
    @GetMapping("/all/ranking")
    public ResponseEntity<List<SpotDto.Response>> getRanking(@RequestParam(name = "region", required = false) String region) {
        return ResponseEntity.ok(spotService.getRanking(region));
    }

    // 4. 좋아요 클릭 (PathVariable {id} 위치 확인!)
    @PostMapping("/{id}/like")
    public ResponseEntity<Long> addLike(@PathVariable(name = "id") Long id) {
        spotService.addLike(id);
        return ResponseEntity.ok(id);
    }
}