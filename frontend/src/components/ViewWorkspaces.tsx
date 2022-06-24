import { Card, Container } from "react-bootstrap";

function ViewWorkspaces(props:any) {
    return (
        <Container>
            {
                props.workspaces.map((workspace:any) => {
                    return (
                        <Card>
                            <Card.Body>
                                <h2>{workspace.title}</h2>
                                <p>{workspace.description}</p>
                            </Card.Body>
                        </Card>
                    );
                })
            }
        </Container>
    )
}

export default ViewWorkspaces;