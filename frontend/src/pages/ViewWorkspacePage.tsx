import axios from "axios";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Workspace from "../components/Workspace";

function ViewWorkspacePage(props:any) {
    const {id} = useParams();
    const [workspaceData, setWorkspaceData] = useState<any | any>([]);
    const [isLoading, setLoading] = useState(true);

    function getWorkspace() {
        axios.get("http://localhost:8080/getWorkspace/" + id)
            .then(response => {
                console.log("Getting something");
                setWorkspaceData(response.data);
                setLoading(false);
            });
    }

    useEffect(() => {
        getWorkspace();
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <Container>
            <Workspace workspace={workspaceData}/>
        </Container>
    );
}

export default ViewWorkspacePage;