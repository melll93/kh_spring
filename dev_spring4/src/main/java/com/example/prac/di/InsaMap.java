package com.example.prac.di;

import java.util.Map;

public class InsaMap {
	//@Autowried
	Map<String, String> insaMap = null;
	//?��?��?�� 객체(car.xml) 주입�? 코드?? setter객체 주입�? 코드�? ?��?��
	//spring boot?��?��?�� @Autowired ?��?��?��?��?��?���? ?��?���? ?��?��졌다 
	//insaBean = new ArrayList<>();
	public void setInsaMap(Map<String, String> insaMap) {
		this.insaMap = insaMap;
	}
	
}
