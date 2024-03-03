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
			Model model) {
		log.info("@@챔피언이름 -> " + championName);
		log.info("@@모스트라인 -> " + highest_pick_rate_position);

		List<Map<String, Object>> counter = eSer.counter(championName, highest_pick_rate_position);
		log.info("@@카운터 -> " + counter);
		model.addAttribute("counter", counter);

		List<Map<String, Object>> rune = eSer.rune(championName, highest_pick_rate_position);
		log.info("@@룬 -> " + rune);
		model.addAttribute("rune", rune);

		List<Map<String, Object>> item = eSer.item(championName, highest_pick_rate_position);
		log.info("@@아이템 -> " + item);
		model.addAttribute("item", item);

		List<Map<String, Object>> mostLine = eSer.mostLine(championName);
		log.info("@@라인픽비율 -> " + mostLine);
		model.addAttribute("mostLine", mostLine);

		// 디폴트 티어 xml에 에메랄드로 설정하고 라인버튼에
		// 밸류넣어서 비동기로 teamposition바꿔서 값바꿔 html출력까지

		return "exch";

	}

}
