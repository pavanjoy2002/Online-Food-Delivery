package com.pack.ofd.service;

import com.pack.ofd.model.User;

public interface UserService {
	
	User login(String userType, String email, String password) throws Exception;
}
