package com.zzzpro.zzz.wan;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
public class ExService {
	@Autowired
	public ExDao eDao;

	public List<Map<String, Object>> champions(ExDto eDto) {
		return eDao.champions(eDto);
	}

	public List<Map<String, Object>> counter(String championName, String highest_pick_rate_position) {
		return eDao.counter(championName, highest_pick_rate_position);
	}

	public List<Map<String, Object>> championList(ExDto eDto) {
		return eDao.championList(eDto);
	}

	public List<ExDto> linePick(ExDto eDto) {
		return eDao.linePick(eDto);
	}

	public List<Map<String, Object>> test(ExDto eDto) { // champions 메서드에서 받아온 챔피언값 필요함 html에서 라인탭누르면 이쪽으로 넘어온 js실행원리
		eDto.setLine('%' + eDto.getLine() + '%');
		if (eDto.getLine().equals("%all%")) {
			return eDao.champions(eDto);
		} else {
			return eDao.test(eDto);
		}
	}

	public List<Map<String, Object>> counters(List<Map<String, Object>> champions) {
		// TODO Auto-generated method stub
		return eDao.counters(champions);
	}

}
