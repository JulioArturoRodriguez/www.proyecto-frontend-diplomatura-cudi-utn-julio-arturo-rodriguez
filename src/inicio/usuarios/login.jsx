import React, { useState } from 'react';

import { useNavigate, Link } from 'react-router-dom'; 
import './login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === '12345@yahoo.com' && password === '12345') {
      navigate('/productos');
    } else {
      setError('Credenciales incorrectas. Inténtalo de nuevo.');
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Iniciar Sesión</h2>
        {error && <p className="error">{error}</p>}
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
         <button type="submit">Entrar</button>
         <p className="signup-link">
          ¿No tienes cuenta? <Link to="/Registro">Regístrate aquí</Link>
        </p>
       
      </form>
    </div>
  );
};

export default Login;
