const express = require('express')
const itemsrouter = require('./routes/item.js')

const port = 3000
const app = express()


app.use(express.json())

app.use('/items', itemsrouter)


app.get('/', (req, res) => {
    res.status(200).json({ message: 'success', status: true })
})


app.get('*', (req, res) => {
    res.status(404).json({
        data: null,
        error: 'Route not found'
    })
})


app.listen(port, () => {
    console.log(`server listening at http://localhost:${port}`)
})