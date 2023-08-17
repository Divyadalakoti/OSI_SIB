public class AuthenticationService {
    public boolean authenticate(String username, String password) {
        UserDAO userDAO = new UserDAO();
        User user = userDAO.findByUsername(username);

        if (user != null) {
            // You should use a strong hashing library like bcrypt in a real project
            String hashedPassword = someHashingFunction(password);

            return hashedPassword.equals(user.getPassword());
        }
        return false;
    }

    private String someHashingFunction(String password) {
        // Implement a strong password hashing mechanism here
        return password; // Replace with actual hashing code
    }
}
