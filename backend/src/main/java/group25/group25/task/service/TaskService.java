package group25.group25.task.service;

import group25.group25.task.model.Task;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface TaskService {

    public List<Task> getTaskByListId(Integer listId);

    public List<Task> getTaskByTitle (String title);

    public List<Task> getTaskByUser(String user);

    public List<Task> getTaskByDueDate(String dueDate);

    public Task saveTask(Task task);


}
