const items = require('../public/items.json')


const getItems = (req, res) => {

    res.status(200).json(items)
}

const createItem = (req, res) => {
    const item = req.body
    items.push(item)

    res.status(201).json({
        data: item,
        error: null
    })
}

const getItem = (req, res) => {
    const id = req.params.id
    const item = items.find(item => item.id == id)

    if (!item) {
        res.status(404).send('item not found')
    }

    res.status(200).json(item)
}

const updateItem = (req, res) => {
    const id = req.params.id
    const item = req.body
    const query = items.findIndex(item => item.id == id)

    if (query == -1) {
        res.end(`item with id: ${id} is not found`)
        return
    }

    items[query] = item
    res.status(200).json(item)
}

const deleteItem = (req, res) => {
    const id = req.params.id
    const item = items.findIndex(item => item.id == id)

    if (item == -1) {
        res.end(`item with id: ${id} is not found`)
        return
    }

    items.splice(item, 1)
    res.end(`item with id: ${id} deleted sucessfully`)
}

module.exports = {
    getItems,
    createItem,
    getItem,
    updateItem,
    deleteItem
}