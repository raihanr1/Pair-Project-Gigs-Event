const express = require("express")
const router = express.Router()
const routerHome = require("./home")
const { middleware } = require("../helper/helper")
const userController = require("../controllers/userController")
const profileController = require("../controllers/profileController")

router.get('/register', userController.registerForm)
router.post('/register', userController.postRegisterForm)

router.get('/login', userController.loginForm)
router.post('/login', userController.postLogin)
 
// router.use(middleware)

router.get('/profile', profileController.showProfile)

router.get('/profile/add', profileController.addProfile)
router.post('/profile/add', profileController.postAddProfile)

router.get('/profile/edit', profileController.editProfile)
router.post('/profile/edit', profileController.postEditProfile)


router.get('/logout', userController.logOut)

module.exports = router