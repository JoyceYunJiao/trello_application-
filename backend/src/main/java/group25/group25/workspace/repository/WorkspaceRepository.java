package group25.group25.workspace.repository;

import group25.group25.usermanagement.model.User;
import group25.group25.workspace.model.Workspace;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface WorkspaceRepository extends JpaRepository<Workspace, Integer> {
    //TODO: This does not work for some reason
    @Query(value = "SELECT u FROM User u INNER JOIN UserAccessWorkspace a WHERE a.workspaceId = :id")
    public List<User> assignedUsers(@Param(value = "id") int workspaceId);
}
