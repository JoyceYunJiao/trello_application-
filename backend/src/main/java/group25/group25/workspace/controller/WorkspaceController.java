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

    @GetMapping(path = "/getWorkspace/{id}", produces = "application/json")
    public Workspace getWorkspace(@PathVariable("id") int id) {
        return workspaceService.findById(id);
    }

    @GetMapping(path = "/getAssignedUsers", consumes = "application/json", produces = "application/json")
    public Set<User> getAssignedUsers(@RequestBody Workspace workspace) {
        return workspaceService.findById(workspace.getId()).getAssignedUsers();
    }

    @PostMapping(path = "/addWorkspace", consumes = "application/json", produces = "application/json")
    public Workspace addWorkspace(@RequestBody Workspace workspace) {
        return workspaceService.saveWorkspace(workspace);
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
