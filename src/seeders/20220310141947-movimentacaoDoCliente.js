'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('MovimentacaoDoClientes',
    [{
      idCliente: 1,
      idMovimentacao: 3,
    },
    {
      idCliente: 3,
      idMovimentacao: 2,
    },
    {
      idCliente: 1,
      idMovimentacao: 7,
    },
    {
      idCliente: 1,
      idMovimentacao: 5,
    },
    {
      idCliente: 3,
      idMovimentacao: 3,
    },
    {
      idCliente: 2,
      idMovimentacao: 4,
    }], { timestamps: false });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('MovimentacaoDoClientes', null, {});
  }
};
