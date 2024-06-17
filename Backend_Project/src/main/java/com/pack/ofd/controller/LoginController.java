package com.pack.ofd.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.pack.ofd.model.User;
import com.pack.ofd.service.UserService;

@RestController
@RequestMapping("/api/login")
public class LoginController {

    @Autowired
    private UserService userService;

    @PostMapping("/{userType}")
    public ResponseEntity<?> login(@PathVariable String userType,
                                   @RequestParam String email,
                                   @RequestParam String password) {
        try {
            User user = userService.login(userType, email, password);
            return ResponseEntity.ok().body("Login successful");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Login failed: " + e.getMessage());
        }
    }
}


