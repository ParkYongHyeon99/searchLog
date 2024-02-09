package com.zzzpro.zzz.sol.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class LolmateDto {
	private String gameMate;	// 게임메이트 (듀오/멘토)
	private String gameMode;	// 게임모드 (솔로랭크/뭐더라아무튼이런거***)
	private String user;	// 닉네임#태그
	private String tier;	// 티어 (위 닉네임#태그를 통해 검색해온 티어를 저장할 예정)
	private String myPosition;	// 글 올린 사람의 주 포지션
	private String yourPosition;	// 글 올린 사람이 찾는 포지션
	private double winrate;	// 글 올린 사람의 승률 (글 올릴 때의 승률로 고정 저장하거나, 리스트를 불러올때 검색하기?< 오래 걸릴듯)
	private double duoWinrate;	// 글 올린 사람과 신청자의 듀오 시 예상 승률 확인 (할 수 없을 것 같긴 한데 ㅠㅠ)
	private String memo;	// 글 올린 사람의 메모(할 말)
	private int discord;	// 디스코드(통화) 여부
}
