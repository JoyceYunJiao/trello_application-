package group25.group25.passwordForgot.controller;

import group25.group25.passwordForgot.model.users;

import group25.group25.passwordForgot.repository.CustomerRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

//form web: https://www.codejava.net/frameworks/spring-boot/spring-security-forgot-password-tutorial
@CrossOrigin
@RestController
public class passwordController {
    @Autowired
    private CustomerRepository customerRepository;


    //input the mail and show user information |||||need rename later||||||
    @GetMapping(path = "/showUserByPassword/{mail}")
    public users showUserByPassword(@PathVariable String mail){
        return customerRepository.findByEmail(mail);
    }

    // update the password by entered mail
    @PostMapping (path = "/updateUserPasswordByEmail")
    public void updateUserPasswordByEmail(@RequestParam("newPassword") String newPassword,@RequestParam("email") String email){
        customerRepository.updateUserPasswordByEmail(newPassword,email);
    }



}

