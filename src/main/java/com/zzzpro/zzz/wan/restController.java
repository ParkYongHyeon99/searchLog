package com.zzzpro.zzz.wan;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.extern.slf4j.Slf4j;

@RestController
public class restController {
	@Autowired
	ExService eSer;

	@GetMapping("/data")
	public List<Map<String, Object>> getChampionData(ExDto eDto) {
		return eSer.champions(eDto);
	}
}
