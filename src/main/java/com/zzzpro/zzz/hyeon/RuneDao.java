package com.zzzpro.zzz.hyeon;


import org.apache.ibatis.annotations.Mapper;


@Mapper
public interface RuneDao {
	RuneDto Rune_winrate(RuneDto runeDto);
	
	RuneDto item_winrate(RuneDto runeDto);

	RuneDto skill_tree_winrate(RuneDto runeDto);

}
