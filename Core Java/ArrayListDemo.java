import java.util.ArrayList;
import java.util.Scanner;
public class ArrayListDemo{
    public static void main(String[] args) {
        ArrayList<String> studentNames = new ArrayList<>();
        Scanner sc = new Scanner(System.in);
        System.out.print("How many names do you want to enter? ");
        int n = sc.nextInt();
        sc.nextLine();
        for (int i = 0; i < n; i++) {
            System.out.print("Enter student name: ");
            String name = sc.nextLine();
            studentNames.add(name);
        }
        System.out.println("\nStudent Names:");
        for (String name : studentNames) {
            System.out.println(name);
        }
        sc.close();
    }
}
