package com.zzzpro.zzz.wan;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class restController {
	@Autowired
	ExService eSer;

	@GetMapping("/test")
	public List<Map<String, Object>> test(ExDto cDto) {
		return eSer.test(cDto);
	}

	@GetMapping("/data")
	public List<Map<String, Object>> getChampionData(ExDto eDto) {
		return eSer.champions(eDto);
	}
}
