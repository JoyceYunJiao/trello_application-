import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Workspace from "../components/Workspace";

function ViewWorkspacePage(props) {
    const {id} = useParams();
    const [workspaceData, setWorkspaceData] = useState([]);
    const [isLoading, setLoading] = useState(true);

    function getWorkspace() {
        axios.get("http://localhost:8080/getWorkspace/" + id)
            .then(response => {
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
            <Button href={"/workspaces/"+id+"/createBoard"}>Create Board</Button>
        </Container>
    );
}

export default ViewWorkspacePage;