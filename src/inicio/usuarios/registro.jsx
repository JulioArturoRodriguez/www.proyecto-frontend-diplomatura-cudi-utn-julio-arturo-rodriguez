import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './registro.css';
import { Link } from 'react-router-dom';

const Registro = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [tarjeta, setTarjeta] = useState('');
  const [dni, setDni] = useState('');
  const [celular, setCelular] = useState('');
  const [preguntaSeguridad, setPreguntaSeguridad] = useState('');
  const [respuestaSeguridad, setRespuestaSeguridad] = useState('');
  const [edad, setEdad] = useState('');
  const [fechaNacimiento, setFechaNacimiento] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !nombre ||
      !apellido ||
      !email ||
      !password ||
      !tarjeta ||
      !dni ||
      !celular ||
      !preguntaSeguridad ||
      !respuestaSeguridad ||
      !edad ||
      !fechaNacimiento
    ) {
      setError('Por favor, completa todos los campos.');
      setSuccess('');
      return;
    }
    if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden.');
      setSuccess('');
      return;
    }

    setError('');
    setSuccess('Usuario registrado con éxito.');
  };

  return (
    <div className="registro-container d-flex justify-content-center align-items-center vh-100">
      <div className="registro-form-container p-4 rounded">
        <h2 className="text-center text-info">Crear Cuenta</h2>
        {error && <p className="text-danger text-center">{error}</p>}
        {success && <p className="text-success text-center">{success}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Nombre</label>
            <input
              type="text"
              className="form-control"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Apellido</label>
            <input
              type="text"
              className="form-control"
              value={apellido}
              onChange={(e) => setApellido(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Correo Electrónico</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Contraseña</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Confirmar Contraseña</label>
            <input
              type="password"
              className="form-control"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Número de Tarjeta</label>
            <input
              type="text"
              className="form-control"
              value={tarjeta}
              onChange={(e) => setTarjeta(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">DNI</label>
            <input
              type="text"
              className="form-control"
              value={dni}
              onChange={(e) => setDni(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Número de Celular</label>
            <input
              type="text"
              className="form-control"
              value={celular}
              onChange={(e) => setCelular(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Pregunta de Seguridad</label>
            <input
              type="text"
              className="form-control"
              value={preguntaSeguridad}
              onChange={(e) => setPreguntaSeguridad(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Respuesta de Seguridad</label>
            <input
              type="text"
              className="form-control"
              value={respuestaSeguridad}
              onChange={(e) => setRespuestaSeguridad(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Edad</label>
            <input
              type="number"
              className="form-control"
              value={edad}
              onChange={(e) => setEdad(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Fecha de Nacimiento</label>
            <input
              type="date"
              className="form-control"
              value={fechaNacimiento}
              onChange={(e) => setFechaNacimiento(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-info w-100">
            Registrarse
          </button>
        </form>
        <div className="mt-3 text-center">
          <Link to="/" className="text-info">
            ¿Ya tienes cuenta? Inicia sesión
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Registro;
