import { AlertTitle } from "@mui/material";
import axios from "axios";
import React, {useState, useEffect} from "react";
import { Alert } from "react-bootstrap";
import ViewWorkspaces from "../components/workspaces/ViewWorkspaces";

function Workspaces() {

    const [workspaceData, setWorkspaceData] = useState([]);

    function getAllWorkspaces() {
        axios.get("http://localhost:8080/getAllWorkspaces")
            .then(response => {
                console.log("Getting something");

                const user = localStorage.getItem("user");

                if (user === null) {
                    setWorkspaceData([]);
                    return;
                }

                const userData = JSON.parse(user);
                const userWorkspaces = userData.workspaces;

                const workspaces = response.data;
                
                // Get only workspaces in common with user
                const filteredWorkspaces:any = Array();
                for (const workspace of workspaces) {
                    for (const userWorkspace of userWorkspaces) {
                        if (workspace.id === userWorkspace.id) {
                            filteredWorkspaces.push(workspace);
                        }
                    }
                }

                setWorkspaceData(filteredWorkspaces);
            });
    }

    useEffect(() => {
        getAllWorkspaces();
    }, []);

    if (workspaceData.length === 0)
        return <p>No workspaces to show. If you are logged in, you can create a new workspace using the create workspace page found in the top bar.</p>;

    return (
        <div>
            <h1>Workspaces</h1>
            <ViewWorkspaces workspaces={workspaceData}/>
        </div>
    );
}

export default Workspaces;