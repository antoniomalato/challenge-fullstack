const { updateMov } = require('../../services/movimentacoes');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { tipo } = req.body;
     
    const update = await updateMov(id, tipo);
    return res.status(200).json(update);
  
  } catch (error) {
    return next(error);
  }
}