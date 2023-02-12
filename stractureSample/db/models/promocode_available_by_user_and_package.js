'use strict';
module.exports = (sequelize, DataTypes) => {
  const promocode_available_by_user_and_package = sequelize.define('promocode_available_by_user_and_package', {
    user_id: DataTypes.INTEGER
  }, {});
  promocode_available_by_user_and_package.associate = function(models) {
    // associations can be defined here
  };
  return promocode_available_by_user_and_package;
};