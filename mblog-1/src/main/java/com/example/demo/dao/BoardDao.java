package com.example.demo.dao;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

//@Repository
@Service
public class BoardDao {
	Logger logger = LoggerFactory.getLogger(BoardDao.class);
	
	public List<Map<String, Object>> boardList(Map<String, Object> pMap) {
		logger.info("boardDao.boardList 호출");
		List<Map<String, Object>> bList = new ArrayList<>();
		
		Map<String, Object> rMap = new HashMap<>();
		rMap.put("BM_TITLE", "제목1");
		rMap.put("BM_WRITER", "작성자1");
		rMap.put("BM_CONTENT", "내용1");
		bList.add(rMap);
		
		rMap = new HashMap<>();
		rMap.put("BM_TITLE", "제목2");
		rMap.put("BM_WRITER", "작성자2");
		rMap.put("BM_CONTENT", "내용2");
		bList.add(rMap);
		
		rMap = new HashMap<>();
		rMap.put("BM_TITLE", "제목3");
		rMap.put("BM_WRITER", "작성자3");
		rMap.put("BM_CONTENT", "내용3");
		bList.add(rMap);
		
		return bList;
	}
}
