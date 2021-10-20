const express = require("express")
const router = express.Router()
const userController = require("../controllers/userController")


router.get('/register', userController.registerForm)
router.post('/register', userController.postRegisterForm)

router.get('/login', userController.successLogin)
router.post('/login', userController.postLogin)
module.exports = router