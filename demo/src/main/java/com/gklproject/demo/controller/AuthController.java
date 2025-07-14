package com.gklproject.demo.controller;

import com.gklproject.demo.model.User;
import com.gklproject.demo.repository.UserRepository;
import com.gklproject.demo.security.JWTUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "*")
public class AuthController {

    @Autowired
    private UserRepository userRepo;

    @Autowired
    private JWTUtil jwtUtil;

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody User user) {
        if (userRepo.findByEmail(user.getEmail()).isPresent()) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body("User already exists!");
        }
        userRepo.save(user);
        return ResponseEntity.ok("User registered successfully");
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody User loginReq) {
        Optional<User> optionalUser = userRepo.findByEmail(loginReq.getEmail());
        if (optionalUser.isEmpty() || !optionalUser.get().getPassword().equals(loginReq.getPassword())) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
        }
        String token = jwtUtil.generateToken(loginReq.getEmail());
        return ResponseEntity.ok(Map.of("token", token));
    }
}
