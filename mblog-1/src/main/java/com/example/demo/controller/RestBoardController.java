package com.example.demo.controller;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.service.BoardLogic;
import com.google.gson.Gson;

@RestController
@RequestMapping("/board/*")
public class RestBoardController {
	Logger logger = LoggerFactory.getLogger(RestBoardController.class);
	
	@Autowired
	private BoardLogic boardLogic = null;
	
	@GetMapping("getJson")
	public String getTest(Model model, @RequestParam Map<String, Object> pMap) {
		logger.info("boardController.boardList 호출");
		logger.info(pMap.toString());
		
		List<Map<String, Object>> bList = null;
		bList = boardLogic.boardList(pMap);
		model.addAttribute("bList", bList);
		
		Gson g = new Gson();
		String tmp = g.toJson(bList);
		
		return tmp;
	}
}
