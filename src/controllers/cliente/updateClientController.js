const { updateCliente } = require('../../services/clientes');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { cliente, numero, tipo, status, categoria } = req.body;
     
    const update = await updateCliente(id, cliente, numero, tipo, status, categoria);
    return res.status(200).json(update);
  
  } catch (error) {
    return next(error);
  }
}