import React from 'react'
import {Form, Button} from "react-bootstrap"
function Add() {
  return (
    <div className="add-items-form">
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Title</Form.Label>
        <Form.Control type="email" placeholder="Enter Title" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" row={5} placeholder="Description...." />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Select Date</Form.Label>
        <Form.Control type="date" placeholder="Completed Date" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Do you want to add this item to the list?" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
  )
}

export default Add