const { findById } = require('../../services/movimentacoes');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.body
    const find = await findById(id)
    return res.status(201).json(find);
  } catch (error) {
    return next(error);
  }
}