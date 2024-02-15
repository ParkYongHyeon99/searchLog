package com.zzzpro.zzz.soo.dao;


import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import com.zzzpro.zzz.soo.dto.MainDto;

@Mapper
public interface MainDao {
	
	@Select("SELECT COUNT(*) FROM ZZZ_RUNE WHERE CHAMPIONNAME_KR=#{championname_kr};")
	boolean search(MainDto sm);
	
	@Select("SELECT * FROM ZZZ_RUNE WHERE CHAMPIONNAME_KR=#{championname_kr}")
	MainDto getMainInfo(MainDto gm);

}
