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

	@GetMapping("/test")
	public List<Map<String, Object>> test(ExDto eDto) {
		log.info("eDto" + eDto);
		return eSer.test(eDto);
	}

}
