import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import TaskCard from "./TaskCard";

function List(props) {
    const [tasks, setTasks] = useState([]);
    const [searchFilteredTasks, setSearchFilteredTasks] = useState([]);
    const [dateFilteredTasks, setDateFilteredTasks] = useState([]);
    const { id, boardId } = useParams();
    
    const fetchTasks = () => {
        axios.get(`http://localhost:8080/getTaskByList/${props.list.id}`)
            .then(response => {
                setTasks(response.data);
                setSearchFilteredTasks(response.data);
                setDateFilteredTasks(response.data);
            });
    }

    const filterList = (filterText, filterDate, filterDateMode) => {
        console.log(filterText);
        setSearchFilteredTasks(tasks.filter(task => task.title.toLowerCase().includes(filterText)));
        
        // TODO: filter by due date
        // props.filterDate is a Date object representing the user's selected date
        // props.filterDateMode is a string representing the user's selected date mode
        //      Can be "", "on", "before", or "after"

        // use setFilteredTasks to update the filteredTasks, and that's all!
        
        setDateFilteredTasks(tasks.filter(task => {
            console.log(`Comapring ${task.date} to ${filterDate}`);
            if (filterDateMode === "") {
                return true;
            } else if (filterDateMode === "on") {
                return Date.parse(task.date) === filterDate.getTime();
            } else if (filterDateMode === "before") {
                return Date.parse(task.date) < filterDate.getTime();
            } else if (props.filterDateMode === "after") {
                return Date.parse(task.date) > filterDate.getTime();
            }
        }));
    }

    useEffect(() => {
        fetchTasks();
    }, []);

    // Filter on filterText change
    useEffect(() => {
        filterList(props.filterText, props.filterDate, props.filterDateMode);
    }, [props.filterText, props.filterDate, props.filterDateMode]);

    return (
        <Card className="bg-light">
            <Card.Body>
                <Card.Title>{props.list.title}</Card.Title>
                <Card.Text>{props.list.description}</Card.Text>

                {/* Render all task cards */}
                {(searchFilteredTasks.filter(task => dateFilteredTasks.includes(task))).map(task => (
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