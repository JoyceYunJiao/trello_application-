
import React, {useState} from 'react';
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import DatePicker from "react-datepicker";
import { useParams } from "react-router-dom";

// import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';



export default function EditTask() {

const [selected, setSelected] = useState('yes');
const [newDate, setNewDate] = useState(new Date());

const { id, boardId } = useParams();


const handleChange = event => {
  console.log(event.target.value);
  setSelected(event.target.value);
  console.log("the selected task list is "+selected);

};

console.log("the selected new date is "+newDate);
console.log("the board id is "+boardId);





  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Status</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="ToDo"
        name="radio-buttons-group"
      >
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