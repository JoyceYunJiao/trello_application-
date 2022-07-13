import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import List from "../components/boards/lists/List";
import ListFilterForm from "../components/boards/lists/ListFilterForm";

function BoardPage() {
    // Get the workspace id and board id from the URL
    const {id, boardId} = useParams();

    // Loading state for the board
    const [loading, setLoading] = useState(true);

    // Board data
    const [board, setBoard] = useState();

    const getBoard = () => {
        axios.get(`http://localhost:8080/board/${boardId}`)
            .then(response => {
                
                // TODO: Filter out lists by parameters in the URL

                setBoard(response.data);
                setLoading(false);
            }
        );
    }

    // Get the board data from the backend
    useEffect(() => {
        getBoard();
    }, []);

    if (loading) {
        return <div>Loading board...</div>;
    }

    return (
        <Container>
            <Row className="my-4">
                <Col sm={2}>
                    <Button href={"../"+id}>
                        Return to Workspace
                    </Button>
                </Col>
                <Col className="text-start ml-4">
                    <h1>{board.title}</h1>
                    <p>{board.description}</p>
                </Col>
            </Row>

            {/* Search filter */}
            <ListFilterForm />


            {/* Board lists */}
            <Row>
                {board.lists.map(list => (
                    <Col key={list.id}>
                        <List list={list} />
                    </Col>
                ))}

                <Col>
                    <Button variant="secondary" href={boardId+"/createList"} className="w-100">
                        Create List
                    </Button>
                </Col>
            </Row>
        </Container>
    );
}

export default BoardPage;