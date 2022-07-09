package group25.group25.passwordForgot.repository;

import group25.group25.passwordForgot.model.users;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;

@Repository
@Transactional
public interface CustomerRepository extends CrudRepository<users, Integer> {

    @Query("SELECT u FROM users u WHERE u.email= :mail")
    public users findByEmail(@Param("mail") String email);


    @Modifying
    @Query("UPDATE User u SET u.password =?1 WHERE u.email =?2")
    public void updateUserPasswordByEmail(String newPassword, String email);

}



