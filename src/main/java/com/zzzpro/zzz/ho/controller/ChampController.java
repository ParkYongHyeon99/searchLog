package com.zzzpro.zzz.ho.controller;

import java.util.ArrayList;

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
		ChampDto banrate = champser.banrate(cDto);
		ChampDto skilltreerate = champser.skill_tree_winrate(cDto);
		ChampDto itemrate = champser.item_winrate(cDto);
		ChampDto shoesrate = champser.shoes_winrate(cDto);
		ChampDto runerate =champser.Rune_winrate(cDto);
		log.info("==winrate={}",winrate);
		log.info("==pickrate={}",pickrate);
		log.info("==banrate={}",banrate);
		log.info("==skilltree={}",skilltreerate);
		log.info("==itemrate={}",itemrate);
		log.info("==runerate={}",runerate);
		if(pickrate != null) {
			ChampDto champDto = new ChampDto();
			champDto.setTier1(cDto.getTier1());
			champDto.setChampionName_KR(cDto.getChampionName_KR());
			champDto.setTeamPosition(cDto.getTeamPosition());
			champDto.setWin_percentage(winrate);
			champDto.setPick_percentage(pickrate);
			

			champDto.setBan_percentage(banrate.ban_percentage);
			champDto.setBanChampionName_KR(banrate.getBanChampionName_KR());


			champDto.setValue1(skilltreerate.getValue1());
			champDto.setValue2(skilltreerate.value2);
			champDto.setValue3(skilltreerate.value3);
			champDto.setValue4(skilltreerate.value4);
			champDto.setValue5(skilltreerate.value5);
			champDto.setValue6(skilltreerate.value6);
			champDto.setValue7(skilltreerate.value7);
			champDto.setValue8(skilltreerate.value8);
			champDto.setValue9(skilltreerate.value9);
			champDto.setValue10(skilltreerate.value10);
			champDto.setValue11(skilltreerate.value11);
			champDto.setValue12(skilltreerate.value12);
			champDto.setValue13(skilltreerate.value13);
			champDto.setValue14(skilltreerate.value14);
			champDto.setSkill_count(skilltreerate.skill_count);
			champDto.setSkill_percentage(skilltreerate.skill_percentage);
			
			champDto.setCore1(itemrate.core1);
			champDto.setCore2(itemrate.core2);
			champDto.setCore3(itemrate.core3);
			champDto.setItem_count(itemrate.item_count);
			champDto.setItem_percentage(itemrate.item_percentage);
			champDto.setItem_win_percentage(itemrate.item_win_percentage);
			
			champDto.setShoes(shoesrate.shoes);
			champDto.setShoes_count(shoesrate.shoes_count);
			champDto.setShoes_pickRate(shoesrate.shoes_pickRate);
			champDto.setShoes_win_percentage(shoesrate.shoes_win_percentage);
			
			champDto.setItem6(itemrate.item6);
			
			
			
			champDto.setMain_name(runerate.main_name);
			champDto.setMain_perks1(runerate.main_perks1);
			champDto.setMain_perks2(runerate.main_perks2);
			champDto.setMain_perks3(runerate.main_perks3);
			champDto.setMain_perks4(runerate.main_perks4);
			champDto.setSub_name(runerate.sub_name);
			champDto.setSub_perks1(runerate.sub_perks1);
			champDto.setSub_perks2(runerate.sub_perks2);
			champDto.setStat_perks1(runerate.stat_perks1);
			champDto.setStat_perks2(runerate.stat_perks2);
			champDto.setStat_perks3(runerate.stat_perks3);
			champDto.setRune_count(runerate.rune_count);
			champDto.setRune_percentage(runerate.rune_percentage);
			champDto.setRune_win_percentage(runerate.rune_win_percentage);
			
			
			model.addAttribute("champDto",champDto);

			return "champinfo";
		}else {
			return "redirect:/testmain";
		}
	}
	
	

	
	
}
