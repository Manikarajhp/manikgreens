package com.mrpkg.todolist.service;

import java.util.Collections;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Component;

import com.mrpkg.todolist.entity.UserEntity;
import com.mrpkg.todolist.exception.ResourceNotFound;
import com.mrpkg.todolist.repository.UserRepository;

@Component
public class UserDetailService implements UserDetailsService {
	
	@Autowired
	UserRepository userRepository;
	public UserDetails loadUserByUsername(String username) {
		UserEntity user = null;
		try {
			user = userRepository.findByUsername(username).orElseThrow(() -> new ResourceNotFound("User Not Found."));
		} catch (ResourceNotFound e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		return new User(user.getUsername(), user.getPassword(), Collections.singleton(new SimpleGrantedAuthority("User_Role")));
	}
}
