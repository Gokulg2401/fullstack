package com.gklproject.demo.controller;

import com.gklproject.demo.service.NotificationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Scope;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import jakarta.annotation.PostConstruct;
import jakarta.annotation.PreDestroy;
import java.util.HashMap;
import java.util.Map;

/**
 * SPRING ANNOTATIONS COMPREHENSIVE DEMO
 * 
 * This class demonstrates the most important Spring annotations and their usage.
 * Annotations are metadata that provide information about the program but are not part
 * of the program itself. Spring uses annotations for:
 * 
 * 1. Bean Definition and Management
 * 2. Dependency Injection
 * 3. Web Layer Configuration
 * 4. Lifecycle Management
 * 5. Configuration and Properties
 * 6. Validation and Security
 */

// === CORE SPRING ANNOTATIONS ===

@RestController  // @Controller + @ResponseBody - Makes this a REST API controller
@RequestMapping("/api/spring-demo")  // Base URL mapping for all endpoints in this controller
@Scope("singleton")  // Bean scope - singleton (default), prototype, request, session
public class SpringAnnotationsController {

    // === DEPENDENCY INJECTION ANNOTATIONS ===
    
    @Autowired  // Automatic dependency injection by Spring IoC container
    private NotificationService notificationService;
    
    // === CONFIGURATION ANNOTATIONS ===
    
    @Value("${app.name:Spring Demo App}")  // Inject property value with default
    private String applicationName;
    
    @Value("${app.version:1.0.0}")
    private String applicationVersion;
    
    // === LIFECYCLE ANNOTATIONS ===
    
    @PostConstruct  // Called after dependency injection is complete
    public void init() {
        System.out.println("\n🚀 === SPRING ANNOTATIONS CONTROLLER INITIALIZED ===");
        System.out.println("📱 Application: " + applicationName);
        System.out.println("🔢 Version: " + applicationVersion);
        System.out.println("✅ All dependencies injected and ready!");
    }
    
    @PreDestroy  // Called before bean destruction
    public void cleanup() {
        System.out.println("🧹 SpringAnnotationsController is being destroyed...");
    }
    
    // === WEB LAYER ANNOTATIONS ===
    
    /**
     * GET endpoint demonstrating @GetMapping and @RequestParam
     */
    @GetMapping("/hello")  // HTTP GET mapping
    public ResponseEntity<Map<String, Object>> sayHello(
            @RequestParam(value = "name", defaultValue = "Spring Developer") String name,
            @RequestParam(value = "includeInfo", defaultValue = "true") boolean includeInfo) {
        
        Map<String, Object> response = new HashMap<>();
        response.put("message", "Hello, " + name + "!");
        response.put("application", applicationName);
        response.put("version", applicationVersion);
        
        if (includeInfo) {
            response.put("annotations_used", new String[]{
                "@RestController", "@GetMapping", "@RequestParam", "@Value", "@Autowired"
            });
        }
        
        return ResponseEntity.ok(response);
    }
    
    /**
     * POST endpoint demonstrating @PostMapping and @RequestBody
     */
    @PostMapping("/notify")  // HTTP POST mapping
    public ResponseEntity<Map<String, String>> sendNotification(
            @RequestBody NotificationRequest request) {  // Automatic JSON to Object conversion
        
        System.out.println("\n📨 === NOTIFICATION REQUEST RECEIVED ===");
        System.out.println("📧 Recipient: " + request.getRecipient());
        System.out.println("💬 Message: " + request.getMessage());
        
        // Use injected service (demonstrates DI in action)
        notificationService.sendNotification(request.getRecipient(), request.getMessage());
        
        Map<String, String> response = new HashMap<>();
        response.put("status", "success");
        response.put("message", "Notification sent successfully!");
        response.put("recipient", request.getRecipient());
        
        return ResponseEntity.ok(response);
    }
    
    /**
     * PUT endpoint demonstrating @PathVariable
     */
    @PutMapping("/user/{userId}/update")  // HTTP PUT with path variable
    public ResponseEntity<Map<String, Object>> updateUser(
            @PathVariable("userId") Long userId,  // Extract from URL path
            @RequestParam("action") String action) {
        
        Map<String, Object> response = new HashMap<>();
        response.put("userId", userId);
        response.put("action", action);
        response.put("status", "User updated successfully");
        response.put("annotation_demo", "@PathVariable extracts 'userId' from URL path");
        
        return ResponseEntity.ok(response);
    }
    
    /**
     * DELETE endpoint demonstrating multiple annotations
     */
    @DeleteMapping("/cleanup/{type}")
    public ResponseEntity<String> cleanup(
            @PathVariable String type,
            @RequestHeader(value = "Authorization", required = false) String authHeader) {
        
        System.out.println("🗑️  Cleanup requested for: " + type);
        if (authHeader != null) {
            System.out.println("🔐 Authorization header present: " + authHeader);
        }
        
        return ResponseEntity.ok("Cleanup completed for: " + type);
    }
    
    /**
     * Endpoint to demonstrate IoC container and DI in action
     */
    @GetMapping("/demo/ioc")
    public ResponseEntity<Map<String, Object>> demonstrateIoC() {
        
        System.out.println("\n🎭 === LIVE IoC CONTAINER DEMO ===");
        
        // Show dependency information
        notificationService.showDependencyInfo();
        
        // Send a test notification
        notificationService.sendNotification("demo@example.com", "This is a live IoC demo!");
        
        Map<String, Object> response = new HashMap<>();
        response.put("demo", "IoC Container and Dependency Injection");
        response.put("explanation", "Check console output to see Spring IoC container in action!");
        response.put("key_points", new String[]{
            "NotificationService was automatically injected via @Autowired",
            "EmailService implementations were created by Spring IoC container",
            "Dependencies were resolved and injected automatically",
            "No manual object creation required!"
        });
        
        return ResponseEntity.ok(response);
    }
    
    /**
     * Comprehensive annotations info endpoint
     */
    @GetMapping("/annotations/info")
    public ResponseEntity<Map<String, Object>> getAnnotationsInfo() {
        
        Map<String, Object> response = new HashMap<>();
        
        // Core Spring Annotations
        Map<String, String> coreAnnotations = new HashMap<>();
        coreAnnotations.put("@Component", "Generic stereotype for Spring-managed component");
        coreAnnotations.put("@Service", "Specialization of @Component for service layer");
        coreAnnotations.put("@Repository", "Specialization of @Component for data access layer");
        coreAnnotations.put("@Controller", "Specialization of @Component for web controllers");
        coreAnnotations.put("@RestController", "@Controller + @ResponseBody for REST APIs");
        
        // Dependency Injection Annotations
        Map<String, String> diAnnotations = new HashMap<>();
        diAnnotations.put("@Autowired", "Automatic dependency injection");
        diAnnotations.put("@Qualifier", "Specify which bean to inject when multiple candidates exist");
        diAnnotations.put("@Primary", "Mark a bean as primary choice for injection");
        diAnnotations.put("@Value", "Inject property values from configuration files");
        
        // Web Annotations
        Map<String, String> webAnnotations = new HashMap<>();
        webAnnotations.put("@RequestMapping", "Map HTTP requests to handler methods");
        webAnnotations.put("@GetMapping", "Shortcut for @RequestMapping(method = GET)");
        webAnnotations.put("@PostMapping", "Shortcut for @RequestMapping(method = POST)");
        webAnnotations.put("@RequestParam", "Extract query parameters from request");
        webAnnotations.put("@PathVariable", "Extract variables from URL path");
        webAnnotations.put("@RequestBody", "Convert HTTP request body to Java object");
        
        response.put("core_annotations", coreAnnotations);
        response.put("dependency_injection", diAnnotations);
        response.put("web_annotations", webAnnotations);
        response.put("application", applicationName);
        response.put("message", "This controller demonstrates all these annotations in action!");
        
        return ResponseEntity.ok(response);
    }
}

/**
 * SIMPLE DTO CLASS FOR DEMONSTRATION
 * Shows how @RequestBody works with POJOs
 */
class NotificationRequest {
    private String recipient;
    private String message;
    
    // Default constructor required for JSON deserialization
    public NotificationRequest() {}
    
    public NotificationRequest(String recipient, String message) {
        this.recipient = recipient;
        this.message = message;
    }
    
    // Getters and setters
    public String getRecipient() { return recipient; }
    public void setRecipient(String recipient) { this.recipient = recipient; }
    
    public String getMessage() { return message; }
    public void setMessage(String message) { this.message = message; }
}
