package com.mrpkg.todolist.model;

public class Task {
	
	private int id;
	private int user_id;
	private String task;
	private String description;
	private String due_date;
	private String status;
	
	public Task(int id, int user_id, String task, String description, String due_date, String status) {
		super();
		this.id = id;
		this.user_id = user_id;
		this.task = task;
		this.description = description;
		this.due_date = due_date;
		this.status = status;
	}
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public int getUser_id() {
		return user_id;
	}
	public void setUser_id(int user_id) {
		this.user_id = user_id;
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
