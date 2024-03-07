package com.zzzpro.zzz.wan;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@Controller
public class ExController {

	@Autowired
	public ExService eSer;

	@GetMapping("/ex")
	public String rank(Model model, ExDto eDto) {
		eSer.rank(model, eDto);
		return "ex";
	}

	@GetMapping("/ex/{championName}/{highest_pick_rate_position}")
	public String detail(@PathVariable String championName, @PathVariable String highest_pick_rate_position,
			Model model) {
		eSer.allinfo(championName, highest_pick_rate_position, model);
		return "exch";
	}

}
