package com.zzzpro.zzz.sol.dto;

import java.util.ArrayList;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class LolmateAppDto {
	private int lm_num;	// 글 번호
	private ArrayList<String> lm_app_summonerName;	// 작성자 닉네임#태그
	

	public void setLm_app_summonerName(ArrayList<String> mLAppList) {
		lm_app_summonerName = mLAppList;
	}
}
