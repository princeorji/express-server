const express = require('express')
const controller = require('../controllers/item')
const middleware = require('../middleware/item')


const router = express.Router()

router.get('/', controller.getItems, middleware.checkItems)

router.post('/', controller.createItem)

router.get('/:id', controller.getItem)

router.patch('/:id', controller.updateItem)

router.delete('/:id', controller.deleteItem)


module.exports = router