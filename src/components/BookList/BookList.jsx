import React from "react";
import { Button, Table } from "react-bootstrap";
import BookItem from "../BookItem/BookItem";

const BookList = ({ books, deleteBook, editable, setEditable, handleEdit }) => {
  return (
    <Table className="mt-5 w-50 mx-auto">
      <thead>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book) => (
          <BookItem
            key={book.id}
            book={book}
            deleteBook={deleteBook}
            editable={editable}
            setEditable={setEditable}
            handleEdit={handleEdit}
          ></BookItem>
        ))}
      </tbody>
    </Table>
  );
};

export default BookList;
