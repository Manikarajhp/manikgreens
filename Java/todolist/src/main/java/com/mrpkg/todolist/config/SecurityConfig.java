package com.mrpkg.todolist.config;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.ProviderManager;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.DefaultSecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.mrpkg.todolist.security.JwtFilter;
import com.mrpkg.todolist.service.UserDetailService;


@Configuration
@EnableWebSecurity //TO CUSTOMIZE THE ACCESS CONTROLL
public class SecurityConfig {
	
	@Autowired
	private JwtFilter jwtFilter;
	
	@Bean
	public DefaultSecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
		http.authorizeHttpRequests(authz -> 
			authz.requestMatchers(HttpMethod.POST, "/api/users").permitAll()// post method api only allow
//			.requestMatchers(HttpMethod.PUT, "/api/users").permitAll()
			.requestMatchers("/api/users/**").authenticated()
			.anyRequest().permitAll()
		)
		.csrf(csrf -> csrf.disable()) //when a post method is call in form we use this. 
		.sessionManagement(sess -> sess.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
		//session management
		.addFilterBefore(jwtFilter, UsernamePasswordAuthenticationFilter.class);
		
		return http.build();
	}
	
	@Bean
	public UserDetailsService anotherUserDetailService() {
		return new UserDetailService();
		
	}
	
	@Bean
	public DaoAuthenticationProvider authenticationProvider() {
		DaoAuthenticationProvider authProvide = new DaoAuthenticationProvider();
		authProvide.setUserDetailsService((anotherUserDetailService()));
		authProvide.setPasswordEncoder(passwordEncoder());
		
		return authProvide;
	}
	
	@Bean
	public BCryptPasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}
	
	@Bean
	public AuthenticationManager authenticationManager() {
		return new ProviderManager(List.of(authenticationProvider()));
	}
}
