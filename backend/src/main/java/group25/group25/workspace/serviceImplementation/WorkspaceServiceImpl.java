package group25.group25.workspace.serviceImplementation;

import group25.group25.workspace.model.UserAccessWorkspace;
import group25.group25.workspace.model.Workspace;
import group25.group25.workspace.repository.UserAccessWorkspaceRepository;
import group25.group25.workspace.repository.WorkspaceRepository;
import group25.group25.workspace.service.WorkspaceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class WorkspaceServiceImpl implements WorkspaceService {
    @Autowired
    private WorkspaceRepository workspaceRepository;
    @Autowired
    private UserAccessWorkspaceRepository accessRepository;

    @Override
    public void saveWorkspace(Workspace workspace) {
        workspace.setDescription(workspace.getDescription());
        workspace.setTitle(workspace.getTitle());
        workspaceRepository.save(workspace);
    }

    @Override
    public void assignWorkspaceUser(UserAccessWorkspace access) {
        access.setUserId(access.getUserId());
        access.setWorkspaceId(access.getWorkspaceId());
        accessRepository.save(access);
    }
}
