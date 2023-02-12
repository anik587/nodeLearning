'use strict';
module.exports = (sequelize, DataTypes) => {
  const seat = sequelize.define('seat', {
    hostId: DataTypes.INTEGER
  }, {});
  seat.associate = function(models) {
    // associations can be defined here
  };
  return seat;
};