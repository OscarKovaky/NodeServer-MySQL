
const webServer = require('./services/webserver')

const  startup = async()  => {
        console.log('Inicializando la aplicación');
    try {
        console.log('Initializing web server module');

        await webServer.main()
    } catch (err) {
        console.error(err);
        console.log('Algo no anda bien ')
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
   