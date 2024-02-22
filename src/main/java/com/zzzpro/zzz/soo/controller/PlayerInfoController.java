package com.zzzpro.zzz.soo.controller;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class PlayerInfoController {

    @GetMapping("/search")
    public String getPlayerInfo(@RequestParam("summonerName") String summonerName, Model model) {
        // 플레이어 정보를 가져와서 모델에 추가하는 코드를 작성
        String riotIdGameName = "riotIdGameName";
        String riotIdTagLine = "riotIdTagLine";
        String tier = "Tier";
        String rank = "rank";
//        int gameCount = 100; // 예시로 100으로 설정
        double winRate = 70.5; // 예시로 70.5%로 설정
        int summonerLevel = 30; // 예시로 30으로 설정
        String profileIcon = "https://opgg-static.akamaized.net/meta/images/profile_icons/profileIcon5269.jpg?image=q_auto,f_webp,w_auto&v=1708507553015";

        // 모델에 플레이어 정보 추가
        model.addAttribute("riotIdGameName", riotIdGameName);
        model.addAttribute("riotIdTagLine", riotIdTagLine);
        model.addAttribute("tier", tier);
        model.addAttribute("rank", rank);
//        model.addAttribute("gameCount", gameCount);
//        model.addAttribute("winRate", winRate);
        model.addAttribute("summonerLevel", summonerLevel	);
        model.addAttribute("profileIcon", profileIcon);

        return "player-info"; // 플레이어 정보 페이지의 HTML 파일 이름
    }
}
