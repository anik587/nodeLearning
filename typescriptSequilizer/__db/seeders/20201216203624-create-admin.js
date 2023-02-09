'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [
      {
        name: 'admin',
        username: 'admin',
        password: '$2b$10$Zum2dOC.j7r4sqfQ9o2LsO0XD5F/ZS4NOYfMwvro00M9wVmzpfP62', //test12
        role: 'admin',
        ip_list: '127.0.0.1',
        is_active: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', [
      {
        id: 1,
      },
    ]);
  },
};
