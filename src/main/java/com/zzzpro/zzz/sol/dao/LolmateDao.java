package com.zzzpro.zzz.sol.dao;

import java.util.ArrayList;
import org.apache.ibatis.annotations.Mapper;

import com.zzzpro.zzz.sol.dto.LolmateAPPChatDto;
import com.zzzpro.zzz.sol.dto.LolmateAppDto;
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
	ArrayList<LolmateAppDto> mLAppList(LolmateDto lmDto);
	ArrayList<LolmateDto> myAppList(String m_id);
	LolmateDto lmDetail(int lm_num);
	boolean myAppDel(int lm_num, String m_id);
	boolean myLmApp(LolmateAppDto lmApp);
	LolmateAPPChatDto lmAppFinalChatList(LolmateAppDto lmA);
	ArrayList<LolmateAPPChatDto> appChatList(int lm_num);
	boolean chatAppend(LolmateAPPChatDto lmACDto);
	boolean close(int lm_num);
	boolean delete(int lm_num);
	
}
