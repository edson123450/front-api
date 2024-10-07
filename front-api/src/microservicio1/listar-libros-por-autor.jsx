import React, { useState } from 'react';
import axios from 'axios';

const ListarLibrosPorAutor = () => {
  const [autor, setAutor] = useState('');
  const [libros, setLibros] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.get(`http://lb-prod-894942045.us-east-1.elb.amazonaws.com/books/by_author/${autor}`)
      .then(response => {
        setLibros(response.data.books);
      })
      .catch(error => {
        console.error('Error fetching libros:', error);
      });
  };

  return (
    <div>
      <h3>Buscar libros por autor</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={autor}
          onChange={(e) => setAutor(e.target.value)}
          placeholder="Nombre del autor"
        />
        <button type="submit">Buscar</button>
      </form>
      <ul>
        {libros.map(libro => (
          <li key={libro.id}>{libro.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListarLibrosPorAutor;
