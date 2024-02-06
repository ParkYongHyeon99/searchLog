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
	
	@PostMapping("/champ/winrate")
	public String winrate(ChampDto cDto,Model model, HttpSession session) {
		log.info("==cDTO={}",cDto);
		String winrate = champser.winrate(cDto);
		log.info("==winrate={}",winrate);
		if (winrate != null) {
			ChampDto champDto = new ChampDto();
			champDto.setChampionName(cDto.getChampionName());
			champDto.setTeamPosition(cDto.getTeamPosition());
			champDto.setWin_percentage(winrate);
			model.addAttribute("champDto",champDto);
			return "winrate";
		}else {
			return "redirect:/testmain";
		}
		
	}
	
//	@PostMapping("/champ/winrate")
//	public String winrate(ChampDto cDto, Model model, HttpSession session) {
//		ChampDto champDto = champser.winrate(cDto);
//		if(champDto != null) {
//			session.setAttribute("winrate", champDto);
//			return "";
//		}
//		return "redirect:/winrate";
//	}

	
	
}
