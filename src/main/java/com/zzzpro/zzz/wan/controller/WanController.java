package com.zzzpro.zzz.wan.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.zzzpro.zzz.wan.controller.WanController;
import com.zzzpro.zzz.wan.service.wanService;

@Controller
public class WanController {

	@Autowired
	public wanService cSer;

	@GetMapping("/wan")
	public String home() {
		return "wanfrm";
	}

	@GetMapping("/wan/detail")
	public String getChName(@RequestParam("chName") String chName, Model model) {
		model.addAttribute("chName", chName);
		return "wandetail";
	}

	@GetMapping("/wan/rune")
	public String rune() {
		return "rune";
	}

	@GetMapping("/wan/skill")
	public String skill() {
		return "skill";
	}

	@GetMapping("wan/item")
	public String item() {
		return "item";
	}

	@GetMapping("/wan/counter")
	public String counter() {
		return "counter";
	}
}
