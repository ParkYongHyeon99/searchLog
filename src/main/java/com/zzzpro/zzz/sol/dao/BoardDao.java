package com.zzzpro.zzz.sol.dao;

import java.util.ArrayList;

import org.apache.ibatis.annotations.Mapper;

import com.zzzpro.zzz.sol.dto.BoardDto;
import com.zzzpro.zzz.sol.dto.CommentDto;

@Mapper
public interface BoardDao {
	// Test용 더미 데이터
	public void insertDummyData(BoardDto bDto);

	public ArrayList<BoardDto> boardList(int limit);

	public BoardDto boardDetail(int b_num);

	public boolean writeSub(BoardDto bDto);

	public boolean unPwCheck(BoardDto bDto);

	public boolean unNickCheck(BoardDto bDto);

	public boolean boardDelete(BoardDto bDto);

	public boolean updateSub(BoardDto bDto);

	public int getBCnt();

	public ArrayList<CommentDto> commentList(int b_num);

	public void bMGetPoint(String b_writer);

	public void cMGetPoint(String c_writer);

}
