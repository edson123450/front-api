import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ListarLibros = () => {
  const [libros, setLibros] = useState([]);

  useEffect(() => {
    axios.get('http://lb-prod-894942045.us-east-1.elb.amazonaws.com/books')
      .then(response => {
        setLibros(response.data.books);
      })
      .catch(error => {
        console.error('Error fetching libros:', error);
      });
  }, []);

  return (
    <div>
      <h3>Lista de Libros</h3>
      <ul>
        {libros.map(libro => (
          <li key={libro.id}>{libro.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListarLibros;
