package com.zzzpro.zzz.ho.dao;


import java.util.HashMap;
import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import com.zzzpro.zzz.ho.dto.ChampDto;

import jakarta.servlet.http.HttpSession;

@Mapper
public interface ChampDao {
	@Select("select championName, championName_kr from champList1 order by championName_kr")
	List<ChampDto> champions(String champoins);
	List<ChampDto> champpick_pi(ChampDto cDto);
	String winrate(ChampDto champDto);
	String pickrate(ChampDto cDto);
	ChampDto banrate(ChampDto champDto);
	
	List<ChampDto> item_winrate(ChampDto champDto);
	List<ChampDto> shoes_winrate(ChampDto champDto);
	List<ChampDto> Rune_winrate(ChampDto champDto);
	List<ChampDto> stat_rate(ChampDto champDto);
	List<ChampDto> spell_rate(ChampDto champDto);
	List<ChampDto> acc_winrate(ChampDto champDto);
	List<ChampDto> start_item(ChampDto champDto);
	List<ChampDto> core1(ChampDto champDto);
	List<ChampDto> core2(ChampDto champDto);
	List<ChampDto> skill_tree_3lv(ChampDto champDto);
	
}