import React from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
function Add() {
  const handleSubmit = () => {
    alert("The To Do has been submitted.");
  };
  return (
    <div className="add-items-form">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" placeholder="Enter Title" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" row={5} placeholder="Description...." />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Select Date</Form.Label>
          <Form.Control type="date" placeholder="Completed Date" />
        </Form.Group>
        <Button variant="primary" type="button" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Add;
