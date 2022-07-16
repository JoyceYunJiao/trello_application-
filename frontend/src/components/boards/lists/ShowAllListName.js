import { Button, Card } from "react-bootstrap";
import { useParams } from "react-router-dom";

function ShowAllListName(props) {
    const {id, boardId} = useParams();

    return (
            <Card className="shadow-sm">
                {/* <Button
                    variant="outline-dark"
                    className="m-0 p-0"
                    title={`Edit task "${props.task.title}"`}
                    href={`./${boardId}/${props.task.id}`}
                > */}
                    <Card.Body>
                        <Card.Title>{props.boards.title}</Card.Title>
                        {/* <Card.Text>{props.task.description}</Card.Text> */}
                    </Card.Body>
                {/* </Button> */}
            </Card>
    );
}

export default ShowAllListName;