package com.zzzpro.zzz.ho.dao;

import java.util.ArrayList;

import org.apache.ibatis.annotations.Mapper;

import com.zzzpro.zzz.ho.dto.ChampDto;

@Mapper
public interface ChampDao {
	String winrate(ChampDto champDto);
	String pickrate(ChampDto champDto);
	ChampDto banrate(ChampDto champDto);
	ChampDto skill_tree_winrate(ChampDto champDto);
	ChampDto item_winrate(ChampDto champDto);
	ChampDto shoes_winrate(ChampDto champDto);
	ChampDto Rune_winrate(ChampDto champDto);

}
