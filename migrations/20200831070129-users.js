'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      id : {
        type : Sequelize.INTEGER,
        autoIncrement : true,
        primaryKey : true,
        allowNull : false
      },
      name : {
        type : Sequelize.STRING,
        allowNull : false
      },
      hobby : {
        type : Sequelize.STRING,
        allowNull : false
      },
      createdAt : {
        type : Sequelize.DATE,
        defaultValue : Sequelize.NOW,
        allowNull : false
      },
      updatedAt : {
        type : Sequelize.DATE,
        defaultValue : Sequelize.NOW,
        allowNull : false
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users');
  }
};
