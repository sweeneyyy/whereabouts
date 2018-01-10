'use strict';
module.exports = (sequelize, DataTypes) => {
  var notebook = sequelize.define('notebook', {
    title: DataTypes.STRING,
    content: DataTypes.TEXT
  // }, {
  //   classMethods: {
  //     associate: function(models) {
  //       // associations can be defined here
  //     }
  //   }
  });
  notebook.associate = function (models) {
    models.notebook.belongsTo(models.user);
  };
  
  return notebook;
};