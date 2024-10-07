import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import ReviewInterface from '../microservicio3/review-interface';
import VerReviewsDeUnLibroConAutor from '../microservicio3/ver-reviews-de-unlibro-conautor';
import VerLibrosSegunRating from '../microservicio3/ver-libros-segun-rating';

const Reseñas = () => {
  return (
    <div>
      <h2>Sección de Reseñas</h2>
      <ul>
        <li><Link to="agregar-reseña">Agregar Nueva Reseña</Link></li>
        <li><Link to="ver-reseñas-por-libro">Ver Reseñas por Libro y Autor</Link></li>
        <li><Link to="ver-libros-por-rating">Ver Libros Según Rating</Link></li>
      </ul>
      <Routes>
        <Route path="agregar-reseña" element={<ReviewInterface />} />
        <Route path="ver-reseñas-por-libro" element={<VerReviewsDeUnLibroConAutor />} />
        <Route path="ver-libros-por-rating" element={<VerLibrosSegunRating />} />
      </Routes>
    </div>
  );
};

export default Reseñas;
