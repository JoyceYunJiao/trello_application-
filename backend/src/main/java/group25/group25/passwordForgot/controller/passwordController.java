package group25.group25.passwordForgot.controller;

import group25.group25.passwordForgot.model.users;
import group25.group25.passwordForgot.service.CustomerServices;

import group25.group25.passwordForgot.repository.CustomerRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.*;

//form web: https://www.codejava.net/frameworks/spring-boot/spring-security-forgot-password-tutorial
@CrossOrigin
@RestController
//@SpringBootApplication
public class passwordController {
    @Autowired
    private CustomerRepository customerRepository;

    @Autowired
    private CustomerServices customerServices;

    //网上找的通过service操作的 已被证实成功. copyed from web. the way to find the password via service.java
    @GetMapping("/forgot_password")
    public void showForgotPasswordForm(String mail, String newName) {
        customerServices.userLname(mail,newName);
    }

    @GetMapping("/sameSecureAns/{ans1}/{ans2}")
    public boolean sameSecureAns(@PathVariable String ans1, @PathVariable String ans2) {
        return customerServices.sameSecureAns(ans1, ans2);
    }



    @CrossOrigin
    //显示密码 show password
    @GetMapping(path = "/showUserByPassword/{mail}")
    public users showUserByPassword(@PathVariable String mail){
        return customerRepository.findByEmail(mail);
    }

    @CrossOrigin
    //获取安全问题回答与否 get showSecurityAnswer
    @GetMapping(path = "/showSecurityAnswer")
    public String showSecurityAnswer(@RequestParam("mail") String mail){
        return customerRepository.showSecurityAnswer(mail);
    }

    @CrossOrigin
    //根据输入的mail更新password . update the password based entered mail
    @PostMapping (path = "/updateUserPasswordByEmail")
    public void updateUserPasswordByEmail(@RequestParam("newPassword") String newPassword,@RequestParam("email") String email){
        customerRepository.updateUserPasswordByEmail(newPassword,email);
//        System.out.println("updateUserNameByEmail success");
    }


    //这啥啊？ what's this?
    @GetMapping(path = "/editPassword/{mail}")
    public users editPassword(@PathVariable String mail,String newPassword){
        users targetUser = customerRepository.findByEmail(mail);
        targetUser.setPassword(newPassword);
        return targetUser;
    }


}

