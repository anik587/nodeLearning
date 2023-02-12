'use strict';
module.exports = (sequelize, DataTypes) => {
  const discount_by_user_and_package = sequelize.define('discount_by_user_and_package', {
    user_id: DataTypes.INTEGER
  }, {});
  discount_by_user_and_package.associate = function(models) {
    // associations can be defined here
  };
  return discount_by_user_and_package;
};