'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.renameColumn("Songs", "BandId", "GuestStarId", {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Songs', 'GuestStarId', 'BandId', {});
  }
};
