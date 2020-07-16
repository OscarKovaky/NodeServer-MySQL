//-------- importamos los modulos necesarios


const express = require('express')
const app = express.Router()
const {isAuthenticated} = require('../services/auth')
const {
    createItem,
    listaItems,
    consultaItem,
    modificarItem,
    borrarItem,
    } = require('../controllers/articulosController')


 //-----------------------------------------------------------------------

//Esta vía de acceso de ruta coincidirá con las solicitudes a /crearTabla
//Creación de la tabla

app.get('/creartabla', createItem)

//Alta de registros
/*app.get('/alta', (req, res)=> {
    res.render('altaarticulos');
  });*/

app.post('/alta', createItem)


//Listado de registros
app.get('/listado',listaItems)

//Consulta

/*app.get('/consulta', (req, res, next)=> {
    res.render('consultaarticulos');
  });*/

app.post('/consulta',consultaItem)  


//Modificacion
/*app.get('/modificacion', (req, res, next)=> {
    res.render('consultamodificacion');
  });*/

app.put('/modificacion',modificarItem)


module.exports  = app
  

