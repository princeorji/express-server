const checkItems = (req, res, next) => {
    if (!req.body) {
        res.status(404).json({
            data: null,
            error: 'Must have a body'
        })
    }

    next()
}


module.exports = {
    checkItems
}