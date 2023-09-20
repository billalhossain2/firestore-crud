import React from "react";
import { Button } from "react-bootstrap";
const BookItem = () => {
  return (
    <tr>
      <td>Introduction to JavaScript</td>
      <td>Siam Ahmed</td>
      <td>Not Available</td>
      <td>
        <Button className="me-1" variant="danger">
          Delete
        </Button>
        <Button variant="success">Edit</Button>
      </td>
    </tr>
  );
};

export default BookItem;
