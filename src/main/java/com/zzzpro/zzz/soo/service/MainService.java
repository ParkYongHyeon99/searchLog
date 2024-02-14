package com.zzzpro.zzz.soo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.zzzpro.zzz.soo.dao.MainDao;
import com.zzzpro.zzz.soo.dto.MainDto;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
public class MainService {
	@Autowired
	public MainDao mDao;

	public MainDto search(MainDto sm) {
	boolean search = mDao.search(sm);
	if(search)	{
		log.info("검색 성공");
		return mDao.getMainInfo(sm);
	}else	{
		log.info("검색실패");
		return null;
	}
}


}
