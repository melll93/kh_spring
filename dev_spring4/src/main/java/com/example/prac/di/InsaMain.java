package com.example.prac.di;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class InsaMain {

	public static void main(String[] args) {
		ApplicationContext context = 
				new ClassPathXmlApplicationContext("com\\example\\prac\\di\\insaBean.xml");
		InsaList insaList = (InsaList)context.getBean("insa");
		System.out.println(insaList.insaBean);
		//
		for(int i=0;i<insaList.insaBean.size();i++){
			System.out.println(insaList.insaBean.get(i));
		}

	}

}
