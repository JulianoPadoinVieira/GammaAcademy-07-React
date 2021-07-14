// Usado o hook useState
import React, { useState } from 'react';

function App(props) {
  return (
    // Elementos irmãos só podem ser passados dentro de outra tag, abaixo usou-se o fragment "<>"
    <>
      {/* OBS: "class" no javascript é uma palavra reservada, então /usa-se "className" para evitar futuros erros. */}
      <input name="usuario" id="usuario" className="usuario" placeholder="Usuário" />
      <button type="button">Pesquisar</button>
    </>
  );

}

export default App;
