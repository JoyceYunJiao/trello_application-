package group25.group25.task.controller;


import group25.group25.task.model.Task;
import group25.group25.task.repository.TaskRepository;
import group25.group25.task.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
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
    public List<Task> findByListID(@PathVariable("id") Integer list_id){
        return  taskRepository.findByListID(list_id);
    }

    @GetMapping(value = "getTaskByDueDate/{DueDate}", produces = "application/json")
    public List<Task> findByDueDate(@PathVariable("DueDate") String dueDate){
        return  taskRepository.findByDueDate(dueDate);
    }

    @GetMapping(value = "getTaskByUser/{user}", produces = "application/json")
    public List<Task> findByUser(@PathVariable("user") String user){
        return  taskRepository.findByUser(user);
    }

    @GetMapping(value = "getTaskByTitle/{title}", produces = "application/json")
    public List<Task> findByTitle(@PathVariable("title") String title){
        return  taskRepository.findByTitle(title);
    }

    @Transactional
    @PostMapping(value = "changeStatus", consumes = "application/json")
    public void changeStatus(@RequestBody Task task) {
        taskRepository.updateStatusById(task.getListId(),task.getId());
    }

    @Transactional
    @PostMapping(value = "assignUser", consumes = "application/json")
    public void assignUser(@RequestBody Task task) {
        taskRepository.updateUserById(task.getUser(),task.getId());
    }

    @Transactional
    @PostMapping(value = "updateDueDate", consumes = "application/json")
    public void updateDueDate(@RequestBody Task task) {
        taskRepository.updateDueDateById(task.getDate(), task.getId());
    }


}
