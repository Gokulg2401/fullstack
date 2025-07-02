package Javaprob;

public class condition {
    public static void main(String[] args) {
        int age=30;
        if(age>50){
          System.out.println("You're an teenager");  
        }
       else if (age>25 && age<35){
        System.out.println("You're an adult");
       }
       else if(age>18){
        System.out.println("You're an senior");
       }

    }
}


