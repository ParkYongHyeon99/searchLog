package com.zzzpro.zzz.ho.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;



import com.zzzpro.zzz.ho.dto.ChampDto;
import com.zzzpro.zzz.ho.service.ChampService;

import jakarta.servlet.http.HttpSession;
import lombok.extern.slf4j.Slf4j;

@Controller
@Slf4j
public class ChampController {
	@Autowired
	ChampService champser;
	

	
	@GetMapping("/champ/champinfo")
	public String champinfo(ChampDto cDto, Model model, HttpSession session) {
		log.info("==cDTO={}",cDto);
//		List<ChampDto> champpi = champser.champpick_pi(cDto);
//		ChampDto result = champser.champsec(champpi);
		
		String winrate = champser.winrate(cDto);
		String pickrate = champser.pickrate(cDto);
		ChampDto banrate = champser.banrate(cDto);
		List<ChampDto> skilltree_3lv = champser.skill_tree_3lv(cDto);
		List<ChampDto> itemrate = champser.item_winrate(cDto);
		List<ChampDto> shoesrate = champser.shoes_winrate(cDto);
		List<ChampDto> runerate =champser.Rune_winrate(cDto);
		List<ChampDto> statrate =champser.stat_rate(cDto);
//		List<ChampDto> spellrate = champser.spell_rate(cDto);
//		List<ChampDto> accrate = champser.acc_rate(cDto);
		List<ChampDto> sitemrate = champser.start_item(cDto);
		List<ChampDto> core1 = champser.core1(cDto);
		List<ChampDto> core2 = champser.core2(cDto);

		log.info("==winrate={}",winrate);
		log.info("==pickrate={}",pickrate);
		log.info("==banrate={}",banrate);
		log.info("==skilltree={}",skilltree_3lv);
		log.info("==itemrate={}",itemrate);
		log.info("==runerate={}",runerate);
		log.info("==statrate={}",statrate);
//		log.info("==spellrate={}",spellrate);
		log.info("==core2={}",core2);
		if(pickrate != null) {
			ChampDto champDto = new ChampDto();
			champDto.setTier1(cDto.getTier1());
			champDto.setChampionName(cDto.getChampionName());
			champDto.setChampionName_KR(cDto.getChampionName_KR());
			champDto.setTeamPosition(cDto.getTeamPosition());
			champDto.setWin_percentage(winrate);
			champDto.setPick_percentage(pickrate);
			champDto.setBan_percentage(banrate.ban_percentage);
			champDto.setBanChampionName_KR(banrate.getBanChampionName_KR());

//			model.addAttribute("champpi",champpi);
			model.addAttribute("itemrate", itemrate);
			model.addAttribute("skilltree_3lv",skilltree_3lv);
			model.addAttribute("shoesrate",shoesrate);
			model.addAttribute("runerate",runerate);
			model.addAttribute("statrate",statrate);
//			model.addAttribute("spellrate",spellrate);
//			model.addAttribute("accrate", accrate);
			model.addAttribute("sitemrate", sitemrate);
			model.addAttribute("core1", core1);
			model.addAttribute("core2", core2);
		

			
			model.addAttribute("champDto",champDto);

			return "champinfo";
		
//			return "redirect:/url?chamid="+champpi.getChampionName()+"lane="+champpi.getHighest_pick_rate_position()+"";
		}else {
			return "redirect:/testmain";
		}
		
	}
	@GetMapping("/champ/champinfo/{champions}/{lane}")
	public String champinfolane(@PathVariable(name="champions")String champions,@PathVariable(name = "lane") String lane, ChampDto cDto, Model model, HttpSession session) {
		log.info("==cDTO={}",cDto);
		
//		List<ChampDto> champpi = champser.champpick_pi(cDto);
		
		
		String winrate = champser.winrate(cDto);
		String pickrate = champser.pickrate(cDto);
		ChampDto banrate = champser.banrate(cDto);
		List<ChampDto> skilltreerate = champser.skill_tree_3lv(cDto);
//		List<ChampDto> itemrate = champser.item_winrate(cDto);
		List<ChampDto> shoesrate = champser.shoes_winrate(cDto);
		List<ChampDto> runerate =champser.Rune_winrate(cDto);
		List<ChampDto> spellrate = champser.spell_rate(cDto);
		List<ChampDto> accrate = champser.acc_rate(cDto);
		List<ChampDto> sitemrate = champser.start_item(cDto);
		
//		log.info("==champpi={}",champpi.highest_pick_rate_position);
		log.info("==winrate={}",winrate);
		log.info("==pickrate={}",pickrate);
		log.info("==sitemrate={}",sitemrate);
		log.info("==banrate={}",banrate.ban_percentage);
		log.info("==skilltree={}",skilltreerate);
//		log.info("==itemrate={}",itemrate);
		log.info("==runerate={}",runerate);
		log.info("==spellrate={}",spellrate);

		if(pickrate != null) {
			ChampDto champDto = new ChampDto();
			champDto.setTier1(cDto.getTier1());
			champDto.setChampionName(champions);
//			champDto.setHighest_pick_rate_position(champpi.getHighest_pick_rate_position());
			champDto.setChampionName_KR(cDto.getChampionName_KR());
			champDto.setTeamPosition(cDto.getTeamPosition());
			champDto.setWin_percentage(winrate);
			champDto.setPick_percentage(pickrate);
			champDto.setBan_percentage(banrate.ban_percentage);
			champDto.setBanChampionName_KR(banrate.getBanChampionName_KR());
			

			
//			model.addAttribute("champpi",champpi);
//			model.addAttribute("itemrate", itemrate);
			model.addAttribute("skilltreerate",skilltreerate);
			model.addAttribute("shoesrate",shoesrate);
			model.addAttribute("runerate",runerate);
			model.addAttribute("spellrate",spellrate);
			model.addAttribute("accrate", accrate);
			model.addAttribute("sitemrate",sitemrate);

			
			model.addAttribute("champDto",champDto);
			
			return "champinfo";
		
//			return "redirect:/url?chamid="+champpi.getChampionName()+"lane="+champpi.getHighest_pick_rate_position()+"";
		}else {
			return "redirect:/testmain";
		}
		
	}
	
	

	
	
}
