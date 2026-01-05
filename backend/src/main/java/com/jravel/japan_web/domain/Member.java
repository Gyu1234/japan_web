package com.jravel.japan_web.domain;

import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "members")
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED) // JPA를 위한 기본 생성자
public class Member {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true, length = 50)
    private String email;    // 로그인 아이디로 사용될 이메일

    @Column(nullable = false)
    private String password; // 암호화되어 저장될 비밀번호

    @Column(nullable = false)
    private String name;     // 사용자 이름

    @Enumerated(EnumType.STRING) // Enum 이름을 문자열로 DB에 저장 (USER, ADMIN)
    @Column(nullable = false)
    private Role role;       // 권한 (ROLE_USER, ROLE_ADMIN)

    @Builder
    public Member(String email, String password, String name, Role role) {
        this.email = email;
        this.password = password;
        this.name = name;
        this.role = (role != null) ? role : Role.USER; // 기본값은 USER로 설정
    }

    /**
     * 비즈니스 로직: 권한 변경 (관리자 임명 등)
     */
    public void updateRole(Role role) {
        this.role = role;
    }
}