import axios from "axios";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import List from "../components/boards/lists/List";

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
            <h1>{board.title}</h1>
            <p>{board.description}</p>

            {/* Board lists */}
            <Row>
            {board.lists.map(list => (
                <Col key={list.id}>
                    <List list={list} />
                </Col>
            ))}
            </Row>
        </Container>
    );
}

export default BoardPage;