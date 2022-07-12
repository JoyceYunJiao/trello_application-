import axios from "axios";
import { useEffect, useState } from "react";
import { Container, ListGroup } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import AssignUserForm from "./AssignUserForm";

function AssignedUsers() {
    const {id} = useParams(); // Workspace ID for retrieving assigned users

    const [users, setUsers] = useState([]);

    function getAssignedUsers() {
        axios.get("http://localhost:8080/getAssignedUsers/" + id)
            .then((response) => {
                setUsers(response.data);
            }
        );
    }

    function assignUser(body) {
        axios.put("http://localhost:8080/assignWorkspaceUser/", body)
            .then(() => getAssignedUsers());
    }

    useEffect(() => {
        getAssignedUsers();
    }, []);

    return (
        <Container>
            <h2>Assigned users</h2>
            <ListGroup>
                {users.map((user) => {
                    return <ListGroup.Item key={user.id}>{user.firstName} {user.lastName} ({user.username})</ListGroup.Item>;
                }
                )}
            </ListGroup>

            <AssignUserForm onChange={assignUser} />
        </Container>
    )
}

export default AssignedUsers;