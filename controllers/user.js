const db = require('../public/db/users.json')


const createUser = (req, res) => {
    const user = req.body

    user.api_key = `${user.username}_${user.password}`

    if (user.username === 'michael') {
        user.user_type = 'admin'
    } else {
        user.user_type = 'user'
    }


    db.push(user)

    return res.status(201).json({
        message: 'user created successfully',
        users: db
    })

}



module.exports = {
    createUser
}