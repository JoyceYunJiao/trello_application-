import axios from "axios";
import { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

function CreateTaskForm() {
    const { id, boardId, listId } = useParams();

    const navigate = useNavigate();

    const titleRef = useRef();
    const descriptionRef = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();

        const title = titleRef.current.value;
        const description = descriptionRef.current.value;
        const date = new Date();
        date.setHours(0, 0, 0, 0);

        const task = {
            title: title,
            description: description,
            listId: listId,
            // https://stackoverflow.com/a/11150727
            date: date.toISOString().slice(0, 19).replace('T', ' ')
        };

        axios.post(`http://localhost:8080/saveTasks`, task)
            .then(response => {
                console.log(response);
                navigate(`/workspaces/${id}/${boardId}/`);
            });
    }

    return (
        <Form onSubmit={handleSubmit}>
            <h1>New Task</h1>

            <Form.Group controlId="formBasicTitle">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" placeholder="Enter title" ref={titleRef}/>
            </Form.Group>

            <Form.Group controlId="formBasicDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" rows="3" placeholder="Enter description" ref={descriptionRef}/>
            </Form.Group>

            <Button variant="primary" type="submit">
                Create
            </Button>
        </Form>
    );
}

export default CreateTaskForm;