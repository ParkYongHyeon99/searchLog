package com.zzzpro.zzz.wan;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
public class restController {
	@Autowired
	ExService eSer;

	@GetMapping("/tabKr")
	public List<Map<String, Object>> tabKr(ExDto eDto) {
		log.info("이름 -> 라인 변경" + eDto);
		return eSer.tabKr(eDto);
	}

	@GetMapping("/testt")
	public List<Map<String, Object>> tabWin(ExDto eDto) {
		log.info("승률 -> 라인 변경" + eDto);
		return eSer.tabWin(eDto);
	}

}
