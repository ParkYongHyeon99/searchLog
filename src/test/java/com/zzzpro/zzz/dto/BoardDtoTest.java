package com.zzzpro.zzz.dto;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.zzzpro.zzz.sol.dao.BoardDao;
import com.zzzpro.zzz.sol.dto.BoardDto;

@SpringBootTest
class BoardDtoTest {

	@Autowired
	private BoardDao bDao;
	
	@Test
	//@Transactional
	void insertDummyDataTest() {
		BoardDto bDto=new BoardDto();
		for(int i=200;i<400;i++) {
			/*
			 * if(i%2==0) { bDto.setUnnamed(1); bDto.setB_writerNick("더미testA"); }
			 */
			bDto.setB_title("제목 더미: "+i);
			bDto.setB_contents("내용 더미: "+i);
			bDto.setB_writer("aaa");
			bDao.insertDummyData(bDto);
		}
		
	}

}
