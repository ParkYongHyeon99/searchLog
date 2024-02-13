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
		log.info(" ========== > service - lmList: {}"+lmDto.getLm_gameMate()+" < ==========");
		lmDto.setLm_tier("%"+lmDto.getLm_tier()+"%");
		lmDto.setLm_findPosition("%"+lmDto.getLm_findPosition()+"%");
		return lmDao.lmList(lmDto);
	}
	
	
}
