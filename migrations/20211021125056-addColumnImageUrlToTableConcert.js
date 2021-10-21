'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Concerts', 'imageURL', { 
      type: Sequelize.INTEGER
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Concerts', 'imageURL', {});
  }
};
