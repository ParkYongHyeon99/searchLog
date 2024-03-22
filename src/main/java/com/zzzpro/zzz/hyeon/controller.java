package com.zzzpro.zzz.hyeon;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.client.RestTemplate;

import jakarta.servlet.http.HttpSession;
import lombok.extern.slf4j.Slf4j;
@Slf4j
@Controller
public class controller {
	  
	@GetMapping("/summonerSearch")
    public String searchSummoner(@RequestParam String name, @RequestParam String tag) {
        // 받은 데이터로 처리를 수행하고 결과를 반환
        // 여기서는 간단히 받은 데이터를 합쳐서 반환하는 예시를 보여줍니다.
        return "summonerSearch";
    }
	
}

