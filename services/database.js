
const mongoose = require('mongoose')
const confi = require('../confi/confi')

/*La serverSelectionTimeoutMSopción 
también maneja cuánto tiempo mongoose.connect()
volverá a intentar la conexión inicial
antes de eliminar el error.
Con useUnifiedTopology, mongoose.connect()
volverá a intentarlo durante 30 segundos de 
forma predeterminada (predeterminado 
serverSelectionTimeoutMS) antes de eliminar 
el error. Para obtener comentarios más 
rápidos sobre operaciones fallidas, 
puede reducir serverSelectionTimeoutMS a 
5000 como se muestra a continuación. 

En este caso, los resultados
también serán un objeto con las mismas claves que las tareas .
Es muy útil para calcular algunas tareas y encontrar fácilmente
cada resultado.

*/

const options = ({
useNewUrlParser: true,
useUnifiedTopology: true,
useCreateIndex: true,
useFindAndModify: false,
autoIndex: false, 
poolSize: 10, 
serverSelectionTimeoutMS: 5000, 
socketTimeoutMS: 45000, 
family: 4 // Use IPv4, skip trying IPv6
},
(err,result)=>{
if(err){
  return console.error(err)
}

console.log(result);
});




const checkDB = () =>{
     mongoose.connect(confi.getDBString(),options);
}









module.exports = {checkDB};