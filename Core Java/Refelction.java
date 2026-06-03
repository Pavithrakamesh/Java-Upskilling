import java.lang.reflect.Method;

class Test {

    public void display() {
        System.out.println("Hello from display()");
    }

    public void show() {
        System.out.println("Hello from show()");
    }
}

public class Refelction {

    public static void main(String[] args) throws Exception {

        Class<?> c = Class.forName("Test");

        Object obj = c.getDeclaredConstructor().newInstance();

        Method[] methods = c.getDeclaredMethods();

        System.out.println("Methods in Test class:");

        for (Method m : methods) {
            System.out.println("Method Name: " + m.getName());
            m.invoke(obj);
        }
    }
}