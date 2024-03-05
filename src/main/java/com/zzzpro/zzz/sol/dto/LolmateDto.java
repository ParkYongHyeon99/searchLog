package com.zzzpro.zzz.sol.dto;

import java.util.ArrayList;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class LolmateDto {
	private int lm_num;	// 글 번호
	private int lm_gameMate;	// 게임메이트 (듀오/멘토)
	private String lm_gameMode;	// 게임모드 (솔로랭크 * * *)
	private String m_id;	// 작성자
	private String lm_summonerName;	// 작성자 닉네임#태그
	private String lm_myPosition;	// 글 올린 사람의 주 포지션
	private String lm_findPosition;	// 글 올린 사람이 찾는 포지션
	private String lm_memo;	// 글 올린 사람의 메모(할 말)
	private int lm_discord;	// 디스코드(통화) 여부
	private int lm_end;	// 듀오/멘토 신청 가능 여부
	
	private String lm_tier;	// 티어 (위 닉네임#태그를 통해 검색해온 티어를 저장할 예정)
	private double lm_winrate;	// 글 올린 사람의 승률 (리스트를 불러올때 검색)
	
	/* DB 저장 X */
	private double duoWinrate;	// 글 올린 사람과 신청자의 듀오 시 예상 승률 확인
	
	
	private ArrayList<LolmateAppDto> lm_app;	// 신청자 리스트
	private ArrayList<LolmateAPPChatDto> lm_app_chat;	// 채팅 내역 리스트
}
