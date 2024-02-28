package com.zzzpro.zzz.wan;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

@Mapper
public interface ExDao {

	@Select("select * from champList order by championName_kr")
	List<Map<String, Object>> champions(ExDto eDto);

	List<ExDto> linePick(ExDto eDto);

	List<Map<String, Object>> test(ExDto eDto);

}
