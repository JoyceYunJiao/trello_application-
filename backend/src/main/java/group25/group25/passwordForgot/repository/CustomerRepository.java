package group25.group25.passwordForgot.repository;

import group25.group25.passwordForgot.model.users;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

public interface CustomerRepository extends CrudRepository<users, Integer> {

//    @Query("SELECT u FROM users u WHERE u.email= ?5")
    public users findByEmail(String email);

    public users findByResetPasswordToken(String token);
}



