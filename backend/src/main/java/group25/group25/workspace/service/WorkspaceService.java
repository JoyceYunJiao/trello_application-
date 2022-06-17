package group25.group25.workspace.service;

import group25.group25.workspace.model.UserAccessWorkspace;
import group25.group25.workspace.model.Workspace;
import org.springframework.stereotype.Service;

@Service
public interface WorkspaceService {
    public void saveWorkspace(Workspace workspace);
    public void assignWorkspaceUser(UserAccessWorkspace access);
}
