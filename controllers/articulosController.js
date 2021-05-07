//-- importamos modulo que contiene nuetra  base de datos

const { rest } = require('../services/database');

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

const result = await rest.executeQuery(
    'select * from your_table'
);



//Consulta

// how to execute a query with parameters
const result = await rest.executeQuery(
    `
        select 
            *
        from your_table 
        where (
            @id = 0 or id_id = @id
        )
        `,
        [{
            name: 'id',
            type: 'Int',
            value: 1
        }]
    );
    
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