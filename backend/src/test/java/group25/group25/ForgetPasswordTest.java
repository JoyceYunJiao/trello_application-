package group25.group25;

import group25.group25.passwordForgot.controller.passwordController;

import group25.group25.passwordForgot.model.users;
import group25.group25.passwordForgot.repository.CustomerRepository;
import org.junit.jupiter.api.Test;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;


import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

@SpringBootTest
public class ForgetPasswordTest {

    @MockBean
    CustomerRepository customerRepository;

    @Autowired
    passwordController controller;

    @Test
    void testShowUserByPassword(){
        String mail = "testPassword@test.com";
        users tempUser = new users("testPassword@test.com","testFname","testLname","testPassword","testUsername");
        when(controller.showUserByPassword(mail)).thenReturn(tempUser);
        assertEquals(tempUser, controller.showUserByPassword(mail),"wrong testShowUserByPassword");
    }

    @Test
    void testUpdateUserPasswordByEmail(){

        String newPassword = "newPassword";
        String mail = "testPassword@test.com";
        customerRepository.updateUserPasswordByEmail(newPassword,mail);
        verify(customerRepository).updateUserPasswordByEmail(newPassword,mail);
    }


}
