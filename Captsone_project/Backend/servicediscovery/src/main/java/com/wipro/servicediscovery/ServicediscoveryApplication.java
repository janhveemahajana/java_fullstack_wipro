package com.wipro.servicediscovery;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.server.EnableEurekaServer;

@SpringBootApplication //tells Spring this is the main class to start from
@EnableEurekaServer  //makes this app act as a Eureka Discovery Server
public class ServicediscoveryApplication {

	public static void main(String[] args) {
		SpringApplication.run(ServicediscoveryApplication.class, args); //helps to run Spring Boot apps
	}

}
