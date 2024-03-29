package com.example.demo.controller;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.example.demo.logic.MemberLogic;

@Controller
@RequestMapping("/member")
public class MemberController {
	Logger logger = LoggerFactory.getLogger(MemberController.class);

	@Autowired
	private MemberLogic memberLogic = null;

	@GetMapping("memberInsert")
	public String memberInsert(@RequestParam Map<String, Object> pMap) {
		logger.info("MemberController : memberInsert 호출");
		logger.info(pMap.toString());
		int result = 0; // 1이면 회원가입 성공, 0이면 가입실패
		result = memberLogic.memberInsert(pMap);
		return "redirect:./memberList";
	}

	@GetMapping("memberList")
	public String memberList(Model model, @RequestParam Map<String, Object> pMap) {
		logger.info("MemberController : memberList 호출");
		List<Map<String, Object>> mList = null;
		mList = memberLogic.memberList(pMap);
		model.addAttribute("mList", mList);
		//localhost:8000/jstl/memberAction.jsp[webapp]
		return "forward:/jstl/memberAction.jsp";
	}
}
