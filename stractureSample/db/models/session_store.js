'use strict';
module.exports = (sequelize, DataTypes) => {
  const session_store = sequelize.define('session_store', {
    session_token: DataTypes.INTEGER
  }, {});
  session_store.associate = function(models) {
    // associations can be defined here
  };
  return session_store;
};