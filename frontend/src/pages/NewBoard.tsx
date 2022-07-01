import axios from "axios";
import { Button, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import NewBoardForm from "../components/boards/NewBoardForm";

function NewBoard() {
    // Workspace id from url
    const {id} = useParams();

    function newBoardHandler(board:any) {
        // axios.post("http://localhost:8080/addBoard/" + id, board)
        //     .then(() => navigate("/workspaces", { replace: true }));
    }

    return (
        <Container>
            <Button href={"/workspaces/"+id}>Back to Workspace</Button>
            <h1>New Board</h1>
            <NewBoardForm />
        </Container>
    );
}

export default NewBoard;