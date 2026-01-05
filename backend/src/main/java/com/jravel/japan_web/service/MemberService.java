package com.jravel.japan_web.service;

import com.jravel.japan_web.domain.Member;
import com.jravel.japan_web.domain.Role;
import com.jravel.japan_web.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Transactional
public class MemberService {

    private final MemberRepository memberRepository;
    // BCryptPasswordEncoder는 나중에 SecurityConfig 설정 후 주입받습니다.

    /**
     * [비즈니스 로직] 회원가입
     * 1. 중복 이메일 확인
     * 2. 권한 설정 (기본 USER)
     * 3. DB 저장
     */
    public Long join(Member member) {
        validateDuplicateMember(member); // 중복 검증

        // 초기 가입 시 권한을 USER로 명시적 설정
        // 비밀번호 암호화 로직은 Security 설정 후 여기에 추가됩니다.

        memberRepository.save(member);
        return member.getId();
    }

    private void validateDuplicateMember(Member member) {
        memberRepository.findByEmail(member.getEmail())
                .ifPresent(m -> {
                    throw new IllegalStateException("이미 존재하는 회원입니다.");
                });
    }
}