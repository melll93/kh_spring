package com.example.demo.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.google.gson.Gson;

@CrossOrigin("http://localhost:3000")
@RestController
@RequestMapping("/member/*")
public class RestMemberController {
	Logger logger = LoggerFactory.getLogger(RestMemberController.class);
	
	@GetMapping("jsonMemberList")
	public String jsonMemberList(Model model) {
		logger.info("jsonMemberList 호출");
		String temp = null;
		List<Map<String, Object>> mList = new ArrayList<>();
		Map<String, Object> rMap = new HashMap<>();
		
		rMap.put("mem_id", "tomato");
		rMap.put("mem_pw", "123");
		rMap.put("mem_name", "토마토");
		mList.add(rMap);
		
		rMap = new HashMap<>();
		rMap.put("mem_id", "kiwi");
		rMap.put("mem_pw", "123");
		rMap.put("mem_name", "키위");
		mList.add(rMap);

		rMap = new HashMap<>();
		rMap.put("mem_id", "apple");
		rMap.put("mem_pw", "123");
		rMap.put("mem_name", "사과");
		mList.add(rMap);
		
		Gson g = new Gson();
		temp = g.toJson(mList);
		
		return temp;
	}
}
