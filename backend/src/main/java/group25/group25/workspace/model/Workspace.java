package group25.group25.workspace.model;

import javax.persistence.*;

@Entity
@Table(name = "workspaces")
public class Workspace {
    public Workspace (String title, String description) {
        this.title = title;
        this.description = description;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "workspace_id")
    private int id;

    @Column(name = "workspace_title")
    private String title;

    @Column(name = "workspace_description")
    private String description;

    public int getId() {
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
}
