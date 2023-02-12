'use strict';
module.exports = (sequelize, DataTypes) => {
  const bookings = sequelize.define('bookings', {
    host_id: DataTypes.STRING
  }, {});
  bookings.associate = function(models) {
    // associations can be defined here
  };
  return bookings;
};