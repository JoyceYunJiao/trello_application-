import { Card } from "react-bootstrap";

function Board(props:any) {
    return (
        <Card>
            <Card.Body>
                <h2>{props.board.title}</h2>
                <p>{props.board.description}</p>
            </Card.Body>
        </Card>
    );
}

export default Board;