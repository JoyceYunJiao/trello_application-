package group25.group25;

import group25.group25.workspace.model.Workspace;
import group25.group25.workspace.repository.UserAccessWorkspaceRepository;
import group25.group25.workspace.repository.WorkspaceRepository;
import group25.group25.workspace.service.WorkspaceService;
import group25.group25.workspace.serviceImplementation.WorkspaceServiceImpl;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

@SpringBootTest
public class WorkspaceServiceTest {
    @Mock
    WorkspaceRepository workspaceRepository;
    @Mock
    UserAccessWorkspaceRepository accessRepository;
    @InjectMocks
    WorkspaceServiceImpl workspaceService;

    @Test
    void testSaveWorkspace() {
        when(workspaceRepository.save(any(Workspace.class))).thenReturn(new Workspace());

        Workspace workspace = new Workspace("Test workspace", "Description");
        Workspace saved = workspaceService.saveWorkspace(workspace);

        Assertions.assertNotNull(saved);
    }
}
