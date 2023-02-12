'use strict';
module.exports = (sequelize, DataTypes) => {
  const feature = sequelize.define('feature', {
    categoryId: DataTypes.STRING
  }, {});
  feature.associate = function(models) {
    // associations can be defined here
  };
  return feature;
};