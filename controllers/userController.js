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
        console.log(req.body);
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
            console.log(data);
            if (isValidAccount(data[0].password,password)) {
                res.send('thats right')
            } else{
                res.redirect('/login?error=Email and Password is wrong')
            }
        })
        .catch(err => {
            res.redirect('/login?error=Email and Password is wrong')
        })
    }
}

module.exports = userController