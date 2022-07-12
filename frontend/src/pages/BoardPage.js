import { useParams } from "react-router-dom";

function BoardPage() {
    // Get the workspace id and  board id from the URL
    const {id, boardId} = useParams();

    return (
        <div>
        <h1>Board Page</h1>
        
        </div>
    );
}

export default BoardPage;