const { findByName } = require('../../services/clientes');

module.exports = async (req, res, next) => {
  try {
    const { cliente } = req.body
    const find = await findByName(cliente)
    return res.status(201).json(find);
  } catch (error) {
    return next(error);
  }
}