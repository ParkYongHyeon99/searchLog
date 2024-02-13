package com.zzzpro.zzz.sol.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import com.zzzpro.zzz.sol.service.MemberService;

@RestController
public class RestMemberController {
	
	@Autowired
	private MemberService mSer;
	
	@GetMapping("/member/idCheck")
	public String idCheck(String m_id) {
		return mSer.idCheck(m_id);
	}
	@GetMapping("/member/nickCheck")
	public String nickCheck(String m_nick) {
		return mSer.nickCheck(m_nick);
	}
	@GetMapping("/member/emailCheck")
	public String emailCheck(String m_email) {
		return mSer.emailCheck(m_email);
	}
	
}
