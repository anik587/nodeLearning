'use strict';
module.exports = (sequelize, DataTypes) => {
  const package = sequelize.define('package', {
    name: DataTypes.STRING
  }, {});
  package.associate = function(models) {
    // associations can be defined here
  };
  return package;
};