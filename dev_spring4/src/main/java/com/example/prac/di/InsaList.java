package com.example.prac.di;

import java.util.List;

public class InsaList {
	//@Autowried
	List<String> insaBean = null;
	//?��?��?�� 객체(car.xml) 주입�? 코드?? setter객체 주입�? 코드�? ?��?��
	//spring boot?��?��?�� @Autowired ?��?��?��?��?��?���? ?��?���? ?��?��졌다 
	//insaBean = new ArrayList<>();
	public void setInsaBean(List<String> insaBean) {
		this.insaBean = insaBean;
	}
	
}
