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
     await queryInterface.bulkInsert('products_sizes', [
      {
        products_id: 1,
        sizes_id: 1
      },
      {
        products_id: 3,
        sizes_id: 1
      },
      {
        products_id: 4,
        sizes_id: 1
      },
      {
        products_id: 5,
        sizes_id: 1
      },
      {
        products_id: 8,
        sizes_id: 1
      },
      {
        products_id: 10,
        sizes_id: 1
      },
      {
        products_id: 11,
        sizes_id: 1
      },
      {
        products_id: 12,
        sizes_id: 1
      },
      {
        products_id: 13,
        sizes_id: 1
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
    await queryInterface.bulkDelete('products_sizes', null, {});
  }
};
