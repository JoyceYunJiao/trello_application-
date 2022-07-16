
import React, {useState,useEffect} from 'react';
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import DatePicker from "react-datepicker";
import { useParams } from "react-router-dom";
import axios from "axios";

// import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import ListNames from "./ShowAllListName";




export default function EditTask() {
    const [boards, setBoards] = useState([]);

    const [selected, setSelected] = useState('');
    const [newDate, setNewDate] = useState(new Date());

    const { id, boardId,listId,taskID} = useParams();

    //我现在需要获取该board中所有list的名字 从list调取
    const fetchBoards = () => {
        axios.get(`http://localhost:8080/getLists/${boardId}`)
            .then(response => {
                console.log(response.data);
                setBoards(response.data);
                // console.log("The getted boards are: "+boards[0].id)
            });
    }

    useEffect(() => {
        fetchBoards();
    }, []);



    const handleChange = event => {
    console.log(event.target.value);
    setSelected(event.target.value);
    //   console.log("the selected task list is "+selected);

    };


        // console.log("the selected new date is "+newDate);
        // console.log("the board id is "+boardId);

    return (
        <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">Status</FormLabel>
        <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="ToDo"
            name="radio-buttons-group"
        >

            {boards.map(boards => (
                <ListNames key={boards.id} boards={boards} />
            ))}

            <FormControlLabel
                value="ToDo" 
                control={<Radio />} 
                checked={selected === 'ToDo'}
                onChange={handleChange}
                label="ToDo" 
            />
            <FormControlLabel
                value="Doing" 
                control={<Radio />} 
                checked={selected === 'Doing'}
                onChange={handleChange}
                label="Doing" 
            />
            <FormControlLabel 
                value="Done" 
                control={<Radio />} 
                checked={selected === 'Done'}
                onChange={handleChange}
                label="Done" 
            />
        </RadioGroup>


        <Col>
            <Form.Group controlId="formDateFilter">
                <Form.Label>Date Filter</Form.Label>
                <DatePicker
                    selected={newDate}
                    onChange={date => setNewDate(date)}
                />
            </Form.Group>

            {/* {board.lists.map(list => (
                        <Col key={list.id}>
                            <List list={list} />
                        </Col>
                    ))} */}
        </Col>
        </FormControl>

        
    );
}