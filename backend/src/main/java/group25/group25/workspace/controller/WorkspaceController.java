package group25.group25.workspace.controller;

import group25.group25.workspace.model.UserAccessWorkspace;
import group25.group25.workspace.model.Workspace;
import group25.group25.workspace.service.WorkspaceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class WorkspaceController {
    @Autowired
    WorkspaceService workspaceService;

    @PostMapping(path = "/addWorkspace", consumes = "application/json", produces = "application/json")
    public String addWorkspace(@RequestBody Workspace workspace) {
        workspaceService.saveWorkspace(workspace);
        return "Saved workspace data successfully with id " + workspace.getId();
    }

    @PostMapping(path = "/assignWorkspaceUser", consumes = "application/json", produces = "application/json")
    public String assignWorkspaceUser(@RequestBody UserAccessWorkspace access) {
        workspaceService.assignWorkspaceUser(access);
        return "Successfully assigned user with id " + access.getUserId() + " to workspace with id " + access.getWorkspaceId();
    }
}
