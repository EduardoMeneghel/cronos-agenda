const express = require('express');
const cors = require('cors');
const database = require('./database');

const app = express();
app.use(express.json());
app.use(cors());

const connection = database.createConnection();

app.get('/events', (request, response) => {
  connection.query('SELECT * FROM events', (err, rows, fields) => {
    response.send(rows);
  });
});

app.post('/login', (request, response) => {

  const {email, senha: password } = request.body;

  connection.query(`SELECT * FROM users WHERE email = '${email}'`, (err, rows, fields) => {
    if (! rows || password != rows[0].password) {
      return response.status(400).send('Conta ou senha inválida');
    }

    response.status(200).send("Efetuado co sucesso");

  });
});

app.post('/register', (request, response) => {
  try {

    const { name, surname, email, password, confirmPassword } = request.body;

    if (password !== confirmPassword) {
      return response.status(400).send('A senha e a confirmação de senha não correspondem');
    }

    connection.query(`INSERT INTO users (first_name, last_name, email, password) VALUES('${name}', '${surname}', '${email}', '${password}');`, (err, rows, fields) => {

    });

    return response.status(200).send('Registro concluído com sucesso');
  } catch (error) {
    console.error(error);
    return response.status(500).send('Ocorreu um erro no registro');
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`server started`);
});
