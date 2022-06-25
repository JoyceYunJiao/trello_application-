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
public class passwordController {
    @Autowired
    private CustomerRepository customerRepository;

    @Autowired
    private CustomerServices customerServices;

    //网上找的通过service操作的 已被证实成功
    @GetMapping("/forgot_password")
    public void showForgotPasswordForm(String mail, String newName) {
        customerServices.userLname(mail,newName);
    }

    //显示密码
    @GetMapping(path = "/showForgotPassword/{mail}")
    public users showForgotPassword(@PathVariable String mail){
        return customerRepository.findByEmail(mail);
    }

    //获取安全问题回答与否
    @GetMapping(path = "/showSecurityAnswer")
    public String showSecurityAnswer(@RequestParam("mail") String mail){
        return customerRepository.showSecurityAnswer(mail);
    }

    //根据输入的mail更新password
    @PostMapping (path = "/updateUserPasswordByEmail")
    public void updateUserPasswordByEmail(@RequestParam("newPassword") String newPassword,@RequestParam("email") String email){
        customerRepository.updateUserPasswordByEmail(newPassword,email);
//        System.out.println("updateUserNameByEmail success");
    }

    @GetMapping(path = "/editPassword/{mail}")
    public users editPassword(@PathVariable String mail,String newPassword){
        users targetUser = customerRepository.findByEmail(mail);
        targetUser.setPassword(newPassword);
        return targetUser;
    }


}

