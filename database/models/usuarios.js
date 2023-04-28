const {Model, DataTypes} = require('sequelize');
const sequelize = require('../db');

class usuarios extends Model {}

usuarios = sequelize.define('usuarios',{
    nombre:{
        type: DataTypes.INTEGER,
        primaryKey: true,   
        allowNull: false
    },
    contraseña:{
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    sequelize,
    modelName: "usuarios",
    timestamps: false
});

module.exports = usuarios;