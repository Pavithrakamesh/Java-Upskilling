public class PatternMatchingDemo {

    public static void checkType(Object obj) {

        if (obj instanceof Integer) {
            Integer i = (Integer) obj;
            System.out.println("Integer value: " + i);
        }
        else if (obj instanceof String) {
            String s = (String) obj;
            System.out.println("String value: " + s);
        }
        else if (obj instanceof Double) {
            Double d = (Double) obj;
            System.out.println("Double value: " + d);
        }
        else {
            System.out.println("Unknown type");
        }
    }

    public static void main(String[] args) {

        checkType(100);
        checkType("Hello Java");
        checkType(25.5);
        checkType(true);
    }
}
