import { Container } from "react-bootstrap";
import Workspace from "./Workspace";

function ViewWorkspaces(props:any) {
    return (
        <Container>
            {
                props.workspaces.map((workspace:any) => {
                    return (
                        <Workspace workspace={workspace} key={workspace.id}/>
                    );
                })
            }
        </Container>
    )
}

export default ViewWorkspaces;