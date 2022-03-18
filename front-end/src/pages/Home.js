import React from 'react'
import Button from '../components/Button';
import { useHistory } from 'react-router-dom';

function Home(){
  const history = useHistory();




  return (

    <div>
      <h1>Escolha uma opção</h1>
      <Button text="Cadastrar cliente" type="button" onClick={() => history.push('/register')} />
      <Button text="Cadastrar movimentações" type="button" onClick={() => history.push('/create')} />
      <Button text="Listar todos clientes" type="button" onClick={() => history.push('/client')} />
    </div>

  )
}

export default Home;
