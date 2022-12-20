package com.app.controller;

import java.util.HashMap;

import java.util.List;
import java.util.Map;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.CrossOrigin;

import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.web.bind.annotation.PostMapping;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.web.bind.annotation.RestController;


import com.app.model.User;
import com.app.repository.UserRepository;

import org.springframework.http.MediaType;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;




@RestController
@RequestMapping("/api")
public class UserController
{
	
	private static final Logger LOGGER = LogManager.getLogger(UserController.class);
	
	
	@Autowired
	private UserRepository userRepository;
	/*
	 * @Autowired RestTemplate restTemplate;
	 */
	
	
	// fetch
	@CrossOrigin
	@GetMapping("/users")
	public List<User> getAllUsers()
	{
				return userRepository.findAll();
	}


	// create
	//@PostMapping("/users")
	@CrossOrigin
	@PostMapping(value = "/users", consumes = MediaType.APPLICATION_JSON_VALUE)
	public User createUser(@Valid @RequestBody User user)
	{
		return userRepository.save(user);
	}


	
	


}
