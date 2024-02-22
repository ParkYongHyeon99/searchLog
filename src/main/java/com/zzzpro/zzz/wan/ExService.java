package com.zzzpro.zzz.wan;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ExService {
	@Autowired
	public ExDao eDao;

	public List<ExDto> champions(ExDto eDto) {
		return eDao.champions(eDto);
	}

	public List<ExDto> linePick(ExDto eDto) {
		return eDao.linePick(eDto);
	}

	public List<ExDto> allWinRate(ExDto eDto) {
		return eDao.allWinRate(eDto);
	}

//	public List<ExDto> allPickRate(ExDto eDto) {
//		return eDao.allPickRate(eDto);
//	}

	public List<ExDto> test(ExDto eDto) {
		eDto.setLine('%' + eDto.getLine() + '%');
		if (eDto.getLine().equals("%all%")) {
			return eDao.champions(eDto);
		} else {
			return eDao.test(eDto);
		}
	}

//	public List<ExDto> allWinRate(List<ExDto> champions) {
//		// TODO Auto-generated method stub
//		return eDao.allWinRate(champions);
//	}

}
