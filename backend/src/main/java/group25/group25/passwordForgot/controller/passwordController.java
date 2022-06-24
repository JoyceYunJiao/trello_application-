package group25.group25.passwordForgot.controller;

import group25.group25.passwordForgot.model.users;
import group25.group25.passwordForgot.service.CustomerServices;

import group25.group25.passwordForgot.repository.CustomerRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.*;

//form web: https://www.codejava.net/frameworks/spring-boot/spring-security-forgot-password-tutorial

@RestController
//@SpringBootApplication
//@RequestMapping("/default")
public class passwordController {
    @Autowired
    private CustomerRepository customerRepository;

    @GetMapping(path = "/showForgotPassword/{mail}")
    public users showForgotPassword(@PathVariable String mail){
//        System.out.println(customerRepository.findByEmail(mail));
        return customerRepository.findByEmail(mail);
//        return customerRepository.findByEmail("test@email.com");
    }

    @GetMapping(path = "/showSecurityAnswer/{mail}")
    public String showSecurityAnswer(@PathVariable String mail){
        return customerRepository.showSecurityAnswer(mail);
    }

    @PostMapping (path = "/updateUserPasswordByEmail")
    public void updateUserPasswordByEmail(@RequestParam("newPassword") String newPassword,@RequestParam("email") String email){
        customerRepository.updateUserPasswordByEmail(newPassword,email);
        System.out.println("updateUserNameByEmail success");
    }

    @GetMapping(path = "/editPassword/{mail}")
    public users editPassword(@PathVariable String mail,String newPassword){
        users targetUser = customerRepository.findByEmail(mail);
        targetUser.setPassword(newPassword);
        return targetUser;
    }



    @RequestMapping("/test1")
    public Object test1() {
        return customerRepository.findById(2);
    }


    @RequestMapping(method = RequestMethod.GET, value = "/account/{id}")
    public users getAccount(@PathVariable String id) {
        return CustomerServices.getById(id);
    }

}

