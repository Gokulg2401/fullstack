package com.gklproject.demo.dto;

/**
 * SIMPLE DTO CLASS FOR DEMONSTRATION
 * Shows how @RequestBody works with POJOs
 */
public class NotificationRequest {
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
