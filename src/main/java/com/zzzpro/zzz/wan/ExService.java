package com.zzzpro.zzz.wan;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jakarta.servlet.http.HttpSession;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
public class ExService {
	@Autowired
	public ExDao eDao;

	public List<Map<String, Object>> champions(ExDto eDto) {
		return eDao.champions(eDto);
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

	public List<Map<String, Object>> linePicks(HttpSession session) {
		// 세션에서 cList 가져오기
		List<Map<String, Object>> cList = (List<Map<String, Object>>) session.getAttribute("cList");
		log.info("@@세션으로 서비스에 온 cList -> " + cList);
		return eDao.linePicks(cList);
	}

}
