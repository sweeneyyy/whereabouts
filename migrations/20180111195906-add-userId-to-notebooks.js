'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    //add column userId to notebooks
    return queryInterface.addColumn('notebooks', 'userId', Sequelize.INTEGER);
    
  },

  down: (queryInterface, Sequelize) => {
    //remove column userId from notebooks
    return queryInterface.removeColumn('notebooks', 'userId', Sequelize.INTEGER);
    
  }
};
