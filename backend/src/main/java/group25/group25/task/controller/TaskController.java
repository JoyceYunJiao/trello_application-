package group25.group25.task.controller;


import group25.group25.task.model.Task;
import group25.group25.task.repository.TaskRepository;
import group25.group25.task.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Set;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class TaskController {
    @Autowired
    TaskService taskService;

    @Autowired
    TaskRepository taskRepository;

    @GetMapping(value = "getTasks", produces = "application/json")
    public List<Task> getAllUsers() {
        return taskRepository.findAll();
    }

    @PostMapping(value = "getTaskByList/{id}", consumes = "application/json", produces = "application/json")
    public Set<Task> findByListID(@PathVariable("id") int list_id){
        return  taskService.getTaskByListId(list_id);
    }

    @PostMapping(value = "changeStatus", consumes = "application/json", produces = "application/json")
    public void changeStatus(@RequestBody Task task, @RequestBody int list_id) {
        taskService.changeStatus(task, list_id);
    }

    @PostMapping(value = "updateDueDate", consumes = "application/json", produces = "application/json")
    public void updateDueDate(@RequestBody Task task, @RequestBody int newDueDate) {
        taskService.updateDueDate(task, newDueDate);
    }

    @PostMapping(value = "assignUser", consumes = "application/json", produces = "application/json")
    public void assignUser(@RequestBody Task task, @RequestBody String user) {
        taskService.assignUser(task, user);
    }

}
