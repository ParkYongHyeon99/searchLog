package com.zzzpro.zzz.wan;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

@Mapper
public interface ExDao {

	// 챔피언이름 목록 전체 가져옴
	@Select("select championName,championName_kr from champList order by championName_kr")
	List<Map<String, Object>> champions(ExDto eDto);

	List<ExDto> linePick(ExDto eDto);

	List<Map<String, Object>> test(ExDto eDto);

	List<Map<String, Object>> linePicks(List<Map<String, Object>> cList);

}
