import { Card, CardContent, Typography, Button, CardActions } from '@mui/material';
import axios from 'axios';

function Board(props) {
    return (
        
        <Card>
            <CardContent>
                <Typography component='h4' variant='h4'>
                    {props.board.title}
                </Typography>
                <Typography component='p' variant='body1'>
                    {props.board.description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button variant='contained' disableElevation>
                    View All Tasks
                </Button>

                <Button variant="outlined" onClick={() => {deleteBoardHandler(props.board)}}>
                    Delete
                </Button>
            </CardActions>
        </Card>
    );

    function deleteBoardHandler(board){
        console.log(board);
        //implement the delete board function 
        //unsure if the URL is the right one 
        axios.post('http://localhost:8080/deleteBoard', board)
        .then(() => { window.location.reload() })
    };

}

export default Board;