import { Button, Card, Container } from "react-bootstrap";
import Board from "./boards/Board";
import ViewBoards from "./boards/ViewBoards";
import AssignedUsers from "./workspaces/AssignedUsers";

function Workspace(props) {
    return (
        <Container>
                <h2>{props.workspace.title}</h2>
                <p>{props.workspace.description}</p>

                {/* Assiged users */}
                <AssignedUsers/>

                {/* Board view */}
                <ViewBoards boards={props.workspace.boards}/>
        </Container>
    );
}
export default Workspace;