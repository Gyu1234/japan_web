package com.jravel.japan_web.dto;

import com.jravel.japan_web.domain.Spot;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

public class SpotDto {

    // 1. 요청용 DTO (데이터를 입력받을 때)
    @Getter
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Request {
        private String name;
        private String region;
        private String description;
        private String category;    // 추가: 음식점/명소 구분
        private Double latitude;    // 추가: 지도 위도
        private Double longitude;   // 추가: 지도 경도
        private String address;     // 추가: 주소

        public Spot toEntity() {
            return Spot.builder()
                    .name(name)
                    .region(region)
                    .description(description)
                    .category(category)
                    .latitude(latitude)
                    .longitude(longitude)
                    .address(address)
                    .build();
        }
    }

    // 2. 응답용 DTO (프론트엔드로 보낼 때)
    @Getter
    public static class Response {
        private Long id;
        private String name;
        private String region;
        private String description;
        private String category;
        private Double latitude;
        private Double longitude;
        private String address;
        private Long likeCount;

        // 엔티티를 DTO로 변환할 때 추가된 필드들을 매핑
        public Response(Spot spot) {
            this.id = spot.getId();
            this.name = spot.getName();
            this.region = spot.getRegion();
            this.description = spot.getDescription();
            this.category = spot.getCategory();
            this.latitude = spot.getLatitude();
            this.longitude = spot.getLongitude();
            this.address = spot.getAddress();
            this.likeCount = spot.getLikeCount();
        }
    }
}