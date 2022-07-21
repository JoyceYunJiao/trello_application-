package group25.group25.task.repository;

import group25.group25.task.model.Task;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface TaskRepository extends JpaRepository<Task, Integer>{

    @Query("SELECT t FROM Task t where t.date = ?1")
    public List<Task> findByDueDate (Integer date);

    @Query("SELECT t FROM Task t where t.title = ?1")
    public List<Task> findByTitle(String title);

    @Query("SELECT t FROM Task t where t.user = ?1")
    public List<Task> findByUser(String user);

    @Query("SELECT t FROM Task t where t.listId = ?1")
    public List<Task> findByListID(int list_id);

    @Modifying
    @Query("UPDATE Task t SET t.listId =?1 WHERE t.title =?2")
    public void updateStatusByTitle(Integer listId, String title);

    @Modifying
    @Query("UPDATE Task t SET t.date =?1 WHERE t.title =?2")
    public void updateDueDateByTitle(Integer dueDate, String title);

    @Modifying
    @Query("UPDATE Task t SET t.user =?1 WHERE t.title =?2")
    public void updateUserByTitle(String user, String title);

    @Modifying
    @Query("UPDATE Task t SET t.date =?1 WHERE t.id =?2")
    public void updateDueDateById(String dueDate, Integer id);

    @Modifying
    @Query("UPDATE Task t SET t.listId =?1 WHERE t.id =?2")
    public void updateStatusById(Integer listId, Integer id);


}
