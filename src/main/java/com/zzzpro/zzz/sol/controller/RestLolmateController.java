package com.zzzpro.zzz.sol.controller;

import java.util.ArrayList;
import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import com.zzzpro.zzz.sol.dto.LolmateDto;
import com.zzzpro.zzz.sol.service.LolmateService;

import jakarta.servlet.http.HttpSession;

@RestController
public class RestLolmateController {

	@Autowired
	private LolmateService lmSer;
	 
	@GetMapping("/lolmate/lmList")
	public HashMap<String, ArrayList<LolmateDto>> lmList(LolmateDto lmDto) {
		return lmSer.lmList(lmDto);
	}
	
	@GetMapping("/lolmate/lmWrite")
	public String lmWrite(LolmateDto lmDto, HttpSession session) {
		return lmSer.lmWrite(lmDto,session);
	}

}
