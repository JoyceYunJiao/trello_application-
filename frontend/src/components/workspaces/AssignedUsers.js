import axios from "axios";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import AssignUserForm from "./AssignUserForm";

function AssignedUsers() {
    const {id} = useParams(); // Workspace ID for retrieving assigned users

    const [users, setUsers] = useState([]);

    const navigate = useNavigate();

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
            <ul>
                {users.map((user) => {
                    return <li key={user.id}>{user.username}</li>;
                }
                )}
            </ul>

            <AssignUserForm onChange={assignUser} />
        </Container>
    )
}

export default AssignedUsers;