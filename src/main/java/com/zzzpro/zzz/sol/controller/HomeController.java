package com.zzzpro.zzz.sol.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import jakarta.servlet.http.HttpSession;
import lombok.extern.slf4j.Slf4j;

@Controller
public class HomeController {
	
	@GetMapping("/")
	public String main(HttpSession session) {
		return "index";
	}
	
}
