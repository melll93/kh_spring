package com.example.prac.di;

import java.util.List;

public class InsaList {
	//@Autowried
	List<String> insaBean = null;
	//??±? κ°μ²΄(car.xml) μ£Όμλ²? μ½λ?? setterκ°μ²΄ μ£Όμλ²? μ½λκ°? ??€
	//spring boot??? @Autowired ?΄?Έ??΄??Όλ‘? ??κ°? ??΄μ‘λ€ 
	//insaBean = new ArrayList<>();
	public void setInsaBean(List<String> insaBean) {
		this.insaBean = insaBean;
	}
	
}
