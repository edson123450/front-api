import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import ListarLibros from '../microservicio1/listar-libros';
import ListarLibrosPorAutor from '../microservicio1/listar-libros-por-autor';

const Libros = () => {
  return (
    <div>
      <h2>Sección de Libros</h2>
      <ul>
        <li><Link to="listar-libros">Listar Libros</Link></li>
        <li><Link to="listar-libros-por-autor">Listar Libros por Autor</Link></li>
      </ul>
      <Routes>
        <Route path="listar-libros" element={<ListarLibros />} />
        <Route path="listar-libros-por-autor" element={<ListarLibrosPorAutor />} />
      </Routes>
    </div>
  );
};

export default Libros;
