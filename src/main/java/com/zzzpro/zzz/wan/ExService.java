package com.zzzpro.zzz.wan;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ExService {
	@Autowired
	public ExDao eDao;

	public List<Map<String, Object>> champions(ExDto eDto) {
		return eDao.champions(eDto);
	}

	public List<Map<String, Object>> championList(ExDto eDto) {
		return eDao.championList(eDto);
	}

	public List<Map<String, Object>> counter(String championName, String highest_pick_rate_position) {
		return eDao.counter(championName, highest_pick_rate_position);
	}

	public List<Map<String, Object>> rune(String championName, String highest_pick_rate_position) {
		return eDao.rune(championName, highest_pick_rate_position);
	}

	public List<Map<String, Object>> item(String championName, String highest_pick_rate_position) {
		return eDao.item(championName, highest_pick_rate_position);
	}

//	public List<Map<String, Object>> skill(String championName, String highest_pick_rate_position) {
//		return eDao.skill(championName, highest_pick_rate_position);
//	}

	public List<Map<String, Object>> test(ExDto eDto) { // champions 메서드에서 받아온 챔피언값 필요함 html에서 라인탭누르면 이쪽으로 넘어온 js실행원리
		eDto.setLine('%' + eDto.getLine() + '%');
		if (eDto.getLine().equals("%all%")) {
			return eDao.champions(eDto);
		} else {
			return eDao.test(eDto);
		}
	}

	public List<Map<String, Object>> mostLine(String championName) {
		return eDao.mostLine(championName);
	}

}
