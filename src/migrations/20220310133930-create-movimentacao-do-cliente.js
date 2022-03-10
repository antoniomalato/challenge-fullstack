'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('MovimentacaoDoClientes', {
      idCliente: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: 'Cliente',
          key: 'id',
        },
      },
      idMovimentacao: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: 'Movimentacao',
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