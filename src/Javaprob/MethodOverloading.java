 package Javaprob;

class MethodOverloading {
    int add(int a,int b){
        return a+b;
    }
    double add(double a,double b){
        return a+b;
    }
    float add(float a,float b){
        return a+b;
    }
    public static void main(String[] args) {
        MethodOverloading MO= new MethodOverloading();
        System.out.println("The addition is: "+MO.add(986, 898));
        System.out.println("The add is: "+MO.add(981,10));
        System.out.println("THe add is: "+MO.add(98899.7f, 10.9f));
    }
    
}