package com.zzzpro.zzz.wan;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;

import com.zzzpro.zzz.wan.ExController;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Controller
public class ExController {

	@Autowired
	public ExService eSer;

	@GetMapping("/ex") // 챔피언 전체목록 가져오는 컨트롤러
	public String champions(Model model, ExDto eDto) {
		List<ExDto> champions = eSer.champions();
//		List<ExDto> allPickRate = eSer.allWinRate(eDto);
//		List<ExDto> allWinRate = eSer.allPickRate(eDto);
//		List<ExDto> allBanRate = eSer.allBanRate();
		model.addAttribute("champions", champions);
//		model.addAttribute("allWinRate", allWinRate);
//		model.addAttribute("allPickRate", allPickRate);
		log.info("champions" + champions);
//		log.info("allWinRate" + allWinRate);
//		log.info("allPickRate" + allPickRate);

		return "ex";
	}

	@GetMapping("/ex/{champions}")
	public String detail(@PathVariable(name = "champions") String champions, Model model, ExDto eDto) {
		log.info("@@챔피언이름 -> " + champions);
		List<ExDto> linePick = eSer.linePick(eDto);
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
