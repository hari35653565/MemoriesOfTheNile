import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

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
    <div>
      <h2>Login Page</h2>
      <form onSubmit={handleLogin}>
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
        <button type="submit">Login</button>
      </form>
      <h2>No tienes una cuenta?</h2>
      <button onClick={toSignup}>Registrate!</button>
      <Link to="/">Continuar a experience</Link>
    </div>
  );
};

export default LoginPage;
