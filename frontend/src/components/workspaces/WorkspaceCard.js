import { Card } from "react-bootstrap";

function WorkspaceCard(props) {
    return (
        <Card>
            <a href={"/workspaces/" + props.workspace.id}>
                <Card.Body>
                    <h2>{props.workspace.title}</h2>
                    <p>{props.workspace.description}</p>
                </Card.Body>
            </a>
        </Card>
    );
}
export default WorkspaceCard;