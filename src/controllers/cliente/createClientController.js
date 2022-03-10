const { createClient } = require("../../services/clientes");

module.exports = async (req, res, next) => {
  try {
    const { cliente, numero, tipo, status, categoria } = req.body;

    const create = await createClient(cliente, numero, tipo, status, categoria)
    return res.status(201).json(create);
  } catch (error) {
    return next(error);
  }
}