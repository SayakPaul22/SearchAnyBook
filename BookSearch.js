// src/components/BookSearch.js

import React, { useState } from 'react';
import axios from 'axios';
import BookDetail from './BookDetail';
import './BookSearch.css';

const BookSearch = () => {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${query}`
      );
      setBooks(response.data.items);
    } catch (error) {
      console.error('Error fetching data from Google Books API', error);
    }
  };

  return (
    <div>
      <h1>Book Search</h1>
      <div className="search-bar">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for books"
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="book-list">
        {books && books.map((book) => (
          <BookDetail key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default BookSearch;
