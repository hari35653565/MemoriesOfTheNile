import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import './Estilos.css'
import imagenEgipto from './ImagenEgipto.png';

const Registro = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [buttonColor, setButtonColor] = useState('');

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

  const handleMouseEnter = () => {
    setButtonColor('#ff502d'); // Cambia el color de fondo al pasar el mouse por encima
  };

  const handleMouseLeave = () => {
    setButtonColor(''); // Restaura el color de fondo al dejar de pasar el mouse por encima
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
    <div className="login-page">
      <div className="informacion">
      <h1> Welcome to memories of the Nile</h1>
      <form onSubmit={handleLogin}>
       <h2>Registro</h2>
       <img className='imagen-login' src={imagenEgipto} alt="Imagen de Egipto" />
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
        <button   onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{ backgroundColor: buttonColor }} type="submit">Registrarse</button>
        <h4> ¿ya tienes una cuenta?</h4>
        <Link className='link' to="/">Ingresar</Link>
      </form>
    

      </div>

     
     
    </div>
  );
};

export default Registro;
