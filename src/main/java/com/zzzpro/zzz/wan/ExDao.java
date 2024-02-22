package com.zzzpro.zzz.wan;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

@Mapper
public interface ExDao {

	// 챔피언이름 목록 전체 가져옴
	@Select("select championName,championName_kr from champList order by championName_kr")
	List<ExDto> champions(ExDto eDto);

	List<ExDto> linePick(ExDto eDto);

	List<ExDto> test(ExDto eDto);

	List<ExDto> allWinRate(ExDto eDto);

//	List<ExDto> allPickRate(ExDto eDto);

//	List<ExDto> allWinRate(ExDto eDto);

//	List<ExDto> allBanRate(ExDto eDto);

}
