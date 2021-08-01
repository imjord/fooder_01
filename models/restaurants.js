// Restaurants model
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
class Restaurants extends Model{}
Restaurants.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, 
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        modelName: 'restaurants'
    }
)