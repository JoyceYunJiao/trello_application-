ackage group25.group25.boardmanagement.service;

import group25.group25.usermanagement.repository.BoardRepository;
import group25.group25.usermanagement.repository.BoardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class BoardServices {
    @Autowired
    private BoardRepository boardRepository;

    public boolean login(String email, String password) {

        return false;
    }
}
