package group25.group25.task.repository;

import group25.group25.task.model.Task;
import group25.group25.usermanagement.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Set;


@Repository
public interface TaskRepository extends JpaRepository<Task, Integer>{

    @Query("SELECT t FROM Task t where t.date = ?1")
    public Set<Task> findByDueDate (Integer date);

    @Query("SELECT t FROM Task t where t.title = ?1")
    public Set<Task> findByTitle(String title);

    @Query("SELECT t FROM Task t where t.user = ?1")
    public Set<Task> findByUser(String user);

    @Query("SELECT t FROM Task t where t.list_id = ?1")
    public Set<Task> findByListID(int list_id);

}
