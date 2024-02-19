package com.zzzpro.zzz.wan.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.zzzpro.zzz.wan.dao.ExDao;
import com.zzzpro.zzz.wan.dto.ExDto;

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

}
