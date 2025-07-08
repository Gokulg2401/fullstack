package Javaprob;

//Upper half
public class Diamond {
    public static void main(String[] args) {
       int n = 6;

{  // First block for top half
    for (int i = 1; i <= n; i++) {
        for (int j = i; j < n; j++) {
            System.out.print(" ");
        }
        for (int k = 1; k <= i; k++) {
            System.out.print("* ");
        }
        System.out.println();
    }
}

{  // Second block for bottom half
    for (int i = n - 1; i >= 1; i--) {
        for (int j = n; j > i; j--) {
            System.out.print(" ");
        }
        for (int k = 1; k <= i; k++) {
            System.out.print("* ");
        }
        System.out.println();
    }
}
 
}
    }
    
