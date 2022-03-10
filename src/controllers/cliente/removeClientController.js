const { removeCliente } = require('../../services/clientes');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    const update = await removeCliente(id);
    return res.status(200).json(update);
  
  } catch (error) {
    return next(error);
  }
}