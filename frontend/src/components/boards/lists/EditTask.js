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




export default function EditTask() {
    const [boards, setBoards] = useState([]);


    const [selected, setSelected] = useState('');
    const [newDate, setNewDate] = useState(new Date());

    const { id, boardId,listId,taskID} = useParams();

    //我现在需要获取该board中所有list的名字 从list调取
    //get the boardID and find all lists name in this board
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

    function editTaskDetails(){
        // event.preventDefault();
        console.log("in edit Task details");

        console.log("new date is "+ newDate+", new list is "+selected);
    }






        console.log("the selected date is "+newDate);
        // console.log("the board id is "+boardId);

    return (
        <FormControl onSubmit={editTaskDetails}>
        <FormLabel id="demo-radio-buttons-group-label">Status</FormLabel>
        <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="ToDo"
            name="radio-buttons-group"
        >
        {boards.map(boards => (
            <FormControlLabel
                    key= {boards.title}
                    value= {boards.title}
                    control={<Radio />} 
                    onChange={handleChange}
                    label= {boards.title}
            />
        ))}

        </RadioGroup>
        <Col>
            <Form.Group controlId="formDateFilter">
                <Form.Label>Date Filter</Form.Label>
            </Form.Group>
            <input type ="date" onChange={date => setNewDate(date.target.value)}></input>
        </Col>


        <Button variant="primary" type="submit" onClick={editTaskDetails}>Edit Task</Button>
        
        </FormControl>







        
    );
}