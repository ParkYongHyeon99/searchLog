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
	

//	@PostMapping("/champ/champinfo")
//	public String champinfo(ChampDto cDto,Model model, HttpSession session) {
//		log.info("==cDTO={}",cDto);
//		String runeRate = champser.runeRate(cDto);
//
//		log.info("==runerate={}",runeRate);
//		
//		if(runeRate != null) {
//			ChampDto champDto = new ChampDto();
//			
//			champDto.setChampionName_KR(cDto.getChampionName_KR());
//			champDto.setTier1(cDto.getTier1());
//			champDto.setMain_name(cDto.getMain_name());
//			champDto.setMain_perks1(cDto.getMain_perks1());
//			champDto.setMain_perks2(cDto.getMain_perks2());
//			champDto.setMain_perks3(cDto.getMain_perks3());
//			champDto.setMain_perks4(cDto.getMain_perks4());
//			
//			model.addAttribute("champDto",champDto);
//			return "champinfo";
//		}else {
//			return "redirect:/testmain";
//		}
//	}
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
