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

	public List<ExDto> linePick(ExDto cDto) {
		return eDao.linePick(cDto);
	}

	public List<ExDto> test(ExDto cDto) {
		cDto.setLine('%'+cDto.getLine()+'%');
		if (cDto.getLine().equals("%all%")) {
			return eDao.champions();
		} else {
			return eDao.test(cDto);
		}
	}

}
