const bcrypt = require('bcryptjs');

function isValidAccount(passDB, input) {
    let isValid = bcrypt.compareSync(input, passDB);
    if (isValid === true) {
        return true
    }
}


function middleware(req, res, next) {
    if (req.session.role) {
        next()
    } else {
        res.redirect('/login')
    }
}

function isAdmin(req, res, next) {
    if (req.session.role === 'Admin') {
        next()
    } else {
        res.redirect('/home')
    }
}

module.exports = {isValidAccount, middleware, isAdmin}