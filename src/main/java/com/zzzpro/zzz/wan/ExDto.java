package com.zzzpro.zzz.wan;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ExDto {

	private String line;

	private String championName;
	private String championName_kr;
	private String champions;

	private String teamPosition;
	private String all_rate;
	private String champion_win_rate;
	private String win_percentage;
	
	private String enemy_champ;
	
	private String linePick;
	private String tier1;
	private String test;
	private String top_pick_rate;
	private String jungle_pick_rate;
	private String middle_pick_rate;
	private String bottom_pick_rate;
	private String UTILITY_pick_rate;
	private String highest_pick_rate_position;
	private String highest_pick_rate;

}