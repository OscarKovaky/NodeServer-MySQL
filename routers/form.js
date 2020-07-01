const express = require('express')
const router = express.Router();




const {verificaForm} = require('../controllers/formController')




router.post('/form',verificaForm)



module.exports = router 