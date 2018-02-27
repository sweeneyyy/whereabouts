'use strict';
module.exports = (sequelize, DataTypes) => {
  var notebook = sequelize.define('notebook', {
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    userId: DataTypes.INTEGER
  });
  notebook.associate = function(models){
    models.notebook.belongsTo(models.user);
  }
  return notebook;
};