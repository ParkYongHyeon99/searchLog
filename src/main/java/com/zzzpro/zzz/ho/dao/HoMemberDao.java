package com.zzzpro.zzz.ho.dao;

import org.apache.ibatis.annotations.Mapper;


import com.zzzpro.zzz.ho.dto.HoMemberDto;

@Mapper
public interface HoMemberDao {

	HoMemberDto login(HoMemberDto homemberDto);
	
	boolean join(HoMemberDto homemberDto);
	

}
