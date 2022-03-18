import React from 'react'
import Input from '../components/Input'
import Button from '../components/Button'
import { useHistory } from 'react-router-dom'

function FormMoviment() {
  const history = useHistory();

  return (
    <form>
      <Input text={ 'Cadastrar tipo de movimentação' }
        id='moviment' name='moviment' type='text' required placeholder='tipo de movimentação' 
      />
      <Button type='button' text={ 'Voltar' } onClick={() => history.push('/')}/>
      <Button type='submit' text={ 'Enviar' }/>
    </form>
  )
}

export default FormMoviment