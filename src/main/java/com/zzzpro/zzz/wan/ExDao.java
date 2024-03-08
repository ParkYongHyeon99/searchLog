package com.zzzpro.zzz.wan;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

@Mapper
public interface ExDao {

	@Select("SELECT * FROM champList_emerald ORDER BY championName_kr")
	List<Map<String, Object>> champions(ExDto eDto);

	@Select("SELECT * FROM champList_emerald ORDER BY CASE WHEN pickrate >= 10 THEN 0 ELSE 1 END, winrate DESC")
	List<Map<String, Object>> championList(ExDto eDto);

	List<Map<String, Object>> mostLine(String championName);

	List<Map<String, Object>> rune(String championName, String highest_pick_rate_position);

	List<Map<String, Object>> spell(String championName, String highest_pick_rate_position);

	List<Map<String, Object>> skill3lv(String championName, String highest_pick_rate_position);

	List<Map<String, Object>> skill6lv(String championName, String highest_pick_rate_position);

	List<Map<String, Object>> core3(String championName, String highest_pick_rate_position);

	List<Map<String, Object>> sitem(String championName, String highest_pick_rate_position);

	List<Map<String, Object>> shoes(String championName, String highest_pick_rate_position);

	List<Map<String, Object>> counter(String championName, String highest_pick_rate_position);

	List<Map<String, Object>> counterDESC(String championName, String highest_pick_rate_position);

	List<Map<String, Object>> tabKr(ExDto eDto);

	List<Map<String, Object>> tabWin(ExDto eDto);

}
