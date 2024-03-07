'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     await queryInterface.bulkInsert('product_prices', [
      {
        products_id: 1,
        price: 89000,
        timestamp: new Date(),
        description: ''
      },
      {
        products_id: 2,
        price: 15000,
        timestamp: new Date(),
        description: ''
      },
      {
        products_id: 3,
        price: 162378,
        timestamp: new Date(),
        description: ''
      },
      {
        products_id: 4,
        price: 135000,
        timestamp: new Date(),
        description: ''
      },
      {
        products_id: 5,
        price: 42000,
        timestamp: new Date(),
        description: ''
      },
      {
        products_id: 6,
        price: 12000,
        timestamp: new Date(),
        description: ''
      },
      {
        products_id: 7,
        price: 9000,
        timestamp: new Date(),
        description: ''
      },
      {
        products_id: 8,
        price: 33000,
        timestamp: new Date(),
        description: ''
      },
      {
        products_id: 9,
        price: 15000,
        timestamp: new Date(),
        description: ''
      },
      {
        products_id: 10,
        price: 87000,
        timestamp: new Date(),
        description: ''
      },
      {
        products_id: 11,
        price: 107000,
        timestamp: new Date(),
        description: ''
      },
      {
        products_id: 12,
        price: 180000,
        timestamp: new Date(),
        description: ''
      },
      {
        products_id: 13,
        price: 143000,
        timestamp: new Date(),
        description: ''
      },
      {
        products_id: 14,
        price: 95000,
        timestamp: new Date(),
        description: ''
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
