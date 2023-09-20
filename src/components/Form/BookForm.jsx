import React from "react";
import { Col, Form, Row, Button } from "react-bootstrap";

const BookForm = () => {
  return (
    <Form className="w-25 mx-auto mt-5">
      <Row>
        <Form.Group  controlId="formGridEmail">
          <Form.Control className="mb-3" type="text" placeholder="Book Title" />
        </Form.Group>

        <Form.Group  controlId="formGridPassword">
          <Form.Control className="mb-3" type="text" placeholder="Book Author" />
        </Form.Group>
      </Row>
      <Row className="mb-3">
      <Button className="me-3" as={Col} variant="info"  type="submit">Available</Button>
      <Button as={Col} variant="dark" type="submit">Not Available</Button>
      </Row>

      <Button variant="primary" type="submit">
        Add / Update
      </Button>
    </Form>
  );
};

export default BookForm;
