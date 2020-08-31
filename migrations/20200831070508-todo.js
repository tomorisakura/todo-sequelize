'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('todos', {
      id : {
        type : Sequelize.INTEGER,
        autoIncrement : true,
        primaryKey : true,
        allowNull : false
      },
      id_users : {
        type : Sequelize.INTEGER,
        reference : {
          model : 'users',
          key : 'id'
        },
        allowNull : false
      },
      title : {
        type : Sequelize.STRING,
        allowNull : false
      },
      content : {
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
    return queryInterface.dropTable('todos');
  }
};
