import React from 'react';
import { Link } from 'react-router-dom'

const Home = () => (
  <div>
    <header>
      <h1>Página Home</h1>
    </header>
    <p>
      <Link to='/signup'>Ir para a página de Cadastro</Link>
    </p>
  </div>
);

export default Home;