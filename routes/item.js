const express = require('express')
const auth_middleware = require('../middleware/user')
const controller = require('../controllers/item')
const middleware = require('../middleware/item')


const router = express.Router()

router.use(auth_middleware.apikeyAuth)

router.get('/', middleware.checkItems, controller.getItems)

router.post('/', auth_middleware.checkAdmin, middleware.checkItems, controller.createItem)

router.get('/:id', controller.getItem)

router.patch('/:id', auth_middleware.checkAdmin, controller.updateItem)

router.delete('/:id', auth_middleware.checkAdmin, controller.deleteItem)


module.exports = router