module.exports = (sequelize, DataTypes) => {
  const MovimentacaoDoCliente = sequelize.define('MovimentacaoDoCliente',
  {
    timestamps: false,
    tableName: 'MovimentacaoDoClientes'
  });

  sequelize.associete = (models) => {
    MovimentacaoDoCliente.belongsTo(models.Clientes,
    {
      as: 'Clientes',
      through: MovimentacaoDoCliente,
      foreignKey: 'idCliente',
      otherKey: 'idMovimentacao'
    });
    MovimentacaoDoCliente.belongsTo(models.Movimentacoes,
      {
        as: 'Movimentacoes',
        through: MovimentacaoDoCliente,
        foreignKey: 'idMovimentacao',
        otherKey: 'idCliente'
      });
  };

  return MovimentacaoDoCliente;
};