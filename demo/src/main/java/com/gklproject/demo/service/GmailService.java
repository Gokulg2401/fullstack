package com.gklproject.demo.service;

import org.springframework.stereotype.Service;

/**
 * GMAIL EMAIL SERVICE IMPLEMENTATION
 * 
 * This is a concrete implementation of EmailService interface.
 * Spring will automatically detect this as a bean and make it available for injection.
 */
@Service("gmailSmtpService")  // Bean name for @Qualifier
public class GmailService implements EmailService {
    
    @Override
    public void sendEmail(String to, String subject, String body) {
        System.out.println("📧 === GMAIL SERVICE ===");
        System.out.println("📮 To: " + to);
        System.out.println("📝 Subject: " + subject);
        System.out.println("💬 Body: " + body);
        System.out.println("✅ Email sent via Gmail SMTP!");
        System.out.println("🔧 Service Type: " + getServiceType());
        System.out.println();
    }
    
    @Override
    public String getServiceType() {
        return "Gmail SMTP Service";
    }
}
