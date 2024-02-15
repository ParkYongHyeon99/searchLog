package com.zzzpro.zzz.hyeon;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import lombok.extern.slf4j.Slf4j;
@Service
@Slf4j
public class RuneService {

    @Autowired
    private RuneDao runeDao;

    public RuneDto Rune_winrate(RuneDto rDto) {
        return runeDao.Rune_winrate(rDto);
    }
    
    public RuneDto item_winrate(RuneDto rDto) {
        return runeDao.item_winrate(rDto);
    }
    
    public RuneDto skill_tree_winrate(RuneDto rDto) {
        return runeDao.skill_tree_winrate(rDto);
    }
}
