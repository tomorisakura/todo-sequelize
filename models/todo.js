'use strict';

const user = require("./user");


module.exports = (sequelize, DataTypes) => {
    const Todo = sequelize.define('Todos', {
        id : {
            type : DataTypes.INTEGER,
            autoIncrement : true,
            primaryKey : true,
            allowNull : false
        },
        id_users : {
            type : DataTypes.INTEGER,
            references : {
                model : 'users',
                key : 'id'
            }
        },
        title : {
            type : DataTypes.STRING,
            allowNull : false
        },
        content : {
            type : DataTypes.STRING,
            allowNull : false
        }
    }, {
        tableName : 'todos',
        freezeTableName : true
    });

    Todo.associate = (models) => {
        Todo.belongsTo(models.Users, {
            as : 'users',
            foreignKey : 'id'
        });
    }

    return Todo;
}