import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import RegistrarPrestamo from '../microservicio2/registrar-un-prestamo';
import VerificarPrestamo from '../microservicio2/ver-si-libro-esta-prestado';

const Prestamos = () => {
  return (
    <div>
      <h2>Sección de Préstamos</h2>
      <ul>
        <li><Link to="registrar-prestamo">Registrar un Préstamo</Link></li>
        <li><Link to="verificar-prestamo">Verificar Disponibilidad de un Libro</Link></li>
      </ul>
      <Routes>
        <Route path="registrar-prestamo" element={<RegistrarPrestamo />} />
        <Route path="verificar-prestamo" element={<VerificarPrestamo />} />
      </Routes>
    </div>
  );
};

export default Prestamos;
