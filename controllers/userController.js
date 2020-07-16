const User = require('../models/user')
const cripto = require('crypto')
const jwt = require('jsonwebtoken')

const signToken = (_id) => {
    return jwt.sign({_id}, 'mi secreto', {
        expiresIn: 60 * 60 * 24 * 365
    })
}

const register = async(req, res)=>{
    console.log(req.body)
const {email,password} = req.body


cripto.randomBytes(16, (err,salt)=>{
    const newSalt = salt.toString('base64')
    cripto.pbkdf2(password, newSalt , 10000 , 64 ,'sha1' , (err,key)=>{
        const encriptedPassword  = key.toString('base64')
        User.findOne({email}).exec()
        .then(user => {
            if(user){
                return res.send('usuario ya existe')
            }
            User.create({
                email,
                password: encriptedPassword,
                salt: newSalt,
            }).then(()=>{
                res.send('Usuario creado con exito')
            })
        })
    } )

})

}



const login = async(req, res)=>{
    const {email,password} = req.body
    console.log(email)
  User.findOne({email}).exec()
  .then(user => {
      if(!user) {
          return res.send('usuario y/o contraseña incorrecta')
      }

      cripto.pbkdf2(password, user.salt , 10000 , 64 ,'sha1' , (err,key)=>{
         const encriptedPassword  = key.toString('base64')
         if(user.password === encriptedPassword){
             const token = signToken(user._id)
             return res.send({token})
         }


         return res.send('usuario y/o contraseña incorrecta')
      })
  })


}



module.exports  = {register,login,signToken}