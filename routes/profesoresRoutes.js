const express = require('express');
const profesores = require('../database/models/profesores');
const router = express.Router();

//CREATE
router.post('/:id',(req,res)=>{
    profesores.create({
        documento: req.params.id,
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        facultad: req.body.facultad,
        fechaNacimiento: req.body.fechaNacimiento
    }).then(profesores=>{
        res.json(profesores);
    })
});

//READ
router.get('/:id',(req,res)=>{
    profesores.findByPk(req.params.id).then(profesores=>{
        res.json(profesores);
    })
});

//UPDATE
router.patch('/:id',(res,req)=>{
    profesores.update({
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        facultad: req.body.facultad,
        fechaNacimiento: req.body.fechaNacimiento
    }).then(result=>{
        res.json(result);
    });
});

//DELETE

router.delete('/:id',(req,res)=>{
    profesores.destroy({
        where:{
            documento: req.params.id
        }
    }).then(result=>{
        res.json(result);
    });
})
module.exports = router;