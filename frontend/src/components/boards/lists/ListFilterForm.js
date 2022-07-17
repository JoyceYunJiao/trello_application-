import { React, useState } from "react";
import TextField from "@mui/material/TextField";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function ListFilterForm() {
    const [startDate, setStartDate] = useState(new Date());
    
    const handleSubmit = (event) => {
        event.preventDefault();
        // TODO: Redirect to this page with the filter parameters in the URL
    }

    const [inputText, setInputText] = useState("");
    let inputHandler = (e) => {
        //convert input text to lower case
        var lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
    };

    return (
        <Card className="mb-5">
            <Card.Body>
            <Form as={Row} onSubmit={handleSubmit}>
                <Col>
                    <Form.Group controlId="formSearch">
                        <Form.Label>Search</Form.Label>
                        <TextField
                            id="outlined-basic"
                            onChange={inputHandler}
                            variant="outlined"
                            fullWidth
                            label="Search"
                        />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group controlId="formDateFilter">
                        <Form.Label>Date Filter</Form.Label>
                        <DatePicker
                            selected={startDate}
                            onChange={date => setStartDate(date)}
                        />
                    </Form.Group>
                </Col>
                <Col>
                    <Button variant="primary" type="submit" className="w-100 mt-4">
                        Filter
                    </Button>
                </Col>
            </Form>
            </Card.Body>
        </Card>
    );
}

export default ListFilterForm;