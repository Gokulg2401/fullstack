package com.gklproject.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

/**
 * INVERSION OF CONTROL (IoC) CONTAINER DEMO
 * 
 * This class demonstrates how Spring's IoC Container manages object creation,
 * dependency resolution, and lifecycle management.
 * 
 * IoC Container Benefits:
 * 1. Automatic object creation and management
 * 2. Dependency resolution at runtime
 * 3. Lifecycle management (creation, initialization, destruction)
 * 4. Configuration management
 * 5. Singleton pattern enforcement (by default)
 * 
 * Key IoC Concepts:
 * - Container manages object creation (not the developer)
 * - Dependencies are "injected" rather than "created"
 * - Objects are configured externally (via annotations or XML)
 */
@Service
public class NotificationService {
    
    // FIELD INJECTION - Spring IoC container will inject the dependency
    // The container looks for a bean of type EmailService and injects it
    @Autowired
    @Qualifier("gmailService") // Specifies which implementation to inject
    private EmailService primaryEmailService;
    
    // CONSTRUCTOR INJECTION - Recommended approach (immutable dependencies)
    private final EmailService secondaryEmailService;
    
    // Constructor injection - Spring will call this constructor and provide dependencies
    // @Autowired is optional on constructors when there's only one constructor (Spring 4.3+)
    public NotificationService(@Qualifier("outlookService") EmailService secondaryEmailService) {
        this.secondaryEmailService = secondaryEmailService;
        System.out.println("🏗️  NotificationService created by Spring IoC Container");
        System.out.println("📦 Dependencies injected automatically:");
        System.out.println("   - Primary: " + (primaryEmailService != null ? "Pending injection" : "Not yet injected"));
        System.out.println("   - Secondary: " + secondaryEmailService.getServiceType());
    }
    
    // SETTER INJECTION - Alternative approach (mutable dependencies)
    private EmailService backupEmailService;
    
    @Autowired
    @Qualifier("gmailService")
    public void setBackupEmailService(EmailService backupEmailService) {
        this.backupEmailService = backupEmailService;
        System.out.println("🔧 Setter injection completed for backup service");
    }
    
    /**
     * Business method that uses injected dependencies
     * Notice: We never created EmailService objects manually!
     * Spring's IoC container handled everything for us.
     */
    public void sendNotification(String recipient, String message) {
        System.out.println("\n🔔 === NOTIFICATION SERVICE DEMO ===");
        System.out.println("📋 Sending notification to: " + recipient);
        
        // Use primary service (field injection)
        System.out.println("\n1️⃣  Using PRIMARY service (Field Injection):");
        primaryEmailService.sendEmail(recipient, "Notification", message);
        
        // Use secondary service (constructor injection)
        System.out.println("2️⃣  Using SECONDARY service (Constructor Injection):");
        secondaryEmailService.sendEmail(recipient, "Backup Notification", message);
        
        // Use backup service (setter injection)
        System.out.println("3️⃣  Using BACKUP service (Setter Injection):");
        backupEmailService.sendEmail(recipient, "Final Backup", message);
        
        System.out.println("🎉 All notifications sent successfully!");
        System.out.println("💡 Notice: All EmailService objects were created and managed by Spring IoC Container\n");
    }
    
    /**
     * Method to demonstrate IoC container's dependency management
     */
    public void showDependencyInfo() {
        System.out.println("\n📊 === IoC CONTAINER DEPENDENCY INFO ===");
        System.out.println("🏭 Container-managed dependencies:");
        System.out.println("   Primary Service: " + primaryEmailService.getServiceType());
        System.out.println("   Secondary Service: " + secondaryEmailService.getServiceType());
        System.out.println("   Backup Service: " + backupEmailService.getServiceType());
        System.out.println("✨ All objects created and wired by Spring IoC Container!");
    }
}
