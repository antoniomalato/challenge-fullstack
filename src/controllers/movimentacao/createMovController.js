const { createMov } = require("../../services/movimentacoes");

module.exports = async (req, res, next) => {
  try {
    const { tipo } = req.body;

    const create = await createMov(tipo);
    return res.status(201).json(create);
  } catch (error) {
    return next(error);
  }
}