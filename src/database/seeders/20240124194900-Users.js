'use strict';
const bcript = require('bcryptjs');

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
     await queryInterface.bulkInsert('users', [
      {
        first_name: 'Pedro',
        last_name: 'Garcia',
        password: bcript.hashSync('password123', 10),
        birthdate: '2001-10-20',
        document_number: '43363098',
        email: 'pedro@gmail.com',
        phone: '3492498232',
        roles_id: 2,
        address: 'Oroño 921',
        img: 'https://i.imgur.com/abc123.jpg'
      },
      {
        first_name: 'Ana',
        last_name: 'Perez',
        password: bcript.hashSync('password456', 10),
        birthdate: '2010-10-01',
        document_number: '41862477',
        email: 'ana@gmail.com',
        phone: '3492652811',
        roles_id: 1,
        address: 'Francia 222',
        img: 'https://i.imgur.com/def456.jpg'
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
    await queryInterface.bulkDelete('users', null, {});
  }
};
