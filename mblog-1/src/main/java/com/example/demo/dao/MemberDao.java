package com.example.demo.dao;

import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

//@Repository
@Service
public class MemberDao {
	Logger logger = LoggerFactory.getLogger(MemberDao.class);
	
		public int memberInsert(Map<String, Object> pMap) {
		logger.info("memberInsert 호출");
		int result=0;
		logger.info(pMap.toString());

		return result;
	}
}
