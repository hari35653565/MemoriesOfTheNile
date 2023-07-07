import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const Registro = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const history = useNavigate();

  const instance = axios.create({
    baseURL: 'https://mem-backend.onrender.com'
  });

  const handleUserChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  async function handleLogin(e){
    e.preventDefault();
    const data = {username, email, password};
    try {
        const res = await instance.post('/api/users', data);
        console.log(res);
        alert('Usuario Registrado Exitosamente');
        history("/");
  
      } catch (err) {
        alert(err);
        console.error(err);
      }

}

  return (
    <div>
      <h2>Registro</h2>
      <form onSubmit={handleLogin}>
        <label>
          Nombre de Usuario:
          <input
            type="username"
            value={username}
            onChange={handleUserChange}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </label>
        <br />
        <button type="submit">Registrarse</button>
      </form>
      <Link to="/">Volver</Link>
    </div>
  );
};

export default Registro;
