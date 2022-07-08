package group25.group25;

import group25.group25.usermanagement.model.User;
import group25.group25.usermanagement.repository.UserRepository;
import group25.group25.usermanagement.serviceImplementation.UserServices;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;

@SpringBootTest
public class UserServicesTests {
  @Mock
  UserRepository userRepository;

  @InjectMocks
  UserServices userService;

  @Test
  void testSaveUser() {
    when(userRepository.save(any(User.class))).thenReturn(new User());

    User user = new User("test@dal.ca","test", "user","password","group25","cat");
    User saved = userService.register(user);

    Assertions.assertNotNull(saved);
  }



}
