package com.mrpkg.todolist.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mrpkg.todolist.entity.TaskEntity;

public interface TaskRepository extends JpaRepository<TaskEntity, Integer> {
	 List<TaskEntity> findAllByuserid(int user_id);
}
