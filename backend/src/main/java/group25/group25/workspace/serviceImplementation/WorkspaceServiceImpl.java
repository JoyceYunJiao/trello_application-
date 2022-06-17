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
    public boolean assignWorkspaceUser(UserAccessWorkspace access) {
        access.setUserId(access.getUserId());
        access.setWorkspaceId(access.getWorkspaceId());

        if (accessRepository.existsByUserIdAndWorkspaceId(access.getUserId(), access.getWorkspaceId())==1)
            // This user is already assigned to this workspace
            return false;

        // Save new access to table
        accessRepository.save(access);
        return true;
    }
}