package com.mrpkg.todolist.controller;

import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mrpkg.todolist.entity.UserEntity;
import com.mrpkg.todolist.exception.ResourceNotFound;
import com.mrpkg.todolist.repository.UserRepository;

@RestController
@RequestMapping("/api/users")
public class UserController extends AuthController {
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	
	@GetMapping
	public Optional<UserEntity> GetAllUsers() {
		return userRepository.findById(loginUserId);
	}
	
	@PostMapping
	public UserEntity addNewUser(@RequestBody UserEntity user) {
		user.setPassword(passwordEncoder.encode(user.getPassword()));
		return userRepository.save(user);
	}
	
	@DeleteMapping
	public ResponseEntity<Object> deleteUser() throws ResourceNotFound {
		UserEntity userData = userRepository.findById(loginUserId).orElseThrow(() -> new ResourceNotFound("User Not Found."));
		userRepository.delete(userData);
		return ResponseEntity.ok().build();
	}
}
