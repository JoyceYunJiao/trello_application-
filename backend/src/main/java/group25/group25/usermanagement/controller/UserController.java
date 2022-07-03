package group25.group25.usermanagement.controller;

import group25.group25.usermanagement.model.User;
import group25.group25.usermanagement.repository.UserRepository;
import group25.group25.usermanagement.service.UserServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {
    @Autowired
    UserRepository userRepository;
    @Autowired
    UserServices userServices;


    @PostMapping(path = "/save", consumes = "application/json", produces = "application/json")
    public User registerAccount(@RequestBody User userModel){
        return userServices.register(userModel);
    }
}
