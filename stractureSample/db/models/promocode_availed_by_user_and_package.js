'use strict';
module.exports = (sequelize, DataTypes) => {
  const promocode_availed_by_user_and_package = sequelize.define('promocode_availed_by_user_and_package', {
    user_id: DataTypes.INTEGER
  }, {});
  promocode_availed_by_user_and_package.associate = function(models) {
    // associations can be defined here
  };
  return promocode_availed_by_user_and_package;
};