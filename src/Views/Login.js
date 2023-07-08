import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import './Estilos.css'
import imagenEgipto from './ImagenEgipto.png';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [buttonColor, setButtonColor] = useState('');

  const history = useNavigate();

  const instance = axios.create({
    baseURL: 'https://mem-backend.onrender.com'
  });

  const handleUserChange = (event) => {
    setUsername(event.target.value);
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

    try{

        await axios.post("https://mem-backend.onrender.com/api/login",{
            username,password
        })
        .then(res=>{
            if(res.data.message ==='Login successful' ){
                console.log(res.data);
                history("/experience");
            }
            else {
                alert("Usuario no Encontrado");
                console.log(res.data);
            }
        })
        .catch(e=>{
            alert("wrong details")
            console.log(e);
        })

    }
    catch(e){
        console.log(e);

    }

  };

  const toSignup = () => {
    history("/signup")
  }

  return (
    <>
      <div className="login-page">
        <div className="informacion">
          
          <h1>Memories of the Nile</h1>
          
          <form onSubmit={handleLogin}>
            <h2>Login</h2>
            <img className='imagen-login' src={imagenEgipto} alt="Imagen de Egipto" />
        
            <label>
              Usuario o Email:
              <input
                type="username"
                value={username}
                onChange={handleUserChange}
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

            <button  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{ backgroundColor: buttonColor }} >Ingresar</button>
            <h4> ¿aun no tienes una cuenta?</h4>
            <Link className="link" to="/signup">Crear una aquí</Link>
          </form>

          <h3>Aprende todo sobre la cultura del antiguo Egipto</h3>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
