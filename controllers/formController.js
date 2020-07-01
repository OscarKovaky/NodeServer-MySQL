



const verificaForm = async(req,res,next)=>{
  try {
    const forms  = req.body


    // depósito de datos temporal
    let form = []

    form.push(forms)
      // podemos enviar el array de formulario, así por cada vez que accedemos a este

    if(!form) {
        return res.status(400).json({error: 'No hay datos a enviar, por favor verifique que no exista campo vacio'});
      }else{
        return  res.status(200).json({succefull: "Datos enviados, en breve nos comunicaremos con usted!"});
      }

     

  } catch (error) {
    next(error)
  }
    

}



module.exports = {verificaForm}