package com.zzzpro.zzz.wan;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ExDto {

	// champions
	private String championName;
	private String championName_kr;
	private String highest_pick_rate_position;
	private String searchText;

	private String line;
	private String winrate;
	private String pickrate;
	private String banrate;

	private String teamPosition;
	private String all_rate;
	private String champion_win_rate;

	// Rune

	public String main_name;
	public String main_perks1;
	public String main_perks2;
	public String main_perks3;
	public String main_perks4;
	public String sub_name;
	public String sub_perks1;
	public String sub_perks2;
	public String stat_perks1;
	public String stat_perks2;
	public String stat_perks3;
	public String rune_count;
	public String rune_percentage;
	public String rune_win_percentage;

	public String Count;
	public String percentage;
	public String win_percentage;
	public String pick_percentage;
	public String ban_percentage;

	// item

	public String item6;
	public String shoes;
	public String shoes_count;
	public String shoes_pickRate;
	public String shoes_win_percentage;
	public String core1;
	public String core2;
	public String core3;
	public String item_count;
	public String item_percentage;
	public String item_win_percentage;

	// skll_tree

	public String value1;
	public String value2;
	public String value3;
	public String value4;
	public String value5;
	public String value6;
	public String value7;
	public String value8;
	public String value9;
	public String value10;
	public String value11;
	public String value12;
	public String value13;
	public String value14;
	public String value15;
	public String skill_count;
	public String skill_percentage;

	private String linePick;
	private String tier1;
	private String test;
}