const express = require('express');
const cors = require('cors');
const database = require('./database');

const app = express();
app.use(cors());

const connection = database.createConnection();

app.get('/events', (request, response) => {
  connection.query('SELECT * FROM events', (err, rows, fields) => {
    response.send(rows);
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`server started`);
});
