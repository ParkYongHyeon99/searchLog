package com.zzzpro.zzz.hyeon;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;


import jakarta.servlet.http.HttpSession;
import lombok.extern.slf4j.Slf4j;
@Slf4j
@Controller
public class controller {
	
	@GetMapping("/Runetest")
	public String test() {
		return "Runetest";
	}
	
	@Autowired
	RuneService runeser;
	

	@PostMapping("/champ/Rune_winrate")
	public String Rune_winrate(RuneDto rDto, Model model, HttpSession session) {
		log.info("==rDto={}",rDto);
		RuneDto Rune_winrate = runeser.Rune_winrate(rDto);
		RuneDto item_winrate = runeser.item_winrate(rDto);
		RuneDto skill_tree_winrate = runeser.skill_tree_winrate(rDto);
		if (Rune_winrate != null) {
			RuneDto RuneDto = new RuneDto();
			RuneDto.setChampionName_KR(rDto.getChampionName_KR());
			RuneDto.setTeamPosition(rDto.getTeamPosition());
			RuneDto.setTier1(rDto.getTier1());
			RuneDto.setMain_name(Rune_winrate.main_name);
			RuneDto.setMain_perks1(Rune_winrate.main_perks1);
			RuneDto.setMain_perks2(Rune_winrate.main_perks2);
			RuneDto.setMain_perks3(Rune_winrate.main_perks3);
			RuneDto.setMain_perks4(Rune_winrate.main_perks4);
			RuneDto.setSub_name(Rune_winrate.sub_name);
			RuneDto.setSub_perks1(Rune_winrate.sub_perks1);
			RuneDto.setSub_perks2(Rune_winrate.sub_perks2);
			RuneDto.setStat_perks1(Rune_winrate.stat_perks1);
			RuneDto.setStat_perks2(Rune_winrate.stat_perks2);
			RuneDto.setStat_perks3(Rune_winrate.stat_perks3);
			//------------------------------------------------------
			RuneDto.setItem6(item_winrate.item6);
			RuneDto.setShoes(item_winrate.shoes);
			RuneDto.setCore1(item_winrate.core1);
			RuneDto.setCore2(item_winrate.core2);
			RuneDto.setCore3(item_winrate.core3);
			//------------------------------------------------------
			RuneDto.setValue1(skill_tree_winrate.value1);
			RuneDto.setValue2(skill_tree_winrate.value2);
			RuneDto.setValue3(skill_tree_winrate.value3);






//			RuneDto.setWin_percentage(Rune_winrate);
			System.out.println(RuneDto);
			model.addAttribute("RuneDto",RuneDto);
			return "testhyeon";
		}else {
			return "redirect:/test";
		}
		
	}
}

