import React from "react";
import { FormControl, FormGroup, Form, Button } from "react-bootstrap";

export default function Register() {
  return (
    <Form>
      <FormGroup>
        <Form.Label>First Name</Form.Label>
        <FormControl type="text" placeholder="Enter FirstName" />
      </FormGroup>
      <FormGroup>
        <Form.Label>LastName</Form.Label>
        <FormControl type="text" placeholder="Enter LastName" />
      </FormGroup>
      <FormGroup controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <FormControl type="email" placeholder="Enter email" />
        {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
      </FormGroup>

      <FormGroup controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <FormControl type="password" placeholder="Password" />
      </FormGroup>
      <FormGroup controlId="formBasicPassword">
        <Form.Label>Confirm Password</Form.Label>
        <FormControl type="password" placeholder="please confirm Password" />
      </FormGroup>
      {/* <FormGroup controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </FormGroup> */}
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}