const express = require('express');
const estudiantes = require('../database/models/estudiantes');
const router = express.Router();

//CREATE
router.post('/:id',(req,res)=>{
    estudiantes.create({
        documento: req.body.id,
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        carrera: req.body.carrera,
        semestre: req.body.semestre,
        edad: req.body.edad,
        tipoSangre: req.body.tipoSangre,
        equipo: req.body.equipo
    }).then(estudiantes =>{
        res.json(estudiantes);
    });
});

//READ
router.get('/:id',(req,res)=>{
    estudiantes.findById(req.params.id).then(estudiantes =>{
        res.json(estudiantes);
    });
});
//UPDATE
router.patch('/:id',(req,res)=>{
    estudiantes.update({
        documento: req.body.documento,
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        carrera: req.body.carrera,
        semestre: req.body.semestre,
        edad: req.body.edad,
        tipoSangre: req.body.tipoSangre,
        equipo: req.body.equipo
    }).then(result=>{
        res.json(result);
    });
});

//DELETE
router.delete('/:id',(req,res)=>{
    estudiantes.destroy({
        where: {
            documento: req.params.id
        }
    }).then(result=>{
        res.json(result);
    });
});

module.expors = router;
