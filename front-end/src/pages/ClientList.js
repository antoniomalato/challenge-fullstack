import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import MyContext from '../context/Context';


function ClientList() {
  const { cliente, setCliente } = useContext(MyContext);
  const history = useHistory();

  return (
    <div>
    text
    </div>
  )
}

export default ClientList