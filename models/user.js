'use strict';

const todo = require("./todo");

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('Users',{
        id : {
            type : DataTypes.INTEGER,
            autoIncrement : true,
            primaryKey : true,
            allowNull : false
        },
        name : {
            type : DataTypes.STRING,
            allowNull : false
        },
        hobby : {
            type : DataTypes.STRING,
            allowNull : false
        }
    }, {
        tableName : 'users',
        freezeTableName : true
    });

    User.associate = (models) => {
        User.hasMany(models.Todos, {
            as : 'todos',
            foreignKey : 'id_users'
        });
    }

    return User;
}