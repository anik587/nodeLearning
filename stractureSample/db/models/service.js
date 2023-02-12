'use strict';
module.exports = (sequelize, DataTypes) => {
  const service = sequelize.define('service', {
    session_token: DataTypes.INTEGER
  }, {});
  service.associate = function(models) {
    // associations can be defined here
  };
  return service;
};