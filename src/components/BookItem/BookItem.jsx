import React from "react";
import { Button } from "react-bootstrap";
const BookItem = ({book, deleteBook, handleEdit}) => {
  const {id, title, author, status} = book;
  return (
    <tr>
      <td>{title}</td>
      <td>{author}</td>
      <td>{status}</td>
      <td>
        <Button onClick={()=>deleteBook(id)} className="me-1" variant="danger">
          Delete
        </Button>
        <Button onClick={()=>handleEdit(book)} variant="success">Edit</Button>
      </td>
    </tr>
  );
};

export default BookItem;
