package group25.group25.workspace.controller;

import group25.group25.usermanagement.model.User;
import group25.group25.workspace.model.UserAccessWorkspace;
import group25.group25.workspace.model.Workspace;
import group25.group25.workspace.repository.WorkspaceRepository;
import group25.group25.workspace.service.WorkspaceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.Set;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class WorkspaceController {
    @Autowired
    WorkspaceService workspaceService;

    @GetMapping(path = "/getAllWorkspaces", produces = "application/json")
    public List<Workspace> getAllWorkspaces() {
        return workspaceService.findAll();
    }

    @GetMapping(path = "/getAssignedUsers", consumes = "application/json", produces = "application/json")
    public Set<User> getAssignedUsers(@RequestBody Workspace workspace) {
        return workspaceService.findById(workspace.getId()).getAssignedUsers();
    }

    @PostMapping(path = "/addWorkspace", consumes = "application/json", produces = "application/json")
    public String addWorkspace(@RequestBody Workspace workspace) {
        workspaceService.saveWorkspace(workspace);
        return "Saved workspace data successfully with id " + workspace.getId();
    }

    @PutMapping(path = "/assignWorkspaceUser", consumes = "application/json", produces = "application/json")
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
