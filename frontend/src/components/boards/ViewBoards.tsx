import React from 'react';
import { Grid, Card, CardContent, Typography, Button } from '@mui/material';
import Board from './Board';

function ViewBoards(props:any) {
    return (
        <section style={{ marginTop: '32px' }}>
            <Typography variant='h2' component='h2'>Boards</Typography>
            <Grid container spacing={2}>
                {props.boards.map((board:any) => {
                    return (
                        <Grid item xs={12} sm={12} md={4} lg={3} key={board.id}>
                            <Board board={board} key={board.id}/>
                        </Grid>
                    );
                })}
            </Grid>
        </section>
    );
};

export default ViewBoards;
