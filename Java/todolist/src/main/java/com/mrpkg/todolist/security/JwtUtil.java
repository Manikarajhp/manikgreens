package com.mrpkg.todolist.security;

import java.util.Date;

import javax.crypto.SecretKey;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;

@Component
public class JwtUtil {
	
	private static final String SECRETE_KEY_STRING = "cd98b5099c603f4759d17d120e0135e6da801b4403fd71051e88ab7e4e9559c8";
	
	private final SecretKey SECRET_KEY = Keys.hmacShaKeyFor(SECRETE_KEY_STRING.getBytes());
	
	public String generateToken(UserDetails useDetails) {
		return Jwts.builder()
				.subject(useDetails.getUsername())
				.issuedAt(new Date())
				.expiration(new Date(System.currentTimeMillis() + 1000 *60 * 60))
				.signWith(SECRET_KEY, Jwts.SIG.HS256)
				.compact();
	}
	
	public boolean validateToken(String token, UserDetails userDetails) {
		return extractUsername(token).equals(userDetails.getUsername());
	}

	String extractUsername(String token) {
		return Jwts.parser() //value is decrypt
		.verifyWith(SECRET_KEY)
		.build()
		.parseSignedClaims(token) // it will decrypt the data 
		.getPayload() //entire data 
		.getSubject();
		
	}
	
}
