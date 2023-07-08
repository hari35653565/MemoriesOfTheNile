import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import './Estilos.css'

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

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

            <button type="submit">Ingresar</button>
            <button onClick={toSignup}>Crear una cuenta nueva</button>
            <Link to="/">Continuar a experience</Link>
          </form>

          <h3>Aprende todo sobre la cultura del antiguo egipto</h3>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
