package com.zzzpro.zzz.wan;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

@Mapper
public interface ExDao {

	// 챔피언이름 목록 전체 가져옴
	@Select("select champion_name,champion_name_kr from champList order by champion_name_kr")
	List<ExDto> champions();

	List<ExDto> linePick(ExDto eDto);

	List<ExDto> test(ExDto eDto);

	List<ExDto> allPickRate(ExDto eDto);

	List<ExDto> allWinRate(ExDto eDto);

//	List<ExDto> allBanRate(ExDto eDto);

}
