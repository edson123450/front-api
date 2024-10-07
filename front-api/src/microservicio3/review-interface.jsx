import React, { useState } from 'react';
import axios from 'axios';

const ReviewInterface = () => {
  const [formData, setFormData] = useState({
    bookId: '',
    authorId: '',
    userId: '',
    rating: '',
    comment: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://lb-prod-894942045.us-east-1.elb.amazonaws.com/reviews/new', formData);
      alert('Reseña guardada con éxito.');
    } catch (error) {
      console.error('Error al guardar la reseña:', error);
      alert('Ocurrió un error al guardar la reseña.');
    }
  };

  return (
    <div>
      <h3>Agregar Nueva Reseña</h3>
      <form onSubmit={handleSubmit}>
        <input type="number" name="bookId" placeholder="ID del libro" onChange={handleChange} />
        <input type="number" name="authorId" placeholder="ID del autor" onChange={handleChange} />
        <input type="number" name="userId" placeholder="ID del usuario" onChange={handleChange} />
        <input type="number" name="rating" placeholder="Calificación (1-5)" onChange={handleChange} />
        <textarea name="comment" placeholder="Comentario" onChange={handleChange}></textarea>
        <button type="submit">Guardar Reseña</button>
      </form>
    </div>
  );
};

export default ReviewInterface;
