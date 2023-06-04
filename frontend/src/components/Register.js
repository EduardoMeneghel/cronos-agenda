import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import user from '../images/user.png';

const Register = () => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    if (password !== confirmPassword) {
      alert('A senha e a confirmação de senha não correspondem');
      return;
    }
  
    fetch('http://localhost:3002/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          'name': name,
          'surname': surname,
          'email': email,
          'password': password,
          'confirmPassword': confirmPassword
      })
    })
    .then(response => {
      if (response.ok) {
        alert('Registro concluído com sucesso');
      } else {
        alert('Ocorreu um erro no registro');
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
            placeholder="Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="text"
            className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5 mt-5"
            placeholder="Sobrenome"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
            required
          />
          <input
            type="email"
            className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5 mt-5"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5 mt-5"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            type="password"
            className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5 mt-5"
            placeholder="Confirma senha"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <Link
            onClick={handleRegister}
            className="text-white text-center text-sm rounded-lg block bg-gradient-to-r from-cyan-500 to-blue-500 w-full pl-10 p-2.5 mt-5"
          >
            Registrar
          </Link>
          <Link
            to="/login"
            className="text-white text-center text-sm rounded-lg block bg-gradient-to-r from-cyan-500 to-blue-500 w-full pl-10 p-2.5 mt-5"
            >
            Voltar
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;