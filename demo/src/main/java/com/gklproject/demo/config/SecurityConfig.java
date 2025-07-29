package com.gklproject.demo.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .csrf(csrf -> csrf.disable())
            .authorizeHttpRequests(authz -> authz
                // Allows anyone to access the frontend app shell and assets
                .requestMatchers("/", "/index.html", "/static/**", "/css/**", "/js/**", "/assets/**", "/favicon.ico").permitAll()
                // Allows unauthenticated access to login and register
                .requestMatchers("/api/auth/login", "/api/auth/register").permitAll()
                // Everything else
                .anyRequest().authenticated()
            )
            .headers(headers -> headers.frameOptions(frameOptionsConfig -> frameOptionsConfig.disable()));
        return http.build();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}

