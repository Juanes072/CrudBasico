const {Model, DataTypes, INTEGER} = require('sequelize');
const sequelize = require('../db');

class profesores extends Model{}

profesores = sequelize.define('profesores',{
    documento:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        references:{
            model: 'usuario',
            key: 'nombre'
        }
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    apellido:{
        type: DataTypes.STRING,
        allowNull: false
    },
    facultad:{
        type: DataTypes.STRING,
        allowNull: false
    },
    fechaNacimiento: {
        type: DataTypes.DATE,
        allowNull: false
    }
},{
    sequelize,
    modelName: "profesores",
    timestamps: false
});

module.exports = profesores;