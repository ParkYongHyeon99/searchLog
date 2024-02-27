package com.zzzpro.zzz.wan;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ExDto {

	private String champions;
	private String linePick;
	private String teamPosition;
	private String line;
	private String test;
	private String allWinRate;
	private String allPickRate;
	private String allBanRate;

	private String championName;
	private String championName_KR;
	private String top_pick_rate;
	private String jungle_pick_rate;
	private String middle_pick_rate;
	private String bottom_pick_rate;
	private String UTILITY_pick_rate;
	private String highest_pick_rate_position;
	private String highest_pick_rate;

}