package com.example.prac.di;

import java.util.List;

public class InsaList {
	//@Autowried
	List<String> insaBean = null;
	//생성자 객체(car.xml) 주입법 코드와 setter객체 주입법 코드가 있다
	//spring boot에서는 @Autowired 어노테이션으로 필요가 없어졌다 
	//insaBean = new ArrayList<>();
	public void setInsaBean(List<String> insaBean) {
		this.insaBean = insaBean;
	}
	
}
