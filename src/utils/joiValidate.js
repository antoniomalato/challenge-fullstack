const Joi = require('joi');

const schemaCliente = Joi.object({
  cliente: Joi.string().required(),
  numero: Joi.string().length(6).required(),
  tipo: Joi.integer().required(),
  status: Joi.string().required(),
  categoria: Joi.string().required(),
});

module.exports = {
  schemaCliente,
};