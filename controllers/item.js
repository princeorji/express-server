const db = require('../public/db/items.json')


const getItems = (req, res) => {

    res.status(200).json(db)
}

const createItem = (req, res) => {
    const item = req.body
    db.push(item)

    res.status(201).json({
        data: item,
        error: null
    })
}

const getItem = (req, res) => {
    const id = req.params.id
    const item = db.find(item => item.id == id)

    if (!item) {
        res.status(404).send('item not found')
    }

    res.status(200).json(item)
}

const updateItem = (req, res) => {
    const id = req.params.id
    const item = req.body
    const query = db.findIndex(item => item.id == id)

    if (query == -1) {
        res.end(`item with id: ${id} is not found`)
        return
    }

    db[query] = item
    res.status(200).json(item)
}

const deleteItem = (req, res) => {
    const id = req.params.id
    const item = db.findIndex(item => item.id == id)

    if (item == -1) {
        res.end(`item with id: ${id} is not found`)
        return
    }

    db.splice(item, 1)
    res.end(`item with id: ${id} deleted sucessfully`)
}

module.exports = {
    getItems,
    createItem,
    getItem,
    updateItem,
    deleteItem
}