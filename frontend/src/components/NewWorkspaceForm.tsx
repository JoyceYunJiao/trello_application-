import { Button, Container, Form } from "react-bootstrap";

function NewWorkspaceForm(props:any) {
    return (
        <Container>
            <Form>
                <Form.Group controlId="formWorkspaceTitle">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" placeholder="Enter title" />
                </Form.Group>

                <Form.Group controlId="formWorkspaceDescription">
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Create Workspace
                </Button>
            </Form>
        </Container>
    )
}

export default NewWorkspaceForm;