const { Model, Datatypes } = require('sequelize');
const sequelize = require('../config/connection');



// user model 
class User extends Model{}

// user table columns and config 

User.init(


    {
        id: {
            type: Datatypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: Datatypes.STRING,
            allowNull: false
        },
        email: {
            type: Datatypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: Datatypes.STRING,
            allowNull: false,
            validate: {
                len: [4]
            }
        }

    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user'
    }
   
);




module.exports = User;