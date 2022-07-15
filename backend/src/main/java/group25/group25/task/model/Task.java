package group25.group25.task.model;

import javax.persistence.*;

@Entity
@Table(name = "task")
public class Task {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "task_id")
    private Integer id;

    @Column(name = "task_title")
    private String title;

    @Column(name = "task_description")
    private String description;

    @Column(name = "task_user")
    private String user;

    @Column(name = "list_id")
    private Integer list_id;

    @Column(name = "due_date")
    private Integer date;

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getUser() { return user; }

    public void setUser(String user) { this.user = user; }

    public Integer getList_id() { return list_id; }

    public void setList_id(Integer list_id) { this.list_id = list_id; }


    public Integer getDate() { return date; }

    public void setDate(Integer date) { this.date = date; }





}



