import { Card, Container } from "react-bootstrap";
import Workspace from "./Workspace";

function ViewWorkspaces(props:any) {
    return (
        <Container>
            {
                props.workspaces.map((workspace:any) => {
                    return (
                        <Workspace workspace={workspace}/>
                    );
                })
            }
        </Container>
    )
}

export default ViewWorkspaces;