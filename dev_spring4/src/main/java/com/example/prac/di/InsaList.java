package com.example.prac.di;

import java.util.List;

public class InsaList {
	//@Autowried
	List<String> insaBean = null;
	//?ƒ?„±? ê°ì²´(car.xml) ì£¼ì…ë²? ì½”ë“œ?? setterê°ì²´ ì£¼ì…ë²? ì½”ë“œê°? ?ˆ?‹¤
	//spring boot?—?„œ?Š” @Autowired ?–´?…¸?…Œ?´?…˜?œ¼ë¡? ?•„?š”ê°? ?—†?–´ì¡Œë‹¤ 
	//insaBean = new ArrayList<>();
	public void setInsaBean(List<String> insaBean) {
		this.insaBean = insaBean;
	}
	
}
