const express = require('express')
const router = express.Router();



const {createUser,deleteUser,UpdateUser,getUser} = require('../controllers/userController')



router.route('/user/')
.get('/info',getUser)
.post('/register',createUser)
.put('/update',UpdateUser)
.delete('/delete',deleteUser)





module.exports = {
  router
}