package com.zzzpro.zzz.wan.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import com.zzzpro.zzz.wan.controller.WanController;

import jakarta.servlet.http.HttpSession;
import lombok.extern.slf4j.Slf4j;

@Controller
@Slf4j
public class WanController {

	@GetMapping("/board/test")
	public String main(HttpSession session) {
		return "test";
	}

}
