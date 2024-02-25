package com.zzzpro.zzz.sol.service;

import java.util.ArrayList;
import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.zzzpro.zzz.sol.dao.LolmateDao;
import com.zzzpro.zzz.sol.dto.LolmateDto;
import com.zzzpro.zzz.sol.dto.MemberDto;

import jakarta.servlet.http.HttpSession;
import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
public class LolmateService {
	
	@Autowired
	private LolmateDao lmDao;

	public HashMap<String, ArrayList<LolmateDto>> lmList(LolmateDto lmDto) {
		System.out.println(lmDto.getLm_gameMate()+","+lmDto.getLm_gameMode()+","+lmDto.getLm_tier()+","+lmDto.getLm_findPosition());
		
		lmDto.setLm_tier("%"+lmDto.getLm_tier()+"%");
		lmDto.setLm_findPosition("%"+lmDto.getLm_findPosition()+"%");
		
		HashMap<String, ArrayList<LolmateDto>> hm = new HashMap<>();
		
		if(lmDto.getLm_tier().equals("%All%") && lmDto.getLm_findPosition().equals("%All%")) {
			hm.put("serch", lmDao.lmMMAllList(lmDto));
		}else if(lmDto.getLm_tier().equals("%All%")) {
			hm.put("serch", lmDao.lmAllTierList(lmDto));
		}else if(lmDto.getLm_findPosition().equals("%All%")) {
			hm.put("serch", lmDao.lmAllPositionList(lmDto));
		}else {
			hm.put("serch", lmDao.lmSerchList(lmDto));
		}
		
		hm.put("all", lmDao.lmAllList());
		return hm;
	}

	public String lmWrite(LolmateDto lmDto, HttpSession session) {
		if(lmDao.lmWrite(lmDto)) {
			return "ok";
		}
		return "no";
	}
	
	
}
