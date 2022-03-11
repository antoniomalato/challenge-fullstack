const { Movimentacao } = require('../models/index');
const constructorError = require('../utils/constructorError');
const { schemaMovimentacao } = require('../utils/joiValidate');

// Criação de movimentação--------------
const createMov = async ( tipo, inicio, fim ) => {
  const { error } = schemaMovimentacao.validate({ tipo })
  if (error) throw constructorError(404, 'Entrada inválida');

  const create = await Movimentacao.create({ tipo, inicio, fim  });

  return create;
;}

// Busca todas as movimentações------------------
const findMov = async () => await Movimentacao.findAll();

const findById = async (id) => {
  const find = await Movimentacao.findAll({ where: { id: id } });
  
  if (!find ) throw constructorError(404, 'id inválido');

  return find;
};

// Atualiza da movimentação-------------------
const updateMov = async (id, tipo) => {
    const findClient = await Movimentacao.findAll({where: { id: id } });

    if(!findClient) throw constructorError(404, 'Id inválido!')

    return await Movimentacao.update({ tipo }, { where: {id: id } })
}

// Remover movimentação----------------
const removeMov = async (id) => {
   const findClient = await Movimentacao.findAll({where: { id: id } });

    if(!findClient) throw constructorError(404, 'Id inválido!');

    return await Movimentacao.destroy({ where: { id: id }});
}

module.exports = {
  createMov,
  findMov,
  findById,
  updateMov,
  removeMov,
};