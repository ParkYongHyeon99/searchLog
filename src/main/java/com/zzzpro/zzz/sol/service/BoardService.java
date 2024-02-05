package com.zzzpro.zzz.sol.service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.ui.Model;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.zzzpro.zzz.sol.dao.BoardDao;
import com.zzzpro.zzz.sol.dao.MemberDao;
import com.zzzpro.zzz.sol.dto.BoardDto;
import com.zzzpro.zzz.sol.dto.CommentDto;
import com.zzzpro.zzz.sol.dto.Paging;

import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
public class BoardService {
	
	@Autowired
	private BoardDao bDao;
	
	public boolean boardList(int page, Model model) {
		log.info(" ========== > service - boardList: {}"+page+" < ==========");
		int limit = (page-1)*10;
		ArrayList<BoardDto> bList = bDao.boardList(limit);
		if(bList.size()!=0) {
			model.addAttribute("bList", bList);
			int bCnt = bDao.getBCnt();
			Paging paging = new Paging(page, bCnt);
			/*
			 * ArrayList<Integer> b_numList = new ArrayList<>(); for(int i=0;
			 * i<bList.size(); i++) { b_numList.add(bList.get(i).getB_num()); }
			 */
			model.addAttribute("paging",paging);
			return true;
		}
		return false;
	}
	
	public boolean boardDetail(BoardDto bDto, Model model) {
		log.info(" ========== > service - boardList: {}"+bDto.getB_num()+" < ==========");
		bDto = bDao.boardDetail(bDto.getB_num());
		System.out.println(bDto);
		if(bDto.getB_date()!="") {
			model.addAttribute("bDto", bDto);
			return true;
		}
		return false;
	}

	public boolean writeSub(BoardDto bDto, RedirectAttributes ra) {
		log.info(" ========== > service - writeSub: {}"+bDto.getB_writer()+" < ==========");
		System.out.println(bDto);
		if(bDto.getB_writerNick()!="") {
			bDto.setUnnamed(1);
		}
		if(bDao.writeSub(bDto)) {
			bDao.bMGetPoint(bDto.getB_writer());
			ra.addFlashAttribute("msg","게시글 작성에 성공했습니다.");
			return true;
		}
		return false;
	}

	public String unPwCheck(BoardDto bDto) {
		log.info(" ========== > service - unPwCheck: {}"+bDto.getB_num()+" < ==========");
		if(bDao.unPwCheck(bDto)) {
			return "ok";
		}
		return "no";
	}

	public String unNickCheck(BoardDto bDto) {
		log.info(" ========== > service - unNickCheck: {}"+bDto+" < ==========");
		if(!bDao.unNickCheck(bDto)) {
			return "ok";
		}
		return "no";
	}

	public boolean boardDelete(BoardDto bDto, RedirectAttributes ra) {
		log.info(" ========== > service - boardDelete: {}"+bDto.getB_num()+" < ==========");
		if(bDao.boardDelete(bDto)) {
			ra.addFlashAttribute("msg","게시글 삭제에 성공했습니다.");
			return true;
		}
		ra.addFlashAttribute("msg","게시글 삭제에 실패했습니다.");
		return false;
	}

	public boolean boardUpdate(BoardDto bDto, Model model) {
		log.info(" ========== > service - boardDelete: {}"+bDto.getB_num()+" < ==========");
		bDto = bDao.boardDetail(bDto.getB_num());
		if(bDto.getB_writer()!=null) {
			model.addAttribute("bDto", bDto);
			return true;
		}
		return false;
	}

	public void updateSub(BoardDto bDto, RedirectAttributes ra) {
		log.info(" ========== > service - boardDelete: {}"+bDto.getB_num()+" < ==========");
		if(bDao.updateSub(bDto)) {
			ra.addFlashAttribute("msg","게시글 수정에 성공했습니다.");
		}
		ra.addFlashAttribute("msg","게시글 수정에 실패했습니다.");
	}

	@Transactional(rollbackFor = {Exception.class})
	public ArrayList<CommentDto> commentList(CommentDto cDto) {
		log.info(" ========== > service - commentList: {}"+cDto.getB_num()+" < ==========");
		ArrayList <CommentDto> cList = bDao.commentList(cDto.getB_num());
		if(cList.size()!=0) {
			bDao.cMGetPoint(cDto.getC_writer());
			return cList;
		}
		return null;
	}
	
}
