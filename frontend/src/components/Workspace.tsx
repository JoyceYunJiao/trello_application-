import { Button, Card, Container } from "react-bootstrap";
import Board from "./boards/Board";

function Workspace(props:any) {
    return (
        <Container>
                <h2>{props.workspace.title}</h2>
                <p>{props.workspace.description}</p>

                {
                props.workspace.boards.map((board:any) => {
                    return (
                        <Board board={board} key={board.id}/>
                    );
                })}
        </Container>
    );
}
export default Workspace;