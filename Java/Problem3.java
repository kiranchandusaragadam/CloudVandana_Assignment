import java.util.*;

public class Problem3 {
    public static boolean checkPangram(String s) {
        // take a freq array of size 26 to store freq of characters in given string
        int[] frArr = new int[26];

        // now convert string lower case
        s = s.toLowerCase();

        for (char ch : s.toCharArray()) {
            // if curr char is alphabet then store freq in array oherwise ignore curr char
            if (Character.isLetter(ch)) {
                frArr[ch - 'a']++;
            }
        }

        // now check whole array and if any character freq found as 0 then return false
        for (int x : frArr) {
            if (x < 1)
                return false;
        }

        return true;
    }

    public static void main(String[] args) {
        // check if the input is pangram or not
        Scanner sc = new Scanner(System.in);

        String str = sc.nextLine();

        // now check given input string in pangram or not using helper method
        if (checkPangram(str)) {
            System.out.print("YES, It's a Pangram");
        } else {
            System.out.print("NO, It's not a Pangram");
        }

        sc.close();
    }
}
