import axios from "axios";
import React, {useState, useEffect} from "react";

function Workspaces() {

    const [workspaceData, setWorkspaceData] = useState([]);

    function getAllWorkspaces() {
        axios.get("http://localhost:8080/getAllWorkspaces")
            .then(response => {
                setWorkspaceData(response.data);
            });
    }

    useEffect(() => {
        getAllWorkspaces();
    }, []);

    return (
        <div>
            <h1>Workspaces</h1>
            
        </div>
    );
}

export default Workspaces;