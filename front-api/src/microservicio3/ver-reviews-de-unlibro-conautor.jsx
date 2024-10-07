import React, { useState } from 'react';
import axios from 'axios';

const VerReviewsDeUnLibroConAutor = () => {
  const [formData, setFormData] = useState({ title: '', authorName: '' });
  const [reviews, setReviews] = useState([]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get('http://lb-prod-894942045.us-east-1.elb.amazonaws.com/reviews/by-book-author', {
        params: formData
      });
      setReviews(response.data);
    } catch (error) {
      console.error('Error al obtener las reseñas:', error);
    }
  };

  return (
    <div>
      <h3>Ver Reseñas por Libro y Autor</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Título del libro" onChange={handleChange} />
        <input type="text" name="authorName" placeholder="Nombre del autor" onChange={handleChange} />
        <button type="submit">Buscar Reseñas</button>
      </form>
      <ul>
        {reviews.map((review, index) => (
          <li key={index}>
            <strong>Usuario:</strong> {review.userName}, <strong>Calificación:</strong> {review.rating}, <strong>Comentario:</strong> {review.comment}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VerReviewsDeUnLibroConAutor;
