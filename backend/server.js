const express = require('express');
const cors = require('cors');
const database = require('./database');
const { generateHash, compareDataToHash } = require('./bcrypt.js');

const app = express();
app.use(express.json());
app.use(cors());

const connection = database.createConnection();

app.post('/events/monthly', (request, response) => {
  const {start_datetime, end_datetime } = request.body;
  connection.query(`SELECT * FROM events WHERE dt_start_datetime <= '${end_datetime}' AND dt_end_datetime >= '${start_datetime}';`, (err, rows, fields) => {
    response.status(200).send(rows);
  });
});

app.post('/events', (request, response) => {
  const {titulo, categoria, data_inicio, data_fim, cor, localizacao, descricao} = request.body;
  connection.query(`INSERT INTO cronosAgenda.events
  (id_user, id_category, nm_title, ds_description, ds_color, nm_location, dt_start_datetime, dt_end_datetime)
  VALUES(1, 1, '${titulo}', '${descricao}', '${cor}', '${localizacao}', '${data_inicio}', '${data_fim}');`, (err, rows, fields) => {
    response.status(200).send("OK");
  });
});

app.post('/login', (request, response) => {
  const { loginEmail, loginPassword } = request.body;

  connection.query(`SELECT * FROM users WHERE ds_email = '${loginEmail}'`, (err, rows, fields) => {
    if (!rows || !loginEmail || !loginPassword) {
      return response.status(400).send('Conta ou senha inválida');
    }

    const isAValidPassword = compareDataToHash(loginPassword, rows[0].ds_password);
    if (isAValidPassword && rows[0].ds_email == loginEmail) {
      return response.status(200).send('Login concluído com sucesso');
    } else {
      return response.status(400).send('Conta ou senha inválida');
    }
  });
});

app.post('/register', (request, response) => {
  try {

    const { name, surname, email, password, confirmPassword } = request.body;

    if (password !== confirmPassword) {
      return response.status(400).send('A senha e a confirmação de senha não correspondem');
    }

    const hash = generateHash(password);

    connection.query(`INSERT INTO users (nm_first, nm_last, ds_email, ds_password) VALUES('${name}', '${surname}', '${email}', '${hash}');`, (err, rows, fields) => {

    });

    return response.status(200).send('Registro concluído com sucesso');
  } catch (error) {
    console.error(error);
    return response.status(500).send('Ocorreu um erro no registro');
  }
});

const PORT = 3002;
app.listen(PORT, () => {
  console.log(`server started`);
});
