package group25.group25.list.repository;

import group25.group25.list.model.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Set;

@Repository
public interface ListRepository extends JpaRepository<List, Integer> {
    public Set<List> findByBoardId(int boardId);
}
