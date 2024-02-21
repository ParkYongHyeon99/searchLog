package com.zzzpro.zzz.wan;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class restController {

	@Autowired
	ExService eSer;

	@GetMapping("/test")
	public List<ExDto> test(ExDto cDto) {
		return eSer.test(cDto);
	}
}
