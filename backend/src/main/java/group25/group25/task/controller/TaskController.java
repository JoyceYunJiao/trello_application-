package group25.group25.task.controller;


import group25.group25.task.model.Task;
import group25.group25.task.repository.TaskRepository;
import group25.group25.task.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class TaskController {
    @Autowired
    TaskService taskService;

    @Autowired
    TaskRepository taskRepository;

    @PostMapping(value = "saveTasks", consumes = "application/json", produces = "application/json")
    public Task register(@RequestBody Task taskModel){
        return taskService.saveTask(taskModel);
    }

    @GetMapping(value = "getTasks", produces = "application/json")
    public List<Task> getAllUsers() {
        return taskRepository.findAll();
    }

    @GetMapping(value = "getTaskByList/{id}", produces = "application/json")
    public List<Task> findByListID(@PathVariable("id") int list_id){
        return  taskService.getTaskByListId(list_id);
    }

    @GetMapping(value = "getTaskByDueDate/{DueDate}", consumes = "application/json", produces = "application/json")
    public List<Task> findByDueDate(@PathVariable("DueDate") int dueDate){
        return  taskService.getTaskByDueDate(dueDate);
    }

    @GetMapping(value = "getTaskByUser/{user}", consumes = "application/json", produces = "application/json")
    public List<Task> findByUser(@PathVariable("user") String user){
        return  taskService.getTaskByUser(user);
    }

    @GetMapping(value = "getTaskByUser/{title}", consumes = "application/json", produces = "application/json")
    public List<Task> findByTitle(@PathVariable("title") String title){
        return  taskService.getTaskByTitle(title);
    }

    @PostMapping(value = "changeStatus", consumes = "application/json", produces = "application/json")
    public void changeStatus(@RequestParam(name = "task") Task task, @RequestParam(name = "listId") int list_id) {
        taskService.changeStatus(task, list_id);
    }

    @PostMapping(value = "updateDueDate", consumes = "application/json", produces = "application/json")
    public void updateDueDate(@RequestParam(name = "task") Task task, @RequestParam(name = "dueDate") int dueDate) {
        taskService.updateDueDate(task, dueDate);
    }

    @PostMapping(value = "assignUser", consumes = "application/json", produces = "application/json")
    public void assignUser(@RequestParam(name = "task") Task task, @RequestParam(name = "user") String user) {
        taskService.assignUser(task, user);
    }



}
