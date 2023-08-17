import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter username: ");
        String username = scanner.nextLine();

        System.out.print("Enter password: ");
        String password = scanner.nextLine();

        AuthenticationService authService = new AuthenticationService();
        boolean isAuthenticated = authService.authenticate(username, password);

        if (isAuthenticated) {
            System.out.println("Login successful!");
        } else {
            System.out.println("Login failed. Invalid credentials.");
        }

        scanner.close();
    }
}
