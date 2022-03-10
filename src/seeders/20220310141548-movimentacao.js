'use strict';

module.exports = {
  async up (queryInterface, _Sequelize) {
   await queryInterface.bulkInsert('Movimentacoes',
   [{
     id: 1,
     tipo: 'embarque',
     inicio: new Date('2022-02-01T19:58:00.000Z'),
     fim: new Date('2022-02-01T22:58:00.000Z'),
   },
   {
    id: 2,
    tipo: 'descarga',
    inicio: new Date('2022-01-01T11:44:00.000Z'),
    fim: new Date('2022-02-01T19:58:00.000Z'),
  },
  {
    id: 3,
    tipo: 'gate in',
    inicio: new Date('2020-02-01T19:58:00.000Z'),
    fim: new Date('2022-02-01T19:58:00.000Z'),
  },
  {
    id: 4,
    tipo: 'gate out',
    inicio: new Date('2012-02-01T20:15:30.000Z'),
    fim: new Date('2021-02-01T19:58:00.000Z'),
  },
  {
    id: 5,
    tipo: 'reposicionamento',
    inicio: new Date('2022-03-01T11:58:00.000Z'),
    fim: new Date('2022-03-02T20:58:00.000Z'),
  },
  {
    id: 6,
    tipo: 'pesagem',
    inicio: new Date('2010-02-01T19:58:00.000Z'),
    fim: new Date('2022-02-01T19:58:00.000Z'),
  },
  {
    id: 7,
    tipo: 'scanner',
    inicio: new Date('2002-02-01T19:58:00.000Z'),
    fim: new Date('2022-02-01T19:58:00.000Z'),
  },
  
  ], { timestamps: false});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Movimentacoes', null, {});
  }
};
