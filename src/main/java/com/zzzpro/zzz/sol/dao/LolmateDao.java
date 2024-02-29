package com.zzzpro.zzz.sol.dao;

import java.util.ArrayList;
import org.apache.ibatis.annotations.Mapper;
import com.zzzpro.zzz.sol.dto.LolmateDto;

@Mapper
public interface LolmateDao {

	ArrayList<LolmateDto> lmMMAllList(LolmateDto lmDto);
	ArrayList<LolmateDto> lmSerchList(LolmateDto lmDto);
	ArrayList<LolmateDto> lmAllPositionList(LolmateDto lmDto);
	ArrayList<LolmateDto> lmAllTierList(LolmateDto lmDto);
	ArrayList<LolmateDto> lmAllList();
	boolean lmWrite(LolmateDto lmDto);
	ArrayList<LolmateDto> mLList(LolmateDto lmDto);
	ArrayList<String> mLAppList(LolmateDto lmDto);
	ArrayList<LolmateDto> myAppList(String m_id);
	
}
