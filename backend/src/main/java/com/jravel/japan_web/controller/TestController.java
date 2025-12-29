package com.jravel.japan_web.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.HashMap;
import java.util.Map;

@RestController
public class TestController {

    @GetMapping("/api/hello")
    public Map<String, String> hello() {
        Map<String, String> response = new HashMap<>();
        response.put("message", "백엔드에서 보낸 헬로월드 성공!");
        response.put("status", "연결 완료");
        return response;
    }
}