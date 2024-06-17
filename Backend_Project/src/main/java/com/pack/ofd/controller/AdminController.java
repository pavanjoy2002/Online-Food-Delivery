package com.pack.ofd.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.pack.ofd.model.Admin;
import com.pack.ofd.model.Restaurant;
import com.pack.ofd.repository.AdminRepository;

@RestController
@CrossOrigin(origins = "http://localhost:1234")
public class AdminController {

	@Autowired
	private AdminRepository adminRepository;
	
	@PostMapping("/adminregister")
	Admin newAdmin(@RequestBody Admin newAdmin) {
		return adminRepository.save(newAdmin);
	}
	
	@GetMapping("/admindetails")
	List<Admin> getAllAdminDetails(){
		return adminRepository.findAll();
	}
}
