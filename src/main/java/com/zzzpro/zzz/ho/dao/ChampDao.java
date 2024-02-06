package com.zzzpro.zzz.ho.dao;

import org.apache.ibatis.annotations.Mapper;

import com.zzzpro.zzz.ho.dto.ChampDto;

@Mapper
public interface ChampDao {
	String winrate(ChampDto champDto);
	String pickrate(ChampDto champDto);

}
