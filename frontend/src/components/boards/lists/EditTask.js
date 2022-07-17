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
// import ListNames from "./ShowAllListName";

// import Stack from '@mui/material/Stack';
// import TextField from '@mui/material/TextField';
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { TimePicker } from '@mui/x-date-pickers/TimePicker';
// import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
// import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
// import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';



export default function EditTask() {
    const [boards, setBoards] = useState([]);
    const [value, setValue] = React.useState(new Date('2014-08-18T21:11:54'));


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



    const dateChange = (newValue) => {
      setValue(newValue);
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
            <FormControlLabel
                    key= {boards.title}
                    value= {boards.title}
                    control={<Radio />} 
                    onChange={handleChange}
                    label= {boards.title}
            />
        ))}

        </RadioGroup>



        {/* 抄的 */}
        {/* <LocalizationProvider dateAdapter={AdapterDateFns}> */}
            {/* <DatePicker
                label="Basic example"
                value={value}
                onChange={(newValue) => {
                setValue(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
            /> */}
        {/* </LocalizationProvider> */}

            





        <Col>
            <Form.Group controlId="formDateFilter">
                <Form.Label>Date Filter</Form.Label>
                <DatePicker
                    selected={newDate}
                    onChange={date => setNewDate(date)}
                />
            </Form.Group>

        </Col>
        </FormControl>

        
    );
}