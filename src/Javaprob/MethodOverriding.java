package Javaprob;
class Bank{
    int rate(){
        return 19;
    }
}
class CUB extends Bank{
    int rate(){
        return 50;
    }
}
class Axis extends Bank{
    int rate(){
        return 70;
    }
}
public class MethodOverriding {
    public static void main(String[] args) {
        Bank b=new Bank();
        CUB c=new CUB();
        Axis a=new Axis();
        System.out.println("OG Bank rate is: "+b.rate());
        System.out.println("Cub Bank rate is: "+c.rate());
        System.out.println("Axis Bank rate is: "+a.rate());
    }
    
}
