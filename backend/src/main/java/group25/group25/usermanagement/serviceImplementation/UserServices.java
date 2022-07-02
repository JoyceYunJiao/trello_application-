package group25.group25.usermanagement.serviceImplementation;

import group25.group25.usermanagement.model.User;
import group25.group25.usermanagement.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class UserServices {
    @Autowired
    private UserRepository userRepository;

    public User login(String email, String password) {

        if(userRepository.findByEmail(email).getPassword().equals(password)) return userRepository.findByEmail(email);

        return null;
    }

}
