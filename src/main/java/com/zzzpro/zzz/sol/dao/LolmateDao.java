package com.zzzpro.zzz.sol.dao;

import java.util.ArrayList;
import org.apache.ibatis.annotations.Mapper;
import com.zzzpro.zzz.sol.dto.LolmateDto;

@Mapper
public interface LolmateDao {

	ArrayList<LolmateDto> lmList(LolmateDto lmDto);
	
}
