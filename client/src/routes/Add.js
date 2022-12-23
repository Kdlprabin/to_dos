import React from "react";
import { Form, Button, Alert } from "react-bootstrap";
import axios from "axios";
import { useState, useEffect } from "react";
function Add() {
  const data = {
    title: "",
    body: "",
    userId: 1,
  };
  const [formData, setFormData] = useState(data);
  const [isSubmit, setIsSubmit] = useState(false);
  const [status, setStatus] = useState(0);
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
      axios
        .post("https://jsonplaceholder.typicode.com/posts", formData)
        .then((response) => setStatus(response.status));
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
            placeholder="Description...."
            name="body"
            value={formData.body}
            onChange={handleChange}
          />
        </Form.Group>
        {status === 201 && (
          <Alert key="success" variant="success">
            Post submitted successfully.
          </Alert>
        )}
        <Button variant="primary" type="button" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Add;
