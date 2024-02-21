package com.zzzpro.zzz.sol.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import com.zzzpro.zzz.sol.service.BoardService;

import jakarta.servlet.http.HttpSession;
import lombok.extern.slf4j.Slf4j;

@Controller
public class HomeController {
	@Autowired
	private BoardService bSer;
	
	@GetMapping("/")
	public String search(Model model) {
		
		bSer.boardList(1, model);
		return "main";
	}
	
} 	
