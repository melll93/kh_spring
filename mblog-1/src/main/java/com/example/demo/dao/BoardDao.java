package com.example.demo.dao;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
//import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

//@Repository
@Service
public class BoardDao {
	Logger logger = LoggerFactory.getLogger(BoardDao.class);

	public List<Map<String, Object>> boardList(Map<String, Object> pMap) {
		logger.info("boardList");
		List<Map<String, Object>> bList = null;
		if(bList==null) {//NullPointerException 방어코드 작성
			bList = new ArrayList<>();
			Map<String, Object> rMap = new HashMap<>();
			rMap.put("BM_TITLE","공지사항 1");
			rMap.put("BM_WRITER"," 김춘추");
			bList.add(rMap);
			
			rMap=new HashMap<>();
			rMap.put("BM_TITLE","공지사항 2");
			rMap.put("BM_WRITER"," 이순신");
			bList.add(rMap);
			
			rMap=new HashMap<>();
			rMap.put("BM_TITLE","공지사항 3");
			rMap.put("BM_WRITER"," 이성계");
			bList.add(rMap);
		}
		return bList;
	}

	
}
