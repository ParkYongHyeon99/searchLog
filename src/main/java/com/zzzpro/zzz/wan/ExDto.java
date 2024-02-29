package com.zzzpro.zzz.wan;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ExDto {

	private String line;
	// champions
	private String championName;
	private String championName_kr;
	private String champions;
	private String winrate;
	private String pickrate;
	private String banrate;

	private String teamPosition;
	private String all_rate;
	private String champion_win_rate;
	private String win_percentage;

	// counter
	private String enemy_champ;
	private String enemy_champ_en;
	private String win_rate;
	private String win_count;

	// rune
	private String main_name;
	private String main_perks1;
	private String main_perks2;
	private String main_perks3;
	private String main_perks4;
	private String sub_name;
	private String sub_perks1;
	private String sub_perks2;
	private String stat_perks1;
	private String stat_perks2;
	private String stat_perks3;

	//
	private String linePick;
	private String tier1;
	private String test;
}