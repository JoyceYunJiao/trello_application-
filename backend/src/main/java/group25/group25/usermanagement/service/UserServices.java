package group25.group25.usermanagement.service;

import group25.group25.usermanagement.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import group25.group25.usermanagement.model.User;
import org.springframework.stereotype.Service;

@Service
public class UserServices {
    @Autowired
    private UserRepository userRepository;

    public User register(User userModel) {

        return userRepository.save(userModel);
    }
}
