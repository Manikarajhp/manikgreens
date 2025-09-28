package com.mrpkg.todolist.controller;

import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mrpkg.todolist.entity.UserEntity;
import com.mrpkg.todolist.repository.UserRepository;
import com.mrpkg.todolist.security.JwtUtil;


@RestController
@RequestMapping("/auth")
public class AuthController {
	
	public static int loginUserId = 0;
	
	@Autowired
	private AuthenticationManager authManager;
	
	@Autowired
	private JwtUtil jwtUtil;
	
	@Autowired
	private UserRepository userRepository;
	
	@PostMapping("/login")
	public ResponseEntity<Map<String, String>> login(@RequestBody UserEntity user) {
		//authenticate the user
		// for that we need authenticate manager
		try {
			
			Authentication authentication =  authManager.authenticate(new UsernamePasswordAuthenticationToken(user.getUsername(), user.getPassword()));
			
			UserDetails userDetails = (UserDetails)authentication.getPrincipal(); //we get the authenticated user details
			
			String token = jwtUtil.generateToken(userDetails); // create the token for got token
			
			Optional<UserEntity> userData = userRepository.findByUsername(user.getUsername());
			
			loginUserId = userData.get().getId();
			
			System.out.println("loginid = " + loginUserId);
			
			return ResponseEntity.ok(Map.of("token", token));
			
		} catch (Exception e){
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(Map.of("Error" , "Invalid Username or password"));
		}
		
				
	}
	
}
