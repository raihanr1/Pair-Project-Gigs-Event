const express = require("express")
const router = express.Router()
const userController = require("../controllers/userController")

router.get('/', (req, res) => {
    res.redirect('/login')
})
router.get('/register', userController.registerForm)
router.post('/register', userController.postRegisterForm)

router.get('/login', userController.loginForm)
router.post('/login', userController.postLogin)

const midlewear = function (req, res, next) {
    if (req.session.userId) {
        next()
    } else {
        res.redirect('/login')
    }
} 

router.get('/logout', userController.logOut)
router.use(midlewear)

router.get('/masuk', midlewear, (req, res) => {
    res.send()
})

module.exports = router