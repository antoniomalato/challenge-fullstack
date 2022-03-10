module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('MovimentacaoDoClientes', {
      id: { 
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      idCliente: {
        foreignKey: true,
        type: Sequelize.INTEGER,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: 'Clientes',
          key: 'id',
        },
      },
      idMovimentacao: {
        foreignKey: true,
        type: Sequelize.INTEGER,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: 'Movimentacoes',
          key: 'id',
        },
      },
    },
    {
      timestamps: false,
      tableName: 'MovimentacaoDoClientes',
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('MovimentacaoDoClientes');
  }
};