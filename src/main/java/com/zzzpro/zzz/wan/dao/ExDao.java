package com.zzzpro.zzz.wan.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import com.zzzpro.zzz.wan.dto.ExDto;

@Mapper
public interface ExDao {

	// 챔피언이름 목록 전체 가져옴
	@Select("select champion_name from champList")
	List<ExDto> champions();

	List<ExDto> linePick(ExDto cDto);
}
