package com.zzzpro.zzz.ho.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.zzzpro.zzz.ho.dto.MatchDto;


@Mapper
public interface MatchDao {

	List<MatchDto> getMatchData(String championName, String teamPosition, String myteamPosition);

}
