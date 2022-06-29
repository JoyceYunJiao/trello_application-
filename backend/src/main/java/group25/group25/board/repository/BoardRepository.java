package group25.group25.board.repository;

import group25.group25.board.model.Board;
import group25.group25.usermanagement.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface BoardRepository extends JpaRepository<Board, Long> {
    @Query("SELECT b FROM Board b where b.id = ?1")
    public Board getBoard(long id);
}
