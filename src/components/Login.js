import React from 'react';

const handleLogin = () => {
    const loginEmail = document.getElementById('loginEmail').value;
    const loginPassword = document.getElementById('loginPassword').value;
  
    if (!loginEmail || !loginPassword) {
      alert('Dados inválidos');
      return;
    }
  
    fetch('http://localhost:3002/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'loginEmail': loginEmail,
        'loginPassword': loginPassword
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
  
  function Login() {
    return (
      <div>
        <div className="mx-auto max-w-sm p-6 bg-white rounded-lg shadow">
            <div id="login-form">
                <input
                type="text"
                id="loginEmail"
                className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5 mt-5"
                placeholder="Login"
                required
                />
                <input
                type="password"
                id="loginPassword"
                className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5 mt-5"
                placeholder="Senha"
                required
                />
                <a
                onClick={handleLogin}
                className="text-white text-center text-sm rounded-lg block bg-gradient-to-r from-cyan-500 to-blue-500 w-full pl-10 p-2.5 mt-5"
                >
                Entrar
                </a>
                <a
                className="text-white text-center text-sm rounded-lg block bg-gradient-to-r from-cyan-500 to-blue-500 w-full pl-10 p-2.5 mt-5"
                >
                Criar conta
                </a>
            </div>
        </div>
      </div>
    );
  }
  
  export default Login;
  