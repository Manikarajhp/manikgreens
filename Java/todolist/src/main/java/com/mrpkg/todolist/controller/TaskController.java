package com.mrpkg.todolist.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mrpkg.todolist.entity.TaskEntity;
import com.mrpkg.todolist.exception.ResourceNotFound;
import com.mrpkg.todolist.repository.TaskRepository;

@RestController
@RequestMapping("/api/task")
public class TaskController extends AuthController {
	
	@Autowired
	TaskRepository taskRepository;
	
	
	@GetMapping
	public List<TaskEntity> getTasks() {
		return taskRepository.findAllByuserid(loginUserId);
	}
	
	@PostMapping
	public TaskEntity addTask(@RequestBody TaskEntity task) {
		task.setUser_id(loginUserId);
		return taskRepository.save(task);
	}
	
	@PutMapping("/{id}")
	public TaskEntity updateStatus(@PathVariable Integer id) throws ResourceNotFound {
		TaskEntity taskData = taskRepository.findById(id).orElseThrow(() -> new ResourceNotFound("User Not Found."));
		if(taskData.getUser_id() == loginUserId)
			taskData.setStatus("Completed");
		return taskRepository.save(taskData);
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<String> deleteTask(@PathVariable Integer id) throws ResourceNotFound {
		TaskEntity taskData = taskRepository.findById(id).orElseThrow(() -> new ResourceNotFound("User Not Found."));
		if(taskData.getUser_id() == loginUserId) {
			taskRepository.delete(taskData);
			return ResponseEntity.ok("Task Deleted");
		}
		return ResponseEntity.status(HttpStatus.FORBIDDEN).body("Data Didn't found or you can't delete the data.");
	}
}
