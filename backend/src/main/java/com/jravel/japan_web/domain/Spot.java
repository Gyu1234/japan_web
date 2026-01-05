package com.jravel.japan_web.domain;

import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "spots")
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Spot {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 100)
    private String name;

    @Column(nullable = false, length = 50)
    private String region;

    @Column(columnDefinition = "TEXT")
    private String description;

    // 추천 로직을 위한 필드 (기본값 0 설정)
    private Long likeCount = 0L;

    @Builder
    public Spot(String name, String region, String description, Long likeCount) {
        this.name = name;
        this.region = region;
        this.description = description;
        // 생성 시점에 likeCount가 들어오지 않으면 0으로 초기화
        this.likeCount = (likeCount != null) ? likeCount : 0L;
    }

    /**
     * [비즈니스 로직] 좋아요 증가
     * 엔티티 스스로 자신의 상태를 변경하는 객체지향적 설계
     */
    public void upLike() {
        if (this.likeCount == null) {
            this.likeCount = 0L;
        }
        this.likeCount++;
    }
}