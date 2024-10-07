import React, { useState } from 'react';
import axios from 'axios';

const RegistrarPrestamo = () => {
  const [formData, setFormData] = useState({
    title: '',
    author_name: '',
    user_name: '',
    user_email: '',
    loan_date: '',
    return_date: ''
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
      const response = await axios.post('http://lb-prod-894942045.us-east-1.elb.amazonaws.com/loans', formData);
      alert(response.data.message);
    } catch (error) {
      console.error('Error registrando préstamo:', error);
      alert('Ocurrió un error al registrar el préstamo.');
    }
  };

  return (
    <div>
      <h3>Registrar un Préstamo</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Título del libro" onChange={handleChange} />
        <input type="text" name="author_name" placeholder="Nombre del autor" onChange={handleChange} />
        <input type="text" name="user_name" placeholder="Nombre del usuario" onChange={handleChange} />
        <input type="email" name="user_email" placeholder="Correo del usuario" onChange={handleChange} />
        <input type="date" name="loan_date" onChange={handleChange} />
        <input type="date" name="return_date" onChange={handleChange} />
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
};

export default RegistrarPrestamo;
