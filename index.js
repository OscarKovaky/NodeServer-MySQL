
const {webServer} = require('./services/webserver')
const {result, success} = require('./services/database')

const  startup = async()  => {
        console.log('Inicializando la aplicación');
    try {
        console.log('Initializing web server module and db');

        await webServer()
       

    } catch (err) {
        console.error(err);
        console.log('Algo no anda bien ')
        process.exit(1); // Non-zero failure code
    }


    try {
      console.log('Initializing database module');

      

      await success()
      
  } catch (err) {
      console.error(err);

      process.exit(1); // Non-zero failure code

      
  } 
    
}

startup();

/*podemos detectar la excepción del servidor y hacer un
cierre correcto.*/
process.on('SIGTERM',
  () =>  {
    startup.close(
  () => {
    process.exit(0);

    })
   })
   