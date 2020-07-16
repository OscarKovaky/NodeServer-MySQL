const express = require('express')
const app = express.Router();



const {login,register} = require('../controllers/userController')


/* Puede crear manejadores de rutas encadenables 
para una vía de acceso de ruta utilizando app.route(). 
Como la vía de acceso se especifica en una única ubicación, 
la creación de rutas modulares es muy útil,
 al igual que la reducción de redundancia y errores tipográficos.*/


/*  A continuación, se muestra un ejemplo de manejadores
 de rutas encadenados que se definen utilizando app.route().
*/

app.post('/register',register)


app.post('/login',login)






module.exports = app
  
