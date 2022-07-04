package group25.group25.passwordForgot.service;
import group25.group25.passwordForgot.model.users;
import group25.group25.passwordForgot.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@Component
@Transactional
public class CustomerServices {
    @Autowired
    private CustomerRepository customerRepo;

    public void userLname(String mail, String newName)  {
        users customer = customerRepo.findByEmail(mail);
        if (customer != null) {
            customer.setLastName(newName);
            customerRepo.save(customer);
        } else {
           System.out.println("Could not find any customer with the email " + mail);
        }
    }


    public users findByEmail(String email) {
        return customerRepo.findByEmail(email);
    }

    public static users getById(String mail) {
        return new users(mail, "aaa", "bbb","ccc","abc");
    }
}


