'use strict';
module.exports = (sequelize, DataTypes) => {
  const host = sequelize.define('host', {
    fullname: DataTypes.STRING
  }, {});
  host.associate = function(models) {
    // associations can be defined here
  };
  return host;
};