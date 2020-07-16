const http = require('http')
const express = require('express')
const bodyParser = require('body-parser')

const hbs = require('hbs')
const form = require('../routers/form')
const email = require('../routers/mail')
const user = require('../routers/user')
const articulos = require('../routers/items');   
const config = require('../confi/confi')
    
    
  const webServer = () =>{

    /* Una promesa es un objeto que representa el resultado de una operación asíncrona.
     Este resultado podría estar disponible ahora o en el futuro*/
      return new Promise((resolve, reject) => {
          const app =  express();
          const httpServer = http.createServer(app); 


         

        // Combines logging info from request and response
          

        

        //extended: false significa que parsea solo string (no archivos de imagenes por ejemplo
           app.use(bodyParser.urlencoded({extended: true }));
           app.use(bodyParser.json());

           // VIEWS PAG WEB START
           //especificamos el subdirectorio donde se encuentran las páginas estáticas
          
         app.use(express.static('public'))

         hbs.registerPartials(__dirname + '/View/parciales')
         app.set('view engine', 'hbs')

         app.get('/',(req,res)=>{
          res.render();
      })

           // VIEWS PAG WEB END 

         

           // router START
       //    app.use('/',index)
           app.use('/api/form',form) 
           app.use('/api/email',email)
           app.use('/api/articulos',articulos);
           app.use('/api/user',user);

           // router END

           // SERVER START
           httpServer.listen(config.PORT)
            .on('listening', () => {
                console.log(`Web server listening on localhost:${config.URL}:${config.PORT}`);
                resolve();
            // SERVER END
            })
            .on('error', err => {
                 reject(err);
            })
  })   
}
  
  const close = ()=> {
    return new Promise((resolve, reject) => { 
        httpServer.close((err) => {
            if (err) {
                reject(err);
                return;
            }

            resolve();
        });
    });
}





module.exports = {
  webServer,
  close
} 

    
  
