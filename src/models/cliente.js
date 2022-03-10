module.exports = (sequelize, DataTypes) => {
  const Cliente = sequelize.define('Cliente', {
    cliente: DataTypes.STRING,
    numero: DataTypes.STRING,
    tipo: DataTypes.INTEGER,
    status: DataTypes.STRING,
    categoria: DataTypes.STRING
  }, 
  {
    timestamps: false,
    modelName: 'Clientes',
  });

  Cliente.associete = (models) => {
    Cliente.hasMany(models.MovimentacaoDoClientes,
    {
      foreignKey: 'idCliente',
      as: 'movimentacaoDoCliente'
    })
  }

  return Cliente;
};