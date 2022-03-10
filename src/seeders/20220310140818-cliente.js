module.exports = {
  async up (queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('Clientes',
    [{
      id: 1,
      cliente: 'Cliente 1',
      numero: 'CONT1234567',
      tipo: 20,
      status: 'Cheio',
      categoria: 'Importacao'
    },
    {
      id: 2,
      cliente: 'Cliente 2',
      numero: 'CONT7654321',
      tipo: 20,
      status: 'Vazio',
      categoria: 'Exportacao'
    },
    {
      id: 3,
      cliente: 'Cliente 3',
      numero: 'CONT7777772',
      tipo: 40,
      status: 'Cheio',
      categoria: 'Importacao'
    }],
    { timestamps: false });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Clientes', null, {});
  }
};
