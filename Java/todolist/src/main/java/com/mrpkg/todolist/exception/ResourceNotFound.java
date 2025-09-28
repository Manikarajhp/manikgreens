package com.mrpkg.todolist.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value  = HttpStatus.NOT_FOUND)
public class ResourceNotFound extends Exception {

	public ResourceNotFound(String s) {
		super(s);
	}
	
}
