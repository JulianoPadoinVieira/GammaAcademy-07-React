// Usado o hook useState
// import React from 'react';
// import Routes from './routes';

// export default function Home() {

//   return (    
//       <Routes />
    
//   );

// }

// Usado o hook useState
import React, { useState } from 'react';
import axios from 'axios';
import * as S from './styled';

export default function Home(props) {
  const [ usuario, setUsuario ] = useState('');

  function handlePesquisa() {
    axios.get(`https://api.github.com/users/${usuario}/repos`).then(response => console.log(response));

  }

  return (
    // Elementos irmãos só podem ser passados dentro de outra tag, abaixo usou-se o fragment "<>"

    <S.Container>
      {/* OBS: "class" no javascript é uma palavra reservada, então /usa-se "className" para evitar futuros erros. */}
      <S.Input className="usuario" placeholder="Usuário" value={usuario} onChange={e => setUsuario(e.target.value)} />
      <S.Button type="button" onClick={handlePesquisa} >Pesquisar</S.Button>
    </S.Container>
  );

}