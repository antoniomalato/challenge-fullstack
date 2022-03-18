import React, { useState, useEffect } from 'react';
import Mycontext from './Context';
import { getAllClients } from '../api/axios';

const MyProvider = ({ children }) => {
  const [cliente, setCliente] = useState([]);
  

  const getClients = async () => {
    const response = await getAllClients();
    console.log(response);

    setCliente(response.map((client) => ({...client})));
  }

  useEffect(() => {
    getClients();
  }, [])

  const value = {
    cliente,
    setCliente,
  };

  return (
    <Mycontext.Provider value={ value }>
      { children }
    </Mycontext.Provider>
    );
};

export default MyProvider