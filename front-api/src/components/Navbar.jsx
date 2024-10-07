import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/libros">Libros</Link></li>
        <li><Link to="/prestamos">Préstamos</Link></li>
        <li><Link to="/reseñas">Reseñas</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
