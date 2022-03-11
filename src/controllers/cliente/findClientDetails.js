const { findInfoMov } = require('../../services/clientes');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params
    const find = await findInfoMov(id);
    return res.status(201).json(find);
  } catch (error) {
    return next(error);
  }
}