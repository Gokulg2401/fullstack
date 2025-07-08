package Javaprob;

public class Student {
        String name;
        int age;
        int total;
        Student (String name,int age,int total){
            this.name=name;
            this.age=age;
            this.total=total;
        }
        void display(){
            System.out.println("My name is: "+name+"\nMy age is: "+age+"\nMy total is: "+total);
        }

}
class Main{
    public static void main(String[] args) {
        Student s1=new Student("Gkl", 23,1200);
        s1.display();

    }
}

