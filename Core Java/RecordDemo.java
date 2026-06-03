import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;
import java.util.stream.Collectors;

class Person {
    private String name;
    private int age;

    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public String getName() {
        return name;
    }

    public int getAge() {
        return age;
    }

    @Override
    public String toString() {
        return "Person{name='" + name + "', age=" + age + "}";
    }
}

public class RecordDemo {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);
        List<Person> people = new ArrayList<>();

        System.out.print("How many persons do you want to enter? ");
        int n = sc.nextInt();
        sc.nextLine();

        for (int i = 0; i < n; i++) {
            System.out.print("Enter Name: ");
            String name = sc.nextLine();

            System.out.print("Enter Age: ");
            int age = sc.nextInt();
            sc.nextLine();

            people.add(new Person(name, age));
        }

        System.out.println("\nAll Persons:");
        for (Person p : people) {
            System.out.println(p);
        }

        List<Person> adults = people.stream()
                                    .filter(p -> p.getAge() >= 18)
                                    .collect(Collectors.toList());

        System.out.println("\nPersons Age 18 and Above:");
        for (Person p : adults) {
            System.out.println(p.getName() + " - " + p.getAge());
        }

        sc.close();
    }
}
