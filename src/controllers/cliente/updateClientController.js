const { updateCliente } = require('../../services/clientes');

module.exports = async (req, res, next) => {
  try {
    const { cliente, numero, tipo, status, categoria } = req.body;
     
    const update = await updateCliente(cliente, numero, tipo, status, categoria);
    return res.status(200).json(update);
  
  } catch (error) {
    return next(error);
  }
}