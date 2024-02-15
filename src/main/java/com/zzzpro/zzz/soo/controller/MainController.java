package com.zzzpro.zzz.soo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.zzzpro.zzz.sol.service.BoardService;
import com.zzzpro.zzz.soo.dto.MainDto;
import com.zzzpro.zzz.soo.service.MainService;

import jakarta.servlet.http.HttpSession;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Controller
public class MainController {

	@Autowired
	public MainService mSer;
	
	@Autowired
	private BoardService bSer;

	@GetMapping("/main")
	public String search(Model model) {
		
		bSer.boardList(1, model);
		return "main";
	}

	@PostMapping("/main/search")
	public String search(MainDto sm, Model model, HttpSession session, RedirectAttributes rttr) {
		MainDto md = mSer.search(sm);
		log.info("=====검색 성송md " + md);
		if (md != null) {
			session.setAttribute("md", md);
			return "redirect:/main/search";
		} else {
			rttr.addFlashAttribute("msg", "검색 실패");
			return "redirect:/main";
		}
	}

}
