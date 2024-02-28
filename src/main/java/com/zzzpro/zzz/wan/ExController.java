package com.zzzpro.zzz.wan;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Controller
public class ExController {

	@Autowired
	public ExService eSer;

	@GetMapping("/ex")
	public String champions(Model model, ExDto eDto) {
		List<Map<String, Object>> champions = eSer.champions(eDto);
		model.addAttribute("champions", champions);
		log.info("@@이름모음 -> " + champions);
		return "ex";
	}

	@GetMapping("/ex/{championName}")
	public String detail(@PathVariable(name = "championName") String championName, Model model, ExDto eDto) {
		log.info("@@챔피언이름 -> " + championName);
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

}
