const { findAll } = require("../../services/clientes");

module.exports = async (_req, res, next) => {
  try {
    const find = await findAll()
    return res.status(201).json(find);
  } catch (error) {
    return next(error);
  }
}