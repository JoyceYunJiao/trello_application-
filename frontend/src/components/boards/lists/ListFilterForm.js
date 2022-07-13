import { useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function ListFilterForm() {
    const [startDate, setStartDate] = useState(new Date());
    
    const handleSubmit = (event) => {
        event.preventDefault();
        // TODO: Redirect to this page with the filter parameters in the URL
    }

    return (
        <Card className="mb-5">
            <Card.Body>
            <Form as={Row} onSubmit={handleSubmit}>
                <Col>
                    <Form.Group controlId="formSearch">
                        <Form.Label>Search</Form.Label>
                        <Form.Control type="text" placeholder="Enter a keyword" />
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