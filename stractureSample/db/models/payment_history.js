'use strict';
module.exports = (sequelize, DataTypes) => {
  const payment_history = sequelize.define('payment_history', {
    booking_id: DataTypes.INTEGER
  }, {});
  payment_history.associate = function(models) {
    // associations can be defined here
  };
  return payment_history;
};