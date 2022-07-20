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
        console.log(tasks);
        console.log(filteredTasks);
        setFilteredTasks(tasks);
        setFilteredTasks(tasks.filter(task => task.title.toLowerCase().includes(props.filterText)));
        
        // TODO: filter by due date
        // props.filterDate is a Date object representing the user's selected date
        // props.filterDateMode is a string representing the user's selected date mode
        //      Can be "", "on", "before", or "after"

        // use setFilteredTasks to update the filteredTasks, and that's all!
        let tempFilteredTasks = [];
        for (let i = 0; i < filteredTasks.length; i++) {
            const task = filteredTasks[i];
            
            if (props.filterDateMode === "on") {
                if (Date.parse(task.date) === props.filterDate.getTime()) {
                    tempFilteredTasks.push(task);
                }
            } else if (props.filterDateMode === "before") {
                if (Date.parse(task.date) < props.filterDate.getTime()) {
                    tempFilteredTasks.push(task);
                }
            }
            else if (props.filterDateMode === "after") {
                if (Date.parse(task.date) > props.filterDate.getTime()) {
                    tempFilteredTasks.push(task);
                }
            } else {
                tempFilteredTasks.push(task);
            }
        }

        console.log("Filtered: "+ tempFilteredTasks);
        // setFilteredTasks(tempFilteredTasks);
    }

    useEffect(() => {
        fetchTasks();
    }, []);

    // Filter on filterText change
    useEffect(() => {
        filterList();
    }, [props.filterText, props.filterDate, props.filterDateMode]);

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