package com.mrpkg.todolist.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name  = "todotasks")
public class TaskEntity {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;//used to crud for task
	private int userid;
	private String task;
	private String description;
	private String due_date;
	private String status;
	
	public TaskEntity(int id, int user_id, String task, String description, String due_date, String status) {
		super();
		this.id = id;
		this.userid = user_id;
		this.task = task;
		this.description = description;
		this.due_date = due_date;
		this.status = status;
	}

	public TaskEntity() {
		super();
		// TODO Auto-generated constructor stub
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getUser_id() {
		return userid;
	}

	public void setUser_id(int user_id) {
		this.userid = user_id;
	}

	public String getTask() {
		return task;
	}

	public void setTask(String task) {
		this.task = task;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getDue_date() {
		return due_date;
	}

	public void setDue_date(String due_date) {
		this.due_date = due_date;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}
	
	
	
}
