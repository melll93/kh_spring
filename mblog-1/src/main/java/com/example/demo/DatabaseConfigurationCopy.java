//package com.example.demo;
//
//import javax.sql.DataSource;
//import org.apache.ibatis.session.SqlSessionFactory;
//import org.apache.logging.log4j.LogManager;
//import org.apache.logging.log4j.Logger;
//import org.mybatis.spring.SqlSessionFactoryBean;
//import org.mybatis.spring.SqlSessionTemplate;
//import org.mybatis.spring.annotation.MapperScan;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.context.properties.ConfigurationProperties;
//import org.springframework.context.ApplicationContext;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.context.annotation.PropertySource;
//import com.zaxxer.hikari.HikariConfig;
//import com.zaxxer.hikari.HikariDataSource;
//
//@Configuration
//@PropertySource("classpath:/application.properties") // classpath -> resource ->log4j.properties
//public class DatabaseConfigurationCopy {
//	private static final Logger logger = LogManager.getLogger(DatabaseConfiguration.class);
//
//	@Bean
//	@ConfigurationProperties(prefix = "spring.datasource.hikari") // application.properties의 접두어
//	public HikariConfig hikariConfig() {// 인스턴스화
//		return new HikariConfig(); // 생성자 호출 - 메모리 로딩 - 변수와 메소드를 누릴 수 있음
//	}
//
//	@Bean
//	public DataSource dataSource() {
//		DataSource dataSource = new HikariDataSource(hikariConfig());
//		logger.info("datasource : {}", dataSource);
//		return dataSource;
//	}
//
//	@Autowired
//	private ApplicationContext applicationContext; // 빈관리 - 이른 인스턴스화 -BeanFactory의 자손 클래스임 - 그래서 기능은 더 많다.
//	
//	@Bean
//	public SqlSessionFactory sqlSessionFactory(DataSource dataSource) throws Exception {
//		SqlSessionFactoryBean sqlSessionFactoryBean = new SqlSessionFactoryBean();
//		sqlSessionFactoryBean.setDataSource(dataSource);
//        sqlSessionFactoryBean.setMapperLocations(applicationContext.getResources("classpath:/mapper/**/*.xml"));
//		return sqlSessionFactoryBean.getObject();
//	}
//
//	
//	@Bean
//	public SqlSessionTemplate sqlSessionTemplate(SqlSessionFactory sqlSessionFactory) {
//		return new SqlSessionTemplate(sqlSessionFactory);
//	}
//}