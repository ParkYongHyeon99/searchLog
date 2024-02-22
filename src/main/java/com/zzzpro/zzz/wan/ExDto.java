package com.zzzpro.zzz.wan;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ExDto {
	// champList
	private String champions;
	private String championName;
	private String championName_kr;
	// =================================
	// zzz_datas_detail
	private String teamPosition;
	private String linePick;
	private String line;
	private String test;
	private String allWinRate;
	private String allPickRate;
	private String allBanRate;

//	private String matchid;
//	private int gameduration;
//	private String riotidgamename;
//	private String riotidtagline;
//	private int participantid;
//	private String win;
//	private String win_percentage;
//	private String pick_percentage;
//	private String skill_tree;
//	private String tier1;
//	private String Count;
//	private String percentage;
//	private String item0;
//	private String item1;
//	private String item2;
//	private String item3;
//	private String item4;
//	private String item5;
//	private String item6;
//	private String shoes;
//	private String core1;
//	private String core2;
//	private String core3;
}