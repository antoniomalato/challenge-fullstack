const { findMov } = require("../../services/movimentacoes");

module.exports = async (_req, res, next) => {
  try {
    const find = await findMov()
    return res.status(201).json(find);
  } catch (error) {
    return next(error);
  }
}