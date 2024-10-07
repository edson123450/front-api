import React, { useState } from 'react';
import axios from 'axios';

const VerLibrosSegunRating = () => {
  const [rating, setRating] = useState('');
  const [books, setBooks] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get('http://lb-prod-894942045.us-east-1.elb.amazonaws.com/reviews/by-rating', {
        params: { rating }
      });
      setBooks(response.data);
    } catch (error) {
      console.error('Error al obtener los libros:', error);
    }
  };

  return (
    <div>
      <h3>Ver Libros Según Calificación</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Calificación (1-5)"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />
        <button type="submit">Buscar</button>
      </form>
      <ul>
        {books.map((book, index) => (
          <li key={index}>
            <strong>Libro:</strong> {book.title}, <strong>Autor:</strong> {book.authorName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VerLibrosSegunRating;
