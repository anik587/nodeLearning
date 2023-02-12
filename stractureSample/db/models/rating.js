'use strict';
module.exports = (sequelize, DataTypes) => {
  const rating = sequelize.define('rating', {
    host_id: DataTypes.INTEGER
  }, {});
  rating.associate = function(models) {
    // associations can be defined here
  };
  return rating;
};