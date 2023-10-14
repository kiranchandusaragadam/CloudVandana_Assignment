import java.util.*;

public class Problem1 {
    public static void main(String[] args) {
        // creating an array with specified values
        int[] arr = {1, 2, 3, 4, 5, 6, 7};

        // now shuffle the array using random class
        Random rd = new Random();

        // iterate over the array and shuffle it
        for(int i=arr.length-1; i>0; i--){
            // get random index
            int idx = rd.nextInt(i+1);

            int temp = arr[i];
            arr[i] = arr[idx];
            arr[idx] = temp;
        }

        // print array
        for(int x: arr){
            System.out.print(x+" ");
        }
    }
}
