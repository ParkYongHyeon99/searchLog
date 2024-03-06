package com.zzzpro.zzz.ho.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.zzzpro.zzz.ho.dao.MatchDao;
import com.zzzpro.zzz.ho.dto.MatchDto;

import lombok.extern.slf4j.Slf4j;



@Service
@Slf4j
public class MatchService {
	@Autowired
	MatchDao mDao;
	
	public List<MatchDto> getData(String championName, String champPosition, String myPosition){
		List<MatchDto> result=mDao.getMatchData(championName, champPosition, myPosition);
		log.info("==championName={},==champPosition{}, myteamposition{}",championName, champPosition,myPosition);
		return result;
	}
}
