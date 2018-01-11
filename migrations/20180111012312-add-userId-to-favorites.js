'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    //add column userId to favorites
    return queryInterface.addColumn('favorites', 'userId', Sequelize.INTEGER);
    
  },

  down: (queryInterface, Sequelize) => {
    //Remove column userId
    return queryInterface.removeColumn('favorites', 'userId');
  }
};
