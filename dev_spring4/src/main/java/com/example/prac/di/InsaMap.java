package com.example.prac.di;

import java.util.Map;

public class InsaMap {
	//@Autowried
	Map<String, String> insaMap = null;
	//??±? κ°μ²΄(car.xml) μ£Όμλ²? μ½λ?? setterκ°μ²΄ μ£Όμλ²? μ½λκ°? ??€
	//spring boot??? @Autowired ?΄?Έ??΄??Όλ‘? ??κ°? ??΄μ‘λ€ 
	//insaBean = new ArrayList<>();
	public void setInsaMap(Map<String, String> insaMap) {
		this.insaMap = insaMap;
	}
	
}
