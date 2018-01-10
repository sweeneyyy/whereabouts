'use strict';
module.exports = (sequelize, DataTypes) => {
  var favorite_tag = sequelize.define('favorite_tag', {
    favoritesId: DataTypes.INTEGER,
    tagsId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return favorite_tag;
};