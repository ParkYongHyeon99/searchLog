package com.zzzpro.zzz.sol.dao;

import java.util.ArrayList;
import org.apache.ibatis.annotations.Mapper;
import com.zzzpro.zzz.sol.dto.LolmateDto;

@Mapper
public interface LolmateDao {

	ArrayList<LolmateDto> lmAllList(LolmateDto lmDto);
	ArrayList<LolmateDto> lmList(LolmateDto lmDto);
	ArrayList<LolmateDto> lmAllPositionList(LolmateDto lmDto);
	ArrayList<LolmateDto> lmAllTierList(LolmateDto lmDto);
	
}
