const { User } = require("../models")
const { Op } = require("sequelize");
const { isValidAccount } = require("../helper/helper")

class userController {
    static registerForm(req, res) {
        res.render('registerForm')
    }

    static postRegisterForm(req, res) {
        let {username, email, password, dateOfBirth, role} = req.body
        User.create({username, email, password, dateOfBirth, role})
        .then(newUser => {
            res.redirect('/login')
        })
        .catch(err => {
            let errors = err.errors.map(el => {
                return el.message
            })
            res.send(errors)
        })
    }

    static loginForm(req, res) {
        let error = req.query.error
        res.render('login', {error})
    }

    static postLogin(req, res) {
        let {usernameOremail, password} = req.body
        User.findAll({
            where:{
                [Op.or]: [{
                    username: usernameOremail
                }, {
                    email: usernameOremail
                }]
            }
        })
        .then(data => {
            if (isValidAccount(data[0].password,password)) {
                req.session.userId = data[0].id
                return res.send('thats right')
            } else{
                return res.redirect('/login?error=Email and Password is wrong')
            }
        })
        .catch(err => {
            res.redirect('/login?error=Email and Password is wrong')
        })
    }

    static logOut(req, res) {
        req.session.destroy(err => {
            if (err) {
                console.log(err);
            } else {
                res.redirect('/login')
            }
        })
    }
}

module.exports = userController