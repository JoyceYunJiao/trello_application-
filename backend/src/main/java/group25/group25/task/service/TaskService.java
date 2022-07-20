package group25.group25.task.service;

import group25.group25.task.model.Task;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface TaskService {


    public Task saveTask(Task task);


}
