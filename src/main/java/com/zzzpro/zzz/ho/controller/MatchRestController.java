package com.zzzpro.zzz.ho.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.zzzpro.zzz.ho.dto.MatchDto;
import com.zzzpro.zzz.ho.service.MatchService;

import lombok.extern.slf4j.Slf4j;

@RestController
@Slf4j
public class MatchRestController {
	@Autowired
	MatchService mSer;
	
	@GetMapping("/getData")
	public List<MatchDto> getData(MatchDto data){
		log.info(data.toString());
		List<MatchDto> result=mSer.getData(data.getChampionName(),data.getTeamPosition(),data.getMyteamPosition());
		return result;
	}
}
