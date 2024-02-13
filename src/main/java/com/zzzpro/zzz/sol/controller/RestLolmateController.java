package com.zzzpro.zzz.sol.controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import com.zzzpro.zzz.sol.dto.LolmateDto;
import com.zzzpro.zzz.sol.service.LolmateService;

@RestController
public class RestLolmateController {

	@Autowired
	private LolmateService lmSer;
	 
	@GetMapping("/lolmate/lmList")
	public ArrayList<LolmateDto> lmList(LolmateDto lmDto) {
		System.out.println(lmDto.getLm_gameMate()+","+lmDto.getLm_gameMode()+","+lmDto.getLm_tier()+","+lmDto.getLm_findPosition());
		return lmSer.lmList(lmDto);
	}

}
