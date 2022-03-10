const { Cliente } = require('../models/index');
const constructorError = require('../utils/constructorError');
const { schemaCliente } = require('../utils/joiValidate');

//Cria os clientes-------------
const createClient = async (cliente, numero, tipo, status, categoria) => {
  const { error } = schemaCliente.validate({ cliente, numero, tipo, status, categoria })
  if(error) throw constructorError(400, message);

  const create = await Cliente.create(cliente, numero, tipo, status, categoria);

  return create
};

// Busca os todos os clientes------------------
const findClient = async () => await Cliente.findAll();

//Busca o cliente pelo nome
const findByName = async (cliente) => {
  const find = await Cliente.findOne({where: cliente });
  
  if (!find ) throw constructorError(404, 'Nome inválido');

  return find;
}

// Atualiza o cliente-------------------
const updateCliente = async (id, cliente, numero, tipo, status, categoria) => {
  const findClient = await Cliente.findByPk({where: { id: id } });

  if(!findClient) throw constructorError(404, 'Id inválido!')

  return await Cliente.update({ cliente, numero, tipo, status, categoria }, { where: {id: id } })
}

// Remove o client----------------
const removeCliente = async (id) => {
  const findClient = await Cliente.findByPk({where: { id: id } });

  if(!findClient) throw constructorError(404, 'Id inválido!');

  return await Cliente.destroy({ where: { id: id }});
}


module.exports = {
  createClient,
  findClient,
  findByName,
  updateCliente,
  removeCliente,
};