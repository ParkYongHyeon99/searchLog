package com.zzzpro.zzz.sol.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.zzzpro.zzz.sol.dto.MemberDto;
import com.zzzpro.zzz.sol.service.MemberService;

import jakarta.servlet.http.HttpSession;
import lombok.extern.slf4j.Slf4j;

@Controller
@Slf4j
public class MemberController {
	
	/* 컨트롤러는 진짜 컨트롤만! */
	
	@Autowired
	private MemberService mSer;
	
	
	@GetMapping("/member/loginfrm")
	public String loginfrm() {
		return "login_join";
	}
	@PostMapping("/member/join")
	public String join(MemberDto mDto, RedirectAttributes ra) {
		boolean result = mSer.join(mDto, ra);
		if(result) {
			return "redirect:/member/loginfrm";
		}
		return "redirect:/member/joinfrm";
	}
	@PostMapping("/member/login")
	public String login(MemberDto mDto, RedirectAttributes ra, HttpSession session) {
		boolean result = mSer.login(mDto, ra, session);
		if(result) {
			return "redirect:/";
		}
		return "redirect:/member/loginfrm";
	}
	
	@GetMapping("/member/logout")
	public String logout(HttpSession session) {
		session.removeAttribute("member");
		return "redirect:/";
	}
	
}
