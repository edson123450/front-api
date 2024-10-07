import React, { useState } from 'react';
import axios from 'axios';

const VerificarPrestamo = () => {
  const [formData, setFormData] = useState({ title: '', author_name: '' });
  const [mensaje, setMensaje] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get('http://lb-prod-894942045.us-east-1.elb.amazonaws.com/loans/check_availability', {
        params: formData
      });
      setMensaje(response.data.message);
    } catch (error) {
      console.error('Error verificando disponibilidad del libro:', error);
      setMensaje('Ocurrió un error.');
    }
  };

  return (
    <div>
      <h3>Verificar Disponibilidad del Libro</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Título del libro" onChange={handleChange} />
        <input type="text" name="author_name" placeholder="Nombre del autor" onChange={handleChange} />
        <button type="submit">Verificar</button>
      </form>
      {mensaje && <p>{mensaje}</p>}
    </div>
  );
};

export default VerificarPrestamo;
