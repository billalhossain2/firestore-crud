import React from "react";
import { Col, Form, Row, Button } from "react-bootstrap";

const BookForm = ({
  title,
  setTitle,
  author,
  setAuthor,
  status,
  setStatus,
  error,
  success,
  addBook,
  editable,
  setEditable,
  handleUpdate
}) => {
  const handleSubmit = (ev) => {
    ev.preventDefault();
    //validate empty fields
    if(!title || !author || !status){
      return alert("All fields are mandatory")
    }

    !editable ? addBook({title, author, status}) : handleUpdate();
  };

  return (
    <Form onSubmit={handleSubmit} className="w-25 mx-auto mt-5">
      <Row>
        <p style={{color:"green", fontWeight:'bold', fontSize:'20px'}}>{success}</p>
      </Row>
      <Row>
        <Form.Group controlId="formGridEmail">
          <Form.Control
            className="mb-3"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Book Title"
          />
        </Form.Group>

        <Form.Group controlId="formGridPassword">
          <Form.Control
            className="mb-3"
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="Book Author"
          />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Button
          onClick={() => setStatus("Available")}
          className={`me-3`}
          style={status==="Available" ? {background:"lightgray"} : {}}
          as={Col}
          variant="info"
          type="submit"
          disabled={status==="Available" ? true : false}
        >
          Available
        </Button>
        <Button
          onClick={() => setStatus("Not Available")}
          as={Col}
          variant="dark"
          type="submit"
          style={status==="Not Available" ? {background:"lightgray"} : {}}
          disabled={status==="Not Available" ? true : false}
        >
          Not Available
        </Button>
      </Row>

      <Button variant="primary" type="submit">
       {!editable ? "Add New Book" : "Update Book"}
      </Button>
    </Form>
  );
};

export default BookForm;
