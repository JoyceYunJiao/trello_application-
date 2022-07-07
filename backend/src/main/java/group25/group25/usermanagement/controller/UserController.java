package group25.group25.usermanagement.controller;

import group25.group25.usermanagement.model.User;
import group25.group25.usermanagement.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class UserController {
    @Autowired
    UserRepository userRepository;

    @RequestMapping(value = "getusers", method = RequestMethod.GET)
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @RequestMapping(value = "getUser/{id}", method = RequestMethod.GET)
    public User getUserById(@PathVariable("id") int id) {
        return userRepository.findById(id).orElse(null);
    }

    @RequestMapping(value = "getUserByEmail/{email}", method = RequestMethod.GET)
    public List<User> getUserByEmail(@PathVariable("email") String email) {
        return userRepository.findByEmail(email);
    }
}
