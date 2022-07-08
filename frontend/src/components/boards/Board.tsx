import { Grid, Card, CardContent, Typography, Button } from '@mui/material';
import axios from 'axios';

function Board(props:any) {
    return (
        
        <Card elevation={6}>
            <CardContent>
                <Typography component='h4' variant='h4'>
                    {props.board.title}
                </Typography>
                <Typography component='p' variant='body1'>
                    {props.board.description}
                </Typography>
                <Button variant='contained' sx={{ marginTop: '16px' }}>
                    View All Tasks
                </Button>

                <Button>
                    delete
                </Button>
                
            </CardContent>
        </Card>
    );

    function deleteBoardHandler(board: any){
        //implement the delete board function 
        //unsure if the URL is the right one 
        axios.delete('http://localhost:9001/deleteBoard', board)
        .then(() => { window.location.reload() })
    };

}

export default Board;