import { Card, Container, Form, Button } from "react-bootstrap";

function UserLoginForm() {
    const handleSubmit = (e:any) => {
        e.preventDefault();
    }

    return (
        <Card>
            <Card.Body>
                <Container>
                    <h2>Login</h2>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="userLoginEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" required/>
                        </Form.Group>

                        <Form.Group controlId="userLoginPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" required/>
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Login
                        </Button>
                    </Form>
                </Container>
            </Card.Body>
        </Card>
    );
}

export default UserLoginForm;