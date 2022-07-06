import { Grid, Card, CardContent, Typography, Button } from '@mui/material';

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
            </CardContent>
        </Card>
    );
}

export default Board;