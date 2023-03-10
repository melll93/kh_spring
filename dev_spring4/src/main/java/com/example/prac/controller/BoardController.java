package com.example.prac.controller;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.multiaction.MultiActionController;

import com.example.prac.logic.BoardLogic;
import com.example.prac.util.HashMapBinder;

//�솢 �굹留� �긽�냽�쓣 諛쏆븘�빞 �븯�굹�슂? - 
public class BoardController extends MultiActionController {
	private static final Logger logger = LoggerFactory.getLogger(BoardController.class);
	private BoardLogic boardLogic = null;
	//setter媛앹껜二쇱엯踰� - �옄諛붿퐫�뱶�뿉�꽌 媛앹껜二쇱엯�쓣 泥섎━�븷 �븣 �궗�슜�븿
	public void setBoardLogic(BoardLogic boardLogic) {
		this.boardLogic = boardLogic;
	}
	//void doGet(req,res)-> ActionForward execute(req,res) -> String execute(req,res) -> String XXXX(req,res)
	public ModelAndView boardList(HttpServletRequest req, HttpServletResponse res)
	{
		logger.info("boardList호출");
		List<Map<String,Object>> bList = null;
		Map<String, Object> pMap = new HashMap<>();
		HashMapBinder hmb = new HashMapBinder(req);
		hmb.bind(pMap);
		bList = boardLogic.boardList(pMap);
		ModelAndView mav = new ModelAndView();
		mav.setViewName("board3/boardList");
		mav.addObject("bList", bList);
		//
		return mav;
	}
}
