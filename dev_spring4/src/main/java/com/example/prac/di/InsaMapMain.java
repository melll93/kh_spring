package com.example.prac.di;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class InsaMapMain {

	public static void main(String[] args) {
		ApplicationContext context = 
				new ClassPathXmlApplicationContext("com\\example\\prac\\di\\insaMap.xml");
		InsaMap insaMap = (InsaMap)context.getBean("insaMap");
			System.out.println(insaMap.insaMap);

	}

}
