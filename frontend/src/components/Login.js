import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import user from '../images/user.png';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!email || !password) {
      alert('Dados inválidos');
      return;
    }

    fetch('http://localhost:3002/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        loginEmail: email,
        loginPassword: password
      })
    })
    .then(response => {
        if (response.ok) {
          alert('Login concluído com sucesso');
        } else {
        alert('Ocorreu um erro no Login');
      }
    })
    .catch(error => {
      alert('Ocorreu um erro de rede');
      console.error(error);
    });
  };

  return (
    <div className='max-w-lg mx-auto mt-32'>
      <div className="mx-auto max-w-sm p-6 bg-white rounded-lg shadow">
        <div>
          <img src={user} className="rounded-full w-48 h-48 mx-auto" />
          <input
            type="text"
            className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5 mt-5"
            placeholder="Login"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5 mt-5"
            placeholder="Senha"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
          <Link
            onClick={handleLogin}
            className="text-white text-center text-sm rounded-lg block bg-gradient-to-r from-cyan-500 to-blue-500 w-full pl-10 p-2.5 mt-5"
          >
            Entrar
          </Link>
          <Link
            to="/register"
            className="text-white text-center text-sm rounded-lg block bg-gradient-to-r from-cyan-500 to-blue-500 w-full pl-10 p-2.5 mt-5"
            >
            Criar conta
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
