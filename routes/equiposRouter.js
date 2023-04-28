const express = require('express');
const equipos = require('../database/models/equipos');
const router = express.Router();

//CREATE
router.post('/',(req,res)=>{
    equipos.create({
        nombre: req.body.nombre,
        idProfesor: req.body.idProfesor,
        integrantes: req.body.integrantes
    }).then(equipos=>{
        res.json(equipos);
    });
});

//READ
router.get('/:id',(req,rea)=>{
    equipos.findById({
        where: {
            nombre: req.params.id
        }
    }).then(resuls=>{
        res.json(results);
    });
});

//UPDATE
router.patch('/:id',(req,res)=>{
    equipos.update({
        nombre: req.body.nombre,
        idProfesor: req.body.idProfesor,
        integrantes: req.body.integrantes
    }).then(results=>{
        res.json(resutls);
    });
});

//DELETE
router.delete('/:id',(req,res)=>{
    equipos.destroy({
        where: {
            nombre: req.params.id
        }
    }),then(results=>{
        res.json(results);
    });
});

module.exports = equipos;