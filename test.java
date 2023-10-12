public class test {
    static int j = 20;

    public static void main(String[] args) {
        int i = 10;

        test p = new test();
        p.amethod(i);
        System.out.println(i);
        System.out.println(j);
    }

    public void amethod(int x) {
        x = x * 2;
        j = j * 2;
        System.out.println(x);
        System.out.println(j);
    }
}