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
		log.info("@@전체정보 -> " + champions);
		model.addAttribute("champions", champions);

		List<Map<String, Object>> championList = eSer.championList(eDto);
		log.info("@@초상화 승률 정렬 -> " + championList);
		model.addAttribute("championList", championList);

		return "ex";
	}

	@GetMapping("/ex/{championName}/{highest_pick_rate_position}")
	public String detail(@PathVariable String championName, @PathVariable String highest_pick_rate_position,
			Model model, ExDto eDto) {
		log.info("@@챔피언이름 -> " + championName);
		log.info("@@모스트라인 -> " + highest_pick_rate_position);

		List<Map<String, Object>> counter = eSer.counter(championName);
		log.info("@@카운터 -> " + counter);
		model.addAttribute("counter", counter);

		return "exch";

//		List<ExDto> linePick = eSer.linePick(eDto);
//		if (linePick != null) {
//			model.addAttribute("linePick", linePick);
//			log.info("@@라인, 픽률 -> " + linePick);
//			return "exch";
//		} else {
//			log.info("상세페이지 이동 실패");
//			return "redirect:/ex";
//		}
	}

}
