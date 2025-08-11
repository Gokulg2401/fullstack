package com.gklproject.demo.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gklproject.demo.dto.UserDTO;
import com.gklproject.demo.entity.User;
import com.gklproject.demo.repository.UserRepository;
@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @PostMapping("/register")
    public ResponseEntity<Map<String, Object>> register(@RequestBody UserDTO userDTO) {
        Map<String, Object> resp = new HashMap<>();
        if (userRepository.findByEmail(userDTO.getEmail()) != null) {
            resp.put("success", false);
            resp.put("message", "Email already exists");
            return ResponseEntity.status(HttpStatus.CONFLICT).body(resp);
        }
        User user = new User();
        user.setName(userDTO.getName());
        user.setEmail(userDTO.getEmail());
        user.setPassword(passwordEncoder.encode(userDTO.getPassword()));
        userRepository.save(user);

        resp.put("success", true);
        resp.put("message", "Registration successful");
        return ResponseEntity.ok(resp);
    }

    @PostMapping("/login")
    public ResponseEntity<Map<String, Object>> login(@RequestBody UserDTO userDTO) {
        Map<String, Object> resp = new HashMap<>();
        User user = userRepository.findByEmail(userDTO.getEmail());
        if (user != null && passwordEncoder.matches(userDTO.getPassword(), user.getPassword())) {
            resp.put("success", true);
            resp.put("message", "Login successful");
            resp.put("token", "jwt-token-" + System.currentTimeMillis());
            resp.put("user", Map.of(
                "id", user.getId(),
                "name", user.getName(),
                "email", user.getEmail()
            ));
            return ResponseEntity.ok(resp);
        }
        resp.put("success", false);
        resp.put("message", "Invalid credentials");
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(resp);
    }
}
