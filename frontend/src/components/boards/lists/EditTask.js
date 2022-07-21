import { useState, useEffect, useRef } from 'react';
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import FormLabel from '@mui/material/FormLabel';

export default function EditTask() {
    // URL parameters
    const { id, boardId, listId, taskID } = useParams();

    // Navigate for redirect
    const navigate = useNavigate();

    // State for task
    const [lists, setLists] = useState([]);
    const [newDate, setNewDate] = useState(new Date().toISOString().slice(0, 19).replace('T', ' '));

    const newListId = useRef();

    //get the boardID and find all lists name in this board
    const fetchLists = () => {
        axios.get(`http://localhost:8080/getLists/${boardId}`)
            .then(response => {
                setLists(response.data);
            });
    }

    // Get lists on page load
    useEffect(() => {
        fetchLists();
    }, []);

    // Function for handling submit
    function editTaskDetails(event){
        event.preventDefault();

        console.log("in edit Task details");
        console.log(newDate);

        let id = taskID;
        let date = newDate;
        let listId = +(newListId.current.value);

        const taskDateBody = {id, date};
        const taskListIdBody = {id, listId};

        console.log(taskDateBody);
        console.log(taskListIdBody);

        //post method here!!!!
        axios.post('http://localhost:8080/updateDueDate', taskDateBody)
        .then(response => {
            // Nested axios call for updating listId
            axios.post('http://localhost:8080/changeStatus', taskListIdBody)
            .then(response => {
                navigate('/workspaces/'+id+"/"+boardId);
            });
        });    
    }

    return (
        <Container>
            <Button variant="primary" onClick={() => navigate('/workspaces/'+id+"/"+boardId)} className="m-4">
                Back to Board
            </Button>

            <Card>
                <Card.Header>
                    <h1>Edit Task</h1>
                </Card.Header>
                <Card.Body>
                    <Form onSubmit={editTaskDetails}>
                        <Row>
                            <Col xs={8}>
                                <Form.Group controlId="formListSelect">
                                    <Row>
                                        <Col xs={3}>
                                            <FormLabel>Status</FormLabel>
                                        </Col>
                                        <Col>
                                            <Form.Select ref={newListId}>
                                                {lists.map(list => (
                                                    <option
                                                        key={list.id}
                                                        value={list.id}
                                                    >
                                                        {list.title}
                                                    </option>
                                                ))}
                                            </Form.Select>
                                        </Col>
                                    </Row>
                                </Form.Group>
                            </Col>

                            <Col>
                                <Form.Group controlId="formDateFilter">
                                    <Form.Label className="m-2">Due Date</Form.Label>
                                    <input type ="date" onChange={date => setNewDate(date.target.value)}></input>
                                </Form.Group>
                            </Col>
                        </Row>
                            

                        <Button variant="primary" type="submit" className="m-4 w-50">Edit Task</Button>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    );
}