package com.zzzpro.zzz.wan.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.zzzpro.zzz.wan.dto.ExDto;
import com.zzzpro.zzz.wan.service.ExService;

@RestController
public class restController {

	@Autowired
	ExService eSer;

	@GetMapping("/test")
	public List<ExDto> test(ExDto cDto) {
		return eSer.test(cDto);
	}
}
