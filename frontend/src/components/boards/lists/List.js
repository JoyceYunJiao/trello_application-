import axios from "axios";
import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import TaskCard from "./TaskCard";

function List(props) {
    const [cards, getCards] = useState([]);
    
    const getTasks = () => {
        axios.get(`http://localhost:8080/getTaskByList/${props.list.id}`)
            .then(response => {
                getCards(response.data);
            });
    }

    useEffect(() => {
        getTasks();
    }, []);

    return (
        <Card className="bg-light">
            <Card.Body>
                <Card.Title>{props.list.title}</Card.Title>
                <Card.Text>{props.list.description}</Card.Text>

                {/* Render all task cards */}
                {cards.map(task => (
                    <TaskCard key={task.id} task={task} />
                ))}
            </Card.Body>
        </Card>
    );
}

export default List;