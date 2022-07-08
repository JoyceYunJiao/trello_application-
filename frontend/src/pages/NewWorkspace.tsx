import NewWorkspaceForm from "../components/workspaces/NewWorkspaceForm";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function NewWorkspace() {
    // navigate object for modifying browser history/redirect
    const navigate = useNavigate();
    
    function newWorkspaceHandler(workspace:any) {
        if (localStorage.getItem("user") === null) {
            alert("You must be logged in to create a workspace");
            return;
        }

        // User is logged in
        axios.post("http://localhost:8080/addWorkspace", workspace)
            .then((response:any) => {
                console.log(response);
                const userString = localStorage.getItem("user");
                if (userString === null)
                {
                    alert("User is null");
                    alert("If you're somehow reading this something went very wrong");
                    return;
                }
                const user:any = JSON.parse(userString);
                const data = {
                    userEmail: user.email,
                    workspaceId: response.data.id.toString()
                };
                console.log(data);
                return axios.put("http://localhost:8080/assignWorkspaceUser", data)
                    .then((response:any) => {
                        console.log(response);
                        navigate("/workspaces", { replace: true });
                    });
            });
            
    }

    return (
        <NewWorkspaceForm onChange={newWorkspaceHandler} />
    );
}

export default NewWorkspace;