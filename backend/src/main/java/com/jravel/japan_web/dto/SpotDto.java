package com.jravel.japan_web.dto;

import com.jravel.japan_web.domain.Spot;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

public class SpotDto {

    // 1. 요청용 DTO (데이터를 받을 때)
    @Getter
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Request {
        private String name;
        private String region;
        private String description;

        public Spot toEntity() {
            return Spot.builder()
                    .name(name)
                    .region(region)
                    .description(description)
                    .build();
        }
    }

    // 2. 응답용 DTO (데이터를 보낼 때)
    @Getter
    public static class Response {
        private Long id;
        private String name;
        private String region;
        private Long likeCount;

        // 엔티티를 받아 DTO로 변환하는 생성자
        public Response(Spot spot) {
            this.id = spot.getId();
            this.name = spot.getName();
            this.region = spot.getRegion();
            this.likeCount = spot.getLikeCount();
        }
    }
}