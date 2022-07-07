package group25.group25.workspace.serviceImplementation;

import group25.group25.usermanagement.model.User;
import group25.group25.usermanagement.repository.UserRepository;
import group25.group25.usermanagement.serviceImplementation.UserServices;
import group25.group25.workspace.model.UserAccessWorkspace;
import group25.group25.workspace.model.Workspace;
import group25.group25.workspace.repository.UserAccessWorkspaceRepository;
import group25.group25.workspace.repository.WorkspaceRepository;
import group25.group25.workspace.service.WorkspaceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@Component
public class WorkspaceServiceImpl implements WorkspaceService {
    @Autowired
    private WorkspaceRepository workspaceRepository;
    @Autowired
    private UserAccessWorkspaceRepository accessRepository;

    @Autowired
    private UserRepository userRepository;

    @Override
    public Workspace saveWorkspace(Workspace workspace) {
        return workspaceRepository.save(workspace);
    }

    @Override
    public boolean assignWorkspaceUser(Map<String, String> json) {
        String email = json.get("userEmail");
        int workspaceId = Integer.parseInt(json.get("workspaceId"));

        User user = userRepository.findByEmail(email).get(0);
        if (user == null)
            // This user does not exist
            return false;

        UserAccessWorkspace access = new UserAccessWorkspace(user.getId(), workspaceId);

        if (accessRepository.existsByUserIdAndWorkspaceId(access.getUserId(), access.getWorkspaceId())==1)
            // This user is already assigned to this workspace
            return false;

        // Save new access to table
        accessRepository.save(access);
        return true;
    }

    @Override
    public List<Workspace> findAll() {
        return workspaceRepository.findAll();
    }

    @Override
    public Workspace findById(int id) {
        Optional<Workspace> w = workspaceRepository.findById(id);
        if (w.isPresent()) {
            Workspace ws = w.get();
            return ws;
        }

        return null;
    }
}
