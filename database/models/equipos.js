const {Model, DataTypes, INTEGER} = require('sequelize');
const sequelize = require('../db');

class equipos extends Model{}

equipos = sequelize.define('equipos',{
    nombre:{
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
    },
    idProfesor:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references:{
            model: 'profesor',
            key: 'documento'
        }
    },
    mienbros:{
        type: DataTypes.STRING
    }
},{
    sequelize,
    modelName: "equipos",
    timestamps: false
});

module.exports = equipos;