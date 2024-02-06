package com.zzzpro.zzz.sol.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CommentDto {
	
	private int b_num;	// 글번호
	private int c_num;	// 댓글번호
	
	private String c_contents ;	// 댓글 내용
	private String c_writer;	// 댓글작성자
	private String c_date ;	// 작성시간/날짜
	
	private int c_cw;	// 수정correction 여부whether ( 수정안함0 / 수정함1 ) 
	private int unnamed;	// 익명 여부 ( 0 공개 / 1 익명 )
	
	private int uw_cnt;	// 익명1, 익명2 구분을 위함
	
}
