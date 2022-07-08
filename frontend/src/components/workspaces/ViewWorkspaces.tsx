import { Container } from "react-bootstrap";
import WorkspaceCard from "./WorkspaceCard";

function ViewWorkspaces(props:any) {
    return (
        <Container>
            {
                props.workspaces.map((workspace:any) => {
                    return (
                        <WorkspaceCard workspace={workspace} key={workspace.id}/>
                    );
                })
            }
        </Container>
    );
}

export default ViewWorkspaces;