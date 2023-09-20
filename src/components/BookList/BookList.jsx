import React from 'react'
import { Button, Table } from 'react-bootstrap'
import BookItem from '../BookItem/BookItem'

const BookList = ({books, deleteBook}) => {
  return (
    <Table className='mt-5 w-50 mx-auto'>
        <thead>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {
          books.map(book => <BookItem key={book.id} book={book} deleteBook={deleteBook}></BookItem>)
        }
      </tbody>
    </Table>
  )
}

export default BookList