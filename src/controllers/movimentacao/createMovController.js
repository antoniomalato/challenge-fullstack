const { createMov } = require("../../services/movimentacoes");

module.exports = async (req, res, next) => {
  try {
    const { tipo, inicio, fim } = req.body;

    const create = await createMov(tipo, inicio, fim);
    return res.status(201).json(create);
  } catch (error) {
    return next(error);
  }
}