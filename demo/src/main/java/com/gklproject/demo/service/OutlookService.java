package com.gklproject.demo.service;

import org.springframework.stereotype.Service;

/**
 * OUTLOOK EMAIL SERVICE IMPLEMENTATION
 * 
 * Another concrete implementation of EmailService interface.
 * Demonstrates how Spring can manage multiple implementations of the same interface.
 */
@Service("outlookSmtpService")  // Bean name for @Qualifier
public class OutlookService implements EmailService {
    
    @Override
    public void sendEmail(String to, String subject, String body) {
        System.out.println("📧 === OUTLOOK SERVICE ===");
        System.out.println("📮 To: " + to);
        System.out.println("📝 Subject: " + subject);
        System.out.println("💬 Body: " + body);
        System.out.println("✅ Email sent via Outlook Exchange!");
        System.out.println("🔧 Service Type: " + getServiceType());
        System.out.println();
    }
    
    @Override
    public String getServiceType() {
        return "Outlook Exchange Service";
    }
}
