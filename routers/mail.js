const express = require('express')
const router = express.Router();


const {verificaForm} = require('../controllers/formController')

const {postEmail} = require('../controllers/mailController')




router.post('/email/add',verificaForm ,postEmail)



module.exports = router 