// Arquivo de configuração das rotas
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Calendar from './components/Calendar';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<Calendar />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);
