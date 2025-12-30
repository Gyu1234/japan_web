package com.jravel.japan_web.domain;

import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

/*
 1. 이 클래스는 DB 테이블과 직접 연결되는 '엔티티'입니다.
 2. Setter를 만들지 않습니다. 객체의 상태는 생성자나 비즈니스 메서드로만 변경합니다.
 */

@Entity                         // 이 클래스가 JPA 엔티티임을 선언 (DB 테이블과 매핑됨)
@Table(name = "spots")          // DB에 생성될 테이블 이름을 명시적으로 지정
@Getter                         // 모든 필드의 Getter를 자동 생성 (Lombok)
@NoArgsConstructor(access = AccessLevel.PROTECTED) // JPA는 기본 생성자가 필수

public class Spot {

    @Id                         // 테이블의 기본키(PK)임을 지정
    @GeneratedValue(strategy = GenerationType.IDENTITY) // PK 생성 전략을 DB에 위임 (MySQL의 Auto_Increment와 동일)
    private Long id;

    @Column(nullable = false, length = 100) // DB 컬럼 설정: NULL 불가, 길이는 100자 제한
    private String name;        // 여행지 이름 (예: 도쿄 타워)

    @Column(nullable = false, length = 50)  // DB 컬럼 설정: NULL 불가, 길이는 50자 제한
    private String region;      // 지역 (예: 도쿄, 오사카)

    @Column(columnDefinition = "TEXT")      // 일반 문자열보다 긴 텍스트를 저장하기 위해 DB 타입을 TEXT로 지정
    private String description; // 여행지에 대한 상세 설명

    /*
     @Builder: 빌더 패턴을 적용하여 객체 생성을 안전하고 가독성 있게 만듭니다.
     예: Spot.builder().name("도쿄타워").region("도쿄").build();
     */

    @Builder
    public Spot(String name, String region, String description) {
        this.name = name;
        this.region = region;
        this.description = description;
    }
}