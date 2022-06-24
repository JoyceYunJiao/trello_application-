import axios from "axios";
import React, {useState, useEffect} from "react";
import ViewWorkspaces from "../components/ViewWorkspaces";

function Workspaces() {

    const [workspaceData, setWorkspaceData] = useState([]);

    function getAllWorkspaces() {
        axios.get("http://localhost:8080/getAllWorkspaces")
            .then(response => {
                console.log("Getting something");
                setWorkspaceData(response.data);
            });
    }

    useEffect(() => {
        getAllWorkspaces();
    }, []);

    return (
        <div>
            <h1>Workspaces</h1>
            <ViewWorkspaces workspaces={workspaceData}/>
        </div>
    );
}

export default Workspaces;