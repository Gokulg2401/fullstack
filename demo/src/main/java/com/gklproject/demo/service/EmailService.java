package com.gklproject.demo.service;

import org.springframework.stereotype.Service;

/**
 * DEPENDENCY INJECTION DEMO - Part 1: Service Interface
 * 
 * This demonstrates Spring's Dependency Injection (DI) concept.
 * DI is a design pattern where objects receive their dependencies from external sources
 * rather than creating them internally.
 * 
 * Benefits of DI:
 * 1. Loose coupling between classes
 * 2. Easier testing (can inject mock dependencies)
 * 3. Better maintainability and flexibility
 * 4. Single Responsibility Principle adherence
 */
public interface EmailService {
    void sendEmail(String to, String subject, String body);
    String getServiceType();
}

/**
 * CONCRETE IMPLEMENTATION 1: Gmail Service
 * This class will be managed by Spring's IoC container
 */
@Service("gmailService")
class GmailEmailService implements EmailService {
    
    @Override
    public void sendEmail(String to, String subject, String body) {
        // Simulate sending email via Gmail
        System.out.println("📧 Sending email via GMAIL:");
        System.out.println("To: " + to);
        System.out.println("Subject: " + subject);
        System.out.println("Body: " + body);
        System.out.println("✅ Email sent successfully via Gmail!\n");
    }
    
    @Override
    public String getServiceType() {
        return "Gmail Email Service";
    }
}

/**
 * CONCRETE IMPLEMENTATION 2: Outlook Service
 * Another implementation to demonstrate polymorphism with DI
 */
@Service("outlookService")
class OutlookEmailService implements EmailService {
    
    @Override
    public void sendEmail(String to, String subject, String body) {
        // Simulate sending email via Outlook
        System.out.println("📧 Sending email via OUTLOOK:");
        System.out.println("To: " + to);
        System.out.println("Subject: " + subject);
        System.out.println("Body: " + body);
        System.out.println("✅ Email sent successfully via Outlook!\n");
    }
    
    @Override
    public String getServiceType() {
        return "Outlook Email Service";
    }
}
