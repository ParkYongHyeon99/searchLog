package com.zzzpro.zzz.ho.service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.zzzpro.zzz.ho.dao.ChampDao;
import com.zzzpro.zzz.ho.dto.ChampDto;

import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
public class ChampService {
	@Autowired
	ChampDao champdao;
	
	public String winrate(ChampDto champdto) {
		 String bbb = champdao.winrate(champdto);
		 return bbb;
	}
	public String pickrate(ChampDto champdto) {
		 String bbb = champdao.pickrate(champdto);
		 return bbb;
	}
	public ChampDto banrate(ChampDto champdto) {
		ChampDto bbb = champdao.banrate(champdto);
		return bbb;
	}
	public ChampDto skill_tree_winrate(ChampDto champdto){
		ChampDto bbb = champdao.skill_tree_winrate(champdto);
		return bbb;
	}
	public ChampDto item_winrate(ChampDto champdto) {
		ChampDto bbb = champdao.item_winrate(champdto);
		return bbb;
	}
	public ChampDto shoes_winrate(ChampDto champdto) {
		ChampDto bbb = champdao.shoes_winrate(champdto);
		return bbb;
	}
	public ChampDto Rune_winrate(ChampDto champdto) {
		ChampDto bbb = champdao.Rune_winrate(champdto);
		return bbb;
	}
}
