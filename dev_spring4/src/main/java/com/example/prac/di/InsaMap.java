package com.example.prac.di;

import java.util.Map;

public class InsaMap {
	//@Autowried
	Map<String, String> insaMap = null;
	//?ƒ?„±? ê°ì²´(car.xml) ì£¼ì…ë²? ì½”ë“œ?? setterê°ì²´ ì£¼ì…ë²? ì½”ë“œê°? ?ˆ?‹¤
	//spring boot?—?„œ?Š” @Autowired ?–´?…¸?…Œ?´?…˜?œ¼ë¡? ?•„?š”ê°? ?—†?–´ì¡Œë‹¤ 
	//insaBean = new ArrayList<>();
	public void setInsaMap(Map<String, String> insaMap) {
		this.insaMap = insaMap;
	}
	
}
