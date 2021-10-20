

class userController {
    static registerForm(req, res) {
        res.render('registerForm')
    }

    static postRegisterForm(req, res) {

    }

    static successLogin(req, res) {
        res.render('login')
    }

    static postLogin(req, res) {

    }
}

module.exports = userController