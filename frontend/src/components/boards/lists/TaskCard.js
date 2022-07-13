import { Card } from "react-bootstrap";

function TaskCard(props) {
    return (
        <Card>
            <Card.Body>
                <Card.Title>{props.task.title}</Card.Title>
                <Card.Text>{props.task.description}</Card.Text>
            </Card.Body>
        </Card>
    );
}

export default TaskCard;