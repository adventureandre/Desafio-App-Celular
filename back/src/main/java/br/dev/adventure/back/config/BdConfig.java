package br.dev.adventure.back.config;

import javax.sql.DataSource;

import org.springframework.jdbc.core.JdbcTemplate;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.jdbc.datasource.DriverManagerDataSource;

@Configuration
public class BdConfig {

    @SuppressWarnings("null")
    @Bean
    public JdbcTemplate JdbcTemplate(DataSource dataSource){
        return new  JdbcTemplate(dataSource);
    };

    @Bean
    public DataSource dataSource(){
        DriverManagerDataSource dataSource = new DriverManagerDataSource();
        dataSource.setDriverClassName("com.mysql.cj.jdbc.Driver");
        dataSource.setUrl("jdbc:mysql://localhost:3306/vendas_api");
        dataSource.setUsername("root");
        dataSource.setPassword("12345");
        return dataSource;
    }
}
