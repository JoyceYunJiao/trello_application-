import { Button, Card, Container } from "react-bootstrap";
import Board from "./boards/Board";
import ViewBoards from "./boards/ViewBoards";

function Workspace(props:any) {
    return (
        <Container>
                <h2>{props.workspace.title}</h2>
                <p>{props.workspace.description}</p>

                {/* Joyce's board view */}
                <ViewBoards boards={props.workspace.boards}/>
        </Container>
    );
}
export default Workspace;