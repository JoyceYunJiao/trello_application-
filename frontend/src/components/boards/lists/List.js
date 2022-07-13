import axios from "axios";
import { Card } from "react-bootstrap";

function List(props) {
    // const [cards, getCards] = useState([]);
    
    const getTasks = () => {
        // TODO: Backend for getting Cards
        // axios.get(`http://localhost:8080/getCards/${boardId}`)
        //     .then(response => {
        //         getCards(response.data);
        //     });
    }

    return (
        <Card>
            <Card.Body>
                <Card.Title>{props.list.title}</Card.Title>
                <Card.Text>{props.list.description}</Card.Text>

                {/* TODO: Render all task cards */}
            </Card.Body>
        </Card>
    );
}

export default List;