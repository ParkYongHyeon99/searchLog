package com.zzzpro.zzz.sol.controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import com.zzzpro.zzz.sol.dto.BoardDto;
import com.zzzpro.zzz.sol.dto.CommentDto;
import com.zzzpro.zzz.sol.service.BoardService;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
public class RestBoardController {
	
	@Autowired
	private BoardService bSer;
	
	@GetMapping("/board/unNickCheck")
	public String unNickCheck(BoardDto bDto) {
		return bSer.unNickCheck(bDto);
	}
	
	@GetMapping("/board/unPwCheck")
	public String unPwCheck(BoardDto bDto) {
		return bSer.unPwCheck(bDto);
	}
	
	/* 댓글 할 예정
	 * @GetMapping("/board/commentList") public ArrayList<CommentDto>
	 * commentList(CommentDto cDto) { return bSer.commentList(cDto); }
	 */
}
