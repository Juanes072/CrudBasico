const express = require('express');
const usuarios = require('../database/models/usuarios');
const router = express.Router();


router.get('/',(req,res)=>{
    res.send("hola mundo");
});

// CREATE
router.post('/', (req,res)=>{
    usuarios.create({
        nombre: req.body.nombre,
        contraseña: req.body.contraseña
    }).then(usuarios=>{
        res.json(usuarios);
    })
});

//READ
router.get('/:id',(req,res)=>{
    usuarios.findByPk(req.params.id).then(usuarios =>{
        res.json(usuarios);
    })
});

//UPDATE
router.patch('/:id',(req,res)=>{
    usuarios.update({
        nombre: req.body.nombre,
        contraseña: req.body.contraseña
    },{
        where:{
            nombre: req.params.id
        }
    }).then(result=>{
        res.json(result);
    });
});

//DELETE
router.delete('/:id',(req,res)=>{
    usuarios.destroy({
        where:{
            nombre: req.params.id
        }
    }).then(result=>{
        res.json(result);
    });
})
module.exports = router;