package com.zzzpro.zzz.sol.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class LolmateAPPChatDto {
	private int lm_num;	// 글 번호
	private String lm_master;	// 글 주인
	private String recipient_m_id;	// 채팅 받는 사람
	private String lm_app_m_id;	// 채팅 작성자
	private String lm_app_summonerName;	// 신청자의 소환사명
	
	private String lm_app_chat;	// 채팅 내역
	private String lm_app_chat_date;	// 작성 날짜/시간
}
