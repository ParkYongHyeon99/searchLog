package com.zzzpro.zzz.ho.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.zzzpro.zzz.ho.dao.HoMemberDao;
import com.zzzpro.zzz.ho.dto.HoMemberDto;

@Service
public class HoMemberService {
	@Autowired
	HoMemberDao homemberDao;
	
	public HoMemberDto login(HoMemberDto homemberDto) {
		return homemberDao.login(homemberDto);
	}
	
	public boolean join(HoMemberDto homemberDto) {
		return homemberDao.join(homemberDto);
	}

}
