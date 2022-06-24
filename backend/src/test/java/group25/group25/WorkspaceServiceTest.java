package group25.group25;

import group25.group25.workspace.model.Workspace;
import group25.group25.workspace.repository.WorkspaceRepository;
import group25.group25.workspace.service.WorkspaceService;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

@SpringBootTest
public class WorkspaceServiceTest {
    WorkspaceService workspaceService;

    @BeforeEach
    void initWorkspaceService() {

    }
    @Test
    void testSaveWorkspace() {
        Workspace workspace = new Workspace("Test workspace", "Description");
        workspaceService.saveWorkspace(workspace);

        Assertions.assertEquals(workspace, workspaceService.findAll().get(0));
    }
}
