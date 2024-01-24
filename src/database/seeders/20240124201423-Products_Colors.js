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
     await queryInterface.bulkInsert('products_colors', [
      {
        products_id: 1,
        colors_id: [1,2,3,4,5]
      },
      {
        products_id: 2,
        colors_id: [1,2,3,4,5]
      },
      {
        products_id: 3,
        colors_id: [1,2,3,4,5]
      },
      {
        products_id: 4,
        colors_id: [1,2,3,4,5]
      },
      {
        products_id: 5,
        colors_id: [1,2,3,4,5]
      },
      {
        products_id: 6,
        colors_id: [1,2,3,4,5]
      },
      {
        products_id: 7,
        colors_id: [1,2,3,4,5]
      },
      {
        products_id: 8,
        colors_id: [1,2,3,4,5]
      },
      {
        products_id: 9,
        colors_id: [1,2,3,4,5]
      },
      {
        products_id: 10,
        colors_id: [1,2,3,4,5]
      },
      {
        products_id: 11,
        colors_id: [1,2,3,4,5]
      },
      {
        products_id: 12,
        colors_id: [1,2,3,4,5]
      },
      {
        products_id: 13,
        colors_id: [1,2,3,4,5]
      },{
        products_id: 14,
        colors_id: [1,2,3,4,5]
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
    await queryInterface.bulkDelete('products_colors', null, {});
  }
};
