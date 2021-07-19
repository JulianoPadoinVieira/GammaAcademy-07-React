import React, { useState } from 'react';
import axios from 'axios';
import * as S from './styled';
import { useHistory } from 'react-router-dom';

export default function Home(props) {
  const history = useHistory();
  const [ usuario, setUsuario ] = useState('');

  function handlePesquisa() {
    axios.get(`https://api.github.com/users/${usuario}/repos`).then(response => {
      const repositories = response.data;
      const repositoriesName = [];
      repositories.map((repository) => {
        repositoriesName.push(repository.name);
      });
      localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName));
      history.push('/repositories');
    });

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