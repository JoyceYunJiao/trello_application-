package group25.group25.task.service;

import group25.group25.task.model.Task;
import org.springframework.stereotype.Service;

import java.util.Set;

@Service
public interface TaskService {
    public Set<Task> getTaskByListId(int listId);

    public Task saveTask(Task task);

    public void changeStatus(Task task, int listId);

    public void assignUser(Task task, String user);

    public void updateDueDate(Task task, int due_date);

}
