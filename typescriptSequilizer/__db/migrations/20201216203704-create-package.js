'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Packages', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      // original_id: {
      //   type: Sequelize.INTEGER,
      //   allowNull: false,
      // },
      device_type: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      payment_mode: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      auto_renewal: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      is_corporate: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      no_of_validity_days: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      charge_amount: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      display_amount: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      data_pack_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      is_active: {
        type: Sequelize.TINYINT,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
      },
      updated_at: {
        type: Sequelize.DATE,
      },
    });
  },

  down: async queryInterface => {
    await queryInterface.dropTable('Companies');
  },
};
