package com.zzzpro.zzz.sol.controller;

import java.util.ArrayList;
import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.zzzpro.zzz.sol.dto.LolmateAPPChatDto;
import com.zzzpro.zzz.sol.dto.LolmateAppDto;
import com.zzzpro.zzz.sol.dto.LolmateDto;
import com.zzzpro.zzz.sol.service.LolmateService;

@RestController
public class RestLolmateController {

	@Autowired
	private LolmateService lmSer;
	 
	@GetMapping("/lolmate/lmList")
	public HashMap<String, ArrayList<LolmateDto>> lmList(LolmateDto lmDto) {
		return lmSer.lmList(lmDto);
	}
	
	@GetMapping("/lolmate/lmWrite")
	public String lmWrite(LolmateDto lmDto) {
		return lmSer.lmWrite(lmDto);
	}
	
	@GetMapping("/lolmate/myLmList")
	public ArrayList<LolmateDto> myLmList(LolmateDto lmDto) {
		return lmSer.myLmList(lmDto);
	}
	
	@GetMapping("/lolmate/myAppList")
	public ArrayList<LolmateDto> myAppList(String m_id) {
		return lmSer.myAppList(m_id);
	}
	
	@GetMapping("/lolmate/lmDetail")
	public LolmateDto lmDetail(int lm_num) {
		return lmSer.lmDetail(lm_num);
	}
	
	@GetMapping("/lolmate/myAppDel")
	public String myAppDel(int lm_num, String m_id) {
		return lmSer.myAppDel(lm_num, m_id);
	}
	
	@GetMapping("/lolmate/myLmApp")
	public Boolean myLmApp(LolmateAppDto lmApp) {
		return lmSer.myLmApp(lmApp);
	}
	
	@GetMapping("/lolmate/appChatList")
	public ArrayList<LolmateAPPChatDto> appChatList(int lm_num) {
		return lmSer.appChatList(lm_num);
	}
	
	@GetMapping("/lolmate/chatAppend")
	public Boolean chatAppend(LolmateAPPChatDto lmACDto) {
		return lmSer.chatAppend(lmACDto);
	}
	
}
