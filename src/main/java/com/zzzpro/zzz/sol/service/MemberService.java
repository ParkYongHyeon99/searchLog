package com.zzzpro.zzz.sol.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.zzzpro.zzz.sol.dao.MemberDao;
import com.zzzpro.zzz.sol.dto.MemberDto;

import jakarta.servlet.http.HttpSession;
import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
public class MemberService {
	
	@Autowired
	private MemberDao mDao;
	//private BCryptPasswordEncoder enPw;

	public String idCheck(String m_id) {
		log.info(" ========== > service - idCheck: {}",m_id," < ==========");
		boolean result = mDao.idCheck(m_id);
		System.out.println("==== mSer -> result: "+result);
		if(!result) {
			return "ok";
		}
		return "no";
	}

	public String nickCheck(String m_nick) {
		log.info(" ========== > service - nickCheck: {}",m_nick," < ==========");
		boolean result = mDao.nickCheck(m_nick);
		System.out.println("==== mSer -> result: "+result);
		if(!result) {
			return "ok";
		}
		return "no";
	}
	
	public String emailCheck(String m_email) {
		log.info(" ========== > service - emailCheck: {}",m_email," < ==========");
		boolean result = mDao.emailCheck(m_email);
		System.out.println("==== mSer -> result: "+result);
		if(!result) {
			return "ok";
		}
		return "no";
	}

	public boolean join(MemberDto mDto, RedirectAttributes ra) {
		log.info(" ========== > service - join: {}",mDto.getM_id()," < ==========");
		//mDto.setM_pw(enPw.encode(mDto.getM_pw()));
		if(mDao.join(mDto)) {
			ra.addFlashAttribute("msg","회원가입 성공!");
			return true;
		}
		ra.addFlashAttribute("msg","회원가입 실패");
		return false;
	}

	public boolean login(MemberDto mDto, RedirectAttributes ra, HttpSession session) {
		log.info(" ========== > service - login: {}",mDto.getM_id()," < ==========");
		//enPw.matches(mDto.getM_pw(),mDao.login(mDto))
		MemberDto loginMDto = mDao.login(mDto);
		
		if(mDto.getM_pw().equals(loginMDto.getM_pw())) {
			ra.addFlashAttribute("msg","로그인 성공!");
			loginMDto.setM_pw(null);
			session.setAttribute("member",loginMDto);
			return true;
		}
		ra.addFlashAttribute("msg","로그인 실패");
		return false;
	}
	
	
}
