package com.zzzpro.zzz.ho.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class ChampDto {
	private String matchid;
	private int gameduration;
	private String riotidgamename;
	private String riotidtagline;
	private int participantid;
	private String championName;
	private String teamPosition;
	private String win;
	private String win_percentage;
	private String pick_percentage;
	private String tier1;

}
