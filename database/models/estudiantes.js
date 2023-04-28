const {Model, DataTypes, INTEGER} = require('sequelize');
const sequelize = require('../db');

class estudiantes extends Model{};

estudiantes = sequelize.define('estudiantes',{
documento:{
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    references:{
        model: 'usuario',
        key: 'nombre'
    }
},nombre: {
    type: DataTypes.STRING,
    allowNull: false
},apellido:{
    type: DataTypes.STRING,
    allowNull: false
},carrera:{
  type: DataTypes.STRING,
  allowNull: false  
}, semestre:{
    type: DataTypes.STRING,
    allowNull: false
}, semestre:{
    type: DataTypes.INTEGER,
    allowNull: false
}, edad:{
    type: DataTypes.INTEGER,
    allowNull: false
},tipoSangre:{
    type: DataTypes.STRING,
    allowNull: false
},equipo: {
    type: DataTypes.STRING,
    allowNull: false,
    references:{
        model: 'equipos',
        key: 'nombre'
    }
}
},{
    sequelize,
    modelName:'estudiantes',
    timestamps:false
});

module.exports = estudiantes;