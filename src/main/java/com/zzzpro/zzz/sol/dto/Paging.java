package com.zzzpro.zzz.sol.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Paging {
	private int nowP;	// 현재 페이지					3
	private int firstP = 1;	// 맨 첫번째 페이지
	private int lastP;	// 맨 마지막 페이지
	private int leftP;	// 현재 페이지의 첫번째 페이지
	private int rightP;	// 현재 페이지의 마지막 페이지
	private int beforeP;	// leftP -p
	private int nextP;	// leftP +p
	private int pageSize = 10;
	
	
	public Paging(int nowP, int bCnt) {
		this.nowP = nowP;
		lastP = (int)Math.ceil((double)bCnt/(double)pageSize);
		leftP = ((((nowP-1)/pageSize))*pageSize) +1;
		rightP = leftP +pageSize -1;
		beforeP = leftP -pageSize;
		nextP = leftP +pageSize;
	}
}