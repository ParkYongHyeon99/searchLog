package com.zzzpro.zzz.ho.service;


import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.zzzpro.zzz.ho.dao.ChampDao;
import com.zzzpro.zzz.ho.dto.ChampDto;

import jakarta.servlet.http.HttpSession;
import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
public class ChampService {
	@Autowired
	ChampDao champdao;
	
	public List<ChampDto> champions(ChampDto cDto){
		return champdao.champions(cDto);
	}
	public List<ChampDto> champpick_pi(ChampDto cDto) {
//		log.info("champdto : {}", session);
		log.info("==cDto={}",cDto);
		return champdao.champpick_pi(cDto);
	}
	
	public String winrate(ChampDto champdto) {
		 String bbb = champdao.winrate(champdto);
		 return bbb;
	}
	public String pickrate(ChampDto cDto) {
		 String bbb = champdao.pickrate(cDto);
		 return bbb;
	}
	public ChampDto banrate(ChampDto champdto) {
		ChampDto bbb = champdao.banrate(champdto);
		return bbb;
	}
	
	public List<ChampDto> item_winrate(ChampDto champdto) {
		List<ChampDto> bbb = champdao.item_winrate(champdto);
		return bbb;
	}
	public List<ChampDto> shoes_winrate(ChampDto champdto) {
		List<ChampDto> bbb = champdao.shoes_winrate(champdto);
		return bbb;
	}
	public List<ChampDto> Rune_winrate(ChampDto champdto) {
		List<ChampDto> bbb = champdao.Rune_winrate(champdto);
		return bbb;
	}
	public List<ChampDto> stat_rate(ChampDto champdto) {
		List<ChampDto> bbb = champdao.stat_rate(champdto);
		return bbb;
	}
	public List<ChampDto> spell_rate(ChampDto champdto){
		return champdao.spell_rate(champdto);
	}
	public List<ChampDto> acc_rate(ChampDto champdto){
		return champdao.acc_winrate(champdto);
	}
	public List<ChampDto> start_item(ChampDto champdto){
		return champdao.start_item(champdto);
	}
	public List<ChampDto> core1(ChampDto champdto){
		return champdao.core1(champdto);
	}
	public List<ChampDto> core2(ChampDto champdto){
		return champdao.core2(champdto);
	}
	public List<ChampDto> skill_tree_3lv(ChampDto champdto){
		List<ChampDto> bbb = champdao.skill_tree_3lv(champdto);
		return bbb;
	}

}
