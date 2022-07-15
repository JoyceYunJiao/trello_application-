package group25.group25.task.serviceimplementation;


import group25.group25.task.model.Task;
import group25.group25.task.repository.TaskRepository;
import group25.group25.task.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.Set;

@Component
public class TaskServiceImpl implements TaskService {

    @Autowired
    TaskRepository taskRepository;


    @Override
    public Set<Task> getTaskByListId(int listId) {

        return taskRepository.findByListID(listId);

    }


    @Override
    public Task saveTask(Task task) {

        return  taskRepository.save(task);

    }


    @Override
    public void changeStatus(Task task, int listId) {

        task.setList_id(listId);

    }

    @Override
    public void assignUser(Task task, String user) {

        task.setUser(user);

    }

    @Override
    public void updateDueDate(Task task, int due_date) {

        task.setDate(due_date);

    }
}
