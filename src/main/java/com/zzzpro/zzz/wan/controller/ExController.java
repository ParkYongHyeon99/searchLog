package com.zzzpro.zzz.wan.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import com.zzzpro.zzz.wan.controller.ExController;
import com.zzzpro.zzz.wan.dto.ExDto;
import com.zzzpro.zzz.wan.service.ExService;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Controller
public class ExController {

	@Autowired
	public ExService eSer;

	@GetMapping("/ex") // 챔피언 전체목록 가져오는 컨트롤러
	public String champions(Model model) {
		List<ExDto> champions = eSer.champions();
		model.addAttribute("champions", champions);
		return "ex";
	}

	@GetMapping("/ex/{champions}")
	public String detail(@PathVariable(name = "champions") String champions, Model model, ExDto cDto) {
		log.info("@@챔피언이름 -> " + champions);
		List<ExDto> linePick = eSer.linePick(cDto);
		if (linePick != null) {
			model.addAttribute("linePick", linePick);
			log.info("@@라인, 픽률 -> " + linePick);
			return "exch";
		} else {
			log.info("상세페이지 이동 실패");
			return "redirect:/ex";
		}
	}

	@GetMapping("/ex/rune")
	public String rune() {
		return "exrune";
	}

	@GetMapping("/ex/spell")
	public String spell() {
		return "exspell";
	}

	@GetMapping("/ex/skill")
	public String skill() {
		return "exrune";
	}

	@GetMapping("/ex/item")
	public String item() {
		return "exrune";
	}

}
