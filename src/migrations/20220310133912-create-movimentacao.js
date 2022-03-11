module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Movimentacoes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      tipo: {
        type: Sequelize.STRING
      },
      inicio: {
        allowNull: false,
        type: Sequelize.DATE
      },
      fim: {
        allowNull: false,
        type: Sequelize.DATE
      }
    },
    {
      // timestamps: false,
      tableName: 'Movimentacoes'
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Movimentacoes');
  }
};