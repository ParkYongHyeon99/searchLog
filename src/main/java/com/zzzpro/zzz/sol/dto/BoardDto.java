package com.zzzpro.zzz.sol.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class BoardDto {
	
	private int b_num;	// 글번호
	
	private String b_title;	// 글 제목
	private String b_contents ;	// 글 내용
	
	private String b_writer;	// 작성자
	private String b_writerNick;	// 작성자 닉네임(익명일 시)
	private String b_pw ;	// 작성자 비밀번호(비회원일 시)
	
	private String b_date ;	// 작성시간/날짜
	private int b_view;	// 조회수
	
	private int unnamed;	// 익명 여부 ( 0 공개 / 1 익명 )
	
}
