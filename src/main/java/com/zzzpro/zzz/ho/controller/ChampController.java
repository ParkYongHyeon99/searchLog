package com.zzzpro.zzz.ho.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;


import com.zzzpro.zzz.ho.dto.ChampDto;
import com.zzzpro.zzz.ho.service.ChampService;

import jakarta.servlet.http.HttpSession;
import lombok.extern.slf4j.Slf4j;

@Controller
@Slf4j
public class ChampController {
	@Autowired
	ChampService champser;
	

	@PostMapping("/champ/champinfo")
	public String champinfo(ChampDto cDto,Model model, HttpSession session) {
		log.info("==cDTO={}",cDto);
		String winrate = champser.winrate(cDto);
		String pickrate = champser.pickrate(cDto);
		log.info("==winrate={}",winrate);
		log.info("==pickrate={}",pickrate);
		if(pickrate != null) {
			ChampDto champDto = new ChampDto();
			champDto.setTier1(cDto.getTier1());
			champDto.setChampionName(cDto.getChampionName());
			champDto.setTeamPosition(cDto.getTeamPosition());
			champDto.setWin_percentage(winrate);
			champDto.setPick_percentage(pickrate);
			model.addAttribute("champDto",champDto);
			return "champinfo";
		}else {
			return "redirect:/testmain";
		}
	}
	

	
	
}
