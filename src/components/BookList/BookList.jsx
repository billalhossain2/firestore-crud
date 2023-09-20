import React from 'react'
import { Button, Table } from 'react-bootstrap'
import BookItem from '../BookItem/BookItem'

const BookList = () => {
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
        <BookItem></BookItem>
        <BookItem></BookItem>
        <BookItem></BookItem>
      </tbody>
    </Table>
  )
}

export default BookList