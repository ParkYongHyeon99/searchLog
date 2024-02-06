package com.zzzpro.zzz.ho.service;

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
		 String bbb =champdao.winrate(champdto);
		 return bbb;
	}
	public String pickrate(ChampDto champdto) {
		 String bbb =champdao.pickrate(champdto);
		 return bbb;
	}
}
