package com.zzzpro.zzz.sol.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.Accessors;

@Accessors(chain=true)	// chaining 형태 객체 생성/수정 가능 (알았는데 까먹엇음)
@Data	// getter&setter 동시 생성
@AllArgsConstructor	// 생성자 자동 생성
@NoArgsConstructor	// 기본 생성자 생성
@Builder	// 아직도 잘 모르겠으나 필요한 것으로 앎
public class MemberDto {
	
	private String m_id;	// 로그인 아이디
	private String m_nick;	// 닉네임 (게시글 작성 등)
	private String m_pw;	// 비밀번호
	private String m_email;	// 이메일
	private String m_role;	// 역할 ( member / admin )
	private String m_date;	// 가입 날짜
	private String m_point;	// 등급을 결정하는 포인트
	private String grade;	// 등급
	
}
