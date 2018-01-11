'use strict';
module.exports = (sequelize, DataTypes) => {
  var favorite = sequelize.define('favorite', {
    url: DataTypes.TEXT,
    userId: DataTypes.INTEGER
  // }, {
    // classMethods: {
    //   associate: function(models) {
    //     // associations can be defined here
    //   }
    // }
    });
  
    favorite.associate = function (models) {
      models.favorite.belongsToMany(models.tag, { through: models.favorite_tag});
    };  
    favorite.associate = function (models) {
      models.favorite.belongsTo(models.user);
    };
    
  return favorite;
};
