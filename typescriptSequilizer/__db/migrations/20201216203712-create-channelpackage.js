'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      'channel_Package',
      {
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        channels_id: {
          type: Sequelize.INTEGER,
          references: {
            model: 'Channels',
            key: 'id',
          },
          onDelete: 'CASCADE',
          allowNull: false,
        },
        packages_id: {
          type: Sequelize.INTEGER,
          references: {
            model: 'Packages',
            key: 'id',
          },
          onDelete: 'CASCADE',
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
      },
      {
        freezeTableName: true,
        timestamps: false,
      },
    );
  },

  down: async queryInterface => {
    await queryInterface.dropTable('channel_Package');
  },
};
