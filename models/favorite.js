'use strict';
module.exports = (sequelize, DataTypes) => {
  var favorite = sequelize.define('favorite', {
    url: DataTypes.TEXT,
    userId: DataTypes.INTEGER
  });
  favorite.associate = function(models){
    models.favorite.belongsTo(models.user);
  }
  // favorite.associate = function(models){
  //   models.favorite.belongsToMany(models.tag, { through: models.favorite_tag});
  // }  
  return favorite;
};
