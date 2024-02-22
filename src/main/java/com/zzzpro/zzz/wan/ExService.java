package com.zzzpro.zzz.wan;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ExService {
	@Autowired
	public ExDao eDao;

	public List<ExDto> champions() {
		return eDao.champions();
	}

	public List<ExDto> linePick(ExDto eDto) {
		return eDao.linePick(eDto);
	}

	public List<ExDto> allWinRate(ExDto eDto) {
		return eDao.allWinRate(eDto);
	}

	public List<ExDto> allPickRate(ExDto eDto) {
		return eDao.allPickRate(eDto);
	}

	public List<ExDto> test(ExDto eDto) {
		eDto.setLine('%' + eDto.getLine() + '%');
		if (eDto.getLine().equals("%all%")) {
			return eDao.champions();
		} else {
			return eDao.test(eDto);
		}
	}

}
