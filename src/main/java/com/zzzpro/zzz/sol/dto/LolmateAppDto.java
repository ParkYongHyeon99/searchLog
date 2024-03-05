package com.zzzpro.zzz.sol.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class LolmateAppDto {
	private int lm_num;	// 글 번호
	private String lm_app_m_id;	// 신청자 계정 아이디
	private String lm_app_summonerName;	// 신청자 닉네임#태그
	private String lm_app_date;	// 신청 날짜
	
	
}
