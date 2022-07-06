import { Button, TextField, Typography } from '@mui/material';
import React, { useRef } from 'react';
import { useParams } from 'react-router-dom';
import Boards from '../../pages/board';

function CreateBoardForm(props:any) {
    const {id} = useParams();

    /* ToDo: Create board name variable using useRef */
    const boardNameRef:any = useRef();
    /* ToDo: Create board description variable using useRef */
    const boardDespRef:any = useRef();

    function createBoard(e:any) {
        e.preventDefault();
        /* ToDo: Implement createBoard function */
        //read the values 
        //boardtitle, Description
        const boardName = boardNameRef.current.value;
        const boardDesp = boardNameRef.current.value;

        const board = {
            title: boardName,
            description: boardDesp,
            workspaceId: id,
            dateCreated: new Date(),
        };

        props.onChange(board);
    };

    return (
        <section style={{ marginTop: '32px' }}>
            <Typography variant='h2' component='h2'>Create New Board {id}</Typography>
            <form onSubmit={createBoard}>
                <TextField
                    id='boardName'
                    placeholder='Board Name'
                    variant='outlined'
                    required
                    fullWidth
                    margin='dense'
                    inputRef={boardNameRef}
                    /* ToDo: Add inputRef and bind with the declared name ref variable*/ />
                <TextField
                    id='boardDesp'
                    placeholder='Board Description'
                    variant='outlined'
                    multiline
                    rows={4}
                    required
                    fullWidth
                    margin='dense'
                    inputRef={boardDespRef}
                     /* ToDo: Add inputRef and bind with the declared desp ref variable*/ />
                <Button type='submit' variant='contained' color='primary' sx={{ marginTop: '16px' }}>
                    Create Board
                </Button>
            </form>
        </section>
    );
};

export default CreateBoardForm;
