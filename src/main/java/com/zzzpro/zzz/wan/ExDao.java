package com.zzzpro.zzz.wan;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

@Mapper
public interface ExDao {

	@Select("select * from champList order by championName_kr")
	List<Map<String, Object>> champions(ExDto eDto);

	@Select("select * from champList_emerald order by case when pickrate >= 10 then 0 else 1 end, winrate desc")
	List<Map<String, Object>> championList(ExDto eDto);

	List<ExDto> linePick(ExDto eDto);

	List<Map<String, Object>> test(ExDto eDto);

	List<Map<String, Object>> counter(String championName, String highest_pick_rate_position);

	List<Map<String, Object>> rune(String championName, String highest_pick_rate_position);

}
