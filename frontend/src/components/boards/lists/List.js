import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import TaskCard from "./TaskCard";

function List(props) {
    const [tasks, setTasks] = useState([]);
    const [filteredTasks, setFilteredTasks] = useState([]);
    const { id, boardId } = useParams();
    
    const fetchTasks = () => {
        axios.get(`http://localhost:8080/getTaskByList/${props.list.id}`)
            .then(response => {
                setTasks(response.data);
                setFilteredTasks(response.data);
            });
    }

    const filterList = () => {
        setFilteredTasks(tasks.filter(task => task.title.toLowerCase().includes(props.filterText)));
        // console.log(filteredTasks);
    }

    useEffect(() => {
        fetchTasks();
    }, []);

    // Filter on filterText change
    useEffect(() => {
        filterList();
    }, [props.filterText]);

    return (
        <Card className="bg-light">
            <Card.Body>
                <Card.Title>{props.list.title}</Card.Title>
                <Card.Text>{props.list.description}</Card.Text>

                {/* Render all task cards */}
                {filteredTasks.map(task => (
                    <TaskCard key={task.id} task={task} />
                ))}

                {/* New task button */}
                <Button
                    variant="outline-primary"
                    href={`./${boardId}/${props.list.id}/createTask`}
                    className="w-100 mt-3"
                >
                    New Task
                </Button>
            </Card.Body>
        </Card>
    );
}

export default List;