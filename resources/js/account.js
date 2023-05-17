function login() {

}

function register() {
  const name = document.getElementById('nome').value;
  const surname = document.getElementById('sobrenome').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('senha').value;
  const confirmPassword = document.getElementById('confirmarSenha').value;

  if (senha !== confirmarSenha) {
    alert('A senha e a confirmação de senha não correspondem');
    return;
  }

  fetch('http://localhost:3000/register', {
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
}

function recoverPassword() {

}