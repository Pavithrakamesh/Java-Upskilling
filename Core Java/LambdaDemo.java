import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Scanner;

public class LambdaDemo {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);
        List<String> names = new ArrayList<>();

        System.out.print("How many names do you want to enter? ");
        int n = sc.nextInt();
        sc.nextLine(); // consume newline

        for (int i = 0; i < n; i++) {
            System.out.print("Enter name: ");
            String name = sc.nextLine();
            names.add(name);
        }

        // Sort using Lambda Expression
        Collections.sort(names, (a, b) -> a.compareTo(b));

        System.out.println("\nSorted List:");
        for (String name : names) {
            System.out.println(name);
        }

        sc.close();
    }
}