module.exports = (sequelize, DataTypes) => {
const Movimentacao = sequelize.define( 'Movimentacao' ,{
    tipo: DataTypes.STRING,
    inicio: DataTypes.DATE,
    fim: DataTypes.DATE,
  }, {
    tableName: 'Movimentacoes',
    timestamps: false
  });

  Movimentacao.associete = (models) => {
    Movimentacao.belongsTo(models.MovimentacaoDoClientes,
    {
      foreignKey: 'id',
      as: 'Movimentacoes'
    });
  }

  return Movimentacao;
};