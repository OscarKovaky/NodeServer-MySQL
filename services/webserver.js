const http = require('http')
const express = require('express')
const morgan = require('morgan')
const session = require('express-session');
const bodyParser = require('body-parser')
const  config = require('../confi/confi')
const hbs = require('hbs')
const form = require('../routers/form')
const email = require('../routers/mail')
     
    
    
  const main = () =>{
      return new Promise((resolve, reject) => {
          const app =  express();
          const  httpServer = http.createServer(app); 


        app.use(session({secret: '123456', resave: true, saveUninitialized: true}));

        // Combines logging info from request and response
          

          app.use(express.json({
            reviver: reviveJson
           }));


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

           app.use(config.API_PATH,form) 
           app.use(config.API_PATH,email)   


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

const iso8601RegExp = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{3})?Z$/;

function reviveJson(key, value) {
    // revive ISO 8601 date strings to instances of Date
    if (typeof value === 'string' && iso8601RegExp.test(value)) {
        return new Date(value);
    } else {
        return value;
    }
}

module.exports.main = main;
module.exports.close = close
    
  
