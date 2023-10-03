const express = require('express')
const controller = require('../controllers/user')
const middleware = require('../middleware/user')

const router = express.Router()

router.post('/', controller.createUser)


module.exports = router