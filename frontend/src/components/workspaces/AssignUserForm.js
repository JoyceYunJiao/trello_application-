import { createRef } from "react";
import { Button, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";

function AssignUserForm(props) {
    const {id} = useParams();
    const email = createRef();

    const assignUser = (e) => {
        e.preventDefault();

        const userEmail = email.current.value;
        const data = {
            userEmail: userEmail,
            workspaceId: id
        }

        props.onChange(data);
    }

    return (
        <Form onSubmit={assignUser}>
            <Form.Group controlId="formAssignEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter user email" ref={email}/>
            </Form.Group>

            <Button variant="primary" type="submit">
                Assign User
            </Button>
        </Form>
    )
}

export default AssignUserForm;