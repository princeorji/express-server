const db = require('../public/db/users.json')


const apikeyAuth = (req, res, next) => {
    const authHeader = req.headers

    if (!authHeader.api_key) {
        return res.status(401).json({ message: 'you are not authenticated' })
    }

    const existingUser = db.find(user => user.api_key === authHeader.api_key)
    if (existingUser) {
        req.user = existingUser
        next()
    } else {
        return res.status(401).json({ message: 'you are not authenticated' })
    }
}


const checkAdmin = (req, res, next) => {
    if (req.user.user_type !== 'admin') {
        return res.status(403).json({ message: 'you are not authorized' })
    }

    next()
}


module.exports = {
    apikeyAuth,
    checkAdmin
}