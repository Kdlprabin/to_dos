import React from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { useState, useEffect } from "react";
function Add() {
  const data = {
    title: "",
    description: "",
    happened_date: "",
    if_done: "false",
  };
  const [formData, setFormData] = useState(data);
  const [isSubmit, setIsSubmit] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmit(true);
  };
  useEffect(() => {
    if (isSubmit) {
      axios.post("/api/post", formData).then((response) => console.log(response));
    }
  });
  return (
    <div className="add-items-form">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Title"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            row={5}
            placeholder="Description...."
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Select Date</Form.Label>
          <Form.Control
            type="date"
            placeholder="Completed Date"
            name="happened_data"
            value={formData.happened_date}
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant="primary" type="button" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Add;
