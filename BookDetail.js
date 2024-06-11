// src/components/BookDetail.js

import React from 'react';
import './BookDetail.css';

const BookDetail = ({ book }) => {
  return (
    <div className="book">
      <div className="book-details">
        {book.volumeInfo.imageLinks?.thumbnail && (
          <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
        )}
        <div>
          <h2>{book.volumeInfo.title}</h2>
          <p>{book.volumeInfo.authors?.join(', ')}</p>
          <p>{book.volumeInfo.description}</p>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
