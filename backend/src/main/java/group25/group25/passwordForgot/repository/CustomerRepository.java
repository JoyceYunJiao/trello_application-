package group25.group25.passwordForgot.repository;

import group25.group25.passwordForgot.model.Users;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;

@Repository
@Transactional
public interface CustomerRepository extends CrudRepository<Users, Integer> {

    @Query("SELECT u FROM Users u WHERE u.email= :mail")
    public Users findByEmail(@Param("mail") String email);


    @Modifying
    @Query("UPDATE User u SET u.password =?1 WHERE u.email =?2")
    public void updateUserPasswordByEmail(String newPassword, String email);

}



