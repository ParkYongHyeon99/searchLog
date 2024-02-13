package com.zzzpro.zzz.sol.service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.zzzpro.zzz.sol.dao.LolmateDao;
import com.zzzpro.zzz.sol.dto.LolmateDto;

import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
public class LolmateService {
	
	@Autowired
	private LolmateDao lmDao;

	public ArrayList<LolmateDto> lmList(LolmateDto lmDto) {
		System.out.println(lmDto.getLm_gameMate()+","+lmDto.getLm_gameMode()+","+lmDto.getLm_tier()+","+lmDto.getLm_findPosition());
		
		lmDto.setLm_tier("%"+lmDto.getLm_tier()+"%");
		lmDto.setLm_findPosition("%"+lmDto.getLm_findPosition()+"%");
		
		if(lmDto.getLm_tier().equals("%All%") && lmDto.getLm_findPosition().equals("%All%")) {
			return lmDao.lmAllList(lmDto);
		}else if(lmDto.getLm_tier().equals("%All%")) {
			return lmDao.lmAllTierList(lmDto);
		}else if(lmDto.getLm_findPosition().equals("%All%")) {
			return lmDao.lmAllPositionList(lmDto);
		}
		return lmDao.lmList(lmDto);
	}
	
	
}
