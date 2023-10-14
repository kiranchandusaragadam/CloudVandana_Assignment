import java.util.*;

public class Problem2 {

    public static int getVal(char c) {
        switch (c) {
            case 'I':
                return 1;
            case 'V':
                return 5;
            case 'X':
                return 10;
            case 'L':
                return 50;
            case 'C':
                return 100;
            case 'D':
                return 500;
            default:
                return 1000;
        }
    }

    public static int RomanToInteger(String roman) {
        int n = roman.length();
        // make method that returns integer value of given roman digit
        int res = getVal(roman.charAt(n - 1));

        for (int i = n - 2; i >= 0; i--) {
            // if ith value is less than (i+1)th value then subtract it from result
            // else add it to the result
            int i_val = getVal(roman.charAt(i));
            if (i_val < getVal(roman.charAt(i + 1))) {
                res -= i_val;
            } else {
                res += i_val;
            }
        }

        return res;
    }

    public static void main(String[] args) {
        // take a Roman number as user input and convert it to an Integer

        Scanner sc = new Scanner(System.in);
        // get roman number from user
        String roman = sc.next();

        // make a function to convert it to integer
        int ans = RomanToInteger(roman);

        System.out.print(ans);

        sc.close();
    }
}
