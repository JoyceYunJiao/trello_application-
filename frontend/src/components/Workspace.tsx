import { Card } from "react-bootstrap";
import Board from "./boards/Board";

function Workspace(props:any) {
    return (
        <Card>
            <Card.Body>
                <h2>{props.workspace.title}</h2>
                <p>{props.workspace.description}</p>

                {
                props.workspace.boards.map((board:any) => {
                    return (
                        <Board board={board} key={board.id}/>
                    );
                })}
                
            </Card.Body>
        </Card>
    );
}
export default Workspace;