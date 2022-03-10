const { removeMov } = require('../../services/movimentacoes');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    const update = await removeMov(id);
    return res.status(200).json(update);
  
  } catch (error) {
    return next(error);
  }
}