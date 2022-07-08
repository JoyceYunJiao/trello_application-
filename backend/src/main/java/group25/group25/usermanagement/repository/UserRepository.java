package group25.group25.usermanagement.repository;

import group25.group25.usermanagement.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
    List<User> findByEmail(String email);

    @Query("SELECT u FROM User u where u.email = ?1")
    public User findUserByEmail(String email);

}
