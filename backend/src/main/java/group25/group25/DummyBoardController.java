package group25.group25;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DummyBoardController {
    @GetMapping(value = "/getAllBoards")
    public String getAllBoards(){
        System.out.println("Getting all boards");
        return "All boards";
    }
}
