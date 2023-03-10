package com.example.prac.di;

import org.springframework.beans.factory.BeanFactory;
import org.springframework.beans.factory.xml.XmlBeanFactory;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.core.io.ClassPathResource;

public class SonataTest {
	public static void main(String args[]) {
		Sonata myCar = new Sonata(30, "2023년형 소나타",4);
		//myCar.carName = "2023년형 소나타";
		System.out.println(myCar.toString());
		
		ApplicationContext context = 
				new ClassPathXmlApplicationContext("com\\example\\demo\\di\\car.xml");
		Sonata himCar = (Sonata)context.getBean("himCar");//생성자 주입은 없음
		System.out.println(himCar.toString());
		Sonata herCar = (Sonata)context.getBean("herCar");
		System.out.println(herCar.toString());
		Sonata yourCar = (Sonata)context.getBean("yourCar");
		System.out.println(yourCar.toString());
		
		ClassPathResource resource = new ClassPathResource("com\\example\\demo\\di\\car.xml");
		BeanFactory factory = new XmlBeanFactory(resource);
		Sonata himCar2 = (Sonata)context.getBean("himCar");
		System.out.println(himCar2.toString());		
		
	}
}
/*
 * IoC(Inversion of Control)개념
 * :역제어란 객체의 생성 및 생명주기에 대한 제어권이 개발자에서 Container에게 넘어갔다는 것을 의미함
 * 기존 방식
 * 가바 기반으로 어플리케이션을 개발할 때 자바 객체를 생성하고 서로간의 의존관계를 
 * 연결시키는 작업에 대한 제어권은 개발되는 어플리케이션에 있음
 * 
 * 문제 제기
 * :컴포넌트 간의 결합도가 높아서 컴포넌트의 확장 및 재사용이 어려운 문제점 발생함
 * 
 * IoC사용시
 * 제어권이 Container에게 넘어가 객체의 생명주기를 Container가 전담하게 됨(예)서블릿, EJB)
 * 장점: 컴포넌트 간의 결합도가 낮아져 컴포넌트의 재사용 및 확장이 쉽고 컴포넌트의 
 * 의존관계 변경이 쉬움
 * 
 * Spring Container 는 BeanFactory와 ApplicationContext 라는 두 가지 유형의 컨테이너를 제공함
 * 
 * BeanFacotry
 * :객체를 관리하는 고급 설정 기법 제공
 * :spring-bean.jar에 속함
 * :Bean  들에 대한 생성, 소멸, Life cycle과 같은 
 * 컨테이너가 빈을 관리하기 위해 필요한 기본적 기능 제공
 * 게으른 .....
 * lazy loading
 * getBean()메소드가 호출 될 때 까지 Bean의 생성을 미룸
 * 
 * ApplicationContext
 * BeanFactory가 지원하는 모든 기능 제공함
 * Spring의 AOP기능, 메시지 지원, 자원 핸들링, 이벤트 위임
 * 웹 어플리케이션에서 사용하기 위한 WebApplicationContext와 같은 특정 ApplicationContext와의 
 * 통합 기능을 추가 제공함
 * 이른 인스턴스화
 * Context를 시작할 때 모든 Singleton Bean을 미리 로딩함으로써 
 * 그 빈이 필요할 때 즉시 사용할 수 있도록 보장해줌
 * -> 어플리케이션 동작시 Bean생성을 기다리지 않아도 됨
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */









