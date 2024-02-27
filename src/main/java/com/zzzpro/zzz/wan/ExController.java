package com.zzzpro.zzz.wan;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import jakarta.servlet.http.HttpSession;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Controller
public class ExController {

	@Autowired
	public ExService eSer;

	@GetMapping("/ex")
	public String champions(Model model, ExDto eDto, HttpSession session) {
		List<Map<String, Object>> cList = eSer.champions(eDto);
		log.info("@@cList" + cList);
		session.setAttribute("cList", cList);
		model.addAttribute("cList", cList);
		
		List<Map<String, Object>> linePicks = eSer.linePicks(session);
		log.info("@@이름라인픽률 -> "+linePicks);
//		log.info("@@linePicks" + linePicks);
		model.addAttribute("linePicks", linePicks);


		return "aa";
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

	@GetMapping("/test")
	public List<Map<String, Object>> test(ExDto cDto) {
		return eSer.test(cDto);
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
