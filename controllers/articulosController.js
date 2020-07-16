//-- importamos modulo que contiene nuetra  base de datos

const producto = require('../models/producto')
//---------------------------------------------


//Alta de registros


const createItem = async(req, res, next)=>{
    console.log(req)
    producto.create(req.body).then( x =>{
        console.log(x)
        res.status(201).send({mensaje:'La carga se efectuo correctamente'})
    })

   
}

//Listado de registros

const listaItems = async(req, res, next)=>{
    producto.find()
    .exec()
    .then(x => {
        console.log(x)
        res.status(201).send({x});
    })
  
}

//Consulta

const consultaItem  = async(req, res, next)=> {
    producto.find()
    .exec()
    .then( x => {
        console.log(x)
        if (x.length>0) {
            res.send('listadoconsulta',{articulos:x});
        } else {
            res.send('mensajearticulos',{mensaje:'No existe el codigo de articulo ingresado'});
        }    
    })           
  }

//Modificacion

const modificarItem= async(req,res,next)=>{
    producto.findByIdAndUpdate(req.body.codigo,req.body).then(x => {
        console.log(x)
        if (x.length>0) {
            res.send({x});
        } else {
            res.send({mensaje:'No existe el codigo de articulo ingresado'});
        }    
    })
}



const borrarItem = async(req,res,next)=>{
    producto.findByIdAndRemove(req.params.id)
    .exec()
    .then(()=>{
    console.log(x)
    res.render('mensajearticulos',{mensaje:'El articulo fue modificado'})})
   
}



module.exports ={
    createItem,
    listaItems,
    consultaItem,
    modificarItem,
    borrarItem
}