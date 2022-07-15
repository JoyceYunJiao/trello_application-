package group25.group25.task.controller;


import group25.group25.task.model.Task;
import group25.group25.list.service.ListService;
import group25.group25.task.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Set;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class TaskController {
    @Autowired
    TaskService taskService;

//    @GetMapping(path = "/getLists/{id}", produces = "application/json")
//
//    }
//
//
//
//    @PostMapping(path = "/addList", consumes = "application/json", produces = "application/json")
//
//    }
}
