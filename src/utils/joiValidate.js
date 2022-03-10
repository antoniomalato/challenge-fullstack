const Joi = require('joi');

const schemaCliente = Joi.object({
  cliente: Joi.string().required(),
  numero: Joi.string().required(),
  tipo: Joi.number().required(),
  status: Joi.string().required(),
  categoria: Joi.string().required(),
});

const schemaMovimentacao = Joi.object({
  tipo: Joi.string().required(),
});

module.exports = {
  schemaCliente,
  schemaMovimentacao
};