const express = require('express');
const app = express();
const sequelize = require('./database/db');
const usuarios = require('./database/models/usuarios');
const profesores = require('./database/models/profesores');

//configuracion
const PORT = process.env.PORT || 3030;

//Middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/login', require('./routes/usuariosRoutes'));
app.use('/perfil/profesores',require('./routes/profesoresRoutes'));
app.use('/equipos',require('./routes/equiposRouter'));
//app.use('/perfil/estudiantes',require('./routes/estudiantesRoutes'));



//ruta
app.get('/',(req, res)=>{

});


//arranca el server 
app.listen(PORT, ()=>{
    console.log('la app se ha arrancado en https://localhost:'+PORT);

    //conectase a la base de datos
    sequelize.authenticate().then(()=>{
        console.log("conectado correctamente a la base  de datos");
    }).catch(error =>{
        console.log('Se produjo un error',error);
    })
})