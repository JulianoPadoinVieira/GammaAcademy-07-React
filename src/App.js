// Usado o hook useState
import React, { useState } from 'react';
import axios from 'axios';

function App(props) {
  const [ usuario, setUsuario ] = useState('');

  function handlePesquisa() {
    axios.get(`https://api.github.com/users/${usuario}/repos`).then(response => console.log(response));

  }

  return (
    // Elementos irmãos só podem ser passados dentro de outra tag, abaixo usou-se o fragment "<>"

    <>
      {/* OBS: "class" no javascript é uma palavra reservada, então /usa-se "className" para evitar futuros erros. */}
      <input className="usuario" placeholder="Usuário" value={usuario} onChange={e => setUsuario(e.target.value)}/>
      <button type="button" onClick={handlePesquisa} >Pesquisar</button>
    </>
  );

}

export default App;
