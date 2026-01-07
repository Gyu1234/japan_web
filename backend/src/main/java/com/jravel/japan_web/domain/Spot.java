package com.jravel.japan_web.domain;

import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "spots")
@Getter // DTO나 서비스에서 데이터를 읽기 위해 필수입니다.
@NoArgsConstructor(access = AccessLevel.PROTECTED) // JPA의 프록시 생성을 위해 필수입니다.
public class Spot {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;        // 명소/음식점 이름

    @Column(nullable = false)
    private String region;      // 지역 (예: 교토, 오사카)

    @Column(columnDefinition = "TEXT")
    private String description; // 숨겨진 명소에 대한 깊이 있는 설명

    private String category;    // 음식점, 카페, 신사, 공원 등 구분

    // 구글 맵 API 연동을 위한 핵심 데이터
    private Double latitude;    // 위도
    private Double longitude;   // 경도

    private String address;     // 실제 주소 (지도 하단 표시용)

    @Column(name = "like_count")
    private Long likeCount = 0L; // 인기 랭킹 카운트 적용

    @Builder
    public Spot(String name, String region, String description, String category,
                Double latitude, Double longitude, String address) {
        this.name = name;
        this.region = region;
        this.description = description;
        this.category = category;
        this.latitude = latitude;
        this.longitude = longitude;
        this.address = address;
        this.likeCount = 0L; // 초기 생성 시 0으로 고정
    }

    /**
     * 비즈니스 로직: 좋아요 증가
     */
    public void upLike() {
        this.likeCount++;
    }
}