package group25.group25.workspace.controller;

import group25.group25.usermanagement.model.User;
import group25.group25.workspace.model.UserAccessWorkspace;
import group25.group25.workspace.model.Workspace;
import group25.group25.workspace.repository.WorkspaceRepository;
import group25.group25.workspace.service.WorkspaceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class WorkspaceController {
    @Autowired
    WorkspaceService workspaceService;
    @Autowired
    WorkspaceRepository workspaceRepository;

    @PostMapping(path = "/getAssignedUsers", consumes = "application/json", produces = "application/json")
    public List<User> getAssignedUsers(@RequestBody Workspace workspace) {
        return workspaceRepository.assignedUsers(workspace.getId());
    }

    @PostMapping(path = "/addWorkspace", consumes = "application/json", produces = "application/json")
    public String addWorkspace(@RequestBody Workspace workspace) {
        workspaceService.saveWorkspace(workspace);
        return "Saved workspace data successfully with id " + workspace.getId();
    }

    @PostMapping(path = "/assignWorkspaceUser", consumes = "application/json", produces = "application/json")
    public String assignWorkspaceUser(@RequestBody UserAccessWorkspace access) {
        if (workspaceService.assignWorkspaceUser(access)) {
            // User/workspace pair was added to database
            return "Successfully assigned user with id "
                    + access.getUserId()
                    + " to workspace with id "
                    + access.getWorkspaceId();
        }
        else {
            // User/workspace pair already exists
            return "Could not assigned user with id "
                    + access.getUserId()
                    + " to workspace with id "
                    + access.getWorkspaceId()
                    + "; pair already exists";
        }
    }
}
