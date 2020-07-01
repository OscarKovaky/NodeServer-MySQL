const nodemailer = require('nodemailer')
const message = require('./formController')


// configuracion de un servidor de correo

/* el envío de correos es esencial.
En este caso utilizaremos nodemailer para enviar
 correos los cuales podrían aplicarse a distintos 
 casos como registro, recuperación de contraseña, avisos, etc. */

const postEmail = async(req,res,next)=>{
    try {
      let {email,mensaje,archivo} = req.body


        let message = {
            from: email,  // la persona que envia el correo electronico 
            to: 'cuthefuk@gmail.com',    // este seria correo del la empresa
            suject: 'Asunto: Informacion de contacto',
            text: mensaje , // mensaje del formulario 
            html:
            '<p>un cliente te esta solicitando informacion ponte en contacto</p>'+
            '<p>lo mas pronto posible con el </p>'
            ,
    
            attachments: [
                {
                    /*  se establece y el contenido es cadena, codifica el contenido en un búfer mediante la codificación especificada.
                     Valores de ejemplo: 'base64', 'hex', 'binary', etc.
                      Resulta útil si desea utilizar datos adjuntos binarios en un objeto de correo electrónico con formato JSON.*/

                    filename: archivo,
                    content: Buffer.from(
                        'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAABlBMVEUAAAD/' +
                            '//+l2Z/dAAAAM0lEQVR4nGP4/5/h/1+G/58ZDrAz3D/McH8yw83NDDeNGe4U' +
                            'g9C9zwz3gVLMDA/A6P9/AFGGFyjOXZtQAAAAAElFTkSuQmCC',
                        'base64'
                    ),
    
                    cid: 'note@example.com' // should be as unique as possible
                }
            ]
    
    
        }

       const response =  await  transporter.sendMail(message,( err , info )=>{
            if(err) throw err 
            console.log('Message sent successfully as %s', info.messageId);

        });


        if(!response){
            res.status(400).jsom({
                ok:false,
                message: 'Error'
            })
        }else{
            res.status(200).jsom({
                ok:true,
                message: 'Mensaje enviado exito'
            })
        }
    
       
       
    } catch (error) {
        next()
    }
   
}


const  resetPassword = async (req,res,next) => {
  try {
      let email = req.body.email
    
      let message = {
        from: 'cuthefuk@gmail.com' ,  // la empresa da este servicio usuario 
        to: email ,    // este seria correo para el cliente solicito restablecer contraseña
        suject: 'Asunto: Reset password instructions',
        text: form.mensaje , // mensaje del formulario 
        html:
        '<p>¡Hola, User!</p>' +
        '<p>Alguien, con suerte usted, ha solicitado restablecer la contraseña de su cuenta de GitLab en https://gitlab.com.</p>'+
        '<p>Si no realizó esta solicitud, puede ignorar este correo electrónico de forma segura.</p>'+
        '<p>De lo contrario, haga clic en el siguiente enlace para completar el proceso Restablecer contraseña</p>'
  
    }

      const response =   await transporter.sendMail(message,( err , info )=>{
            if(err) throw err 
            console.log('Message sent successfully as %s', info.messageId);
    });


    


  } catch (error) {
      next()
  }
}



module.exports.postEmail = postEmail;  