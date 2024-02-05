package com.zzzpro.zzz.ho.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import com.zzzpro.zzz.ho.dto.HoMemberDto;
import com.zzzpro.zzz.ho.service.HoMemberService;

import jakarta.servlet.http.HttpSession;
import lombok.extern.slf4j.Slf4j;

@Controller
@Slf4j
public class HoMemberController {
	@Autowired
	HoMemberService hmSer;
	
	@GetMapping("/testho")
	public String testHo() {
		return "testho";
	}
	
	@GetMapping("/testLogin")
	public String testLogin() {
		return "testLogin";
	}
	@GetMapping("/testmain")
	public String testMain() {
		return "testmain";
	}
	
	@PostMapping("/member/testlogin")
	public String testLogin(HoMemberDto mDto, Model model, HttpSession session) {
		HoMemberDto hmemDto = hmSer.login(mDto);
		
		if(hmemDto != null) {
			session.setAttribute("userId", hmemDto);
			return "redirect:/testmain";
		} else {
			return "redirect:/testLogin";
		}
		
	}
	@GetMapping("/testJoin")
	public String testJoin() {
		return "testJoin";
	}
	
	@PostMapping("/member/testjoin")
	public String testJoin(HoMemberDto mDto, Model model, HttpSession session) {
		boolean hmemDto = hmSer.join(mDto);
		if(hmemDto) {
			return "redirect:/";
		}else {
			return "/member/join";
		}
		
		
	}
}
