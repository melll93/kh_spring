package com.example.demo.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.vo.MemberVO;

@RestController
@RequestMapping("/restful/*")
public class RestfulController {
	Logger logger = LoggerFactory.getLogger(RestfulController.class);

	 @GetMapping("{path}")
     public String main(@PathVariable String path) {
    //http://localhost:8000/restful/5
        logger.info("해시값 받아주는 어노테이션 : "+path);
        return String.valueOf(path);
     }
	
	//http://localhost:8000/restful/get?mem_id=kiwi&mem_pw=123&mem_name=키위
	@GetMapping("get")
	public String getTest(MemberVO mVO) {
		logger.info(mVO.toString());
		return "get, mem_id : " + mVO.getMem_id() + ", mem_pw : " + mVO.getMem_pw() + ", mem_name : " + mVO.getMem_name();
	}
	
	//http://localhost:8000/restful/post
	@PostMapping("post")
	public String postTest(@RequestBody MemberVO mVO) {
		logger.info(mVO.toString());
		return "post, mem_id : " + mVO.getMem_id() + ", mem_pw : " + mVO.getMem_pw() + ", mem_name : " + mVO.getMem_name();
	}
}
