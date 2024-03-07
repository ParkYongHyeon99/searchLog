package com.zzzpro.zzz.ho.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class MatchDto {
	String championName;
	String championName_KR;
	String teamPosition;
	String myteamPosition;
	double win_ratio;
	int total_count;
}
