'use strict';

module.exports = {
  "development": {
    username: "root",
    password: "nopass",
    database: "demo",
    host: "127.0.0.1",
    dialect: "mysql",
    dialectOptions: {
      supportBigNumbers: true,
      bigNumberStrings: true
    },
    define: {
      underscored: true,
      charset: 'utf8',
      dialectOptions: {
        collate: 'utf8_general_ci'
      },
      timestamps: true
    }
  },
  "test": {
    username: "",
    password: "",
    database: "",
    host: "127.0.0.1",
    dialect: "mysql",
    dialectOptions: {
      supportBigNumbers: true,
      bigNumberStrings: true
    },
    define: {
      underscored: true,
      charset: 'utf8',
      dialectOptions: {
        collate: 'utf8_general_ci'
      },
      timestamps: true
    }
  },
  "production": {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOSTNAME,
    dialect: "mysql",
    dialectOptions: {
      supportBigNumbers: true,
      bigNumberStrings: true
    },
    define: {
      underscored: true,
      charset: 'utf8',
      dialectOptions: {
          collate: 'utf8_general_ci'
      },
      timestamps: true
    }
  }
};
