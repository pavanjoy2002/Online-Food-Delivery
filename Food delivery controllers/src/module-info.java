package controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import models.User;

@RestController
@RequestMapping("/api")
public class FoodDeliveryController {

	@PostMapping("/")
	public ResponseEntity<User> storeUserDetails(@ModelAttribute User user){
		
		String userName = "name";
		String email = "email";
		Long phoneNumber = (long) 793754;
		String password = "pass";
		String registrationMethod = "customer";
		
		user.setUserName(userName);
		user.setEmail(email);
		user.setPhoneNum(phoneNumber);
		user.setRegistrationMethod(registrationMethod);
		user.setPassword(password);
		
		//dao.storeUserDetails(user);
		
		return ResponseEntity.ok(user);
	}
}