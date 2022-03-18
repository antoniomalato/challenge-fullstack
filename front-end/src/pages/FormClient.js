import React, { useState } from 'react'
import Input from '../components/Input';
import Button from '../components/Button';
import { useHistory } from 'react-router-dom';
import { postRegisterClient } from '../api/axios';

function FormClient () {
  const history = useHistory();
  const [register, setRegister] = useState({
    cliente: '',
    numero: '',
    tipo: 0,
    status: '',
    categoria: '',
  });

  const handlerChange = ({ target: { name, value }}) => {
    setRegister((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  const postAxios = async () => {
    const response = await postRegisterClient(register);
    if (!response) {
      return console.log('ERROR AQUI - /POST');
    }
    setRegister(response)
    history.push('/client');
  }  


  const handlerClick = () => {
    postAxios();
  }

  return (
    <form>
      <h1>Tela de cadastro</h1>
      <Input text={ 'Cadastrar cliente  ' }
      id='cliente' onChange={ handlerChange } name='cliente' type='text' required placeholder='Nome do cliente' value={ register.cliente }
      />
      <Input text={ 'Número do container' }
      id='numero' onChange={ handlerChange } name='numero' type='text' required placeholder='Número do ccontainer' value={ register.numero }
      />
      <Input text={ 'Tamanho do container' }
      id='tipo' onChange={ handlerChange } name='tipo' type='number' required placeholder='Tamanho do container 20 / 40' value={ register.tipo }
      />
      <Input text={ 'Situação do container' }
      id='status' onChange={ handlerChange } name='status' type='text' required placeholder='Situação do container' value={ register.status }
      />
      <Input text={ 'Categoria do container' }
      id='categoria' onChange={ handlerChange } name='categoria' type='text' required placeholder='Categoria do container' value={ register.categoria }
      />
      <Button type='button' text={ 'Voltar '} onClick={() => history.push('/')}/>
      <Button type='submit' text={ 'Enviar '} onClick={() => handlerClick} />
    </form>
  )
}

export default FormClient;