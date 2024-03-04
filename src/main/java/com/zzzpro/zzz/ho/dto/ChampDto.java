package com.zzzpro.zzz.ho.dto;

import java.util.ArrayList;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class ChampDto {
	public String champions;
	public String championName;
	public String championName_KR;
	public String banChampionName_KR;
	public String teamPosition;
	public String win;
	public String tier1;
	public String top_pick_rate;
	public String jungle_pick_rate;
	public String middle_pick_rate;
	public String bottom_pick_rate;
	public String UTILITY_pick_rate;
	public String max_top_pick_rate;
	public String max_jungle_pick_rate;
	public String max_middle_pick_rate;
	public String max_bottom_pick_rate;
	public String max_UTILITY_pick_rate;
	
	public String highest_pick_rate_position; //highest_pick_rate_position
	
	//======================================================================= Rune

	public String main_name;
	public String main_perks1;
	public String main_perks2;
	public String main_perks3;
	public String main_perks4;
	public String sub_name;
	public String sub_perks1;
	public String sub_perks2;
	public String rune_count;
	public String rune_percentage;
	public String rune_win_percentage;
	
	public String stat_perks1;
	public String stat_perks2;
	public String stat_perks3;
	public String stat_count;
	public String stat_percentage;
	public String stat_win_percentage;
	
	public String Count;
	public String percentage;
	public String win_percentage;
	public String pick_percentage;
	public String ban_percentage;
	
	//======================================================================= item

	public String item6;
	public String acc_count;
	public String acc_pickRate;
	public String acc_win_percentage;
	public String shoes;
	public String shoesName;
	public String shoes_count;
	public String shoes_pickRate;
	public String shoes_win_percentage;
	public String core1;
	public String core2;
	public String core3;
	public String item_count;
	public String item_percentage;
	public String item_win_percentage;
	public String core1_count;
	public String core1_percentage;
	public String core1_win_percentage;
	public String core2_count;
	public String core2_percentage;
	public String core2_win_percentage;

	//======================================================================= skll_tree
	
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
	public String skill_count;
	public String skill_percentage;
	public String skill_win_rate;
	//===============================================================
	public String summoner1Id;
	public String summoner2Id;
	public String spell_count;
	public String spell_rate;
	public String spell_win_percentage;
	//===============================================================
	public String sitem1;
	public String sitem2;
	public String sitem3;
	public String sitem4;
	public String sitem_count;
	public String sitem_percentage;
	public String sitem_win_rate;
	

}
