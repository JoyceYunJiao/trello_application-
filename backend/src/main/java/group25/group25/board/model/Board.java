package group25.group25.board.model;

import javax.persistence.*;
import group25.group25.workspace.model.Workspace;

@Entity
@Table(name = "boards")
public class Board {

    public Board() {
    }

    public Board(Long boardId, String dateCreated,
                 String description, String boardTitle) {
        this.boardId = boardId;

        this.dateCreated = dateCreated;
        this.description = description;
        this.boardTitle = boardTitle;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "board_id")
    private Long boardId;

    @Column(name = "board_title")
    private String boardTitle;

    @Column(name = "description")
    private String description;
//
//    @Column(name = "workspace_id")
//    private int workSpaceId;

    @ManyToOne
    @JoinColumn(name = "workspace_id")
    private Workspace workspace;

    @Column(name = "date_created")
    private String dateCreated;

//    public int getWorksapce_Id() {
//        return workSpaceId;
//    }

    public String getBoardTitle() { return boardTitle; }

    public void setBoardTitle(String boardTitle) { this.boardTitle = boardTitle; }

//    public void setWorksapce_Id(String worksapce_Id) {
//        this.workSpaceId = workSpaceId;
//    }

    public String getDate_created() {
        return dateCreated;
    }

    public void setDate_created(String date_created) {
        this.dateCreated = dateCreated;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Long getBoardId() {
        return boardId;
    }

    public void setBoardId(Long boardId) {
        this.boardId = boardId;
    }


}
