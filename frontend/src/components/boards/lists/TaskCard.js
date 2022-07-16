import { Button, Card } from "react-bootstrap";
import { useParams } from "react-router-dom";

function TaskCard(props) {
    const {id, boardId} = useParams();

    return (
            <Card className="shadow-sm">
                <Button
                    variant="outline-dark"
                    className="m-0 p-0"
                    title={`Edit task "${props.task.title}"`}
                    href={`/workspaces/${id}/${boardId}/${props.task.listId}/${props.task.id}`}
                >
                    <Card.Body>
                        <Card.Title>{props.task.title}</Card.Title>
                        <Card.Text>{props.task.description}</Card.Text>
                    </Card.Body>
                </Button>
            </Card>
    );
}

export default TaskCard;