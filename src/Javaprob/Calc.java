package Javaprob;
import java.util.Scanner;

public class Calc {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        int m1=sc.nextInt();
        int m2=sc.nextInt();
        int m3=sc.nextInt();
        int total=m1+m2+m3;
        float average=total/3f;
        System.out.println("First sub: " +m1+"\nSecond sub: "+m2+"\nThird Sub: "+m3+"\nTotal: "+total+"\nYour avg is: "+average);
        if (average>80){
            System.out.println("Grade A");

        }
        else if(average>65 && average<80)
        {
            System.out.println("Grade B");
        }
        else if(average>40 && average<65)
        {
            System.out.println("Grade C");
        }
        else{
            System.out.println("JUst pass");
        }
        sc.close();
    }
}
