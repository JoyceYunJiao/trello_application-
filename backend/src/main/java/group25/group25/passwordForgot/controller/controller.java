package group25.group25.passwordForgot.controller;

import group25.group25.passwordForgot.model.users;
import group25.group25.passwordForgot.service.CustomerServices;

import group25.group25.passwordForgot.repository.CustomerRepository;

import group25.group25.passwordForgot.service.CustomerServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

//form web: https://www.codejava.net/frameworks/spring-boot/spring-security-forgot-password-tutorial

@Controller
@SpringBootApplication
//@RequestMapping("/default")
public class controller {
    @Autowired
    private CustomerRepository customerRepository;

    private final CustomerServices customerServices;

    @GetMapping(value = "/showForgotPassword")
    public String showForgotPassword(users user){
        System.out.println("In showForgotPassword");
        return "aaaaaaa";
    }

    @Autowired
    public controller(CustomerServices customerServices) {
        this.customerServices = customerServices;
    }
    @RequestMapping(method = RequestMethod.GET, value = "/account/{id}")
    public users getAccount(@PathVariable String id) {
        return CustomerServices.getById(id);
    }


}

