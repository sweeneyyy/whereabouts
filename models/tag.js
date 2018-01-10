'use strict';
module.exports = (sequelize, DataTypes) => {
  var tag = sequelize.define('tag', {
    content: DataTypes.STRING
  // }, {
  //   classMethods: {
  //     associate: function(models) {
  //       // associations can be defined here
  //     }
  //   }
  });

  tag.associate = function (models) {
    models.tag.belongsToMany(models.favorite, { through: models.favorite_tag});
    };

  return tag;
};