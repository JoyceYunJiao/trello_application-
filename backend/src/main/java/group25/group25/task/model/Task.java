package group25.group25.task.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import group25.group25.list.model.List;
import group25.group25.workspace.model.Workspace;

import javax.persistence.*;

@Entity
@Table(name = "cards")
public class Task {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "card_id")
    private Integer id;

    @Column(name = "card_title")
    private String title;

    @Column(name = "card_description")
    private String description;

    @Column(name = "card_user")
    private String user;

    @Column(name = "list_id")
    private Integer listId;

    @Column(name = "card_due_date")
    private String date;

    @ManyToOne
    @JoinColumn(name = "list_id", insertable = false, updatable = false)
    @JsonIgnore
    private List list;

    public Task(String title, String description, String user, Integer list_id, String date) {
        this.title = title;
        this.description = description;
        this.user = user;
        this.listId = list_id;
        this.date = date;
    }

    public Task(){

    }

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

    public Integer getListId() { return listId; }

    public void setListId(Integer list_id) { this.listId = list_id; }


    public String getDate() { return date; }

    public void setDate(String date) { this.date = date; }

    public List getList() {
        return list;
    }

    public void setList(List list) {
        this.list = list;
    }
}



