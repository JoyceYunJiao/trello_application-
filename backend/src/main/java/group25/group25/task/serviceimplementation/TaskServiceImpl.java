package group25.group25.task.serviceimplementation;


import group25.group25.task.model.Task;
import group25.group25.task.repository.TaskRepository;
import group25.group25.task.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class TaskServiceImpl implements TaskService {

    @Autowired
    TaskRepository taskRepository;


    @Override
    public List<Task> getTaskByListId(int listId) {

        return taskRepository.findByListID(listId);

    }

    @Override
    public List<Task> getTaskByTitle(String title) {

        return taskRepository.findByTitle(title);

    }

    @Override
    public List<Task> getTaskByUser(String user) {

        return taskRepository.findByUser(user);

    }

    @Override
    public List<Task> getTaskByDueDate(int dueDate) {

        return  taskRepository.findByDueDate(dueDate);

    }

    @Override
    public Task saveTask(Task task) {

        return  taskRepository.save(task);

    }

    @Override
    public void changeStatus(Task task, int listId) {

        taskRepository.updateStatusByTitle(listId, task.getTitle());

    }

    @Override
    public void updateDueDate(Task task, int dueDate) {

        taskRepository.updateDueDateByTitle(dueDate, task.getTitle());

    }

    @Override
    public void assignUser(Task task, String user) {

        taskRepository.updateUserByTitle(user, task.getTitle());

    }

}
