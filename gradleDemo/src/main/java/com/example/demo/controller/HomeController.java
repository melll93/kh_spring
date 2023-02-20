package com.example.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

// Controller 계층을 의미하는 어노테이션 추가 => request와 response 를 누릴 수 있다.
// 단순히 Bean을 관리받는다라는 점 외에도 요청객체와 응답객체를 주입받을 수 있음.
@Controller
@RequestMapping("home/*") // web.xml 대신에 자바 코드를 직접 추가할 수 있다. - 전체 Bean 목록은 볼 수 없음.
public class HomeController { // URL-Pattern에 등록했던 URL 주소 값으로 추가함.

	// Test URL : http://localhost:7000/home/index
	@GetMapping("index")
	public String home() {
		return "home/index";
	}
}
